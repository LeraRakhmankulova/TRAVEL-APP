import styles from './index.module.sass'
import {FC, useState} from "react";
import cn from 'classnames'
import {FiltersType} from "../../../../models/types/search.type";

const Filters: FC<FiltersType> = ({setPlaces, initialPlaces}) => {
    const [filter, setFilter] = useState('')

    const handleClick = (location: string) => {
        if (filter === location) {
            setPlaces(initialPlaces)
            setFilter('')
        } else {
            setPlaces(
                initialPlaces.filter(
                    place => place.location.country.toLowerCase() === location.toLowerCase()
                )
            )
            setFilter(location)
        }
    }

    return (
        <div className={styles.filters}>
            {initialPlaces.map((item, index) =>
                <button
                    className={cn({[styles.active]: item.location.country === filter})}
                    onClick={() => handleClick(item.location.country)}
                    key={index}>{item.location.country}</button>)}

        </div>
    )
}

export default Filters