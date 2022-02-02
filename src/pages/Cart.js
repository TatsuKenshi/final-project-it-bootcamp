import CartItem from "../components/CartItem";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { addPurchase } from "../Service";
import StyledCart from "../style/StyledCart";

const Cart = ({ user, purchase, setPurchase, total, setTotal }) => {
  // states for the checkout
  const [showCheckout, setShowCheckout] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [myState, setMyState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [ccn, setCcn] = useState("");

  // cart display
  return user && user.userCategory !== "admin" ? (
    <StyledCart>
      <h1>Cart</h1>
      <div className="items">
        {purchase.map(function (cartItem) {
          return (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              purchase={purchase}
              setPurchase={setPurchase}
              total={total}
              setTotal={setTotal}
            ></CartItem>
          );
        })}
      </div>

      {/* total price */}
      <div className="tempTotal">
        <h3>Total: ${total} </h3>
      </div>

      {/* checkout button */}
      <div className="checkoutBtn">
        {purchase.length > 0 ? (
          <button
            onClick={() => {
              setShowCheckout(true);
            }}
          >
            checkout
          </button>
        ) : (
          ""
        )}
      </div>

      {/* checkout section */}
      {showCheckout && purchase.length > 0 ? (
        <div className="checkout">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let info = {
                username: user.username,
                price: total,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                address1: address1,
                address2: address2,
                zipcode: zipcode,
                city: city,
                myState: myState,
                country: country,
                phone: phone,
                ccn: ccn,
              };

              addPurchase(purchase, info).then((res) => {
                console.log(res.data);
              });

              setPurchase([]);
              setTotal(0);
            }}
          >
            {/* checkout form */}
            <div className="checkoutForm">
              <div className="col1">
                <div>
                  <input
                    type="text"
                    placeholder="first name"
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="middle name"
                    onChange={(e) => {
                      setMiddleName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="last name"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="billing address line 1"
                    required
                    onChange={(e) => {
                      setAddress1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="billing address line 2"
                    onChange={(e) => {
                      setAddress2(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="zip/postal code"
                    required
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col2">
                <div>
                  <input
                    type="text"
                    placeholder="city"
                    required
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="state"
                    onChange={(e) => {
                      setMyState(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="phone number"
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="credit card number"
                    required
                    onChange={(e) => {
                      setCcn(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="sub">
              <input type="submit" className="subBtn" />
            </div>
          </form>
          {/* end of checkout form */}
        </div>
      ) : (
        ""
      )}
    </StyledCart>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

export default Cart;
