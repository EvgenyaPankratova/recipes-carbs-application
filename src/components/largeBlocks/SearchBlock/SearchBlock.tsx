"use client";
import Image from "next/image";
import { type ChangeEvent, useState } from "react";
import type { ingredientItem } from "@/commonTypes/ingredients.types";
import FoundedRecipes from "@/components/smallBlocks/FoundedRecipes/FoundedRecipes";
import { ingredients } from "@/lib/ingredients";
import { CommonButton } from "../../ui/Button/CommonButton";

const SearchBlock = () => {
  const [activeIngredients, setActiveIngredients] = useState<ingredientItem[]>(
    [],
  );
  const [searchIngredient, setSearchIngredient] = useState<
    ingredientItem | undefined
  >(activeIngredients[0]);

  const handleActiveIngredients = (id: number, item: string) => {
    setActiveIngredients((prev) =>
      prev.find((elem) => elem.id === id)
        ? prev.filter((item) => item.id !== id)
        : [...prev, { id, item }],
    );
  };

  return (
    <section className="flex flex-col justify-center items-center gap-10 my-36">
      <div className="flex justify-center items-center">
        <div className="relative left-20 text-[30px] z-3">
          Поиск рецептов <br /> по ингредиентам
        </div>
        <div className="relative w-[400px] h-[256px] lg:h-[426px] z-2">
          <Image
            src={"/img/searchBar.png"}
            alt="promotion"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <form
        // action={search}
        className="flex gap-4 w-full max-w-[60%]"
      >
        <input
          value={
            searchIngredient
              ? searchIngredient.item
              : activeIngredients
                ? activeIngredients.map((elem) => " " + elem.item)
                : ""
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchIngredient((prev) => ({
              ...prev,
              item: event.target.value,
            }))
          }
          className="flex-1 bg-white rounded-4xl h-16 shadow-[0_4px_10px_rgba(0,0,0,0.25)] focus:outline-none p-6"
          type="search"
          placeholder="Выберите ингредиенты или введите через пробел..."
        />
        <CommonButton theme="default" className="flex-shrink-0 self-center">
          Искать
        </CommonButton>
      </form>

      <div className="flex gap-20 justify-center items-center">
        <div>
          <div className="mb-6 text-center">Какие ингредиенты у вас есть?</div>

          <div
            className={`
          grid grid-cols-3 gap-x-8 gap-y-2 text-black cursor-pointer`}
          >
            {ingredients.map(({ id, item, img }) => (
              <button
                type={"button"}
                key={id}
                className={`
            ${activeIngredients.find((elem) => elem.id === id) ? "bg-orange" : "bg-lightPink"}
          flex gap-x-2 items-center font-spectral lowercase text-[1.3rem] rounded-4xl p-2 transition duration-300 hover:bg-orange bg-lightPink  text-black cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.25)]  px-4`}
                onClick={() => handleActiveIngredients(id, item)}
              >
                <div className="relative w-9 h-8 lg:h-9 rounded-full overflow-hidden">
                  <Image
                    src={img}
                    alt="promotion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="">{item}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-96 h-60 lg:h-[500px] overflow-hidden ">
          <Image
            src={"/img/refrigerator.png"}
            alt="promotion"
            fill
            className="object-cover [filter:drop-shadow(4px_0_0_pink)_drop-shadow(-4px_0_0_pink)_drop-shadow(0_4px_0_pink)_drop-shadow(0_-4px_0_pink)]"
          />
        </div>
      </div>

      <FoundedRecipes selectedIngredients={activeIngredients} />
    </section>
  );
};

export default SearchBlock;
