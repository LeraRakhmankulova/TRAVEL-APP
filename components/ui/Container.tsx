import {FC, PropsWithChildren} from "react";
import Footer from "../common/footer/Footer";

const Container: FC<PropsWithChildren<any>> = ({children}) => {
    return (
        <div>{children}
            <Footer/>
        </div>
    )
}

export default Container