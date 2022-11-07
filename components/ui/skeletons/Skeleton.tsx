import styles from './index.module.sass'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Skeletons = () => {
    const arr = [0, 1, 2]
    return (
        <div className={styles.skeletons}>
            {arr.map((item, index) =>
                <div className={styles.skeletons__item} key={index}>
                    <Skeleton
                        height={200}
                        borderRadius="20px"
                        baseColor="#1b1b1d"
                        highlightColor="#2c2c2e"
                    />
                </div>)}
        </div>
    )
}

export default Skeletons