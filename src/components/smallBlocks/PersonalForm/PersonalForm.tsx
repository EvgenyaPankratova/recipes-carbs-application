"use client";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "@/actions/signup";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import type { SubmitButtonProps } from "@/components/smallBlocks/PersonalForm/PersonalForm.types";
import { DoubleBorderContainer } from "@/components/ui/DoubleBorderContainer/DoubleBorderContainer";
import Tabs from "@/components/ui/Tabs/Tabs";
import { CommonButton } from "../../ui/Button/CommonButton";

const SubmitButton = ({ activeTabLabel }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <CommonButton
      theme="default"
      type="submit"
      disabled={pending}
      className="mx-auto mt-auto"
    >
      {pending ? "Загрузка..." : activeTabLabel}
    </CommonButton>
  );
};

const PersonalForm = () => {
  const [formState, signupAction] = useActionState(signup, {
    email: null,
    password: null,
    message: "",
  });

  const [activeTabLabel, setActiveTabLabel] = useState<string>("Войти");
  const checkoutOption = (label: string) => {
    setActiveTabLabel(label);
  };

  return (
    <CommonBlock mainTitle={"Личный кабинет"}>
      <DoubleBorderContainer className="mx-auto  w-full 2xl:w-[50%] ">
        <div className="bg-lightPink p-4 lg:p-8 flex flex-col gap-y-6 justify-center items-center ">
          <div className="flex flex-col lg:flex-row gap-10 text-[clamp(1rem,4vw,1.6rem)] mb-2">
            <Tabs
              items={[
                { is_active: true, id: crypto.randomUUID(), label: "Войти" },
                {
                  is_active: false,
                  id: crypto.randomUUID(),
                  label: "Регистрация",
                },
              ]}
              checkoutOption={checkoutOption}
              activeTabLabel={activeTabLabel}
            />
          </div>

          <div className="flex flex-col min-h-[20rem]">
            <div className="font-spectral text-[1.3rem] mb-6">
              {activeTabLabel === "Войти"
                ? "Войдите, чтобы сохранять понравившиеся рецепты :)"
                : "Зарегистрируйтесь и сохраняйте рецепты :)"}
            </div>
            <form
              action={signupAction}
              className="flex flex-col flex-1 gap-y-8 w-full [&_input]:bg-white [&_input]:shadow-[0_4px_10px_rgba(0,0,0,0.25)] [&_input]:rounded-2xl [&_input]:lg:rounded-4xl [&_input]:p-2 [&_input]:lg:px-6 [&_input]:lg:py-3 [&_input]:outline-none [&_input]:border [&_input]:border-white [&_input]:focus:border [&_input]:focus:border-orange"
            >
              <input name="email" id="email" placeholder="email"></input>
              <input name="password" id="password" placeholder="пароль"></input>
              {activeTabLabel === "Регистрация" && (
                <input
                  name="password"
                  id="password"
                  placeholder="повторите пароль"
                ></input>
              )}
              <SubmitButton activeTabLabel={activeTabLabel} />
            </form>
          </div>
        </div>
      </DoubleBorderContainer>

      <div className="mt-15">
        {" "}
        {!!formState?.message && <p>{formState?.message}</p>}
      </div>
    </CommonBlock>
  );
};

export default PersonalForm;
