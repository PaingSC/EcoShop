import Home from "./components/Pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import ProductCard from "./components/ProductCard/ProductCard";

const stripePromise = loadStripe("example_test_key");
function App() {
  return (
    <>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <Navbar />
          <Home />
          <CartDrawer />
        </Elements>
      </CartProvider>
    </>
  );
}

export default App;
