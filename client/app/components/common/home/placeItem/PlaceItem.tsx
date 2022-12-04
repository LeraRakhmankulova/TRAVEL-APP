import styles from './index.module.sass'
import {FC} from "react";
import {IPlace} from "@/models/interfaces/place.interface";
import Skeletons from "../../../ui/skeletons/Skeleton";
import PlaceCard from "@/components/common/place/placeCard/PlaceCard";

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
                            <PlaceCard place={item} index={index}/>)}
                    </div> :
                    <div>Not found...</div>}
        </div>
    )
}
export default PlaceItem