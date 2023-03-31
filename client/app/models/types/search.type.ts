import { IPlace } from '@/models/interfaces/place.interface'
import { SetStateType } from '@/models/types/setState.type'

export type SearchType = {
	setPlaces: SetStateType<IPlace[]>
	initialPlaces: IPlace[],
	setIsLoading: SetStateType<boolean>
}

export type FiltersType = {
	setPlaces: SetStateType<IPlace[]>
	initialPlaces: IPlace[],
}