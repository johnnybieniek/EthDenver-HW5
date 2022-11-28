import { Button } from "web3uikit"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import LotteryAddress from "../../constants/LotteryAddress.json"
import Lottery from "../../constants/Lottery.json"
import LotteryToken from "../../constants/LotteryToken.json"
import LotteryTokenAddress from "../../constants/LotteryTokenAddress.json"

export default function WithdrawButton() {
    const { Moralis, account } = useMoralis()
    return (
        <div className="place-self-center">
            <Button
                id="withdraw"
                onClick={async function withdraw() {
                    const web3Provider = await Moralis.enableWeb3()
                    const gasPrice = await web3Provider.getGasPrice()
                    const signer = web3Provider.getSigner()
                    const contract = new ethers.Contract(LotteryAddress, Lottery, signer)
                    const token = new ethers.Contract(LotteryTokenAddress, LotteryToken, signer)

                    const winningsBN = await token.balanceOf(account)

                    const tx = contract.prizeWithdraw(winningsBN, {
                        gasLimit: 400000,
                        gasPrice: gasPrice,
                    })
                }}
                text="Withdraw winnings!"
                theme="colored"
                color="blue"
                size="large"
            />
        </div>
    )
}
