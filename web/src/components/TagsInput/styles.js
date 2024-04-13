import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;

  > .tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600} !important;
    height: 32px;
    padding: 0 16px;
    border-radius: 8px;
    cursor: default;

    span {
      display: block;
      white-space: nowrap;
      font-weight: 400;
      margin-right: 8px;
    }
  
    .remove-btn {
      display: block;
      border: none;
      background: none;

      svg {
        width: 12px;
        height: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > .tag-input {
    display: flex;
    height: 32px;

    background-color: transparent;
    border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 8px;
    padding-right: 16px;

    > input {
      width: 12ch;
      background: transparent !important;
      border: none;
      padding-left: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    button {
      border: none;
      background: none;

      svg {
        width: 12px;
        height: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;