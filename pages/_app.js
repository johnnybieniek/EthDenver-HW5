import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Encode Lottery</title>
                <meta name="description" content="Decentralized lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
