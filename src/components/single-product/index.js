import "../single-product/singleProduct.css";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="product-container">
      <div className="image">
        <img src={product.image} />
      </div>
      <div>
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
        <div className="quantity">
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
