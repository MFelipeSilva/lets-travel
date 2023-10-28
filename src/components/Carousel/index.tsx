import { ReactNode, useRef, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { CardCarousel } from "./styles";

import { SecondaryButton, SecondaryButtonDisabled } from "../../styles/Button";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const carouselRef = useRef<any>(null);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const numberOfSlides = 1;

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleCarouselSlide = (current: number) => {
    if (current === numberOfSlides - 0.5) {
      setShowNextButton(false);
      setShowPrevButton(true);
    } else if (current === 0) {
      setShowNextButton(true);
      setShowPrevButton(false);
    } else {
      setShowNextButton(true);
      setShowPrevButton(true);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    afterChange: handleCarouselSlide,
    slidesToShow: 1.1,
    slidesToScroll: 0.5,
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
  };

  return (
    <CardCarousel ref={carouselRef} {...settings}>
      {children}
    </CardCarousel>
  );
};
