import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: 0;
  height: 48px;
  padding: 12px 32px;
  font-weight: 500;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    font-size: 0.87rem;
    white-space: nowrap;
  }

  > svg {
    font-size: 32px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 5px;

    > svg {
      font-size: 21px;
    }
  }
`;