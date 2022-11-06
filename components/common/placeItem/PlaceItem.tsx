import styles from './index.module.sass'
import {FC} from "react";
import {IPlace} from "../../../models/interfaces/place.interface";

type LocationType = {
    places: IPlace[]
}
const PlaceItem: FC<LocationType> = ({places}) => {
    return (
        <div className={styles.place}>
            <h1>Popular places</h1>
            {places.map((item, index) =>
                <div
                    style={{backgroundImage: `url(${item.imagePath})`}}
                    className={styles.place__item}
                    key={index}>
                    <h2>{item.location.country}, {item.location.city}</h2>
                </div>)}
        </div>
    )
}
export default PlaceItem