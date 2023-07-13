import { CardSkeleton } from './CardSkeleton';

export const Loading = () => {
  const skeletonCardNumber = [...Array(4)].map((value, i) => i);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
      {skeletonCardNumber.map((n) => (
        <CardSkeleton key={n} />
      ))}
    </div>
  );
};
