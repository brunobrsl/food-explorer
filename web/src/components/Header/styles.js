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

  > button:first-child,
  > button:nth-child(5) {
    display: none;
    
  }

  > button:last-child {
    display: flex;
    border: 0;
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

    > div:nth-child(3),
    > button:nth-child(4),
    > button:last-child {
      display: none;
    }

    > button:first-child,
    > button:nth-child(5) {
      display: flex;
    }

    > button:nth-child(5) {
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

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 8px;

    > h1 {
      font-size: 1.5rem;
    }

    > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    gap: 6px;

    > h1 {
      font-size: 1.3rem;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
