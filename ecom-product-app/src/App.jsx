import ProductList from './components/ProductList.jsx';
import { useState } from 'react';
import './App.css';

// App component serves as the main component that contains the list of products.
function App() {
    // useState lets us store information
  const [products, setProducts] = useState([
    { id: 1, name: "Computer", price: 600, description: "A Desktop for school, work, or low-end gaming" },
    { id: 2, name: "Headphones", price: 100, description: "Noise canceling headphones" },
    { id: 3, name: "Lazyboy", price: 799, description: "Recliner chair with back and leg massage" }
  ]);

   // Returning the JSX code that represents the HTML structure of our app
  return (
// We're passing the 'products' list as a prop to the ProductList component
    <div className="app-container">
      <ProductList products={products} />
    </div>
  );
}

// Exporting the App component so it can be used in other files (e.g., index.js).
export default App;
