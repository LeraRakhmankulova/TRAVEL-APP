import MainContainer from "@/components/ui/containers/MainContainer";
import Meta from "@/utils/Meta";
import AuthPage from "@/components/common/auth/AuthPage";

const Auth = () => {
    return (
        <MainContainer>
            <Meta title="Authorization"
                  description="Best routes for travelling"/>
            <AuthPage/>
        </MainContainer>
    )
}

export default Auth