import React from 'react';
import Head from 'next/head';

interface IMetaData{
    title: String;
}

const MetaData: React.FunctionComponent<IMetaData> = ({title}) => {
  return <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
  </Head>;
};

export default MetaData