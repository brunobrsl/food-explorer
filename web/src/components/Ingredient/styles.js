import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
  
  padding: 4px 8px;
  border-radius: 5px;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    font-size: 1rem;
  }
`;