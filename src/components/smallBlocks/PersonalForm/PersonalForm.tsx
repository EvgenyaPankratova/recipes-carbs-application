"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  ///переписать с учётов реакт 19 хуков!!!! подумать, как объединить стиль ошибок. вынести в единый компонент инпут

  // const [formState, signupAction] = useActionState(signup, {
  //   email: null,
  //   password: null,
  //   message: "",
  // });
  type AvtorizationInputs = {
    emailUser: string;
    passwordUser: string;
  };

  const [activeTabLabel, setActiveTabLabel] = useState<string>("Войти");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const checkoutOption = (label: string) => {
    setActiveTabLabel(label);
  };

  const getInputClasses = (hasError: boolean) => `
  w-full bg-white 
  shadow-[0_4px_10px_rgba(0,0,0,0.25)] 
  rounded-2xl lg:rounded-4xl 
  p-2 lg:px-6 lg:py-3 
  outline-none 
  border 
  transition-all duration-200
  ${
    hasError
      ? "border-red-700 focus:ring-red-700 focus:border-red-700"
      : "border-white focus:ring-2 focus:ring-orange focus:border-orange"
  }
`;

  const schema = z.object({
    emailUser: z.email("Введите корректный email"),
    passwordUser: z
      .string()
      .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AvtorizationInputs>({ resolver: zodResolver(schema) });

  const onSubmit = (data: AvtorizationInputs) => {
    const { emailUser, passwordUser } = data;

    if (!emailUser || !passwordUser) {
      return;
    }

    setUserEmail(emailUser);
    setUserPassword(passwordUser);
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
              // action={signupAction}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col flex-1 gap-y-8 w-full"
            >
              <div>
                <label htmlFor="email">
                  <input
                    id="email"
                    placeholder="email"
                    className={getInputClasses(!!errors.emailUser)}
                    {...register("emailUser")}
                  ></input>
                </label>
                {!!errors.emailUser?.message && (
                  <p className="mt-2 text-[clamp(0.3rem,1.5vw,0.7rem)] text-red-700">
                    {errors.emailUser?.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password">
                  <input
                    id="password"
                    placeholder="пароль"
                    className={getInputClasses(!!errors.passwordUser)}
                    {...register("passwordUser")}
                  ></input>
                </label>
                {!!errors.passwordUser?.message && (
                  <p className="mt-2 text-[clamp(0.3rem,1.5vw,0.7rem)] text-red-700">
                    {errors.passwordUser?.message}
                  </p>
                )}
              </div>

              <div>
                {activeTabLabel === "Регистрация" && (
                  <input
                    name="password"
                    id="password"
                    placeholder="повторите пароль"
                  ></input>
                )}
              </div>
              <SubmitButton activeTabLabel={activeTabLabel} />

              {/*<div className="mt-15">*/}
              {/*  {" "}*/}
              {/*  {!!errors.emailUser?.message && (*/}
              {/*    <p>{errors.emailUser?.message}</p>*/}
              {/*  )}*/}
              {/*  {!!errors.passwordUser?.message && (*/}
              {/*    <p>{errors.passwordUser?.message}</p>*/}
              {/*  )}*/}
              {/*</div>*/}
            </form>
          </div>
        </div>
      </DoubleBorderContainer>

      {/*<div className="mt-15">*/}
      {/*  {" "}*/}
      {/*  {!!formState?.message && <p>{formState?.message}</p>}*/}
      {/*</div>*/}
    </CommonBlock>
  );
};

export default PersonalForm;
