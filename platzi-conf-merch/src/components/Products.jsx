import React from 'react';

const Products = ({ products }) => {
  return (
    <div className="Products">
      <div className="products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
