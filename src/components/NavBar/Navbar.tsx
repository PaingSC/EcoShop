import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { cartCount, openCart } = useContext(CartContext);

  return (
    <header className={styles.navbar}>
      <span className={styles.title}>EcoShop</span>
      <IconButton className={styles.cartButton} onClick={openCart}>
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </header>
  );
};

export default Navbar;
