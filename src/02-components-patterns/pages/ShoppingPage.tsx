import React from "react";
import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />
      <ProductCard product={product} />
    </div>
  );
};
