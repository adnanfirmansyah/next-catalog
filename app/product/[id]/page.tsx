'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { selectProduct } from "@/app/store/productSlice";

export default function ProductPage() {
  const product = useSelector(selectProduct);

  if (!product) return <p>Loading...</p>;
  console.log("product", product)

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {product.images && product.images.map((image: string, index: number) => (
          <Image
            key={index}
            src={image || "/placeholder.svg"}
            alt={`${product.name} - Image ${index + 1}`}
            width={400}
            height={400}
          />
        ))}
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.variants}>
          <h3>Variants:</h3>
          <ul>
            {product.variants && product.variants.map((variant: string, index: number) => (
              <li key={index}>{variant}</li>
            ))}
          </ul>
        </div>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
