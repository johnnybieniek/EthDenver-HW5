import { Button } from "web3uikit"
import { useMoralis } from "react-moralis"
import { useState, useEffect } from "react"

export default function Home() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    let [prizePool, setPrizePool] = useState(0)
    let [participants, setParticipants] = useState(0)
    let [start, setStart] = useState(0)

    if (start == 0) {
        setStart(1)
        setParticipants(1)
        setPrizePool(1)
    }

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Current Prize Pool: {prizePool}
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Number of participants: {participants}
            </h1>
            <div>
                {isWeb3Enabled ? (
                    <div></div>
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
                            console.log("Hello there, mate!")
                            setParticipants(participants + 1)
                            setPrizePool(prizePool + 1)
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
