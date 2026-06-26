import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { DoubleBorderContainer } from "@/components/ui/DoubleBorderContainer/DoubleBorderContainer";
import { InputField } from "@/components/ui/Input/InputField";
import User from "@/svg/user.svg";
import { CommonButton } from "../../ui/Button/CommonButton";

const Personal = () => {
  return (
    <CommonBlock mainTitle="Привет, name!">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-[330px_0.5fr] justify-between">
          <DoubleBorderContainer className="relative aspect-square h-[330px] left-4 bg-white before:bg-white">
            <div>
              {" "}
              <User className="w-full h-full" />
            </div>
            <CommonButton className="absolute bottom-4 right-4" theme="default">
              выбрать фото
            </CommonButton>
          </DoubleBorderContainer>
          <div className="flex flex-col items-end  gap-10">
            <CommonButton
              theme={"pink"}
              className="self-start pointer-events-none"
            >
              Управление аккаунтом
            </CommonButton>
            <InputField name={"text"} />
            <InputField name={"email"} />
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
