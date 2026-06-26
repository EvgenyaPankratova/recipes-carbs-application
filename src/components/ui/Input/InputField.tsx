export const InputField = ({ name }) => {
  return (
    <div className="w-full [&_input]:w-full [&_input]:bg-white [&_input]:shadow-[0_4px_10px_rgba(0,0,0,0.25)] [&_input]:rounded-2xl [&_input]:lg:rounded-4xl [&_input]:p-2 [&_input]:lg:px-6 [&_input]:lg:py-3 [&_input]:outline-none [&_input]:border-1 [&_input]:border-white [&_input]:focus:border-1 [&_input]:focus:border-orange">
      {" "}
      <input name={name} id={name} placeholder={name}></input>{" "}
    </div>
  );
};
