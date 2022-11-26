import {FC} from "react";
import {NextPage} from "next";

export type TypeRoles = {
    isOnleUser?; boolean
}
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles
export type TypeComponentAuthFields = { Component: TypeRoles }

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnleUser}}) => {
    return (
        <div></div>
    )
}

export default CheckRole