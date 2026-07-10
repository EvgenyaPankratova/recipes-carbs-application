import BreadCrumbs from "@/components/largeBlocks/BreadCrumbs/BreadCrumbs";
import type { CommonBlockProps } from "@/components/largeBlocks/CommonBlock/CommonBlock.types";
import { CommonButton } from "../../ui/Button/CommonButton";

const CommonBlock = ({
  mainTitle,
  mainTitleColor = "black",
  leftTitle,
  btn,
  children,
}: CommonBlockProps) => {
  return (
    <section className="section-gutter">
      <BreadCrumbs />
      <div className="">
        <div className="*:text-center text-[3rem] mb-16">
          {mainTitle && (
            <h3 className={`text-${mainTitleColor}`}>{mainTitle}</h3>
          )}
        </div>

        {(leftTitle || btn) && (
          <div className="flex items-center justify-between w-full mb-8">
            {leftTitle ? (
              <div className="text-[clamp(1.1rem,2vw,1.4rem)]">{leftTitle}</div>
            ) : (
              <div></div>
            )}
            {btn && (
              <CommonButton theme="default" onClick={btn.btnFunc}>
                {btn.btnTitle}
              </CommonButton>
            )}
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export default CommonBlock;
