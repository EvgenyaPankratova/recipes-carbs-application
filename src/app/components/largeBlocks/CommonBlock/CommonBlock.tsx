import BreadCrumbs from "@/app/components/largeBlocks/BreadCrumbs/BreadCrumbs";
import Default from "@/app/components/ui/Button/Default/Default";

const CommonBlock = ({
  mainTitle,
  mainTitleColor = "black",
  leftTitle,
  btnTitle,
  btnFunc,
  btnLink,
  children,
}) => {
  return (
    <section className="overflow-hidden section-gutter">
      <BreadCrumbs />
      <div className="">
        <div className="*:text-center text-[48px] mb-16">
          {mainTitle && (
            <h3 className={`text-${mainTitleColor}`}>{mainTitle}</h3>
          )}
        </div>

        {(leftTitle || btnTitle) && (
          <div className="flex items-center justify-between w-full mb-8">
            <div className="text-[16px]">{leftTitle}</div>
            <Default onClick={btnFunc}>{btnTitle}</Default>
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

export default CommonBlock;
