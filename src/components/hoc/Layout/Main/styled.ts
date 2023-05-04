import styled from 'styled-components';
import { device } from '@/assets/styles/media';

const Main = styled.main`
  height: ${(props: { isNewsPage: boolean }) =>
    props.isNewsPage ? 'initial' : '250rem'};
  @media ${device.mobileMMin} and ${device.mobileLMax} {
    height: unset;
  }
`;

const Styled = {
  Main,
};

export default Styled;
