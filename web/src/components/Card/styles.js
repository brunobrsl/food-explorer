import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.a`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 0;
  background: ${({ theme }) => theme.COLORS.DARK_200};
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  max-width: 304px;
  min-height: 462px;
  
  > svg {
    position: absolute;
    right: 18px;
    top: 16px;
    font-size: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > .favorite {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }

  > button {
    position: absolute;
    right: 18px;
    top: 16px;

    svg {
      font-size: 24px;
    }
  }
  
  > img {
    width: 176px;
    height: 176px;
    border-radius: 50%;
  }
  
  > h3 {
    font-size: 1.25rem;
    max-width: 256px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 140%;
  }
  
  > p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    max-width: 256px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  > strong {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2rem;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 20px;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 137px;
      height: 137px;
    }
    
    > h3 {
      font-size: 1rem;
    }
    
    > p {
      font-size: 0.75rem;
    }
    
    > strong {
      font-size: 1.75rem;
    }
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 0;
    max-width: 210px;
    gap: 12px;
    padding: 16px;
    min-height: 292px;
    
    
    > img {
      width: 98px;
      height: 98px;
    }

    > p {
      display: none;
    }

    > strong {
      margin-bottom: 12px;
      font-size: 1.14rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0 auto;
    max-width: 210px;
    padding: 12px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    max-width: 200px;

    > img {
      width: 78px;
      height: 78px;
    }

    > svg {
      font-size: 16px;
    }

    > button {
      svg {
        font-size: 16px;
      }
    }
  }
`;

export const AddButtons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;

  > button {
    padding: 12px 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;

    > button {
      width: 100%;
      height: 32px;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > button {
      svg {
        font-size: 16px;
      }
    }

    > span {
      font-size: 16px;
    }
  }
`;