import {FC} from "react";
import {IPlace} from "../../../models/interfaces/place.interface";
import TripButton from "./tripButton/TripButton";
import DetailsBlock from "./detailsBlock/DetailsBlock";
import styles from './index.module.sass'
import PlaceHeader from "./header/PlaceHeader";

const PlacePage: FC<{ place: IPlace }> = ({place}) => {
    const mock: IPlace = {
        slug: 'Tokio',
        location: {
            country: 'Japan',
            city: 'Tokio'
        },
        imagePath: 'http://localhost:3000/images/japan.jpg',
        description: 'Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan\'s nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south.',
        rating: 10,
        duration: '10 days',
        distance: '20',
        googleMapLink: '',
        mapImage: ''
    }
    return (
        <div className={styles.place}>
            <div style={{
                backgroundImage: `url(${mock.imagePath})`,
                height: '50vh',
                position: 'relative',
                backgroundSize: 'cover'
            }}>
                <PlaceHeader/>
                <div className={styles.place__details}>
                    <DetailsBlock place={mock}/>
                    <div className={styles.place__btn}>
                        <TripButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacePage;