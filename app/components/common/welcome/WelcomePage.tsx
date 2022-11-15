import styles from './index.module.sass'
import map from '@/assets/images/welcomeMap.svg';
import fPlace from '@/assets/images/placeItem1.svg';
import sPlace from '@/assets/images/placeItem2.svg';
import tPlace from '@/assets/images/placeItem3.svg';
import {motion} from "framer-motion"
import Link from "next/link";

const placeImgPath = [
    {
        placePath: fPlace.src,
        mLeft: 100,
        mTop: 350,
        duration: 0.7
    },
    {
        placePath: sPlace.src,
        mLeft: 200,
        mTop: 300,
        duration: 1.5
    },
    {
        placePath: tPlace.src,
        mLeft: 650,
        mTop: -680,
        duration: 2.5
    }
]


const WelcomePage = () => {
    return (
        <div className={styles.welcome}>
            <div style={{backgroundImage: `url("${map.src}")`}} className={styles.welcome__map}>
                <div className={styles.welcome__items}>
                    {placeImgPath.map(item =>
                        <motion.div
                            initial={{opacity: 0, scale: 0.7}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: `${item.duration}`}}
                            style={{margin: `${item.mTop}% 0 0 ${item.mLeft}%`}}>
                            <img src={item.placePath} width={55}/>
                        </motion.div>)
                    }
                </div>
            </div>
            <div className={styles.welcome__text}>
                <h1>Free yourself</h1>
                <h4>Explore amazing places around the globe.</h4>
                <Link className={styles.welcome__button} href='/'>
                    <button>Let's go!</button>
                </Link>
            </div>
        </div>
    )
}

export default WelcomePage