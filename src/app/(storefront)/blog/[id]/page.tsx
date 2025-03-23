import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose m-auto pb-8 pt-4">
      <h3>{post.title}</h3>
      <Markdown>{post.body}</Markdown>
    </article>
  );
};

export default BlogPostPage;
