import {NextPage} from "next";
import SimpleContainer from "@/components/ui/containers/SimpleContainer";
import WelcomePage from "@/components/common/welcome/WelcomePage";
import Meta from "@/utils/Meta";


const Welcome: NextPage = () => {
    return (
        <SimpleContainer>
            <Meta title="Book your future trip"
                  description="Best routes for travelling"/>
         <WelcomePage/>
        </SimpleContainer>
    )
}

export default Welcome