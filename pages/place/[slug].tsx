import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPlace} from "../../models/interfaces/place.interface";
import PlacePage from "../../components/common/place/Place";
import Container from "../../components/ui/Container";

interface IPlacePage {
    place: IPlace
}

const Place: NextPage<IPlacePage> = ({place}) => {
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
//         params: { slug: place.slug.current }
//     }))
//
//     return { paths, fallback: 'blocking' }
// }
//
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const place = await fetch(`${API_URL}/(params.slug)`)
//
//     return { props: { place } }
// }

export default Place