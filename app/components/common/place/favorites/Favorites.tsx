import styles from './index.module.sass'
import Link from "next/link";

const locationMock = [{
    country: 'Japan',
    city: 'Tokio',
    slug: 'http://localhost:3000/place/Tokio'
},
    {
        country: 'France',
        city: 'Paris',
        slug: 'http://localhost:3000/place/Paris'
    },
    {
        country: 'USA',
        city: 'New York',
        slug: 'http://localhost:3000/place/NewYork'
    },
    {
        country: 'Japan',
        city: 'Tokio',
        slug: 'http://localhost:3000/place/Tokio'
    },
    {
        country: 'France',
        city: 'Paris',
        slug: 'http://localhost:3000/place/Paris'
    },
    {
        country: 'USA',
        city: 'New York',
        slug: 'http://localhost:3000/place/NewYork'
    }]

const Favorites = () => {
    return (
        <div className={styles.favorites}>
            <ul className={styles.favorites__wrapper}>
                {locationMock.map((item, index) =>
                    <Link href={item.slug}>
                        <li className={styles.favorites__item} key={index}>
                            {item.country}, {item.city}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default Favorites