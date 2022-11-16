import MainContainer from "@/components/ui/containers/MainContainer";
import Meta from "@/utils/Meta";
import AuthPage from "@/components/common/auth/AuthPage";
import SimpleContainer from "@/components/ui/containers/SimpleContainer";

const Auth = () => {
    return (
        <SimpleContainer>
            <Meta title="Authorization"
                  description="Best routes for travelling"/>
            <AuthPage/>
        </SimpleContainer>
    )
}

export default Auth