import MainContainer from "@/components/ui/containers/MainContainer";
import Meta from "@/utils/Meta";
import AuthPage from "@/components/screens/auth/AuthPage";
import SimpleContainer from "@/components/ui/containers/SimpleContainer";
import {useSession} from "next-auth/react";
import Profile from "./profile";

const Auth = () => {
    const {data} = useSession()

    return (
        <SimpleContainer>
            <Meta title="Authorization"
                  description="Best routes for travelling"/>
            <AuthPage/>
        </SimpleContainer>
    )
}

export default Auth