import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: none;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 10px;
  width: 100%;
  text-align: left;

  > span {
    font-size: 1.71rem;
    font-weight: 300;
    white-space: nowrap;
  }
`;