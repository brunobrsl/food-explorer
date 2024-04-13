import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1125px;
  height: 100%;
  margin-top: 10.25rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin-top: 8rem;
    padding-inline: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 4rem;
    padding-inline: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 2.5rem;
    padding-inline: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-top: 1.5rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  z-index: -1;
  position: relative;
  align-items: center;
  margin-bottom: 4rem;
  
  > .desktop-img {
    width: 632px;
    height: 408px;
  }

  > .mobile-img {
    display: none;
  }
  
  > div {
    z-index: -1;
    display: flex;
    flex-direction: column;
    padding:  88px 0 92px 540px;
    position: absolute;
    border-radius: 8px;
    bottom: 0;
    left: 5%;
    width: 95%;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }
    
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    > .desktop-img {
      width: 537px;
      height: 345px;
    }

    > div {
      padding: 62px 0 77px 460px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {  
    > .desktop-img {
      width: 411px;
      height: 264px;
    }

    > div {
      padding: 48px 0 63px 380px;

      h1 {
        font-size: 1.75rem;
      }

      p {
        font-size: 0.87rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > .desktop-img {
      display: none;
    }

    > .mobile-img {
      display: flex;

    }

    > div {
      padding: 23px 0 28px 170px;

      h1 {
        font-size: 1.28rem;
        font-weight: 600;
      }

      p {
        font-size: 0.85rem;
      }
    } 
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > .mobile-img {
      width: 153px;
      height: 119px;
    }

    > div {
      padding: 26px 0 20px 135px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > .mobile-img {
      width: 96px;
      height: 75px;
    }

    > div {
      border-radius: 4px;
      padding: 6px 0 6px 85px;
    
      h1 {
        font-size: 1.16rem;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }
`;