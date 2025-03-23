import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";

const BlogPostCard = async ({
  id,
  title,
  createdAt,
}: {
  id: string;
  title: string;
  createdAt: Date;
}) => {
  return (
    <Link className="m-4" href={`/blog/${id}`}>
      <Card className="m-auto w-full p-4 md:w-2/3 lg:w-1/2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardFooter className="justify-end italic text-foreground/80">
          {createdAt.toLocaleString()}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
