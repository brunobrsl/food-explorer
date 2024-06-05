import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  max-width: 1300px;
  width: 100%;
  padding-inline: 1.5rem;
  margin: 40px auto;

  > .empty-favorites {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    text-align: center;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
  }
`;

export const Products = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 12px;
  }
`;

export const ProductCard = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 10px;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  > .product-data {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 20px;
      font-weight: 500;
    }

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > .product-data {
      h2 {
        font-size: 16px;
      }

      svg {
        font-size: 16px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > img {
      width: 60px;
      height: 60px;
    }
  }
`;