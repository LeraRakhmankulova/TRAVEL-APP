import styles from '../assets/styles/Home.module.css'
import Container from "../components/ui/Container";
import {GetStaticProps, NextPage} from "next";
import {HomeType} from "../models/types/home.type";
import SearchSection from "../components/common/home/searchSection/SearchSection";
import {API_URL} from "../constants";
import PlaceItem from "../components/common/placeItem/PlaceItem";

const Home: NextPage<HomeType> = ({places}) => {
    return (
        <Container className={styles.container}>
            <div style={{width: '91%', margin: '0 auto'}}>
                <SearchSection/>
                <PlaceItem places={places}/>
            </div>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch(`${API_URL}/places`)
    const places = await result.json()
    return {
        props: {places}
    }
}

export default Home