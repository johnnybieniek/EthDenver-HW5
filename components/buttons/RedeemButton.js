import { Button } from "web3uikit"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import LotteryAddress from "../../constants/LotteryAddress.json"
import Lottery from "../../constants/Lottery.json"
import LotteryToken from "../../constants/LotteryToken.json"
import LotteryTokenAddress from "../../constants/LotteryTokenAddress.json"

export default function RedeemButton() {
    const { Moralis, account } = useMoralis()
    return (
        <div className="place-self-center">
            <Button
                id="redeemTokens"
                onClick={async function burnTokens() {
                    console.log("Hello there, mate! Burning tokens I see...")
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

                    const tokenBalance = await token.balanceOf(account)

                    const tx = await contract.returnTokens(tokenBalance.toString(), {
                        gasLimit: 400000,
                        gasPrice: gasPrice,
                    })
                    await tx.wait()
                }}
                text="Redeem LTT!"
                theme="colored"
                color="blue"
                size="large"
            />
        </div>
    )
}
