import styles from './index.module.sass'
import {useRouter} from "next/router";
import {NavItemType} from "@/models/types/navItem.type";
import {useSession} from "next-auth/react";

const navItems: NavItemType[] = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'favorite',
        link: '/favorites'
    },
    {
        icon: 'place',
        link: '/place/kyoto'
    },
]
const Footer = () => {
    const {push, pathname} = useRouter()
    const {data} = useSession()
    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map((item, index) =>
                    <button onClick={() => push(item.link)} key={index}
                            className={pathname === item.link ? styles.active : ''}>
                        <span className='material-icons-outlined'>{item.icon}</span>
                    </button>)}
                {data?.user ?
                    <button onClick={() => push('/profile')}>
                        <span className='material-icons-outlined'>account_circle</span>
                    </button> :
                    <button onClick={() => push('/auth')}>
                        <span className='material-icons-outlined'>login</span>
                    </button>}
            </nav>
        </footer>
    )
}

export default Footer