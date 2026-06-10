"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type {
  compareKcalType,
  sortKcalKey,
} from "@/app/components/largeBlocks/AllRecipes/AllRecepies.types";
import CommonBlock from "@/app/components/largeBlocks/CommonBlock/CommonBlock";
import Default from "@/app/components/ui/Button/Default/Default";
import type { recipeItem } from "@/commonTypes/recipes.types";
import { recipes } from "@/lib/recipes";

// import Heart from "@/svg/heart.svg";

const AllRecepies = () => {
  const [sortBy, setSortBy] = useState<sortKcalKey>("kcalDesc");

  const compareKcal: compareKcalType = {
    kcalDesc: () => recipes.toSorted((a, b) => a.kcal - b.kcal),
    kcalUp: () => recipes.toSorted((a, b) => b.kcal - a.kcal),
  };

  const sorted: recipeItem[] = compareKcal[sortBy]();

  const handleSort = () => {
    setSortBy((prev) => (prev === "kcalDesc" ? "kcalUp" : "kcalDesc"));
  };

  return (
    <CommonBlock
      leftTitle={"Все рецептыleft"}
      mainTitle={"Все рецепты"}
      btnTitle={`Сортировка по ${sortBy === "kcalDesc" ? "возрастанию" : "убыванию"} калорий`}
      btnFunc={handleSort}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((recipe: recipeItem) => (
          <Link
            href={`/recipes/${recipe.slug}`}
            key={recipe.id}
            className="bg-beige rounded-4xl shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-4 border-black overflow-hidden cursor-pointer hover:scale-105"
          >
            <div className="relative rounded-4xl  w-full h-[126px] lg:h-[276px]">
              <Image
                src={recipe.img}
                alt="promotion"
                fill
                className="object-cover"
              />
              <div className="absolute right-6 top-5 h-8 w-8 text-orange hover:scale-125">
                {/*<Heart className="w-8 h-8"/>*/}
              </div>
            </div>
            <div className="px-5 py-2">
              <div>{recipe.title}</div>
              <div>{recipe.kcal} kcal</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="justify-self-center my-8">
        <Default>Показать ещё 6 из 12</Default>
      </div>
    </CommonBlock>
  );
};

export default AllRecepies;
