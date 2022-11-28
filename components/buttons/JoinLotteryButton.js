import { Button } from "web3uikit"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import LotteryAddress from "../../constants/LotteryAddress.json"
import Lottery from "../../constants/Lottery.json"
import LotteryToken from "../../constants/LotteryToken.json"
import LotteryTokenAddress from "../../constants/LotteryTokenAddress.json"

export default function JoinLotteryButton() {
    const { Moralis } = useMoralis()
    return (
        <div className="place-self-center">
            <Button
                id="joinLottery"
                onClick={async function joinLottery() {
                    console.log("Hello there, mate! Joining the lottery, I see...")
                    const web3Provider = await Moralis.enableWeb3()
                    const gasPrice = await web3Provider.getGasPrice()
                    const signer = web3Provider.getSigner()
                    const contract = new ethers.Contract(LotteryAddress, Lottery, signer)
                    const token = new ethers.Contract(LotteryTokenAddress, LotteryToken, signer)

                    const allowTx = await token.approve(
                        contract.address,
                        ethers.constants.MaxUint256
                    )
                    await allowTx.wait()

                    const tx = await contract.betMany(5, {
                        gasLimit: 400000,
                        gasPrice: gasPrice,
                    })
                    await tx.wait()
                    console.log("User added to the lottery pool!")
                }}
                text="Join Lottery!"
                theme="colored"
                color="blue"
                size="large"
            />
        </div>
    )
}
