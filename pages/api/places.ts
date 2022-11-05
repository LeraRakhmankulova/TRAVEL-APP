import type {NextApiRequest, NextApiResponse} from 'next'
import {IPlace} from "../../models/interfaces/place.interface";

const places: IPlace[] = [{
    slug: 'Tokio',
    location: 'Tokio',
    imagePath: '',
    description: '',
    rating: 10,
    duration: '',
    distance: '20',
    googleMapLink: '',
    mapImage: ''
}]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}