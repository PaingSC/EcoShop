import styles from "./Home.module.css";
import ProductCard from "../../ProductCard/ProductCard";
// import { randomUUID } from "crypto";
// import { title } from "process";

console.log(crypto.randomUUID());
const products = [
  {
    id: crypto.randomUUID(),
    title: "Bamboo Toothbrush",
    price: 3.99,
    imageUrl: "images/products/eco-toothbrush.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Reusable Bottle",
    price: 12.99,
    imageUrl: "images/products/reusable-bottle.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Organic Cotton Bag",
    price: 8.99,
    imageUrl: "images/products/cotton-bag.png",
  },
  {
    id: crypto.randomUUID(),
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
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default Home;
