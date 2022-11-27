import {FC} from "react";
import {NextPage} from "next";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

export type TypeRoles = {
    isOnlyUser?: boolean //isAuth?
}
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles
export type TypeComponentAuthFields = { Component: TypeRoles }

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
    const {data} = useSession()
    const {pathname, replace} = useRouter()

    if (data) return <>{children}</>

    if (isOnlyUser) {
        pathname !== '/auth' && replace('/auth')
    }
}

export default CheckRole