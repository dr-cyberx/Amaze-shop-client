import React, { useEffect } from "react";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import { NextRouter, useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import useLocalStorage from "hooks/useLocalStorage";

interface IAuth {
  children: React.ReactNode;
  pathName: string;
}

const Auth: React.FunctionComponent<IAuth> = ({
  children,
  pathName,
}): JSX.Element => {
  const router: NextRouter = useRouter();
  // const { data, loading, error, refetch } = useQuery(GET_USER);
  const [getUserDetail, { data: userDetail, loading, error }] =
    useLazyQuery(GET_USER);

  useEffect(() => {
    const token = useLocalStorage.getItem("auth_token");
    console.log(token);
    if (!token) {
      router.push("/login");
      return;
    } else if (token) {
      const res = isValidChild();
    }
  }, []);

  const isValidChild = async (): Promise<void> => {
    const { data } = await getUserDetail();
    if (!data?.getUserDetailsByID?.data) {
      router.push("/login");
    }
  };

  // if (error) {
  //   return (
  //     <Container>
  //       API error come back later, server likely does not responds
  //     </Container>
  //   );
  // }

  return <>{children}</>;
};

export default React.memo(Auth);
