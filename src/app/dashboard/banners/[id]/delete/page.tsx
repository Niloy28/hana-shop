import { deleteBanner } from "@/app/actions/bannerActions";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const BannerDeletePage = ({
  params,
}: Readonly<{
  params: { id: string };
}>) => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Card className="m-auto w-1/2 max-w-xl">
        <CardHeader className="text-3xl text-red-500">Are you sure?</CardHeader>
        <CardContent>
          <CardDescription>
            This will permanently delete this banner from the list.{" "}
            <b>This action cannot be undone.</b>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button variant="outline">
            <Link href="/dashboard/banners">Cancel</Link>
          </Button>
          <form action={deleteBanner}>
            <Input type="hidden" name="bannerID" value={params.id} />
            <SubmitButton variant="destructive">Delete</SubmitButton>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BannerDeletePage;
