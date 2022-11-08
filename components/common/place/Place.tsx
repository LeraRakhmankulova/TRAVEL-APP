import {FC} from "react";
import {IPlace} from "../../../models/interfaces/place.interface";
import TripButton from "./tripButton/TripButton";

interface IPlacePage {
    place: IPlace
}

const PlacePage: FC<IPlacePage> = ({place}) => {
    return (
        <div>
            <TripButton/>
        </div>
    )
}

export default PlacePage;