import styles from './index.module.sass'
import {FC} from "react";
import {IPlace} from "../../../../models/interfaces/place.interface";
import Link from "next/link";
import Skeletons from "../../../ui/skeletons/Skeleton";

type LocationType = {
    places: IPlace[]
    isLoading: boolean
}
const PlaceItem: FC<LocationType> = ({places, isLoading}) => {
    return (
        <div className={styles.place}>
            <h3>Popular places</h3>
            {isLoading ?
                <Skeletons/> :
                places.length > 0 ?
                    <div className={styles.place__items}>
                        {places.map((item, index) =>
                            <Link href={`/place/${item.slug}`}
                                  key={index}>
                                <div
                                    style={{backgroundImage: `url(${item.imagePath})`, zIndex: `${index}`}}
                                    className={styles.place__item}>
                                    <h2>{item.location.country}, {item.location.city}</h2>
                                </div>
                            </Link>)}
                    </div> :
                    <div>Not found...</div>}
        </div>
    )
}
export default PlaceItem