import { Skeleton } from "@/components/ui/skeleton";

const CartLoadingPage = () => {
  return (
    <div className="mx-auto mt-10 flex min-h-[55vh] w-full max-w-2xl items-center justify-center">
      <div className="flex w-full flex-col gap-4">
        <div className="flex">
          <div className="relative h-24 w-24 sm:w-32">
            <Skeleton className="h-full w-full rounded-md" />
          </div>
          <div className="ml-5 flex w-3/5 justify-between gap-y-2 font-medium">
            <Skeleton className="mr-2 h-full w-full flex-grow" />
            <div className="flex h-full w-full flex-col justify-between">
              <Skeleton className="h-2/5 min-h-6 w-4/5 self-end" />
              <Skeleton className="h-2/5 min-h-6 w-4/5 self-end" />
            </div>
          </div>
        </div>

        <div className="flex min-h-8 items-center justify-between text-lg font-semibold">
          <Skeleton className="h-2/5 min-h-4 w-full" />
          <Skeleton className="h-2/5 min-h-4 w-full" />
        </div>

        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
};

export default CartLoadingPage;
