"use client";

import { useEffect, useState } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import type { FoundedRecipesProps } from "@/components/smallBlocks/FoundedRecipes/FoundedRecipes.types";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { recipes } from "@/lib/recipes";

const FoundedRecipes = ({ selectedIngredients }: FoundedRecipesProps) => {
  const [foundedRecipes, setFoundedRecipes] = useState<recipeItemType[]>([]);

  useEffect(() => {
    const matchRecipes = new Set<recipeItemType>();

    if (selectedIngredients.length > 0) {
      for (const ingredient of selectedIngredients) {
        for (const recipe of recipes) {
          if (recipe.ingredients.find((elem) => elem.id === ingredient.id)) {
            matchRecipes.add(recipe);
          }
        }
      }

      setFoundedRecipes(Array.from(matchRecipes));
    }
  }, [selectedIngredients]);

  console.log(foundedRecipes, "foundedRecipes");

  return foundedRecipes.length > 0 ? (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="text-4xl mb-10">Найденные рецепты</div>

      <div className="grid grid-cols-3 gap-8 w-full">
        {foundedRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  ) : (
    <section>Нет рецептов</section>
  );
};

export default FoundedRecipes;
