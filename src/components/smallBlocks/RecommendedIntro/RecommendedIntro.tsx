"use client";

import Image from "next/image";
import { useState } from "react";
import Recommended from "@/components/largeBlocks/Recommended/Recommended";
import { CommonButton } from "@/components/ui/Button/CommonButton";

const RecommendedIntro = () => {
  const [isRecommendedOpen, setIsRecommendedOpen] = useState(false);

  return (
    <section className="section-gutter flex flex-col">
      <div
        className={`${!isRecommendedOpen ? "block" : "hidden"} relative w-full mx-auto max-w-[50rem]`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <CommonButton
            theme="transparent"
            onClick={() => setIsRecommendedOpen(!isRecommendedOpen)}
          >
            Рекомендуемые рецепты
          </CommonButton>
        </div>

        <div className="absolute left-[45%] bottom-[5%] w-44 h-[146px] rounded-3xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
          <Image
            src="/img/cocktail.png"
            alt="cocktail"
            fill
            className="object-cover blur-[2px]"
          />
        </div>

        <div className="absolute left-[10%] sm:left-[25%] w-44 h-[130px] rounded-3xl overflow-hidden">
          <Image
            src="/img/pizza.jpg"
            alt="pizza"
            fill
            className="object-cover blur-[2px]"
          />
        </div>
      </div>

      {isRecommendedOpen && (
        <Recommended
          setIsRecommendedOpen={setIsRecommendedOpen}
          isRecommendedOpen={isRecommendedOpen}
        />
      )}
    </section>
  );
};

export default RecommendedIntro;
