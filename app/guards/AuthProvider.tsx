import {FC} from "react"
import CheckRole, {TypeComponentAuthFields} from "./CheckRole";


const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {

    return !isOnlyUser ?
            <div>{children}</div> :
        <CheckRole Component={{isOnlyUser}}>{children}</CheckRole>

}

export default AuthProvider