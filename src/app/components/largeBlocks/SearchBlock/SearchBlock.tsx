"use client";
import Image from "next/image";
import { useState } from "react";
import User from "@/svg/user.svg";

const SearchBlock = () => {
  const [active, setActive] = useState([]);
  const ingredients = [
    { id: 1, item: "Томат" },
    { id: 2, item: "Сливки" },
    { id: 3, item: "Яйцо" },
    { id: 4, item: "Спагетти" },
    { id: 5, item: "Лук" },
    { id: 6, item: "Курица" },
  ];

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

      <div className="bg-white max-w-[60%] rounded-4xl w-full h-16 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <input
          className="w-full bg-transparent focus:outline-none p-6"
          type="search"
          placeholder={
            active.length > 0
              ? active.map((ingredient) => " " + ingredient.item)
              : "Выберите ингредиенты или введите..."
          }
        />
      </div>

      <div>
        <div>Ингредиенты</div>

        <div
          className={`
          grid grid-cols-3 gap-x-8 gap-y-2 border-black text-black cursor-pointer`}
        >
          {ingredients.map(({ id, item }) => (
            <button
              type={"button"}
              key={id}
              className={`
            ${active.find((elem) => elem.id === id) ? "bg-orange" : "bg-lightPink"}
          flex gap-x-2 items-center rounded-4xl p-2 hover:bg-orange border-2 hover:border-transparent bg-lightPink border-black text-black cursor-pointer px-4`}
              onClick={() => {
                setActive((prev) =>
                  prev.find((elem) => elem.id === id)
                    ? prev.filter((item) => item.id !== id)
                    : [...prev, { id, item }],
                );
              }}
            >
              <div className="relative w-9 h-8 lg:h-9 rounded-full overflow-hidden">
                <Image
                  src="/img/tomato.jpg"
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
    </section>
  );
};

export default SearchBlock;
