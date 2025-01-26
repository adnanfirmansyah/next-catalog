import styles from "./page.module.css"
import ProductCard from "./components/ProductCard"
import { Product } from "./types/product"
import { getProducts } from './services/products';

export default async function Home() {
  const products = await getProducts()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product : Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

