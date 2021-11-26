import styles from './Facebook.module.scss'
import Header from './Header/Header';

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputField from '../InputField';
import Button1 from '../Button1';
import { useHistory } from "react-router-dom";
const Facebook1 = ()=>{
    const history = useHistory();
    return(
        <>
        <Header/>
        <div className={styles.fb_login_container}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width:350,
            
            },
          }}
        >
            
            <Paper className={styles.fb_login}>
                <div className={styles.fb_login_box}>Log in to Facebook</div>

                <InputField/>
                <Button1/>
               <div className={styles.fb_btn1}> <button className={styles.forget_act}> Forgotten account?</button>
        <button className={styles.signup_fb}>Sign up for Facebook</button></div>
       <div className={styles.fb_btn2}><button className={styles.not_now_btn}>Not now</button></div> 
            </Paper>
          
        </Box>
        </div>
       
  
        </>
    )
}
export default Facebook1;