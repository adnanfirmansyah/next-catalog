'use client';

import Link from "next/link"
import Image from "next/image"
import styles from "./ProductCard.module.css"
import { Product } from "../types/product"
import { useDispatch } from 'react-redux';
import { setProduct } from '../store/productSlice';

const ProductCard: React.FC<Product> = (product) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(setProduct(product)); // Save the clicked product in Redux
  };
  return (
    <Link onClick={handleProductClick} href={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={product.image || "/placeholder.svg"} alt={product.name} width={200} height={200} layout="responsive" />
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
    </Link>
  )
}

export default ProductCard