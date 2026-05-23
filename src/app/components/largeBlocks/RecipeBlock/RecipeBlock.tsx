import Image from "next/image";
import type { RecipeBlockProps } from "@/app/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import Default from "@/app/components/ui/Button/Default/Default";
import { recipeItem } from "@/commonTypes/recipes.types";
import { ingredients } from "@/lib/ingredients";

// import Heart from "@/svg/heart.svg";

const RecipeBlock = ({ recipe }: RecipeBlockProps) => {
  return (
    <section className="flex flex-col gap-14 mt-36">
      <div className="text-6xl">{recipe.title}</div>
      <div>
        Ингредиенты
        <div
          className={`
          grid grid-cols-3 gap-x-8 gap-y-2 border-black text-black cursor-pointer`}
        >
          {recipe.ingredients.map(({ id, item }) => {
            const ingredientData = ingredients.find((ing) => ing.item === item);

            return (
              <button
                type={"button"}
                key={id}
                className={`
          flex gap-x-2 items-center rounded-4xl p-2 border-2 bg-lightPink border-black text-black px-4`}
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
      <div>
        <div className="bg-beige rounded-4xl  shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer">
          <div className="relative   rounded-4xl  w-full h-[126px] lg:h-[476px]">
            <Image
              src={recipe.img}
              alt="promotion"
              fill
              className="object-cover"
            />
            <div className="absolute right-6 top-5 h-[0.6rem] w-[0.6rem]  text-orange hover:scale-125">
              {/*<Heart className="w-8 h-8"/>*/}
            </div>
          </div>
          <div className="px-5 py-2">
            <div>title</div>
            <div>kcal</div>
          </div>
        </div>
      </div>
      <div>
        Рецепт
        <div>
          ИНГРЕДИЕНТЫ НА 4 ПОРЦИИ репчатый лук – 1 шт. чеснок – 2 зубчика
          оливковое масло – 2 ст. л. мясной фарш – 600 г сладкий перец – 2 шт.
          консервированные помидоры в собственном соку – 500 г спагетти – 250 г
          тертый твердый сыр – 100 г орегано, петрушка, базилик – по вкусу соль,
          молотый черный перец – по вкусу
        </div>
        <div>
          Приготовьте соус для спагетти болоньезе. Для этого лук с чесноком
          очистите. Лук разрежьте на половинки, затем нарежьте мелкими кубиками.
          Зубчики чеснока раздавите плоской стороной ножа и порубите.
        </div>
        <div>
          Приготовьте соус для спагетти болоньезе. Для этого лук с чесноком
          очистите. Лук разрежьте на половинки, затем нарежьте мелкими кубиками.
          Зубчики чеснока раздавите плоской стороной ножа и порубите.
        </div>
        <div>
          Приготовьте соус для спагетти болоньезе. Для этого лук с чесноком
          очистите. Лук разрежьте на половинки, затем нарежьте мелкими кубиками.
          Зубчики чеснока раздавите плоской стороной ножа и порубите.
        </div>
      </div>

      <Default>Распечатать pdf</Default>
    </section>
  );
};

export default RecipeBlock;
