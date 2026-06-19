"use client";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "@/app/actions/signup";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import type { SubmitButtonProps } from "@/components/smallBlocks/PersonalForm/PersonalForm.types";
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
      <div
        className="relative mx-auto z-[2] flex flex-col gap-y-6  w-full 2xl:w-[50%] justify-center items-center rounded-2xl lg:rounded-4xl bg-lightPink shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-3 border-solid border-black p-4 lg:p-8  before:content-[''] before:absolute before:-inset-1 before:z-[-10] before:-translate-x-2 before:-translate-y-2
  before:rounded-2xl lg:before:rounded-4xl before:bg-lightPink before:border-[3px] before:border-solid before:border-black"
      >
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
            className="flex flex-col flex-1 gap-y-8 w-full [&_input]:bg-white [&_input]:shadow-[0_4px_10px_rgba(0,0,0,0.25)] [&_input]:rounded-2xl [&_input]:lg:rounded-4xl [&_input]:p-2 [&_input]:lg:px-6 [&_input]:lg:py-3 [&_input]:outline-none [&_input]:border-1 [&_input]:border-white [&_input]:focus:border-1 [&_input]:focus:border-orange"
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

      <div className="mt-15">
        {" "}
        {!!formState?.message && <p>{formState?.message}</p>}
      </div>
    </CommonBlock>
  );
};

export default PersonalForm;
