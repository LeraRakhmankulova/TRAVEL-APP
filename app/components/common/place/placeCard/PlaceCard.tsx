import styles from './index.module.sass'
import {IPlace} from "@/models/interfaces/place.interface";
import {FC} from "react";
import Link from "next/link";
import {PropsWithChildren} from "preact/compat";

type IPlaceCard = {
    place: IPlace,
    index: number
    isFav?: boolean
}

const PlaceCard: FC<PropsWithChildren<IPlaceCard>> = ({place, index, isFav}) => {
    return (
        <>
            <Link href={`/place/${place.slug.current}`}
                  key={index}>
                <div
                    style={{backgroundImage: `url(${urlFor(place.imagePath).url()})`, zIndex: `${index}`}}
                    className={styles.place__item}>
                    <h2>{place.location.country}, {place.location.city}</h2>
                </div>
            </Link>
        </>
    )
}

export default PlaceCard