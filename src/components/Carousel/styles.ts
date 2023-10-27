import styled from "styled-components";

import { Carousel } from "antd";

export const CardCarousel = styled(Carousel)`
  & > div > div {
    display: flex !important;
    z-index: 2;
    padding-left: 5px;
  }

  & > button {
    margin: -45px 30px 0 30px !important;
    width: 40px !important;
    height: 40px !important;

    & > span {
      color: #000000;
    }
  }

  .slick-slide {
    margin-right: 4em;
  }

  .slick-slide > div {
    min-height: 30em !important;
  }

  @media (min-width: 1200px) {
    .slick-slide {
      width: 5.5% !important;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 3.5% !important;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    .slick-slide {
      width: 50% !important;
    }
  }

  @media (max-width: 767px) {
    .slick-slide {
      width: 100% !important;
    }
  }
`;
