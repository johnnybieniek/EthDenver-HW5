import { Button } from "web3uikit"
import { useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import { Lottery__factory, LotteryToken__factory } from "../constants/typechain-types"
import LotteryAddress from "../constants/LotteryAddress.json"
import Lottery from "../constants/Lottery.json"
import LotteryToken from "../constants/LotteryToken.json"
import LotteryTokenAddress from "../constants/LotteryTokenAddress.json"

const ADDRESS = "0xA1ddA1EC29F957Ef79Bb8C2ce0dCA715dd42572e"
const BUY_AMOUNT = ethers.utils.parseEther("0.01")

export default function Join() {
    let [accountAddress, setAccountAddress] = useState("0x")
    let [tokenBalance, setTokenBalance] = useState("0")
    let [ethBlance, setEthBalance] = useState("0")
    let [winnings, setWinnings] = useState(0)

    const { isWeb3Enabled, chainId, account, Moralis } = useMoralis()

    async function updatingUI() {
        const web3Provider = await Moralis.enableWeb3()
        const balanceBN = await web3Provider.getBalance(account)
        const balance = ethers.utils.formatEther(balanceBN)
        setEthBalance(balance)

        const provider = ethers.getDefaultProvider("goerli", {
            alchemy: "nyuWA6Qddm3CRM2uuXANH1ZYq5n6AXwm",
        })
        const deployer = ethers.Wallet.createRandom().connect(provider)

        const lotteryContractFactory = new Lottery__factory(deployer)
        const lottery = lotteryContractFactory.attach(ADDRESS)
        const tokenAddress = await lottery.paymentToken()
        const lotteryTokenContractFactory = new LotteryToken__factory()
        const token = lotteryTokenContractFactory.attach(tokenAddress).connect(provider)

        const tokenBalanceBN = await token.balanceOf(account)
        const tokenBalance = ethers.utils.formatEther(tokenBalanceBN)
        setTokenBalance(tokenBalance)

        const prizeWinningsBN = await lottery.prize(account)
        const prizeWinnings = ethers.utils.formatEther(prizeWinningsBN)
        setWinnings(prizeWinnings)
    }

    async function setupUI() {
        setAccountAddress(account)
        setEthBalance(0)
        setTokenBalance(0)
        setWinnings(0)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            setupUI()
        }
    }, [account, isWeb3Enabled, chainId])

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl text-center">ETH available: {ethBlance}</h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Your LTT holdings: {tokenBalance}
            </h1>
            <h1 className="py-4 px-4 font-bold text-2xl text-center">
                Withdrawable winnings: {winnings} LTT
            </h1>
            <div className=" grid grid-cols-1">
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
                <div className="place-self-center">
                    <Button
                        id="redeemTokens"
                        onClick={async function burnTokens() {
                            console.log("Hello there, mate! Burning tokens I see...")
                        }}
                        text="Redeem LTT!"
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
                            const web3Provider = await Moralis.enableWeb3()
                            const gasPrice = await web3Provider.getGasPrice()
                            const signer = web3Provider.getSigner()
                            const contract = new ethers.Contract(LotteryAddress, Lottery, signer)
                            const token = new ethers.Contract(
                                LotteryTokenAddress,
                                LotteryToken,
                                signer
                            )

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
                <div className="place-self-center">
                    <Button
                        id="withdraw"
                        onClick={async function withdraw() {
                            if (winnings == 0) return
                            const web3Provider = await Moralis.enableWeb3()
                            const gasPrice = await web3Provider.getGasPrice()
                            const signer = web3Provider.getSigner()
                            const contract = new ethers.Contract(LotteryAddress, Lottery, signer)
                            const winningsBN = ethers.utils.parseEther(winnings)

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
                <div className="place-self-center">
                    <Button
                        id="update"
                        onClick={async function updateUI() {
                            await updatingUI()
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
