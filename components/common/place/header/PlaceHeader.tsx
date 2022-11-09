import styles from './index.module.sass'

const PlaceHeader = () => {
    return (
        <div className={styles.header}>
            <button>
                <span className="material-icons-outlined">arrow_back_ios_new</span>
            </button>
            <button>
                <span className="material-icons-outlined">bookmark</span>
            </button>
        </div>
    )
}

export default PlaceHeader