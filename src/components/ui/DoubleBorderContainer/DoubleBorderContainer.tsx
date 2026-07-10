export const DoubleBorderContainer = ({ children, className = "" }) => {
  return (
    <div className={`relative z-[3] ${className}`}>
      <div className="absolute -inset-1 translate-x-2 translate-y-2 rounded-2xl lg:rounded-4xl border-[3px] border-solid border-black bg-beige z-[1] shadow-[0_4px_10px_rgba(0,0,0,0.25)]" />

      <div className="relative rounded-2xl lg:rounded-4xl  border-3 border-solid border-black z-[2] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
