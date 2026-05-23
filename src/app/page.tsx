import Image from "next/image";
import Header from "@/app/components/largeBlocks/Header/Header";
import Personal from "@/app/components/largeBlocks/Personal/Personal";
import Recommended from "@/app/components/largeBlocks/Recommended/Recommended";
import Welcome from "@/app/components/largeBlocks/Welcome/Welcome";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Recommended />
    </div>
  );
}
