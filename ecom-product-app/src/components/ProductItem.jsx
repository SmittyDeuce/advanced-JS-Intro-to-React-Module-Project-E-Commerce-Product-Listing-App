// Importing React library to use JSX syntax and React features.
import { useState } from "react";

// ProductItem component receives a single product object as a prop from ProductList.
const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      {/* Displaying product name, description, and price */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

// Exporting the ProductItem component so it can be imported and used in other parts of the app.
export default ProductItem;
