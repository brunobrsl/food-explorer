import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.div`
  margin-top: -80px;
  display: flex;
  gap: 1rem;
  align-items: center;
  
  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.62rem;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    width: 48px;
    height: 48px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 0;
    margin-bottom: 70px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-bottom: 30px;

    > h1 {
      font-size: 2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 4rem;
  border-radius: 1rem;
  width: 476px;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 32px;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 8px;
  }

  > div {
    margin-bottom: 32px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.87rem;
    font-weight: 500;
    text-align: center;
    margin-top: 32px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    max-width: 476px;
    background-color: transparent;

    > h1 {
      display: none;
    }
  }
`;