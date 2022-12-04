import styles from './index.module.sass'
import {useState} from "react";
import Favorites from "../favorites/Favorites";
import Icon from "@/components/ui/icon/Icon";

const PlaceHeader = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <Icon href='/' name='arrow_back_ios_new'/>
                <button onClick={() => setVisible(!visible)}>
                    <span className="material-icons-outlined">{visible ? "bookmark" : "bookmark_border"}</span>
                </button>
            </div>
            {visible && <Favorites/>}
        </div>
    )
}

export default PlaceHeader