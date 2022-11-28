import { Button } from "web3uikit"
import { useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import { Lottery__factory, LotteryToken__factory } from "../constants/typechain-types"
import BuyButton from "../components/buttons/BuyButton"
import RedeemButton from "../components/buttons/RedeemButton"
import JoinLotteryButton from "../components/buttons/JoinLotteryButton"
import WithdrawButton from "../components/buttons/WithdrawButton"

const ADDRESS = "0xA1ddA1EC29F957Ef79Bb8C2ce0dCA715dd42572e"

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

        const provider = ethers.getDefaultProvider("goerli")
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
                <BuyButton />
                <RedeemButton />
                <JoinLotteryButton />
                <WithdrawButton />
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
