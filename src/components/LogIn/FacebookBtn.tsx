import styles from './Login.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import { useHistory } from "react-router-dom";
const FacebookBtn=()=>{
    const history = useHistory();
return(
    <div className={styles.facebook_login}>
    <button className={styles.fb_btn}
    onClick={() => history.push("/fblogin")}
    >
 <span className={styles.fb_logo}> <FacebookIcon color="primary" /></span>
 <span className={styles.fb}>Log in with Facebook</span>
 
 </button>
  </div>

)
}
export default FacebookBtn;