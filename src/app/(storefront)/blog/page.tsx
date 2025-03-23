import BlogPostCard from "@/components/blog/BlogPostCard";
import prisma from "@/lib/db";

const BlogPage = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return (
            <BlogPostCard
              id={post.id}
              title={post.title}
              createdAt={post.createdAt}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
