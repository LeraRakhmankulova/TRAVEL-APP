import styles from '@/assets/styles/Home.module.css'
import MainContainer from "@/components/ui/containers/MainContainer";
import {GetStaticProps, NextPage} from "next";
import {HomeType} from "@/models/types/home.type";
import SearchSection from "@/components/common/home/searchSection/SearchSection";
import PlaceItem from "@/components/common/home/placeItem/PlaceItem";
import {useState} from "react";
import {IPlace} from "@/models/interfaces/place.interface";
import Search from "@/components/ui/search/Search";
import Filters from "@/components/common/home/filters/Filters";
import {API_URL} from "../app/constants";
import Meta from "@/utils/Meta";
import {sanityClient} from "../app/sanity";

const placeQuery = `*[_type == "place"]`

const Home: NextPage<HomeType> = ({initialPlaces}) => {
    const [places, setPlaces] = useState<IPlace[]>(initialPlaces)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <MainContainer className={styles.container}>
            <Meta title="Book your future trip"
                  description="Best routes for travelling"/>
            <div style={{width: '80%', margin: '0 auto'}}>
                <SearchSection/>
                <Search
                    setIsLoading={setIsLoading}
                    setPlaces={setPlaces}
                    initialPlaces={initialPlaces}/>
                <Filters setPlaces={setPlaces} initialPlaces={initialPlaces}/>
                <PlaceItem isLoading={isLoading} places={places}/>
            </div>
        </MainContainer>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    let queries;
    const result = await sanityClient.fetch(placeQuery)

    return {
        props: {
            initialPlaces: result
        }
    }
}

export default Home