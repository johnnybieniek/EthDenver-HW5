import { Button } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { Lottery__factory } from "../constants/typechain-types"

const ADDRESS = "0xA1ddA1EC29F957Ef79Bb8C2ce0dCA715dd42572e"

export default function Home() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    let [prizePool, setPrizePool] = useState(0)
    let [participants, setParticipants] = useState(0)
    let [ticket, setTicket] = useState(0)
    let [finish, setFinish] = useState("Please refresh")

    async function loadingUI() {
        const provider = ethers.getDefaultProvider("goerli", {
            alchemy: "nyuWA6Qddm3CRM2uuXANH1ZYq5n6AXwm",
        })
        const deployer = ethers.Wallet.createRandom().connect(provider)

        const lotteryContractFactory = new Lottery__factory(deployer)
        const lottery = lotteryContractFactory.attach(ADDRESS)

        const lotteryPrizePoolBN = await lottery.prizePool()
        const lotteryPrizePool = ethers.utils.formatEther(lotteryPrizePoolBN)
        const betPriceBN = await lottery.betPrice()
        const betPrice = parseFloat(ethers.utils.formatEther(betPriceBN))
        setTicket(betPrice)
        setPrizePool(lotteryPrizePool)
        if (prizePool == 0) {
            setParticipants(0)
        } else {
            const numParticipants = prizePool / betPrice
            setParticipants(numParticipants)
        }

        const betsOpen = await lottery.betsOpen()
        if (!betsOpen) {
            setFinish("The lottery is currently closed")
            return
        }
        const closingTimestamp = await lottery.closingTimestamp()
        const closingString = `${new Date(
            closingTimestamp.toNumber() * 1000
        ).toLocaleTimeString()} ET`
        setFinish(closingString)
    }

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Current Prize Pool: {prizePool} LTT
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Number of participants: {participants}
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                The ticket cost: {ticket} LTT
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                The lottery ends at: {finish}
            </h1>
            <div>
                {isWeb3Enabled ? (
                    <div>
                        <h1 className="py-4 px-4 font-bold text-2xl text-center">
                            Welcome! Please navigate to the "Join" section to get started!
                        </h1>
                    </div>
                ) : (
                    <h1 className="py-4 px-4 font-bold text-2xl text-center">
                        Please connect your wallet to get started!
                    </h1>
                )}
            </div>

            <div className=" grid grid-cols-1">
                <div className="place-self-center">
                    <Button
                        id="refresh"
                        onClick={async function refreshingData() {
                            console.log("About to talk to the blockchain")
                            await loadingUI()
                            console.log("There ya go!")
                        }}
                        text="Refresh the lottery data!"
                        theme="colored"
                        color="blue"
                        size="large"
                    />
                </div>
            </div>
        </div>
    )
}
