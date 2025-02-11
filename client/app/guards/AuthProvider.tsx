import {FC, PropsWithChildren} from "react"
import CheckRole, {TypeComponentAuthFields} from "./CheckRole";
import dynamic from 'next/dynamic'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
    ssr: false
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({children,Component: { isOnlyUser }}) => {
    return !isOnlyUser ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
    )
}

export default AuthProvider