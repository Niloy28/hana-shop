import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingProductCard = () => {
  return (
    <Card>
      <CardContent className="p-0 pb-2">
        <div className="flex h-[500px] flex-col items-center justify-center gap-y-2">
          <Skeleton className="h-2/3 w-full rounded-lg object-cover" />
          <div className="flex h-1/3 w-full flex-col items-center justify-center gap-2 p-2">
            <Skeleton className="h-1/4 w-full" />
            <Skeleton className="h-1/4 w-full" />
            <Skeleton className="h-1/4 w-full" />
            <Skeleton className="h-1/4 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingProductCard;
