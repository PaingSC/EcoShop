import styles from "./Home.module.css";
import ProductCard from "../../ProductCard/ProductCard";

const Home = () => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <h1>Sustainable Products for a Greener Tomorrow</h1>
      <button>Shop Now</button>
    </section>
    <div className={styles.productsGrid}>
      <ProductCard title="Bamboo Toothbrush" price={3.99} />
      <ProductCard title="Reusable Bottle" price={12.99} />
      <ProductCard title="Organic Cotton Bag" price={8.99} />
      <ProductCard title="Solar Charger" price={24.99} />
    </div>
  </div>
);

export default Home;
