import styles from './InputField.module.scss';
import * as React from 'react';
import { makeStyles } from "@mui/styles";
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const InputField=()=>{
    
return(
    <>
    <div className={styles.InputField}>
  <input type="text" placeholder="Mobile Number or Email"></input></div>
  <div className={styles.InputField}>
  <input type="password" placeholder="Password"></input>
  </div>
  
  

    </>
)
}
export default InputField;

