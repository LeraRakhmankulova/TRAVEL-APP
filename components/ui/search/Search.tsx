import styles from './index.module.sass'
import {ChangeEvent, FC, useState} from "react";
import {SearchType} from "../../../models/types/search.type";

const Search: FC<SearchType> = ({setPlaces, initialPlaces}) => {
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            setPlaces(initialPlaces.filter(place => place.location.city.toLowerCase().includes(value) ||
                place.location.country.toLowerCase().includes(value)))
        } else setPlaces(initialPlaces)
    }

    return (
        <div className={styles.search}>
            <span className='material-icons-outlined'>search</span>
            <input type='text'
                   onChange={searchHandler}
                   value={searchValue}
                   placeholder='Search place'/>
        </div>
    )
}

export default Search