import Link from "next/link"
import { useMoralis } from "react-moralis"
import { ConnectButton } from "web3uikit"
import { useState, useEffect } from "react"

export default function Header() {
    let [accountAddress, setAccountAddress] = useState("0x")
    const { isWeb3Enabled, chainId, account } = useMoralis()

    async function setupUI() {
        setAccountAddress(account)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            setupUI()
        }
    }, [account, isWeb3Enabled, chainId])

    return (
        <div>
            {isWeb3Enabled && chainId == 5 ? (
                <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
                    <h1 className="text-2xl"> Encode's Decentralized Lottery </h1>
                    <div className="flex flex-row items-center">
                        <Link href="/" className="mr-4 p-6 text-lg ">
                            Home
                        </Link>
                        <Link href="/join" className="mr-4 p-6 text-lg ">
                            Join
                        </Link>
                        <ConnectButton moralisAuth={false} />
                    </div>
                </nav>
            ) : (
                <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
                    <h1 className="text-2xl"> Encode's Decentralized Lottery </h1>
                    <div className="flex flex-row items-center">
                        <Link href="/" className="mr-4 p-6 text-lg ">
                            Home
                        </Link>
                        <ConnectButton moralisAuth={false} />
                    </div>
                </nav>
            )}
        </div>
    )
}

/* 
 
*/
