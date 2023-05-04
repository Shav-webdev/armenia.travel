import styled from 'styled-components';
import { colors } from '@/assets/styles/colors';

const Lang = styled.div`
  color: ${colors.white};
  margin-inline-start: 30px;
  font-size: .9rem;
  line-height: 2rem;
  letter-spacing: 0;
  text-transform: capitalize;
  cursor: pointer;
  width: 20px;
`;

const StyledLang = {
  Lang,
};

export default StyledLang;
