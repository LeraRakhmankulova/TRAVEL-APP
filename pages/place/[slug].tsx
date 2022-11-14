import {IPlace} from "@/models/interfaces/place.interface";
import PlacePage from '@/components/common/place/Place';
import PlaceContainer from "@/components/ui/containers/PlaceContainer";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {sanityClient} from "../../app/sanity";

const placeQuery = `*[_type == "place"]`;

const Place: NextPage<{ place: IPlace }> = ({place}) => {
    return (
        <PlaceContainer>
            <PlacePage place={place}/>
        </PlaceContainer>
    )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const result = await sanityClient.fetch(`${placeQuery}{slug}`)
//
//     const paths = result.map((place: any) => ({
//         params: { slug: place.slug.current }
//     }))
//
//     return { paths, fallback: 'blocking' }
// }
//
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const place = await sanityClient.fetch(placeQuery(String(params.slug)))
//
//     return { props: { place } }
//}

export default Place