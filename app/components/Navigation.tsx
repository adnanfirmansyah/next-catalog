import Link from "next/link"
import styles from "./Navigation.module.css"
import { ShoppingBag } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {/* <Link href="/">ProductCatalog</Link> */}
        <Link href="/" className={styles.logo}>
          <ShoppingBag className={styles.icon} />
        </Link>
      </div>
      {/* <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/catalog">Catalog</Link>
        </li>
      </ul> */}
    </nav>
  )
}

export default Navigation

