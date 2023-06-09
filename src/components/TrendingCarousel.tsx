import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import CardProduct from "./CardProduct";
import { SlEnergy } from "react-icons/sl";
import {
  BsArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const TrendingCarousel: React.FC<TrendingCarousel> = ({ title, products }) => {
  const mainImageRef = useRef<Slider>(null);

  useEffect(() => {
    if (mainImageRef.current) {
      mainImageRef.current.slickGoTo(0);
    }
  }, [products]);

  const settings: Settings = {
    arrows: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-0 md:px-5 lg:px-20 mt-4 md:mt-8 lg:mt-10">
      <div className="flex items-center text-2xl font-bold mb-2">
        <SlEnergy className="mx-2" />
        {title}
      </div>
      <div className="w-full px-5">
        <Slider ref={mainImageRef} {...settings}>
          {products?.map((item) => (
            <CardProduct key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingCarousel;

export function NextArrow({ onClick }: any) {
  return (
    <div
      className="absolute top-2/4 -translate-y-2/4 cursor-pointer -right-2 z-10 text-3xl"
      onClick={onClick}
    >
      <BsFillArrowRightCircleFill />
    </div>
  );
}

export function PrevArrow({ onClick }: any) {
  return (
    <div
      className="absolute top-2/4 -translate-y-2/4 cursor-pointer -left-2 z-10 text-3xl"
      onClick={onClick}
    >
      <BsArrowLeftCircleFill />
    </div>
  );
}
