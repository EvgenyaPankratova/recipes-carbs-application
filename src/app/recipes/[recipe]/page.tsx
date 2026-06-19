import RecipeBlock from "@/components/largeBlocks/RecipeBlock/RecipeBlock";
import { recipes } from "@/lib/recipes";

export default async function Recipe({ params }) {
  const { recipe: slug } = await params;

  const recipeData = recipes.find((r) => r.slug === slug);

  if (!recipeData) {
    console.error("❌ Recipe not found!!:", slug);
    return <div>no recipe</div>;
  }

  return <RecipeBlock recipe={recipeData} />;
}
