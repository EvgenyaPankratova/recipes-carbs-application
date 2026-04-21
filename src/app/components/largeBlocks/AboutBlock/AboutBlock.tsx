import Cake from "@/svg/cake.svg";
import Noodle from "@/svg/noodle.svg";

const AboutBlock = () => {
  return (
    <section className="flex flex-col gap-32 mt-36">
      <div className="flex justify-center items-center text-[46px]">
        Как работает этот сервис
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-30">
        <div className="relative z-2">
          <div>
            <div className="flex flex-row-reverse justify-between">
              <div className="bg-lightPink rounded-full">
                <Noodle className="w-26 h-26 " />
              </div>
              <div className="-rotate-45">"спагетти"</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="bg-beige">
                <Cake className="w-26 h-26 " />
              </div>
              <div className="rotate-45">"сливки"</div>
            </div>
          </div>

          <div className="absolute -z-2 top-9 left-9 bg-white w-32 h-32"></div>
        </div>

        <div className="text-[20px]">
          <ol className="list-decimal">
            <li>Нажмите "поиск по ингредиентам"</li>
            <li>Введите ингредиенты, которые есть у вас дома</li>
          </ol>
          <div className="my-6">или</div>
          <div>Просто выберите рецепт в разделе "Все рецепты"</div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
