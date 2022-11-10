import {FC, PropsWithChildren} from "react";
import Footer from "@/components/common/footer/Footer";


const MainContainer: FC<PropsWithChildren<any>> = ({children}) => {
    return (
        <div style={{maxWidth: '480px', margin: '0 auto'}}>{children}
            <Footer/>
        </div>
    )
}

export default MainContainer