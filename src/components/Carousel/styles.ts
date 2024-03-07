import styled from "styled-components";

import { Carousel } from "antd";

export const CardCarousel = styled(Carousel)`
  & > div > div {
    display: flex !important;
    z-index: 2;
    padding-left: 5px;
  }

  & > button {
    margin: -20px 50px !important;
    width: 40px !important;
    height: 40px !important;

    & > span {
      color: #000000;
    }
  }

  .slick-slide {
    padding: 10px 0;
    margin-right: 1.3em;

    &:last-child {
      margin-right: 0.2em;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 23em !important;
    }
  }

  @media (max-width: 768px) {
    .slick-slide {
      width: 100% !important;
      height: 100%;
    }
  }
`;

export const CardAboutCarousel = styled(Carousel)`
  & > div > div {
    display: flex !important;
  }

  .slick-slide {
    padding: 10px 0;
    margin-right: 1.3em;

    &:last-child {
      margin-right: 0.3em;
    }
  }

  .slick-dots {
    bottom: -30px !important;

    & > li {
      width: 35px;
      height: 6px;
      border-radius: 15px;
      background-color: rgba(37, 37, 39, 0.15);

      & > button {
        height: 0 !important;
      }
    }

    & > .slick-active {
      width: 35px !important;
      height: 6px !important;
      background-color: #208b3a;
    }
  }
`;
