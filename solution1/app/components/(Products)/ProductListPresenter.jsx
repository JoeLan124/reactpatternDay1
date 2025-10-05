import Checkout from "../(Checkout)/Checkout";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import ProductSearchBar from "./ProductSearchBar";
import { useState, useEffect } from "react";

const { default: ProductsList } = require("./ProductsList");

const ProductListPresenter = ({
  products,
  user,
  onAddCard,
  cardItems,
}) => {
  const [filteredProducts, setFilteredProducts] =
    useState(products);

  const handleTextFilter = (searchString) => {
    if (!searchString.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name &&
        product.name
          .toLowerCase()
          .includes(searchString.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Update filtered products when the products prop changes
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <div className="grid grid-cols-2 justify-center align-middle text-center w-full">
      <div className="bg-white text-black">
        <ProductSearchBar onChangeText={handleTextFilter} />
        <ProductsList
          products={filteredProducts}
          onAddCard={onAddCard}
        />
      </div>

      <div>
        <Checkout/>
        <ShoppingCard
          onAddCard={onAddCard}
          user={user}
          products={products}
          cardItems={cardItems}
        />
      </div>
    </div>
  );
};
export default ProductListPresenter;
