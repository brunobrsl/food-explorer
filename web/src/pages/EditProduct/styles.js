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

  > .price-input::-webkit-outer-spin-button,
  .price-input::-webkit-inner-spin-button {
    appearance: none;
  }

  input[type=number] {
    appearance: none;
    -moz-appearance: textfield;
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

  .category-select div {
    position: relative;
    border-radius: 8px;

    > svg {
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 24px;
    }

    #category {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      width: 100%;
      height: 48px;
      padding: 12px 14px;
      border: none;
      border-radius: 8px;
  
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
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

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 8px;
    }

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

    .category-select div {
      > svg {
        font-size: 21px;
      }
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

export const TagsInput = styled.div`
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

export const Modal = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 40%;
  min-height: 30%;
  border-radius: 10px;
  padding: 16px;
  position: relative;

  .btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-modal {
    display: flex;
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 24px;
    }
  }

  label {
    font-size: 0.87rem;
    font-weight: 500;
    padding: 12px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    transition: filter 0.2s;
    
    cursor: pointer;

    input {
      display: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    padding-inline: 16px;
    transform: translateY(-50%);
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  > .image-cropper {
    text-align: center;
    margin-top: 32px;

    img {
      max-height: 500px;
    }

  }

  .crop-btn {
    margin: 16px auto;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 60%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 80%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 90%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > .image-cropper {
      margin-top: 16px;
    }

    .crop-btn {
      margin-bottom: 8px;
      height: 40px;
    }
  }
`;