import type { Metadata } from "next";
import SearchBlock from "@/components/largeBlocks/SearchBlock/SearchBlock";
import { getIngredients, getRecipes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Поиск рецептов",
};

export default async function Page() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));

  const [ingredients, recipes] = await Promise.all([
    getIngredients(),
    getRecipes(),
  ]);

  return (
    <div className="container pt-2">
      <SearchBlock ingredients={ingredients} recipes={recipes} />
    </div>
  );
}
