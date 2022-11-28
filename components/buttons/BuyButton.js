import { Button } from "web3uikit"
import { ethers } from "ethers"
import LotteryAddress from "../../constants/LotteryAddress.json"
import Lottery from "../../constants/Lottery.json"
import { useMoralis } from "react-moralis"

const BUY_AMOUNT = ethers.utils.parseEther("0.01")

export default function BuyButton() {
    const { Moralis } = useMoralis()
    return (
        <div className="place-self-center">
            <Button
                id="buyTokens"
                onClick={async function buyTokens() {
                    console.log("Hello there, mate! Buying tokens I see...")
                    const web3Provider = await Moralis.enableWeb3()
                    const signer = web3Provider.getSigner()
                    const contract = new ethers.Contract(LotteryAddress, Lottery, signer)

                    const tx = await contract.purchaseTokens({
                        value: BUY_AMOUNT,
                    })
                    await tx.wait()
                    console.log("Tokens purchased!")
                }}
                text="Buy 10 Tokens!"
                theme="colored"
                color="blue"
                size="large"
            />
        </div>
    )
}
