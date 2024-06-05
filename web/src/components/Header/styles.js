import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  gap: 32px;

  > div:nth-child(3) {
    max-width: 581px;

    input {
      &:focus {
        outline: none;
      }
    }
  }

  > .favorites-btn {
    display: flex;
    align-items: center;
    white-space: nowrap;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: 'Roboto', sans-serif;

    font-size: 16px;
    font-weight: 400;
  }

  > .new-btn,
  > .cart-btn {
    width: 216px;
  }

  > .menu-btn,
  > .orders-btn {
    display: none;
    
  }

  > .signout-btn {
    display: flex;
    background: none;
    align-items: center;
    justify-content: center;

    svg {
      width: 32px;
      height: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 48px 28px 28px;
    justify-content: space-between;
    gap: 0;

    > div:nth-child(3),
    > .favorites-btn,
    > .new-btn,
    > .cart-btn,
    > .signout-btn {
      display: none;
    }

    > .menu-btn,
    > .orders-btn {
      display: flex;
    }

    > .orders-btn {
      position: relative;
      padding-top: 5px;
      padding-right: 5px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 48px 12px 24px;
  }
`;

export const Title = styled.a`
  display: flex;
  align-self: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  > .logo {
    display: flex;
    gap: 10px;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      white-space: nowrap;
    }
  
    svg {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      width: 30px;
      height: 30px;
    }
  }

  > .admin-logo {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 12px;
    align-self: flex-end;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    width: 100%;
    flex-direction: row;
    gap: 8px;
    
    > .logo {
      gap: 8px;
  
      > h1 {
        font-size: 1.5rem;
      }
  
      > svg {
        width: 24px;
        height: 24px;
      }
    }

    > .admin-logo {
      margin-top: 4px;
      align-self: center;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > .logo {
      gap: 6px;
  
      > h1 {
        font-size: 1.3rem;
      }
  
      > svg {
        width: 20px;
        height: 20px;
      }
    }
    
    > .admin-logo {
      font-size: 10px;
    }
  }
`;
