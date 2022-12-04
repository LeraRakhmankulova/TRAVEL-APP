import {FC} from "react";
import {IMeta} from "@/models/interfaces/meta.interface";
import {useRouter} from "next/router";
import {API_URL} from "../constants";
import Head from "next/head";
import {getClearText} from "@/utils/clearText";

const Meta: FC<IMeta> = ({title, description}) => {
    const {asPath} = useRouter()
    const currentUrl = `${API_URL}/${asPath}`
    return (
        <Head>
            <title itemProp="headline">{title}</title>
            {description ? (
                <>
                    <meta
                        itemProp="description"
                        name="description"
                        content={getClearText(description, 152)}
                    />
                    <link rel="canonical" href={currentUrl}/>
                    <link rel="shortcut icon" href="/travel.ico" />
                    <meta property="og:locale" content="en"/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:url" content={currentUrl}/>
                    <meta property="og:site_name" content="Travel App"/>
                    <meta
                        property="og:description"
                        content={getClearText(description, 197)}
                    />
                </>
            ) : (
                <meta name="robots" content="noindex, nofollow"/>
            )}
        </Head>
    )
}

export default Meta