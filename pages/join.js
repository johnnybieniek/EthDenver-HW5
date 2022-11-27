import { Button } from "web3uikit"
import { useState, useEffect } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"

export default function Join() {
    let [accountAddress, setAccountAddress] = useState("0x")
    let [tokenBalance, setTokenBalance] = useState("0")
    let [ethBlance, setEthBalance] = useState("0")
    let [start, setStart] = useState(0)
    let [bets, setBets] = useState(0)

    const { isWeb3Enabled, chainId, account, Moralis } = useMoralis()

    async function getEthBlance() {
        const web3Provider = await Moralis.enableWeb3()
        const balanceBN = await web3Provider.getBalance(account)
        const balance = ethers.utils.formatEther(balanceBN)
        return balance
    }

    if (start == 0) {
        setStart(1)
        setEthBalance(0)
        setTokenBalance(0)
        setBets(0)
    }

    const { runContractFunction } = useWeb3Contract()

    async function setupUI() {
        setAccountAddress(account)
        setEthBalance(0)
        setTokenBalance(0)
        setBets(0)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            setupUI()
            start = 0
        }
    }, [account, isWeb3Enabled, chainId])

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl text-center">ETH available: {ethBlance}</h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Your LTT holdings: {tokenBalance}
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">Bets entered: {bets}</h1>
            <div className=" grid grid-cols-1">
                <div className="place-self-center">
                    <Button
                        id="buyTokens"
                        onClick={async function buyTokens() {
                            console.log("Hello there, mate! Buying tokens I see...")
                            console.log(`Account: ${account}`)
                            const balance = await getEthBlance()
                        }}
                        text="Buy Tokens!"
                        theme="colored"
                        color="blue"
                        size="large"
                    />
                </div>
                <div className="place-self-center">
                    <Button
                        id="burnTokens"
                        onClick={async function burnTokens() {
                            console.log("Hello there, mate! Burning tokens I see...")
                        }}
                        text="Burn Tokens!"
                        theme="colored"
                        color="blue"
                        size="large"
                    />
                </div>
                <div className="place-self-center">
                    <Button
                        id="joinLottery"
                        onClick={async function joinLottery() {
                            console.log("Hello there, mate! Joining the lottery, I see...")
                        }}
                        text="Join Lottery!"
                        theme="colored"
                        color="blue"
                        size="large"
                    />
                </div>
                <div className="place-self-center">
                    <Button
                        id="update"
                        onClick={async function updateUI() {
                            const balance = await getEthBlance()
                            setEthBalance(balance)
                        }}
                        text="Refresh account!"
                        theme="colored"
                        color="blue"
                        size="large"
                    />
                </div>
            </div>
        </div>
    )
}
