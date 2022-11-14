import styles from './index.module.sass'
import map from '@/assets/images/welcomeMap.svg';
import place from '@/assets/images/placeItem1.svg';
import {motion, useMotionValue, useTransform} from "framer-motion"

const WelcomePage = () => {
    return (
        <div className={styles.welcome}>
            <div style={{backgroundImage: `url("${map.src}")`}} className={styles.welcome__map}>
                <div className={styles.welcome__items}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.7}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.65}}>
                        <img src={place.src}/>
                    </motion.div>
                </div>
            </div>
            <div className={styles.welcome__text}>
                <h1>Free yourself</h1>
                <h4>Explore amazing places around the globe.</h4>
            </div>
        </div>
    )
}

export default WelcomePage