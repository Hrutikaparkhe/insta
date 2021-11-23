import styles from './Login.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
const FacebookBtn=()=>{
return(
    <div className={styles.facebook_login}>
    <button className={styles.fb_btn}>
 <span className={styles.fb_logo}> <FacebookIcon color="primary" /></span>
 <span className={styles.fb}>Log in with Facebook</span>
 </button>
  </div>

)
}
export default FacebookBtn;