"use client";

import Image from "next/image";
import Link from "next/link";
import type { RecipeBlockProps } from "@/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import { DoubleBorderContainer } from "@/components/ui/DoubleBorderContainer/DoubleBorderContainer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Heart from "@/svg/heart.svg";

export const RecipeItem = ({ recipe }: RecipeBlockProps) => {
  const [savedRecipes, setSavedRecipes] = useLocalStorage("recipes", []);

  const isRecipeInFavorites = savedRecipes.find(
    (favRec) => favRec.id === recipe.id,
  );

  const handleToggleSaveRecipe = () => {
    if (isRecipeInFavorites) {
      setSavedRecipes(savedRecipes.filter((favRec) => favRec.id !== recipe.id));
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <DoubleBorderContainer className="bg-beige overflow-hidden cursor-pointer">
        <div className="relative rounded-4xl w-full h-[126px] lg:h-[276px]">
          <Image
            src={recipe.img}
            alt="promotion"
            fill
            className="object-cover z-[-11]"
          />

          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggleSaveRecipe();
            }}
            className={`${isRecipeInFavorites ? "text-lightPink" : "text-transparent"} absolute right-6 top-6  hover:scale-125`}
          >
            <Heart className="w-10 h-10" />
          </div>
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
