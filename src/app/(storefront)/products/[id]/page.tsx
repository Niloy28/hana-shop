import { addCartItem } from "@/app/actions/cartActions";
import AddToCartButton from "@/components/AddToCartButton";
import ProductImageSlider from "@/components/products/ProductImageSlider";
import prisma from "@/lib/db";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const id = (await params).id;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return {
    title: `${product?.name} | Hana Shop (花屋)`,
    description: product?.description,
  };
};

const ProductPage = async ({ params }: Props) => {
  const id = (await params).id;
  const addProductToCart = addCartItem.bind(null, id);

  const product = await prisma.product.findUnique({
    where: {
      id,
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
            <div className="text-wrap">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {product.description}
              </ReactMarkdown>
            </div>

            <form
              action={addProductToCart}
              className="mb-8 mt-auto place-self-end"
            >
              <AddToCartButton />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
