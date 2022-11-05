import styles from '../assets/styles/Home.module.css'
import Container from "../components/ui/Container";
import {GetStaticProps, NextPage} from "next";
import {HomeType} from "../models/types/home.type";

const Home: NextPage<HomeType> = ({places}) => {
    return (
        <Container className={styles.container}>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch('/api/places')
    const places = await result.json()
    return {
        props: {places}
    }
}

export default Home