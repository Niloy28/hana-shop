import { Skeleton } from "../ui/skeleton";

const LoadingProductCard = () => {
  return (
    // TODO: Needs UI adjustment to match actual product card.
    <div className="flex flex-col items-center justify-center">
      <Skeleton className="h-[600px] w-[600px]" />
      <Skeleton className="h-full w-3" />
    </div>
  );
};

export default LoadingProductCard;
