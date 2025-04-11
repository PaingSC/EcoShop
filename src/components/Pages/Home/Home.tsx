import styles from "./Home.module.css";
import ProductCard from "../../ProductCard/ProductCard";
import { title } from "process";

const products = [
  {
    title: "Bamboo Toothbrush",
    price: 3.99,
    imageUrl: "images/products/eco-toothbrush.png",
  },
  {
    title: "Reusable Bottle",
    price: 12.99,
    imageUrl: "images/products/reusable-bottle.png",
  },
  {
    title: "Organic Cotton Bag",
    price: 8.99,
    imageUrl: "images/products/cotton-bag.png",
  },
  {
    title: "Solar Charger",
    price: 24.99,
    imageUrl: "images/products/solar-charger.png",
  },
];

const Home = () => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <h1>Sustainable Products for a Greener Tomorrow</h1>
      <button>Shop Now</button>
    </section>
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default Home;
