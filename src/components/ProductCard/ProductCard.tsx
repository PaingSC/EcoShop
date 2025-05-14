import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import { CartContext } from "../../context/CartContext";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, title, price, imageUrl }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.productImage} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.price}>${price.toFixed(2)}</div>
        {/* <button className={styles.button}>Add to Cart</button> */}
        {/* Add to Cart button */}
        <button
          className={styles.button}
          onClick={() => addToCart({ id, title, price, imageUrl })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
