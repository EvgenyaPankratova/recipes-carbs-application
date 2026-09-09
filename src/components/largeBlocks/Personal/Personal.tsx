import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { Avatar } from "@/components/smallBlocks/Avatar/Avatar";
import { InputField } from "@/components/ui/Input/InputField";
import { CommonButton } from "../../ui/Button/CommonButton";

const Personal = () => {
  return (
    <CommonBlock mainTitle="Привет, name!">
      <div className="flex flex-col gap-12">
        <div className="grid grid-rows-2 gap-12 xl:gap-0 xl:grid-rows-1 grid-cols-1 xl:grid-cols-[330px_0.5fr] justify-between">
          <Avatar />
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
