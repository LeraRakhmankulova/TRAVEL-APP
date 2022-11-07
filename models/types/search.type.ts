import {SetStateType} from "../../common";
import {IPlace} from "../interfaces/place.interface";

export type SearchType = {
    setPlaces: SetStateType<IPlace[]>
    initialPlaces: IPlace[],
    setIsLoading: SetStateType<boolean>
}

export type FiltersType = {
    setPlaces: SetStateType<IPlace[]>
    initialPlaces: IPlace[],
}