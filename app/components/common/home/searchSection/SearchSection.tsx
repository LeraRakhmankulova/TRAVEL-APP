import styles from './index.module.sass'
import {FC} from "react";
import map from '@/assets/images/map.png'

const SearchSection: FC = () => {
    return (
        <section className={styles.section} style={{
            backgroundImage: `url("${map.src}")`
        }}>
            <div>
                <h1>Best places for trip</h1>
            </div>
        </section>
    )
}

export default SearchSection