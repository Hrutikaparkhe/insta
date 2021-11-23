import styles from "./Login.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import Logo from "../Logo/Logo";
import InputField from "./InputField";
import Button1 from "./Button1";
import FacebookBtn from "./FacebookBtn";
import Forget_password from "../Forget_password/Forget_password";
import Account from "../Account/Account";
import { style } from "@mui/system";
import GetApp from "../GetApp/GetApp";
// import {  } from '@mui/material/colors';
// import Form1 from "./Form1";
const useStyles = makeStyles((theme) => ({
  chipStyle: {
    "&&:hover": {
      backgroundColor: "grey",
      textDecoration: "underline"
    }
  }
}));
const Login = () => {
  const classes = useStyles();
    return (
    <>
    <div className={styles.row}>
    <div className={styles.column_containers}>
    <div className={styles.left_container}>


    <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"/>
    <div className={styles.phone_pic}>
 <img src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"/>
           </div>
           </div>
     </div>

    <div className={styles.column_containers}>
      <div className={styles.right_container}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 300,
            },
          }}
        >
          <Paper className={styles.sign_in_box}>
            <Logo />
            <InputField />
            <Button1 />
            <div className={styles.or}>
              <hr className={styles.hrleft}></hr>OR<hr className={styles.hrright}></hr>
            </div>

            <FacebookBtn />
            <Forget_password />



          </Paper>

        </Box>
      </div>
     <Account/>
     <GetApp/> 
     </div>
    
     </div>
  
     </>
  );
};
export default Login;
