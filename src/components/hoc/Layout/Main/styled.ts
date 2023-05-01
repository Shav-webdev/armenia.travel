import styled from 'styled-components';

const Main = styled.main`
  height: ${(props: { isNewsPage: boolean }) =>
    props.isNewsPage ? 'initial' : '300rem'};
`;

const Styled = {
  Main,
};

export default Styled;
