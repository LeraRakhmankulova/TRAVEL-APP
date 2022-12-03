import {NextPage} from "next";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import { FC, PropsWithChildren } from 'react'

export type TypeRoles = {
    isOnlyUser?: boolean //isAuth?
}
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles
export type TypeComponentAuthFields = { Component: TypeRoles }

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({children,Component: {isOnlyUser}}) => {
    const { data, status } = useSession()
    const { replace, pathname } = useRouter()

    const Children = () => <>{children}</>

    if (status === 'loading') return null

    if (data) return <Children />

    if (isOnlyUser) {
        pathname !== '/auth' && replace('/auth')
        return null
    }
}


export default CheckRole