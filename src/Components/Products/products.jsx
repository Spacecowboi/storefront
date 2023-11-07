'use strict';
import React from 'react';
import { useSelector } from 'react-redux';

function Products() {
  const products = useSelector(state => state.products);
  const activeCategory = useSelector(state => state.activeCategory);

  return (
    <div>
      {products.filter(product => product.category === activeCategory).map(product => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;