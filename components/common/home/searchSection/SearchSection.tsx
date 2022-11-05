import styles from './index.module.sass'
import {FC} from "react";
import Search from "../../../ui/search/Search";
import map from '../../../../assets/images/map.png'
import Filters from "../filters/Filters";

const SearchSection: FC = () => {
    return (
        <section className={styles.section} style={{
            backgroundImage: `url("${map.src}")`
        }}>
            <div>
                <h1>Best places for trip</h1>
                <Search/>
                <Filters/>
            </div>
        </section>
    )
}

export default SearchSection