import styles from './index.module.sass'
import {useSession, signOut} from "next-auth/react";
import {useRouter} from "next/router";

const ProfilePage = () => {
    const {data} = useSession()
    const {replace} = useRouter()
    const handleClick = () => {

    }
    return (
        <div>
            <h1>About me</h1>
            <div>{data?.user?.name}</div>
            <div>{data?.user?.email}</div>
            <button onClick={() => signOut()}>LOGOUT</button>
        </div>
    )
}

export default ProfilePage