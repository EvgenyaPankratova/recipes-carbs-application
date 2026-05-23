"use server";
import type { FormStateType } from "@/app/components/largeBlocks/Personal/Personal.types";
import type { currentUserType } from "@/commonTypes/users.types";
import { users } from "@/lib/users";

export async function signup(
  prevState: FormStateType,
  formData: FormData,
): Promise<FormStateType> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  let isUserDataValid = false;
  let currentUser: currentUserType = null;

  if (email && password) {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        isUserDataValid = true;
        currentUser = user;
      }
    }
  }

  //имитация ответа сервера с задержкой
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    email,
    password,
    message:
      isUserDataValid && currentUser
        ? `Добро пожаловать, ${currentUser.name}`
        : "Неверный емейл или пароль",
  };
}
