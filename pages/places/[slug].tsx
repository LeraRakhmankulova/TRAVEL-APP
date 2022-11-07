import Container from "../../components/ui/Container";
import {useRouter} from "next/router";
import {GetStaticPaths} from "next";
import {API_URL} from "../../constants";
import {IPlace} from "../../models/interfaces/place.interface";

const Place = () => {
    const {query: {slug}} = useRouter()
    return (
        <Container>place{slug}</Container>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const result = await fetch(`${API_URL}/places`)
    const places = await result.json()

    const paths = places.map((post: IPlace) => ({
        params: {slug: post.slug},
    }))
    return {paths, fallback: true}
}


export default Place