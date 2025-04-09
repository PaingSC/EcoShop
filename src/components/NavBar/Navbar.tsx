import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <header className={styles.navbar}>
    <span className={styles.title}>EcoShop</span>
    <IconButton className={styles.cartButton}>
      <Badge badgeContent={0} color="error">
        <ShoppingCart />
      </Badge>
    </IconButton>
  </header>
);

export default Navbar;
