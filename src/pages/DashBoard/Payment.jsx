import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitile/SectionTitle";
import useCart from "../../hooks/UseCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Chceckout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-full">
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
