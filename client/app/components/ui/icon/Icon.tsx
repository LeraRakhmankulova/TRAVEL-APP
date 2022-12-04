import styles from './index.module.sass'
import {FC} from "react";
import Link from "next/link";

interface IIcon {
    href: string,
    name: string
}

const Icon: FC<IIcon> = ({href, name}) => {
    return (
        <div className={styles.icon}>
            <Link href={href}>
                <span className="material-icons-outlined">{name}</span>
            </Link>
        </div>
    )
}

export default Icon