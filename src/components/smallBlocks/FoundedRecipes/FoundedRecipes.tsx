import Image from "next/image";
import Link from "next/link";
import type { FoundedRecipesProps } from "@/components/smallBlocks/FoundedRecipes/FoundedRecipes.types";
import { recipes } from "@/lib/recipes";

const FoundedRecipes = ({ selectedIngredients }: FoundedRecipesProps) => {
  const foundedRecipes = [];

  if (selectedIngredients.length > 0) {
    for (const recipe of recipes) {
      if (
        recipe.ingredients.find(
          (elem) => elem.item === selectedIngredients[0].item,
        )
      ) {
        foundedRecipes.push(recipe);
      }
    }
  }

  return selectedIngredients.length > 0 ? (
    <section className="flex flex-col justify-center items-center">
      <div className="text-4xl mb-10">Найденные рецепты</div>
      <div className="grid grid-cols-3 gap-8">
        {foundedRecipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe.slug}`}
            key={recipe.id}
            className="bg-beige rounded-4xl shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer hover:scale-105"
          >
            <div className="relative rounded-4xl w-full h-[126px] lg:h-[276px]">
              <Image
                src={recipe.img}
                alt={recipe.title}
                fill
                className="object-cover"
              />
              <div className="absolute right-6 top-5 h-8 w-8 text-orange hover:scale-125">
                {/* <Heart className="w-8 h-8" /> */}
              </div>
            </div>
            <div className="px-5 py-2">
              <div>{recipe.title}</div>
              <div>{recipe.kcal} kcal</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  ) : (
    <section>Нет рецептов</section>
  );
};

export default FoundedRecipes;
