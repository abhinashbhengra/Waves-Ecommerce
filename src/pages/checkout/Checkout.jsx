import "../checkout/checkout.css";

import { Navbar } from "../../components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { toast } from "react-toastify";

export const Checkout = () => {
  const { cartItems, getCartItems } = useContext(CartContext);
  const { authState } = useContext(AuthContext);
  const { token } = authState;
  const [address, setAddress] = useState([]);
  const [checkoutAddress, setCheckoutAddress] = useState();
  const [displayOrderSummary, setDisplayOrderSummary] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  const discount = 100;

  const confirmOrderHandler = () => {
    checkoutAddress
      ? setDisplayOrderSummary(true)
      : toast.warning("Please select address", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };

  const cancleHandler = () => {
    setDisplayOrderSummary(false);
  };

  const checkoutAddressHandler = (address) => {
    setCheckoutAddress(address);
    console.log(address);
  };

  useEffect(() => {
    const fetchaddress = async () => {
      try {
        const response = await fetch("/api/user/address", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        const data = await response.json();
        setAddress(data.address);
      } catch (e) {
        console.log(e);
      }
    };
    fetchaddress();
    getCartItems();
  }, []);

  console.log("checkout add", checkoutAddress);

  return (
    <div>
      <Navbar />
      {!displayOrderSummary ? (
        <div className="checkout-container">
          <div className="checkout-details">
            <div>
              {address.map((address) => (
                <div className="checkout-address-container">
                  <label
                    htmlFor="checkoutAddress"
                    className="address-checkbox-container"
                  >
                    <div>
                      <input
                        type="radio"
                        name="checkoutAddress"
                        value={checkoutAddress}
                        onChange={() => checkoutAddressHandler(address)}
                      />
                    </div>
                    <div>
                      <p className="add-user-name">{address.name}</p>
                      <p>{address.street}</p>
                      <p>
                        {address.zipCode} {address.city} {address.state}
                      </p>
                      <p>{address.country}</p>
                      <p>Mobile : {address.mobile}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="checkout">
                <p className="price-details-heading">Order Summary</p>
                <div className="cancel-logo">
                  <img
                    onClick={cancleHandler}
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/cancel-svgrepo-com.svg?updatedAt=1686041373442"
                    alt="cancel_logo"
                  />
                </div>
                {cartItems.map((product) => (
                  <div className="p-flex">
                    <div>
                      <p className="checkout-subtotal-heading">
                        {product.title} ({product.qty})
                      </p>
                    </div>
                    <div>
                      <p className="checkout-subtotal-price">
                        ₹ {product.price}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="break"></div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Subtotal</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">₹ {total}</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Discount</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">₹ -100</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">
                      Delivery Charges
                    </p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">Free</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-total-heading">Total</p>
                  </div>
                  <div>
                    <p className="checkout-total-price">₹ {total - discount}</p>
                  </div>
                </div>
                <button
                  className="checkout-button"
                  onClick={confirmOrderHandler}
                >
                  <p>place order</p>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-details">
            {cartItems.length > 0 && (
              <div className="checkout">
                <p className="price-details-heading">Order Summary</p>
                <div className="delivery-address">
                  <p className="add-user-name">{checkoutAddress.name}</p>
                  <p>{checkoutAddress.street}</p>
                  <p>
                    {checkoutAddress.zipCode} {checkoutAddress.city}{" "}
                    {checkoutAddress.state}
                  </p>
                  <p>{checkoutAddress.country}</p>
                  <p>{checkoutAddress.mobile}</p>
                </div>
                <div className="break"></div>

                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Total Quantity</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">
                      {cartItems.length}
                    </p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Total</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">₹ {total}</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Subtotal</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">₹ {total}</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">Discount</p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">₹ -100</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-subtotal-heading">
                      Delivery Charges
                    </p>
                  </div>
                  <div>
                    <p className="checkout-subtotal-price">Free</p>
                  </div>
                </div>
                <div className="p-flex">
                  <div>
                    <p className="checkout-total-heading">Total</p>
                  </div>
                  <div>
                    <p className="checkout-total-price">₹ {total - discount}</p>
                  </div>
                </div>
                <button className="checkout-button">
                  <p>Confirm order</p>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
