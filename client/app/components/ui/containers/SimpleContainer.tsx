import {FC, PropsWithChildren} from "react";

const SimpleContainer: FC<PropsWithChildren<any>> = ({children}) => {
    return (
        <div style={{maxWidth: '480px', margin: '0 auto'}}>
            {children}
        </div>
    )
}

export default SimpleContainer