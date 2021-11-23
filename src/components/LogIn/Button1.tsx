import styles from './Button1.module.scss'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, makeStyles } from '@mui/styles';
interface MyTheme {
    background: string;
    boxShadow: string;
    border:string;
    width:string;
    height:string;
  }
  const useStyles = makeStyles((theme: MyTheme) => ({
    root: {
      background: theme.background,
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: theme.boxShadow,
      color: 'white',
      height: '30px',
      width:'248px',
      padding: '0 30px',
    },
  }));
  function DeepChild() {
    const classes = useStyles();
  
    return (
      <button type="button" className={classes.root}>
        Log In
      </button>
    );
  }
  
const Button1=()=>{
   
return(
    <>
<div className={styles.btn}>
{/* <Button variant="contained"  className={classes.root}>Contained</Button> */}





<div>
      <ThemeProvider<MyTheme>
        theme={{
          
        
        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}
      >
        {/* <DeepChild /> */}
        <br />
        <br />
        <ThemeProvider<MyTheme>
          theme={(outerTheme) => ({
            ...outerTheme,
            background: '#0095f6',
            
           
          })}
        >
          <DeepChild />
        </ThemeProvider>
      </ThemeProvider>
    </div>

</div>

    </>
)
}
export default Button1;