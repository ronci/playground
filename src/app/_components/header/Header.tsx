import Link from 'next/link'
import * as styles from './styles.css'

const Header = () => {
  return (
    <header className={styles.headerBox}>
      <div className={styles.header}>
        <Link href={'/'} className={styles.title}>
          Playground
        </Link>
      </div>
    </header>
  )
}

export default Header
