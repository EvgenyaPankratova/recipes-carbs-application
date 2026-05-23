const Transparent = ({ ...props }) => (
    <div
        className="cursor-pointer transition-all duration-500 outline-0 disabled:opacity-60 disabled:pointer-events-none select-none rounded-4xl bg-white opacity-90 w-fit px-5 py-3 text-black hover:text-orange"
        {...props}
    />
);

export default Transparent;
