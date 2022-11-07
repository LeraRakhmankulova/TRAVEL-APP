import Container from "../../components/ui/Container";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../constants";
import {IPlace} from "../../models/interfaces/place.interface";
import {useRouter} from "next/router";

interface IPlacePage {
    place: IPlace
}

const Place: NextPage<IPlacePage> = ({place}) => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <Container>{slug}</Container>
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