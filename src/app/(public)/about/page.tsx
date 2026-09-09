import type { Metadata } from "next";
import AboutBlock from "@/components/largeBlocks/AboutBlock/AboutBlock";

export const metadata: Metadata = {
  title: "О сервисе",
};

export default function About() {
  return <AboutBlock />;
}
