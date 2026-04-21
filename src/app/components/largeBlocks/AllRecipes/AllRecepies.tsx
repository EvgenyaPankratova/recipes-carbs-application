"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllRecepies = () => {
  const [sortBy, setSortBy] = useState("ckalDesc");

  const recipes = [
    { id: 11, title: "Паста Болоньезе", kcal: 550 },
    { id: 22, title: "Салат Цезарь", kcal: 400 },
    { id: 33, title: "Простой пирог с творогом", kcal: 700 },
    { id: 44, title: "Бургер Техас", kcal: 1100 },
    { id: 55, title: "Яичница", kcal: 200 },
  ];

  const sortTypes = {
    ckalDesc: () => recipes.sort((a, b) => a.kcal - b.kcal),
    ckalUp: () => recipes.sort((a, b) => b.kcal - a.kcal),
  };

  const sorted = sortTypes[sortBy]();

  return (
    <section className=" mt-36">
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

      <div className="grid gap-8 grid-cols-3">
        {sorted.map((recipe) => (
          <Link
            href={`/recipes/recipe`}
            key={recipe.id}
            className="bg-beige rounded-4xl  shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer hover:scale-105"
          >
            <div className="relative   rounded-4xl  w-full h-[126px] lg:h-[276px]">
              <Image
                src="/img/pablo.png"
                alt="promotion"
                fill
                className="object-cover"
              />
              <div className="absolute right-6 top-5 h-8 w-8 text-orange hover:scale-125">
                ❤
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
