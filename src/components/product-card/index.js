import "../product-card/productCard.css";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product-container">
      <div className="image">
        <img src={product.image} />
      </div>
      <div>
        <div className="heading">
          <h4>{product.title}</h4>
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <div className="price">
          <p>{product.price}</p>
        </div>
        <div className="rating">
          <p>{product.rating}</p>
        </div>
      </div>
      <div>
        <button>Add to cart</button>
        <button>Add to wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;
