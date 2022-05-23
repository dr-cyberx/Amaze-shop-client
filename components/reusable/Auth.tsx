import React, { useContext, useEffect } from "react";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import { NextRouter, useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import useLocalStorage from "hooks/useLocalStorage";
import { CartContext } from "@context/Cart/CartContext";

interface IAuth {
  children: React.ReactNode;
  pathName: string;
}

const Auth: React.FunctionComponent<IAuth> = ({
  children,
  pathName,
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const { setUserData } = useContext(CartContext);
  // const { data, loading, error, refetch } = useQuery(GET_USER);
  const [getUserDetail, { data: userDetail, loading, error, refetch:refetchAuthUser }] =
    useLazyQuery(GET_USER);

  useEffect(() => {
    const token = useLocalStorage.getItem("auth_token");
    if (!token) {
      router.push("/login");
      return;
    } else if (token) {
      isValidChild();
    }
  }, []);

  const isValidChild = async (): Promise<void> => {
    const { data } = await getUserDetail();
    if (!data?.getUserDetailsByID?.data) {
      router.push("/login");
    }
    setUserData(data?.getUserDetailsByID?.data);
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
