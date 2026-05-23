"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "@/app/actions/signup";
import Default from "@/app/components/ui/Button/Default/Default";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Default type="submit" disabled={pending} className="mx-auto">
      {pending ? "Загрузка..." : "Войти / Регистрация"}
    </Default>
  );
};

const Personal = () => {
  const [formState, signupAction] = useActionState(signup, {
    email: null,
    password: null,
    message: "",
  });

  return (
    <section className="flex flex-col justify-center items-center mx-auto">
      <div
        className="relative z-[2] flex flex-col gap-y-6  w-full 2xl:w-[50%] justify-center items-center rounded-2xl lg:rounded-4xl bg-lightPink shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-3 border-solid border-black p-4 lg:p-8  before:content-[''] before:absolute before:-inset-1 before:z-[-10] before:-translate-x-2 before:-translate-y-2
  before:rounded-2xl lg:before:rounded-4xl before:bg-lightPink before:border-[3px] before:border-solid before:border-black"
      >
        {/*<div className="absolute z-[1] w-full h-full left-4 top-4 rounded-2xl lg:rounded-4xl border-3 border-solid border-black p-4 lg:p-8"></div>*/}
        <div className="text-[clamp(1.25rem,4vw,2rem)]">
          Войти или зарегистрироваться
        </div>
        <form
          action={signupAction}
          className="flex flex-col gap-y-8 w-full [&_input]:bg-white [&_input]:shadow-[0_4px_10px_rgba(0,0,0,0.25)] [&_input]:rounded-2xl [&_input]:lg:rounded-4xl [&_input]:p-2 [&_input]:lg:px-6 [&_input]:lg:py-3 [&_input]:outline-none [&_input]:focus:border-1 [&_input]:focus:border-orange"
        >
          <input name="email" id="email" placeholder="email"></input>
          <input name="password" id="password" placeholder="пароль"></input>
          <SubmitButton />
        </form>
      </div>

      <div className="mt-15">
        {" "}
        {!!formState?.message && <p>{formState?.message}</p>}
      </div>
    </section>
  );
};

export default Personal;
