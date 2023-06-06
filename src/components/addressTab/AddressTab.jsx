import "../addressTab/addressTab.css";

export const AddressTab = ({
  addressForm,
  setAddressForm,
  setAddress,
  formValue,
  setDisplayAddressTab,
  token,
}) => {
  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setAddressForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const saveHandler = async (e) => {
    e.preventDefault();
    setDisplayAddressTab(false);

    const postAddress = async () => {
      try {
        const response = await fetch("/api/user/address", {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ address: addressForm }),
        });
        const data = await response.json();
        setAddress(data.address);
      } catch (e) {
        console.log(e);
      }
    };

    const updateAddress = async () => {
      try {
        const response = await fetch(`/api/user/address/${addressForm._id}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ address: addressForm }),
        });
        const data = await response.json();
        setAddress(data.address);
      } catch (e) {
        console.log(e);
      }
    };
    addressForm._id ? updateAddress() : postAddress();
  };

  const cancleHandler = (e) => {
    e.preventDefault();
    setDisplayAddressTab(false);
    setAddressForm(formValue);
  };

  const dummyAddressHandler = (e) => {
    e.preventDefault();
    setAddressForm((form) => ({
      ...form,
      name: "Admin",
      street: "33 , MG Road",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      zipCode: "411046",
      mobile: "12345678",
    }));
  };
  return (
    <>
      <form className="address-form" onSubmit={(e) => saveHandler(e)}>
        <div className="cancel-logo">
          <img
            onClick={cancleHandler}
            src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/cancel-svgrepo-com.svg?updatedAt=1686041373442"
            alt="cancel_logo"
          />
        </div>
        <h4 className="add-address-heading">
          <p>Add address</p>
        </h4>
        <div className="form-input">
          <input
            placeholder="Enter Name"
            className="text-input address-form-input"
            type="text"
            value={addressForm.name}
            onChange={(e) => fillFormValue(e, "name")}
            required
          />
          <input
            placeholder="Enter House No. , Road , Colony"
            className="text-input address-form-input"
            type="text"
            value={addressForm.street}
            onChange={(e) => fillFormValue(e, "street")}
            required
          />
          <input
            placeholder="Enter City"
            className="text-input address-form-input"
            type="text"
            value={addressForm.city}
            onChange={(e) => fillFormValue(e, "city")}
            required
          />
          <input
            placeholder="Enter State"
            className="text-input address-form-input"
            type="text"
            value={addressForm.state}
            onChange={(e) => fillFormValue(e, "state")}
            required
          />
          <input
            placeholder="Enter Country"
            className="text-input address-form-input"
            type="text"
            value={addressForm.country}
            onChange={(e) => fillFormValue(e, "country")}
            required
          />
          <input
            placeholder="Enter Postal Code"
            className="text-input address-form-input"
            type="text"
            value={addressForm.zipCode}
            onChange={(e) => fillFormValue(e, "zipCode")}
            required
          />
          <input
            placeholder="Enter Mobile Number"
            className="text-input address-form-input"
            type="text"
            value={addressForm.mobile}
            onChange={(e) => fillFormValue(e, "mobile")}
            required
          />
        </div>
        <div className="address-form-btn">
          <input
            className="saveAdd-button"
            type="submit"
            value="Save address"
          />
        </div>
        <p className="address-dummy" onClick={(e) => dummyAddressHandler(e)}>
          Dummy Address
        </p>
      </form>
    </>
  );
};
