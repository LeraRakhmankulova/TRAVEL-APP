import Container from "../../components/ui/Container";
import {useRouter} from "next/router";

const Place = () => {
    const {query:{slug}} = useRouter()
    return (
        <Container>place{slug}</Container>
    )
}

export default Place