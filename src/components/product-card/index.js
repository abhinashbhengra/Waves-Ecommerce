import React from "react";

const ProductCard = (product) => {
  return (
    <div className="product-container">
      <div className="image">image</div>
      <div>
        <div className="heading">Heading</div>
        <div className="description">Description</div>
        <div className="price">Price</div>
        <div className="rating">Rating</div>
      </div>
      <div>
        <button>Add to cart</button>
        <button>Add to wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;
