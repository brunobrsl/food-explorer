import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.section`
  width: 100%;
  margin-bottom: 6rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 24px;
  }

  .slick-slide div {
    margin: 0 24px;
  }

  .slick-disabled {
    fill: rgba(255, 255, 255, 0.5) !important;
  }
  
  .slick-arrow {
    transition: filter 0.2s;
  }

  .slick-arrow:hover {
    filter: brightness(0.8);
  }

  .slick-next {
    right: -20px;
  }

  .slick-dots li button:before {
    color: #fff;
    font-size: 8px;
    top: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    .slick-prev {
      left: 0;
    }

    .slick-next {
      right: 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 5rem;

    > h2 {
      font-size: 1.75rem;
    }
    
    .slick-slide div {
      margin: 0 12px;
    }
    
    .slick-prev {
      left: -10px;
    }

    .slick-next {
      right: -10px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    

    > h2 {
      font-size: 1.28rem;
    }

    .slider-container {
      margin-inline: auto;
      max-width: 550px;
    }

    .slick-prev {
      left: -3%;
    }

    .slick-next {
      right: 0;
    }

    .slick-dots li button:before {
      font-size: 6px;
      top: 1.25rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-bottom: 4.5rem;
    
    .slick-arrow {
      width: 16px;
      height: 16px;
    }

    .slick-prev {
      left: 20px;
    }

    .slick-next {
      right: 20px;
    }
    
    .slick-dots li button:before {
      font-size: 4px;
      top: 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    margin-bottom: 2.5rem;

    .slick-arrow {
      width: 12px;
      height: 12px;
    }

    .slick-prev {
      left: 10px;
    }

    .slick-next {
      right: 10px;
    }
  }
`;