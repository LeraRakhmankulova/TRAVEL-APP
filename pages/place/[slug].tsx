import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPlace} from "../../models/interfaces/place.interface";
import PlacePage from "../../components/common/place/Place";
import Container from "../../components/ui/Container";
import {API_URL} from "../../constants";
import Home from "../index";

const Place: NextPage<{ place: IPlace }> = ({place}) => {
    return (
        <Container>
            <PlacePage place={place}/>
        </Container>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const result = await fetch(`${API_URL}/{slug}`)
//
//     const paths = result.map(place => ({
//         params: { slug: place.slug }
//     }))
//
//
//     return { paths, fallback: true }
// }
//
// export const getStaticProps: GetStaticProps = async () => {
//     const result = await fetch(`${API_URL}`)
//     const places = await result.json()
//     return {
//         props: {places}
//     }
// }

export default Place