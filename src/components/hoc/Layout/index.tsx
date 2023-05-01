import React from 'react';
import Head from 'next/head';
import Header from '@/components/hoc/Layout/Header';
import Main from '@/components/hoc/Layout/Main';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Armenia Travel</title>
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
