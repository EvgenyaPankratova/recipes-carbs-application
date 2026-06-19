import Image from "next/image";
import { CommonButton } from "../../ui/Button/CommonButton";

const Welcome = () => {
  return (
    <section className="section-gutter flex flex-col lg:flex-row items-center justify-between gap-[clamp(3rem,5vw,6rem)] pb-50 xl:pb-64">
      <div className="w-full lg:flex-1 relative">
        <div className="relative w-full h-[326px] sm:h-[526px] lg:h-[626px] xl:h-[726px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-2xl lg:rounded-4xl overflow-hidden">
          <Image
            src="/img/cook.png"
            alt="promotion"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -right-2 xl:-right-7 bottom-0 xl:top-7/12 w-[30%] rounded-2xl lg:rounded-4xl overflow-hidden h-[146px] sm:h-[236px] lg:h-[326px] shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
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
        <div className="relative flex flex-col gap-6">
          <div className="relative text-[clamp(2.25rem,4vw,4.5rem)] z-[1]">
            Добро пожаловать в сервис{" "}
            <span className="text-orange">"Поиск рецептов"</span>!
          </div>
          <div className="font-spectral text-[clamp(1.5rem,3.3vw,1.9rem)]">
            Здесь вы сможете найти рецепты по указанным ингредиентам совершенно
            бесплатно.
          </div>
          <div className="absolute -right-32 -top-20 lg:-top-40 aspect-square h-[300px] lg:h-[500px]  z-[0] rounded-full overflow-hidden">
            <Image
              src="/img/ellipse.png"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12">
          <CommonButton theme="default">Начать</CommonButton>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
