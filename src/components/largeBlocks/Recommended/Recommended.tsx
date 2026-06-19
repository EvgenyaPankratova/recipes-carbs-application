import RecipeCard from "@/components/smallBlocks/RecipeCard/RecipeCard";
import { CommonButton } from "@/components/ui/Button/CommonButton";
import { recipes } from "@/lib/recipes";

const Recommended = ({ setIsRecommendedOpen, isRecommendedOpen }) => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.id} recipe={recipe} index={index} />
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

export default Recommended;
