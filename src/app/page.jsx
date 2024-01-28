import Tabuleiro from '../../components/Tabuleiro'
import styles from '../app/page.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Tabuleiro feito em <span>NextJs!</span></h1>
      <Tabuleiro />
    </div>
  )
}

export default Home