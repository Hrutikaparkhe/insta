import styles from './Header.module.scss'
const Header = () =>{
    return(
        <>
        <div className={styles.topnav}>
  <h1 className={styles.facebook}>facebook
  <button className={styles.fb_acnt_btn}>Create New Account</button></h1>

</div>

        </>
    )
}
export default Header;