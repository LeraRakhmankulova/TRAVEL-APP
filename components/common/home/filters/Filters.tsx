import styles from './index.module.sass'
import {FC, useState} from "react";
import cn from 'classnames'

const cities = [
    {location: 'Paris'},
    {location: 'Bora Bora'},
    {location: 'Maul'},
    {location: 'Tahiti'},
    {location: 'Brazil'},
    {location: 'Norway'},
]

const Filters: FC = () => {
    const [filter, setFilter] = useState('')
    return (
        <div className={styles.filters}>
            {cities.map((city, index) =>
                <button
                    className={cn({[styles.active]: city.location === filter})}
                    onClick={() => setFilter(city.location)}
                    key={index}>{city.location}</button>)}
        </div>
    )
}

export default Filters