import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
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