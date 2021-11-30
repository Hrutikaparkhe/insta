import styles from './Navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = () =>{
return(
    <>
     <div className={styles.navigation_search_container}>
    {/* <i className={styles.fa_search}></i> */}
    <SearchIcon className={styles.search_icon}/>
    <input className={styles.search_field} type="text" placeholder= "Search"  />
 
   
    <div className={styles.search_container}>
      <div className={styles.search_container_box}>
        <div className={styles.search_Sresults}>

        </div>
      </div>
    </div>
  </div>
    </>
)
}
export default SearchBox;