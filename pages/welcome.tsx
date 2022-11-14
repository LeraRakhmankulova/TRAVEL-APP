import {NextPage} from "next";
import SimpleContainer from "@/components/ui/containers/SimpleContainer";
import WelcomePage from "@/components/common/welcome/WelcomePage";


const Welcome: NextPage = () => {
    return (
        <SimpleContainer>
         <WelcomePage/>
        </SimpleContainer>
    )
}

export default Welcome