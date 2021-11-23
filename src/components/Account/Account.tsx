import styles from './Account.module.scss';
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const Account=()=>{
return(
    <>
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
            {/* <div className={styles.sub_container}> */}
                <p className={styles.no_account}> Don't Have an Account? <a className={styles.signup} href="">Sign up</a></p>
                
{/* </div> */}
            </Paper>
        </Box>
        
</>

);
}
export default Account;