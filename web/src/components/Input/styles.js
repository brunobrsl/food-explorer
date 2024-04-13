import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: 8px;
  
  > input {
    height: 48px;
    width: 100%;
    font-size: 1rem;
    padding: 20px 14px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 5px;
    }
  }

  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > input {
      padding: 0.8rem;
    }
  }
`;