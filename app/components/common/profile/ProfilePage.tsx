import styles from './index.module.sass'
import {useSession, signOut} from "next-auth/react";
import {useRouter} from "next/router";

const ProfilePage = () => {
    const {data} = useSession()
    const {push} = useRouter()
    const handleClick = () => {
        signOut()
        push('/auth')
    }
    return (
        <div>
            <h1>About me</h1>
            <div>{data?.user?.email}</div>
            <button onClick={handleClick}>LOGOUT</button>
        </div>
    )
}

export default ProfilePage