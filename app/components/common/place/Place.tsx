import {FC} from "react";
import {IPlace} from "@/models/interfaces/place.interface";
import TripButton from "./tripButton/TripButton";
import DetailsBlock from "./detailsBlock/DetailsBlock";
import styles from './index.module.sass'
import PlaceHeader from "./header/PlaceHeader";
import {urlFor} from "../../../sanity";

interface IPlacePage {
    place: IPlace
}
const PlacePage: FC<IPlacePage> = ({place}) => {
    return (
        <div className={styles.place}>
            <div style={{
                backgroundImage: `url(${urlFor(place.imagePath)})`,
                height: '60vh',
                position: 'relative',
                backgroundSize: 'cover'
            }}>
                <PlaceHeader/>
                <div className={styles.place__details}>
                    <DetailsBlock place={place}/>
                    <div className={styles.place__btn}>
                        <TripButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacePage;