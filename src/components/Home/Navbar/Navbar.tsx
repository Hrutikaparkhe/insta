import Logo from '../../Logo/Logo';
import styles from './Navbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () =>{
return(
    <>
    <div className={styles.navbar}>

        {/* <Logo/> */}
    </div>
    <div className={styles.searchbar}>
    {/* <i className={styles.fa fa-search}></i> */}
    <SearchIcon color="disabled" />
    <input className={styles.search_field} type="text" placeholder="Search"/>
    <div className={styles.search_container}>
      <div className={styles.search_container_box}>
        <div className={styles.search_results}>

        </div>
      </div>
    </div>
    </div>
    </>
)
   

}
export default Navbar;