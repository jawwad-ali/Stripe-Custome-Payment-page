import React from "react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Components/CheckoutForm';

export default function Home() {
  const promise = loadStripe("pk_test_51HjkirGewr3KO7wwRBdvdRSIKgJr5ODpkoCWdWTn06PMVl52rqqTaGjcuNlxS8QaAgxwOOIXMnyorvJjpDr0MLKa00oJTFu5gn");

  return <div>
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  </div>
}
