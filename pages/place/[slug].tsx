import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPlace} from "../../models/interfaces/place.interface";
import PlacePage from "../../components/common/place/Place";
import PlaceContainer from "../../components/ui/containers/PlaceContainer";

const Place: NextPage<{ place: IPlace }> = ({place}) => {
    return (
        <PlaceContainer>
            <PlacePage place={place}/>
        </PlaceContainer>
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