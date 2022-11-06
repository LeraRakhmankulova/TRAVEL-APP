import styles from './index.module.sass'
import {ChangeEvent, FC, useState} from "react";
import cn from 'classnames'
import {SearchType} from "../../../../models/types/search.type";


const Filters: FC<SearchType> = ({setPlaces, initialPlaces}) => {
    const [filter, setFilter] = useState('')
    const handleClick = (country: string) => {
        setFilter(country)
        if(country){
            setPlaces(initialPlaces.filter(place => place.location.country.includes(country)))
        }
        else setPlaces(initialPlaces)
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