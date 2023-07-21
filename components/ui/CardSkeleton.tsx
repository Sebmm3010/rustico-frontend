export const CardSkeleton = () => {
  return (
    <div className="p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
      <div className="animate-pulse flex flex-col">
        <div className="rounded w-full h-52 bg-gray-400"></div>
        <div className="flex flex-col mt-5">
          <div className="w-full h-5 bg-gray-400 rounded"></div>
          <div className="mt-2 w-10/12 h-3 bg-gray-400 rounded"></div>
          <div className="mt-2 w-8/12 h-3 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};
