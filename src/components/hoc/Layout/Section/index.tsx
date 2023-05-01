import React from 'react';
import Styled from './styled';

const Section = ({ children }: { children: React.ReactNode }) => {
  return <Styled.Section className="main">{children}</Styled.Section>;
};

export default Section;
