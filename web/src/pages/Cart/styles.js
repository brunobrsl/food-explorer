import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  max-width: 1125px;
  width: 100%;
  padding-inline: 1.5rem;
  margin: 40px auto;

  > .empty-cart {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    text-align: center;
  }

  > .clear-cart {
    display: flex;
    justify-content: end;
    align-items: center;
    white-space: nowrap;
    margin-right: 10px;
    margin-bottom: 20px;
    
    font-family: 'Roboto', sans-serif;

    font-size: 16px;
    font-weight: 400;
  
    button {
      background: none;
      border: 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
  }

  > .button-container {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding-inline: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-inline: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-inline: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > .button-container {
      button {
        width: 100%;
      }
    }
  }
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 10px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 10px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  > .product-data {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    h2 {
      font-size: 24px;
      font-weight: 500;
    }

    span {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      cursor: pointer;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > img {
      width: 100px;
      height: 100px;
    }

    > .product-data {
      h2 {
        font-size: 20px;
      }

      span {
        font-size: 12px;
      }

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-bottom: 12px;
    padding: 16px;

    > img {
      width: 80px;
      height: 80px;
    }

    > .product-data {
      h2 {
        font-size: 16px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > img {
      width: 60px;
      height: 60px;
    }

    > .product-data {
      svg {
        font-size: 16px;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;
  margin: 24px 0;

  > h3, span {
    font-size: 28px;
    font-weight: 500;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {    
    > h3, span {
      font-size: 24px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: start;

    > h3, span {
      font-size: 20px;
    }
  }
`;