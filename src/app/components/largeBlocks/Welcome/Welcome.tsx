import Image from "next/image";
import Default from "@/app/components/ui/Button/Default/Default";

const Welcome = () => {
  return (
    <section className="section-gutter flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="w-full lg:flex-1 relative">
        <div className="relative w-full h-[326px] sm:h-[526px] lg:h-[626px] xl:h-[726px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-2xl lg:rounded-4xl overflow-hidden">
          <Image
            src="/img/table.jpg"
            alt="promotion"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -right-2 xl:-right-7 -bottom-5 xl:-bottom-8 w-[30%] rounded-2xl lg:rounded-4xl overflow-hidden h-[166px] sm:h-[226px] lg:h-[326px] shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
          <Image
            src="/img/cocktail.png"
            alt="cocktail"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -left-1 xl:-left-8 top-1/2 xl:top-52 w-[35%] lg:w-[30%] rounded-2xl lg:rounded-4xl overflow-hidden h-[126px] sm:h-[206px] border-6 border-lightPink"></div>
        <div className="absolute -left-3 xl:-left-10 top-1/2 xl:top-50 w-[35%] lg:w-[30%] rounded-2xl lg:rounded-4xl overflow-hidden h-[126px] sm:h-[206px] border-6 border-orange ">
          <Image
            src="/img/pizza.jpg"
            alt="pizza"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:px-24 lg:max-w-[40%]">
        <div className="flex flex-col gap-6">
          <div className="text-4xl xl:text-7xl text-[clamp(2.25rem,4vw,4.5rem)]">
            Добро пожаловать в сервис "Поиск рецептов"!
          </div>
          <div className="text-[clamp(1rem,3vw,1.4rem)]">
            Здесь вы сможете найти рецепты по указанным ингредиентам совершенно
            бесплатно.
          </div>
        </div>
        <div className="mt-12">
          <Default>Начать</Default>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
