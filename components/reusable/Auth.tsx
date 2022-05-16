import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import { NextRouter, useRouter } from "next/router";
import { Container } from "@mui/material";

interface IAuth {
  children: React.ReactNode;
  pathName: string;
}

const Auth: React.FunctionComponent<IAuth> = ({
  children,
  pathName,
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const { data, loading, error, refetch } = useQuery(GET_USER);

  useEffect(() => {
    if (data && !loading) {
      isValidChild(data);
    }
  }, [data]);

  const isValidChild = async (data: any): Promise<void> => {
    const { status, error } = await data?.getUserDetailsByID;

    if (status === 200 && !error) {
      if (pathName === "/login") {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
    refetch();
  };

  if (error) {
    return (
      <Container>
        API error come back later, server likely does not responds
      </Container>
    );
  }

  return <>{children}</>;
};

export default React.memo(Auth);
