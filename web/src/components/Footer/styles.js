import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  font-family: 'Roboto', sans-serif;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  align-items: center;
  justify-content: center;
  width: 100%;
  position: sticky;
  padding: 24px;
  margin-top: auto;

  > h1 {
    overflow: hidden;
    width: 657px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 0.87rem;
    white-space: nowrap;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 24px 12px;

    > span {
      font-size: 0.7rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  > h1 {
    font-size: 1.5rem;
    white-space: nowrap;
  }

  > svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 8px;

    > h1 {
      font-size: 1.14rem;
    }

    > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    gap: 6px;

    > h1 {
      font-size: 1rem;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;