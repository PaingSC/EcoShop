import styles from "./ProductCard.module.css";
interface ProductCardProps {
  title: string;
  price: number;
}

const ProductCard = ({ title, price }: ProductCardProps) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <span>Product Image</span>
    </div>
    <div className={styles.info}>
      <h3>{title}</h3>
      <div className={styles.price}>${price.toFixed(2)}</div>
      <button className={styles.button}>Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;
