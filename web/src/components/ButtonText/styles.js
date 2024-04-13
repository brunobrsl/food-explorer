import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > svg {
    font-size: 2rem;
  }

  > span {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > svg {
      font-size: 1.5rem;
    }
    
    > span {
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > span {
      font-size: 16px;
    }
  }
`;