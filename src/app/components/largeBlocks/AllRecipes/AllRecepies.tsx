"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { recipeItem } from "@/commonTypes/recipes.types";
import { recipes } from "@/lib/recipes";

// import Heart from "@/svg/heart.svg";

const AllRecepies = () => {
  const [sortBy, setSortBy] = useState("ckalDesc");

  const sortTypes = {
    ckalDesc: () => recipes.sort((a, b) => a.kcal - b.kcal),
    ckalUp: () => recipes.sort((a, b) => b.kcal - a.kcal),
  };

  const sorted = sortTypes[sortBy]();

  return (
    <section className="mt-36">
      <div className="flex justify-between items-center">
        <div>Все рецепты</div>
        <div
          onClick={() =>
            setSortBy((prev) => (prev === "ckalDesc" ? "ckalUp" : "ckalDesc"))
          }
          className="cursor-pointer"
        >
          Сортировка по {sortBy === "ckalDesc" ? "возрастанию" : "убыванию"}{" "}
          калорий
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((recipe: recipeItem) => (
          <Link
            href={`/recipes/${recipe.slug}`}
            key={recipe.id}
            className="bg-beige rounded-4xl  shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer hover:scale-105"
          >
            <div className="relative   rounded-4xl  w-full h-[126px] lg:h-[276px]">
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
    </section>
  );
};

export default AllRecepies;
