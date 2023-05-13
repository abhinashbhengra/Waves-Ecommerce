import "../wishlist/wishlist.css";
import Navbar from "../../components/navbar";

import ProductCard from "../../components/product-card";

export const wishlistDB = [
  {
    id: 1,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
  {
    id: 2,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
];

const WishList = () => {
  return (
    <div>
      <Navbar />
      <div className="wishlist-container">
        <div className="wishlist-products">
          {wishlistDB.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
