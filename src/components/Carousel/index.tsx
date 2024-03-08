import { ReactNode, useRef, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { CardAboutCarousel, CardCarousel } from "./styles";

import { SecondaryButton, SecondaryButtonDisabled } from "../../styles/Button";

interface CarouselProps {
  children: ReactNode;
}

export const PlacesCarousel = ({ children }: CarouselProps) => {
  const carouselRef = useRef<any>(null);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [totalSlides, setTotalSlides] = useState(4.5);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleCarouselSlide = (currentSlide: number) => {
    setShowNextButton(currentSlide < totalSlides - 1);
    setShowPrevButton(currentSlide > 0);
  };

  const settings = {
    dots: false,
    infinite: false,
    initialSlide: 0,
    afterChange: handleCarouselSlide,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: showNextButton ? (
      <SecondaryButton
        onClick={next}
        shape="circle"
        size="large"
        icon={<AiOutlineRight fontSize="16pt" />}
      />
    ) : (
      <SecondaryButtonDisabled />
    ),
    prevArrow: showPrevButton ? (
      <SecondaryButton
        onClick={prev}
        shape="circle"
        icon={<AiOutlineLeft fontSize="16pt" />}
      />
    ) : (
      <SecondaryButtonDisabled />
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          draggable: true,
          arrows: false,
          slidesToShow: 2.1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          draggable: true,
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CardCarousel ref={carouselRef} {...settings}>
      {children}
    </CardCarousel>
  );
};

export const AboutCarousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlides: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CardAboutCarousel {...settings} draggable>
      {children}
    </CardAboutCarousel>
  );
};
