// Importing the ProductItem component to use it inside ProductList.
import ProductItem from "./ProductItem";

// ProductList component receives the products array as a prop from App.
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {/* Iterating through the products array and rendering a ProductItem for each product */}
      {products.map((product) => (
        // Passing the individual product to the ProductItem component as a prop
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

// Exporting ProductList component to make it available for import in other parts of the app.
export default ProductList;
