import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  margin: 2rem auto;
  max-width: 1125px;
  padding-inline: 1.5rem;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-inline: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-inline: 3.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-inline: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding-inline: 1rem;
  }
`;

export const Dish = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 48px;

  > img {
    width: 390px;
    height: 390px;

    border-radius: 50%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 360px;
      height: 360px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 16px;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    > img {
      width: 264px;
      height: 264px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    max-width: 240px;

    > img {
      width: 220px;
      height: 220px;
    }
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  align-self: center;

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }

  p {
    margin: 24px 0;
    font-size: 1.25rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      font-size: 2.3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    text-align: center;

    h1 {
      font-size: 2rem;
      margin-top: -8px;
    }

    p {
      font-size: 1.14rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-top: 48px;

  > button:nth-child(2) {
    display: none;
  }

  > button:last-child {
    display: flex;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
  
    > button:nth-child(2) {
      display: flex;
    }

    > button:last-child {
      display: none;
    }
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 16px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  > button {
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 24px;
    }
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > button {
      svg {
        font-size: 16px;
      }
    }

    > span {
      font-size: 16px;
    }
  }
`;