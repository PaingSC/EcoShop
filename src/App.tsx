import Home from "./components/Pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer/CartDrawer";
// import ProductCard from "./components/ProductCard/ProductCard";
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Home />
        <CartDrawer />
      </CartProvider>
    </>
  );
}

export default App;
