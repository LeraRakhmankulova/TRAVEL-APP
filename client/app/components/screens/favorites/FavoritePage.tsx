import styles from './index.module.sass'
import {IPlace} from "@/models/interfaces/place.interface";
import {FC} from "preact/compat";
import PlaceCard from "@/components/common/place/placeCard/PlaceCard";
import {useState} from "react";

const FavoritePage:FC<{places: IPlace[]}> = ({places}) => {
    const [isFav, setIsFav] = useState(true)
    return (
        <div className={styles.favorite}>
            <h2>Your favorite places</h2>
            {places.map((item, index) =>
                <PlaceCard place={item} index={index} isFav={isFav}/>)}
        </div>
    )
}

export default FavoritePage