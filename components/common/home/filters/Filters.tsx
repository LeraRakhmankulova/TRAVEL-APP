import styles from './index.module.sass'
import {FC} from "react";

const cities = [
    {location: 'Paris'},
    {location: 'Bora Bora'},
    {location: 'Maul'},
    {location: 'Tahiti'},
    {location: 'Brazil'},
    {location: 'Norway'},
]

const Filters: FC = () => {
    return (
        <div className={styles.filters}>
            {cities.map((city, index) => <button key={index}>{city.location}</button>)}
        </div>
    )
}

export default Filters