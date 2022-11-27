import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Head from "next/head"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-sky-500 flex flex-col h-screen">
            <Head>
                <title>Encode Lottery</title>
                <meta name="description" content="Decentralized lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
