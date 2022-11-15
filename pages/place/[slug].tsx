import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { sanityClient } from '../../app/sanity'
import {IPlace} from "@/models/interfaces/place.interface";
import SimpleContainer from "@/components/ui/containers/SimpleContainer";
import PlacePage from "@/components/common/place/Place";
import {queries} from "@/utils/queries";

interface IPlacePage {
    place: IPlace
}

const Place: NextPage<IPlacePage> = ({ place }) => {
    return <SimpleContainer>
        <PlacePage place={place}/>
    </SimpleContainer>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await sanityClient.fetch(`${queries.getPlaces}{slug}`)

    const paths = result.map(place => ({
        params: { slug: place.slug.current }
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const place = await sanityClient.fetch(queries.getPlace(String(params.slug)))

    return { props: { place } }
}

export default Place;

