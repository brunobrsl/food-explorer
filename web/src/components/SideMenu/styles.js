import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.aside`
  display: none;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 48px 28px 37px;

  > button {
    svg {
      font-size: 28px;
    }
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 48px 12px 29px;
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  padding-inline: 3.5rem;

  > div {
    margin-bottom: 36px;

    input {
      &:focus {
        outline: none;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-inline: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding-inline: 1rem;
  }
`;