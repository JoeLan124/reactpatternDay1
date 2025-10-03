import ProductCard from "./ProductCard";

const ProductsList = ({ products, onAddCard }) => {
  return (
    <div className="user-posts">
      <h2>Recent Products ({products.length})</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        products.map((product) => (
          <div className="m-4" key={product.id}>
            <ProductCard
              product={product}
              onAddCard={onAddCard}
            />
          </div>
        ))
      )}
    </div>
  );
};
export default ProductsList;
