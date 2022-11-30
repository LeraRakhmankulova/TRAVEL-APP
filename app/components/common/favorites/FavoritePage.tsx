import styles from './index.module.sass'
import PlaceItem from "@/components/common/home/placeItem/PlaceItem";
import {IPlace} from "@/models/interfaces/place.interface";
import {FC} from "preact/compat";
import {useState} from "react";

const FavoritePage:FC<{places: IPlace[]}> = ({places}) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div>
            <PlaceItem places={places} isLoading={isLoading}/>
        </div>
    )
}

export default FavoritePage