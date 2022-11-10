import '@/assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import NextProgressBar from 'nextjs-progressbar'

export default function App({Component, pageProps}: AppProps) {
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
            <Component {...pageProps} />
        </>
    )
}
