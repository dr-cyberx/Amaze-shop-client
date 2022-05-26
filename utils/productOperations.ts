import { typeProduct } from "@components/HomePage";
import { IProductCard } from "@components/reusable/ProductCard";
import router from "next/router";

export const filterProductByCategory = (
  products: Array<typeProduct>,
  category: string
): typeProduct[] => {
  return products.filter((item: typeProduct) =>
    item.tags.toLowerCase().includes(category)
  );
};

export const assignPropsToProductCards = (
  product: typeProduct,
  redirectPath: string
): IProductCard => {
  return {
    productPrice: product.productPrice,
    onClick: () => router.push(`product/${redirectPath}`),
    image: product.productImage,
    placeholderText: product.productName,
    rating: product.productRating,
    title: product.productName,
  };
};
