import styles from './index.module.sass'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Skeletons = () => {
    return (
        <div className={styles.skeletons}>
            <div className={styles.skeletons__first}>
                <Skeleton
                    height={200}
                    borderRadius="20px"
                    baseColor="#1b1b1d"
                    highlightColor="#2c2c2e"
                />
            </div>
            <div className={styles.skeletons__last}>
                <Skeleton
                    height={200}
                    borderRadius="20px"
                    baseColor="#1b1b1d"
                    highlightColor="#2c2c2e"
                />
            </div>
        </div>
    )
}

export default Skeletons