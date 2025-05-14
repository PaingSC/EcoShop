import Home from "./components/Pages/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { CartProvider } from "./context/CartContext";
// import ProductCard from "./components/ProductCard/ProductCard";
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Home />
        {/* <ProductCard /> */}
      </CartProvider>
    </>
  );
}

export default App;
