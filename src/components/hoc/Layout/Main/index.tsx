import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import Styled from '@/components/hoc/Layout/Main/styled';

const Main = ({ children }: { children: React.ReactNode }) => {
  const router: NextRouter = useRouter();

  return (
    <Styled.Main isNewsPage={router.pathname === '/news'} className="main">
      {children}
    </Styled.Main>
  );
};

export default Main;
