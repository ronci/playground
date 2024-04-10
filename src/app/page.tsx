import * as styles from './styles.css'

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.homeBackground} />
      <div className={styles.titleBox}>
        <h1 className={styles.title}>
          ronci's{'\n'}
          <span className={styles.playgroundWord}>PLAYGROUND</span>
        </h1>
      </div>
    </main>
  )
}
