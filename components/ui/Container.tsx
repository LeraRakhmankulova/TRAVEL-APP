import {FC, PropsWithChildren} from "react";
import Footer from "../common/footer/Footer";

const Container: FC<PropsWithChildren<any>> = ({children}) => {
    return (
        <div style={{maxWidth: '480px', margin: '0 auto'}}>{children}
            <Footer/>
        </div>
    )
}

export default Container