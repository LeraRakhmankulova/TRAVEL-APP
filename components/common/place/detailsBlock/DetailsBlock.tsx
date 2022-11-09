import styles from './index.module.sass'
import {IPlace} from "../../../../models/interfaces/place.interface";
import {FC} from "react";

const DetailsBlock: FC<{ place: IPlace }> = ({place}) => {
    return (
        <section className={styles.details}>
            <div className={styles.details__header}>
                <span className='material-icons-outlined'>location_on</span>
                <h2>{place.location.city}, {place.location.country}</h2>
            </div>
            <div className={styles.details__description}>
                <p>{place.description}</p>
                <div className={styles.details__info}>
                    <div>
                        <span className="material-icons-outlined">star_half</span>
                        <h5>{place.rating} / 10</h5>
                    </div>
                    <div>
                        <span className="material-icons-outlined">calendar_month</span>
                        <h5>{place.duration}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsBlock