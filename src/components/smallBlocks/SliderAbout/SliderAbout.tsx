"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/hooks/useMediaQuery";
import Cake from "@/svg/cake.svg";
import Noodle from "@/svg/noodle.svg";
import Takos from "@/svg/takos.svg";

const ICON_LABELS = ["cake", "noodle", "takos"];

const ICONS = {
  Cake: <Cake className="w-8 h-8 lg:w-14 lg:h-14" />,
  Noodle: <Noodle className="w-8 h-8 lg:w-14 lg:h-14" />,
  Takos: <Takos className="w-8 h-8 lg:w-14 lg:h-14" />,
} as const;

const ICON_CYCLE = [ICONS.Cake, ICONS.Noodle, ICONS.Takos];

export const SliderAbout = () => {
  const isLg = useMediaQuery("(min-width : 1024px)");

  const slides = Array.from({ length: 12 }, (_, i) => {
    const group = Math.floor(i / 3);
    const label = ICON_LABELS[i % 3];

    return (
      <SwiperSlide
        key={`${label}-${group}`}
        className="flex justify-center items-center"
      >
        <div className="size-12 lg:size-25 bg-lightPink rounded-full flex justify-center items-center">
          {ICON_CYCLE[i % 3]}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="h-[100px] w-full lg:sticky lg:top-0 lg:h-0 lg:w-36 ">
      <Swiper
        className="h-[100px] w-full lg:absolute lg:top-0 lg:left-0 lg:h-screen lg:w-fit"
        direction={isLg ? "vertical" : "horizontal"}
        spaceBetween={12}
        slidesPerView={isLg ? 6 : 4}
        loop
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides}
      </Swiper>
    </div>
  );
};
