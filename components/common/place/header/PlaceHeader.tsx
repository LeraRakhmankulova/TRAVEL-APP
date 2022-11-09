import styles from './index.module.sass'
import {useState} from "react";
import Favorites from "../favorites/Favorites";
import Link from "next/link";

const PlaceHeader = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link href='/'>
                    <span className="material-icons-outlined">arrow_back_ios_new</span>
                </Link>
                <button onClick={() => setVisible(!visible)}>
                    <span className="material-icons-outlined">{visible ? "bookmark" : "bookmark_border"}</span>
                </button>
            </div>
            {visible && <Favorites/>}
        </div>
    )
}

export default PlaceHeader