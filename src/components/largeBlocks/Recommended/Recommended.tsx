import type { RecommendedProps } from "@/components/largeBlocks/Recommended/Recommended.types";
import RecipeCard from "@/components/smallBlocks/RecipeCard/RecipeCard";
import { CommonButton } from "@/components/ui/Button/CommonButton";

export const Recommended = ({
  recipes,
  setIsRecommendedOpen,
  isRecommendedOpen,
}: RecommendedProps) => {
  const fourRandomIndexes: number[] = [];

  while (fourRandomIndexes.length < 4) {
    const randomIndex = Math.floor(Math.random() * recipes.length);

    if (fourRandomIndexes.includes(randomIndex)) {
      continue;
    }
    fourRandomIndexes.push(randomIndex);
  }

  const fourRandomRecipes = recipes.filter((_, ind) =>
    fourRandomIndexes.includes(ind),
  );

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 h-[600px] md:h-[300px]">
        {fourRandomRecipes.map((recipe, index) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <CommonButton
        theme="transparent"
        onClick={() => setIsRecommendedOpen(!isRecommendedOpen)}
        className="mt-6 mx-auto"
      >
        Скрыть рекомендуемые рецепты
      </CommonButton>
    </>
  );
};
