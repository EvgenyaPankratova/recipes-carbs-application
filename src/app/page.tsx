import RecommendedIntro from "@/components/largeBlocks/RecommendedIntro/RecommendedIntro";
import Welcome from "@/components/largeBlocks/Welcome/Welcome";
import { getRecipes } from "@/lib/data";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <>
      <Welcome />
      <RecommendedIntro recipes={recipes} />
    </>
  );
}
