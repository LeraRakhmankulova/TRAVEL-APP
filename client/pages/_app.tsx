import '@/assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import {SessionProvider} from "next-auth/react";
import {ToastContainer} from "react-toastify";
import AuthProvider from "../app/guards/AuthProvider";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <>
            <NextProgressBar
                color="#eb601e"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={false}
                nonce="my-nonce"
                options={{easing: 'ease', speed: 500}}
            />
            <SessionProvider session={session}>
                <AuthProvider Component={Component}>
                    <Component {...pageProps} />
                    <ToastContainer theme="dark" draggable={false}/>
                </AuthProvider>
            </SessionProvider>
        </>
    )
}
