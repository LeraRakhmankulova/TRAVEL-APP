import styles from './index.module.sass'

const TripButton = () => {
    return (
        <button className={styles.button}>
            <div className={styles.button__text}>Book a trip</div>
            <span className='material-icons-outlined'>chevron_right</span>
        </button>
    )
}

export default TripButton;