import React from 'react';
import Head from 'next/head';

interface IMetaData {
  title: String;
}

const MetaData: React.FunctionComponent<IMetaData> = ({
  title,
}): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
  );
};

export default MetaData;
