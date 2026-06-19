const themes = {
  default: "bg-orange text-white hover:text-black",
  transparent: "bg-white opacity-90 text-black hover:text-orange",
};

export const CommonButton = ({
  theme = "default",
  className = "",
  children,
  ...props
}) => {
  const themeClasses = themes[theme] || themes.default;

  return (
    <button
      className={`
                cursor-pointer transition-all duration-500 outline-0
                disabled:opacity-60 disabled:pointer-events-none select-none
                rounded-3xl lg:rounded-4xl w-fit px-5 py-3
                text-[clamp(1.2rem,3.2vw,1.4rem)]
                shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                ${themeClasses}
                ${className}
            `}
      {...props}
    >
      {children}
    </button>
  );
};
