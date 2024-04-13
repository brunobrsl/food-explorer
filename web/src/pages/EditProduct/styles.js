import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  height: 100%;
  max-width: 1125px;
  padding-inline: 1.5rem;
  margin: 40px auto;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin: 24px 0 32px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-inline: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 24px auto 40px;
    padding-inline: 3.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-inline: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding-inline: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  align-items: start;

  .form-input:nth-child(2),
  .form-input:nth-child(5) {
    div {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  > .form-input {
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > .form-input:nth-child(6) {
    grid-column: 1 / 6;
  }

  > .grid-col-span-3 {
    grid-column: span 3;
  }

  > .grid-col-span-2 {
    grid-column: span 2;
  }

  > .grid-row-span-2 {
    grid-row: span 2;
  }

  textarea {
    width: 100%;
    height: 172px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 14px;
    border: none;
    resize: none;
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .delete-btn {
    justify-self: end;
    grid-row: 4;
    grid-column: 4;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .submit-btn {
    grid-row: 4;
    grid-column: 5;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 100%;

    .form-input {
      grid-column: 1 / 6;
    }

    .delete-btn {
      margin-top: -12px;
      width: 100%;
      grid-row: 9;
      grid-column: 1 / 6;
      height: 40px;
    }

    .submit-btn {
      grid-row: 8;
      grid-column: 1 / 6;
    }

    .grid-row-span-2 {
      grid-column: 3 / 4;
    } 
  }
`;

export const ProductImg = styled.div`
  justify-self: center;
  position: relative;

  width: 190px;
  height: 190px;

  > img {
    width: 190px;
    height: 190px;
    border-radius: 50%;
  }

  > button {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 160px;
    height: 160px;

    > img {
      width: 160px;
      height: 160px;
    }

    > button {
      width: 40px;
      height: 40px;

      bottom: 2px;
    
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;