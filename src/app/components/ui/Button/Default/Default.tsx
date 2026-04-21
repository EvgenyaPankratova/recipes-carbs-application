const Default = ({ ...props }) => (
  <div
    className="cursor-pointer transition-all duration-500 outline-0 disabled:opacity-60 disabled:pointer-events-none select-none rounded-4xl bg-orange w-fit px-5 py-3 text-white hover:text-black"
    {...props}
  />
);

export default Default;
