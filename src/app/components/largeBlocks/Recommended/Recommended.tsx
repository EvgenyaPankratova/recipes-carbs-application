import Image from "next/image";
import Transparent from "@/app/components/ui/Button/Transparent/Transparent";

const Recommended = () => {
    return <section className="flex justify-center items-center mt-32 py-44">
        <div className="relative w-full">
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"><Transparent>Рекомендуемые рецепты</Transparent> </button>
            <div className="absolute  left-1/2 -bottom-8 w-44 rounded-4xl overflow-hidden h-[126px] shadow-[0_4px_8px_rgba(0,0,0,0.25)] z-[1]">
                <Image
                    src="/img/cocktail.png"
                    alt="cocktail"
                    fill
                    className="object-cover blur-[2px]"
                />
            </div>
            <div className="absolute left-180 -top-8 w-[8%] rounded-4xl overflow-hidden h-[86px]">
                <Image
                    src="/img/pizza.jpg"
                    alt="pizza"
                    fill
                    className="object-cover blur-[2px]"
                />
            </div>
        </div>

    </section>
}

export default Recommended;
