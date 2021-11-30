import styles from './Home.module.scss'
import Navbar from './Navbar/Navbar';
const Home = () =>{
return(
    <>
  <div className={styles.main}>
    <div className={styles.navbar}>
      <Navbar/>
    </div>
    <div className={styles.main_Screen}></div>
  </div>
        </>
)
}
export default Home;