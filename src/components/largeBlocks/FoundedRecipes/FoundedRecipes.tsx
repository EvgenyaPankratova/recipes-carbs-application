"use client";

import { useEffect, useState } from "react";
import type { ingredientItem } from "@/commonTypes/ingredients.types";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import type { FoundedRecipesProps } from "@/components/largeBlocks/FoundedRecipes/FoundedRecipes.types";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";

const hasIngredient = (recipe: recipeItemType, ingredient: ingredientItem) =>
  recipe.ingredients.some((elem) => elem.id === ingredient.id);

const FoundedRecipes = ({
  selectedIngredients,
  recipes,
}: FoundedRecipesProps) => {
  const [foundedRecipes, setFoundedRecipes] = useState<recipeItemType[]>([]);
  const [isRecipeModeStrong, setRecipeModeStrong] = useState(false);

  useEffect(() => {
    const matchRecipes = recipes.filter((recipe) =>
      isRecipeModeStrong
        ? selectedIngredients.every((ingredient) =>
            hasIngredient(recipe, ingredient),
          )
        : selectedIngredients.some((ingredient) =>
            hasIngredient(recipe, ingredient),
          ),
    );

    setFoundedRecipes(matchRecipes);
  }, [selectedIngredients, isRecipeModeStrong, recipes]);

  const handleRecipeMode = () => {
    setRecipeModeStrong((prev) => !prev);
  };

  return foundedRecipes.length > 0 ? (
    <CommonBlock
      mainTitle="Найденные рецепты"
      btn={{
        btnTitle: isRecipeModeStrong ? "Строгий режим" : "Нестрогий режим",
        btnFunc: handleRecipeMode,
        btnTooltip: {
          text: `${isRecipeModeStrong ? "Поиск рецептов, содержащих все выбранные ингредиенты" : "Поиск рецептов, содержащих хотя бы один из выбранных ингредиентов"}`,
          isTooltipOnTop: true,
        },
      }}
      hasBreadCrumbs={false}
    >
      <div className="grid grid-cols-3 gap-8 w-full">
        {foundedRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </CommonBlock>
  ) : (
    <section>Рецептов не найдено...</section>
  );
};

export default FoundedRecipes;
