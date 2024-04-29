import React from 'react';
import { products } from '../products'; // Assuming the products array is exported from products.tsx
import Link from 'next/link';

const MarketProductPage = ({ params }: { params: { id: string } }) => {
  if (!params.id || isNaN(parseInt(params.id))) {
    return <div>Invalid product id</div>;
  }

  // Find the product with the matching id
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default MarketProductPage;