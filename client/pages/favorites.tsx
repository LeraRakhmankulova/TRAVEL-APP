import MainContainer from "@/components/ui/containers/MainContainer";
import {GetStaticProps, NextPage} from "next";
import {sanityClient} from "../app/sanity";
import {queries} from "@/utils/queries";
import FavoritePage from "@/components/screens/favorites/FavoritePage";
import {HomeType} from "@/models/types/home.type";

const Favorites: NextPage<HomeType> = ({initialPlaces}) => {
    return (
        <MainContainer>
            <FavoritePage places={initialPlaces}/>
        </MainContainer>
    )
}


Favorites.isOnlyUser = true
export default Favorites