import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import "./styles/tailwind-pre-build.css";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51IUqMCJ2iOysJZvP3vrQpEoV2l1SpF9PzkycqVdKjmC3RYuDC3AqTvRfBDcsDwDmtxJlkUyip4GQOb8Akt0lF3O100RSHVPfch"
);
const DonationButton = ({ itemID, ammount }) => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    stripe
      .redirectToCheckout({
        lineItems: [{ price: itemID, quantity: 1 }],
        mode: "payment",
        successUrl: window.location.protocol + "//localpdf.tech/merge",
        cancelUrl: window.location.protocol + "//localpdf.tech/merge",
        submitType: "donate",
      })
      .then(function (result) {
        if (result.error) {
          console.log(result);
        }
      });
  };
  return (
    <button
      className="donate-btn"
      onClick={handleClick}
    >
      Donate {ammount}$
    </button>
  );
};
export default function App() {
  return (
    <>
      <div>
        <DonationButton
          ammount={"$5.00"}
          itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
        ></DonationButton>
        <DonationButton
          ammount={"$10.00"}
          itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
        ></DonationButton>
        <DonationButton
          ammount={"$25.00"}
          itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
        ></DonationButton>
        <DonationButton
          ammount={"$50.00"}
          itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
        ></DonationButton>
        <DonationButton
          ammount={"$100.00"}
          itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
        ></DonationButton>
      </div>
    </>
  );
};
