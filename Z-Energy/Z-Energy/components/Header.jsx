import Zlogo from '/ZLogo.png';
import styles from './Header.module.css';
import search from '/searchIcon.png';
import arrow from '/arrow.png';

function Header() {
    return (
        <>
        <div className={styles.headerBox}>
        <div className={styles.header1}>
            <div className={styles.header1Left}>
            <img src={Zlogo} alt="Z Logo" />
            <button className={`${styles.filledBtn} ${styles.btnStyle}`}> <h2>For personal</h2></button>
            <button className={styles.businessBtn}> <h2>For business</h2></button>
            </div>
            <div className={styles.header1Right}>
            <button className={styles.clearBtn}> <h2>Z App</h2></button>
            <button className={styles.clearBtn}> <h2>About Z</h2></button>
            <img src={search} alt="search icon" />
            <button className={styles.roundedBtn}> <h2 className={styles.roundBtnTxt}>Log in</h2> <div className={styles.circleDiv}><img src={arrow} alt="arrow" className={styles.arrow} /></div> </button>
            </div>
        </div>
        <div className={styles.header2}>
            <div className={styles.header2Left}>
            <button className={styles.clearBtn}> <h2>At the station</h2> </button>
            <button className={styles.clearBtn}> <h2>Power</h2> </button>
            <button className={styles.clearBtn}> <h2>Rewards and promotions</h2> </button>
            </div>
            {/* The arrows on the rounded buttons and the search icon need to change colour matching the palette provided based on hover/click, so does the dropdown menu text */}
            <button className={`${styles.roundedBtn} ${styles.longRoundBtn}`}> <h2 className={styles.roundBtnTxt}>Locate Z Station</h2> <div className={styles.circleDiv}><img src={arrow} alt="arrow" className={styles.arrow} /></div> </button>
        </div>
        </div>
       
        </>
    )

}


export default Header;