export default function Loading() {
  return (
    <div className="container mt-44 p-4 lg:p-8 2xl:w-[50%] mx-auto bg-white  rounded-2xl lg:rounded-4xl shadow-md">
      <div className="animate-pulse flex flex-col space-y-6">
        <div className="h-6 bg-gray-300 rounded "></div>

        <div className="space-y-2">
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-2">
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>

        <div className="h-10 bg-gray-400 rounded w-1/3 mt-4 mx-auto"></div>
      </div>
    </div>
  );
}
