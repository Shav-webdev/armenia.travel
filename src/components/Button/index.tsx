import Styled from './styled';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  classname?: string;
};

const Button = ({ children, onClick, classname }: ButtonProps) => {
  return (
    <Styled.Button className={classname} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
