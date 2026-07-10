"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import type { RecipeBlockProps } from "@/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import { DoubleBorderContainer } from "@/components/ui/DoubleBorderContainer/DoubleBorderContainer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Heart from "@/svg/heart.svg";

export const RecipeItem = ({ recipe }: RecipeBlockProps) => {
  const [savedRecipes, setSavedRecipes] = useLocalStorage("recipes", []);

  const isRecipeInFavorites = savedRecipes.find(
    (favRec: recipeItemType) => favRec.id === recipe.id,
  );

  const handleToggleSaveRecipe = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isRecipeInFavorites) {
      setSavedRecipes(
        savedRecipes.filter(
          (favRec: recipeItemType) => favRec.id !== recipe.id,
        ),
      );
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <DoubleBorderContainer className="cursor-pointer">
        <div className="relative rounded-4xl w-full h-[126px] lg:h-[276px] z-[2]">
          <Image
            src={recipe.img}
            alt="promotion"
            fill
            className="object-cover"
          />

          <button
            type="button"
            onClick={(e) => {
              handleToggleSaveRecipe(e);
            }}
            className={`${isRecipeInFavorites ? "text-lightPink" : "text-transparent"} absolute right-6 top-6 hover:scale-125 transition duration-300 cursor-pointer`}
          >
            <Heart className="w-10 h-10" />
          </button>
          <div className="absolute left-4 bottom-4 bg-beige rounded-3xl p-4">
            <div className="font-bold text-[clamp(1rem,3vw,1.3rem)] ">
              {recipe.title}
            </div>
            <div>{recipe.kcal} kcal</div>
          </div>
        </div>
      </DoubleBorderContainer>
    </Link>
  );
};
