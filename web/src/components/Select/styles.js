import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${({ $selectedoption }) => $selectedoption ? ({ theme }) => theme.COLORS.LIGHT_100 : ({ theme }) => theme.COLORS.LIGHT_500};

  &:hover {
    filter: none;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
  }

  &.open svg {
    transform: rotate(180deg);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > svg {
      font-size: 21px;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  position: absolute;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
  font-family: 'Roboto', sans-serif;
  font-size: 0.87rem;
  overflow: hidden;
  z-index: 1;
`;

export const ListItem = styled.li`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  width: 100%;
  position: relative;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;