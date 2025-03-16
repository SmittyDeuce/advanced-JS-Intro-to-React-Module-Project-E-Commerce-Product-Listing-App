# dvanced-JS-Intro-to-React-Module-Project-E-Commerce-Product-Listing-App

## Product List App

This is a simple React app that displays a list of products with their name, description, and price. It consists of three components: `App`, `ProductList`, and `ProductItem`.

## Table of Contents

1. [App Component](#app-component)
2. [ProductList Component](#productlist-component)
3. [ProductItem Component](#productitem-component)

## App Component

The `App` component is the parent component that manages the state and passes the `products` array as a prop to the `ProductList` component.

### Responsibilities:
- Initializes state using `useState` to hold the array of products.
- Passes the `products` array to `ProductList`.
- Renders the `ProductList` component and provides the `products` prop.

## ProductList Component

The `ProductList` component receives the list of products as a prop from `App`. It maps through each product and renders the `ProductItem` component for each.

### Responsibilities:
- Receives the `products` array as a prop.
- Maps through the `products` array and renders a `ProductItem` for each product.
- Passes individual product data to the `ProductItem` component.

## ProductItem Component

The `ProductItem` component is responsible for rendering the details of a single product: its name, description, and price.

### Responsibilities:
- Receives individual product data as a prop.
- Displays the name, description, and price of the product.