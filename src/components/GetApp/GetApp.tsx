import styles from './GetApp.module.scss';
const GetApp=()=>{
return(
    <>
    <p className={styles.getapp}> Get the app.</p>
   

        <div className={styles.app_buttons}>
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
            {/* <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_microsoft_english-en.png/8a9204989bce.png"/> */}
    </div></>
    
);
}
export default GetApp;