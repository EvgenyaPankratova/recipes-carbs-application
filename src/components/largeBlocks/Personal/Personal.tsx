import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { CommonButton } from "../../ui/Button/CommonButton";

const Personal = () => {
  return (
    <CommonBlock mainTitle="Привет, name!">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-[330px_1fr] justify-between">
          <div className="aspect-square border-4 border-black p-6 rounded-4xl h-[330px]">
            portrait
            <CommonButton theme="default">выбрать фото</CommonButton>
          </div>
          <div className="flex flex-col justify-between">
            <div>Аккаунт</div>
            <div>Василий Крит</div>
            <div>vasya007@mail.ru</div>
          </div>
        </div>

        <CommonButton theme="default" className="self-center">
          Добавить свой рецепт
        </CommonButton>
      </div>
    </CommonBlock>
  );
};

export default Personal;
