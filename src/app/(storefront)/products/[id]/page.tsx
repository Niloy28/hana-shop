import ProductImageSlider from "@/components/products/ProductImageSlider";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { ShoppingCartIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProductPage = async ({
  params,
}: Readonly<{ params: { id: string } }>) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="mx-4 grid grid-cols-1 items-start gap-6 px-2 py-2 md:grid-cols-2">
      {product && (
        <>
          <ProductImageSlider images={product?.images} />
          <div className="flex h-full flex-auto flex-col items-start justify-start gap-2">
            <h3 className="text-2xl font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="text-wrap">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {product.description}
              </ReactMarkdown>
            </p>
            <Button className="mb-8 mt-auto place-self-end rounded-lg bg-primary">
              <div className="flex items-center justify-center gap-2">
                <ShoppingCartIcon />
                <p>Add to Cart</p>
              </div>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
