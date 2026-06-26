export const DoubleBorderContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`relative z-[3] rounded-2xl lg:rounded-4xl  shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-3 border-solid border-black before:content-[''] before:absolute before:-inset-1 before:z-[-10] before:-translate-x-2 before:-translate-y-2
  before:rounded-2xl lg:before:rounded-4xl before:border-[3px] before:border-solid before:border-black ${className}`}
    >
      {children}
    </div>
  );
};
