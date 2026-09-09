import type { Metadata } from "next";
import Personal from "@/components/largeBlocks/Personal/Personal";
import PersonalForm from "@/components/smallBlocks/PersonalForm/PersonalForm";

export const metadata: Metadata = {
  title: "Профиль ...",
};

export default async function Account() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <>
      <PersonalForm />
      <Personal />
    </>
  );
}
