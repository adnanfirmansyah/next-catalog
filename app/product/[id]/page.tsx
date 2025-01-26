'use client'; 

import Image from "next/image"
import styles from "./page.module.css"
import { Product } from "@/app/types/product"
import { useDispatch } from "react-redux";
import { selectProduct } from "@/app/store/productSlice";
import { useSelector } from "react-redux";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  
  // Get the selected product from the state
  const currentProduct = useSelector(selectProduct);
  console.log("currentProduct", currentProduct)
  let data = await fetch(`https://my-json-server.typicode.com/adnanfirmansyah/next-catalog/product`)
  let product : Product = await data.json()
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {product.images && product.images.map((image, index) => (
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
            {product.variants && product.variants.map((variant, index) => (
              <li key={index}>{variant}</li>
            ))}
          </ul>
        </div>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

