"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { RecipeBlockProps } from "@/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ingredients } from "@/lib/ingredients";
import Heart from "@/svg/heart.svg";
import RestangleStep from "@/svg/rectangleStep.svg";
import { CommonButton } from "../../ui/Button/CommonButton";

const RecipeBlock = ({ recipe }: RecipeBlockProps) => {
  const router = useRouter();

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

  const preparationMethod = [
    {
      id: 11,
      step: 1,
      description:
        "Приготовьте сухарики для простого салата Цезарь с курицей. Для этого срежьте с хлеба корку, мякиш нарежьте кубиками. Выложите их на противень, выстланный бумагой для выпечки, и поместите в духовку, нагретую до 160°C, на 10-15 минут. Они должны подсохнуть и стать хрустящими. Дайте остыть.",
    },
    {
      id: 22,
      step: 2,
      description:
        "Яйца для салата сварите вкрутую. Для этого поместите их в ковшик, залейте холодной водой и доведите до кипения. Перепелиные варите 5 минут, куриные — 8 минут. Воду слейте, яйца залейте холодной водой и дайте остыть. Очистите и разрежьте на половинки (перепелиные) или на четвертинки (куриные).",
    },
    {
      id: 33,
      step: 3,
      description:
        "Приготовьте простой чесночный соус для салата Цезарь с курицей. Чеснок пропустите через пресс в небольшую мисочку. Добавьте лимонный сок, горчицу, майонез, посолите и поперчите по вкусу. Тщательно перемешайте.\n" +
        "\n",
    },
  ];

  return (
    <section className="flex flex-col gap-14 mt-36">
      <CommonButton theme="default" onClick={() => router.push("/recipes")}>
        Назад к рецептам
      </CommonButton>

      <div className="flex gap-8">
        <div className="rounded-4xl w-1/2 border-4 border-orange  shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer">
          <div className="relative rounded-4xl  w-full h-[126px] lg:h-[476px]">
            <Image
              src={recipe.img}
              alt="promotion"
              fill
              className="object-cover"
            />
            <div
              onClick={handleToggleSaveRecipe}
              className="absolute right-8 top-8 text-lightPink hover:scale-125"
            >
              <Heart className="w-14 h-14" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-1/2 flex-shrink-0">
          <div className="flex flex-col gap-16">
            <div className="text-6xl">{recipe.title}</div>

            <div>25 min</div>
            <div className="font-spectral text-2xl">
              Slow cooked, Texas style pulled pork that is served on a toasted
              and buttered roll. My family’s favorite.{" "}
            </div>

            <div className="font-spectral">Servings: 8. Yields: 8.</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="text-2xl">Ингредиенты:</div>
          <div
            className={`
          grid grid-cols-1 gap-x-4 gap-y-8`}
          >
            {recipe.ingredients.map(({ id, item }) => {
              const ingredientData = ingredients.find(
                (ing) => ing.item === item,
              );

              return (
                <button
                  type={"button"}
                  key={id}
                  className={`
          flex gap-x-2 font-spectral lowercase text-[1.3rem] items-center rounded-4xl p-2 bg-lightPink text-black shadow-[0_4px_10px_rgba(0,0,0,0.25)]   px-4`}
                >
                  <div className="relative w-9 h-8 lg:h-9 rounded-full overflow-hidden">
                    {ingredientData?.img && (
                      <Image
                        src={ingredientData.img}
                        alt={ingredientData.item || item}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="">{item}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-6 w-1/2">
          <div className="text-2xl">Шаги:</div>

          <div className="font-spectral flex flex-col gap-10 text-[1.3rem]">
            {preparationMethod.map((item, index) => (
              <div key={item.id} className="flex gap-4">
                {/* SVG-подложка с цифрой внутри */}
                <div className="relative flex-r-center w-20 h-20 shrink-0">
                  <RestangleStep className="absolute w-20 h-20"></RestangleStep>

                  <span className="relative z-10 text-orange font-bold text-6xl">
                    {index + 1}
                  </span>
                </div>

                <div>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CommonButton theme="default" className="self-center">
        Распечатать pdf
      </CommonButton>
    </section>
  );
};

export default RecipeBlock;
