import Logo from "../../Logo/Logo";
import styles from "./Navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBox from "./SearchBox";
function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.insta}>Instagram</div>
        <SearchBox/>
        <div className={styles.icons}>
          <div className={styles.home}>
            <HomeIcon fontSize="large" />
          </div>
          <div className={styles.home}>
            <MapsUgcIcon fontSize="large" />
          </div>
          <div className={styles.home}>
            <AddPhotoAlternateIcon fontSize="large" />
          </div>
          <div className={styles.home}>
            <FavoriteBorderIcon fontSize="large" />
          </div>
          <div className={styles.home}>
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
