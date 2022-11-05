import styles from './index.module.sass'
import {useRouter} from "next/router";

const navItems = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'explore',
        link: '/explore'
    },
    {
        icon: 'place',
        link: '/place'
    },
    {
        icon: 'person_outline',
        link: '/profile'
    }
]
const Footer = () => {
    const {push, pathname} = useRouter()
    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map((item, index) =>
                    <button onClick={() => push(item.link)} key={index}
                            className={pathname === item.link ? styles.active : ''}>
                        <span className='material-icons-outlined'>{item.icon}</span>
                    </button>)}
            </nav>
        </footer>
    )
}

export default Footer