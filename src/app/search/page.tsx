import SearchBlock from "@/app/components/largeBlocks/SearchBlock/SearchBlock";
import FoundedRecipes from "@/app/components/smallBlocks/FoundedRecipes/FoundedRecipes.types";

export default async function Page() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div className="container pt-2">
      <SearchBlock />
    </div>
  );
}
