import styles from './index.module.sass'
import {FC, useState} from "react";

const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className={styles.search}>
            <span className='material-icons-outlined'>search</span>
            <input type='text' onChange={e => setSearchValue(e.target.value)} value={searchValue}
                   placeholder='Search place'/>
        </div>
    )
}

export default Search