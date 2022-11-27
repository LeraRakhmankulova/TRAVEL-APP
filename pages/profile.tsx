import MainContainer from "@/components/ui/containers/MainContainer";
import Meta from "@/utils/Meta";
import ProfilePage from "@/components/common/profile/ProfilePage";

const Profile = () => {
    return (
        <MainContainer>
            <Meta title="My profile"
                  description="Best routes for travelling"/>
            <ProfilePage/>
        </MainContainer>
    )
}
Profile.isOnlyUser = true
export default Profile