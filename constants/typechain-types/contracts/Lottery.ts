/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "bet()": FunctionFragment;
    "betFee()": FunctionFragment;
    "betMany(uint256)": FunctionFragment;
    "betPrice()": FunctionFragment;
    "betsOpen()": FunctionFragment;
    "closeLottery()": FunctionFragment;
    "closingTimestamp()": FunctionFragment;
    "getRandomNumber()": FunctionFragment;
    "openBets(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerPool()": FunctionFragment;
    "ownerWithdraw(uint256)": FunctionFragment;
    "paymentToken()": FunctionFragment;
    "prize(address)": FunctionFragment;
    "prizePool()": FunctionFragment;
    "prizeWithdraw(uint256)": FunctionFragment;
    "purchaseRatio()": FunctionFragment;
    "purchaseTokens()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnTokens(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bet"
      | "betFee"
      | "betMany"
      | "betPrice"
      | "betsOpen"
      | "closeLottery"
      | "closingTimestamp"
      | "getRandomNumber"
      | "openBets"
      | "owner"
      | "ownerPool"
      | "ownerWithdraw"
      | "paymentToken"
      | "prize"
      | "prizePool"
      | "prizeWithdraw"
      | "purchaseRatio"
      | "purchaseTokens"
      | "renounceOwnership"
      | "returnTokens"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bet", values?: undefined): string;
  encodeFunctionData(functionFragment: "betFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "betMany",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "betPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "betsOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closeLottery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closingTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openBets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownerPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerWithdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "prizePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prizeWithdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betMany", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betsOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closingTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openBets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prizePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prizeWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bet(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    betFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    betPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    betsOpen(overrides?: CallOverrides): Promise<[boolean]>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closingTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRandomNumber(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { randomNumber: BigNumber }>;

    openBets(
      _closingTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paymentToken(overrides?: CallOverrides): Promise<[string]>;

    prize(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    prizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    purchaseRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bet(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  betFee(overrides?: CallOverrides): Promise<BigNumber>;

  betMany(
    times: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  betPrice(overrides?: CallOverrides): Promise<BigNumber>;

  betsOpen(overrides?: CallOverrides): Promise<boolean>;

  closeLottery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closingTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

  openBets(
    _closingTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerPool(overrides?: CallOverrides): Promise<BigNumber>;

  ownerWithdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paymentToken(overrides?: CallOverrides): Promise<string>;

  prize(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  prizePool(overrides?: CallOverrides): Promise<BigNumber>;

  prizeWithdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  purchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

  purchaseTokens(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnTokens(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bet(overrides?: CallOverrides): Promise<void>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    betPrice(overrides?: CallOverrides): Promise<BigNumber>;

    betsOpen(overrides?: CallOverrides): Promise<boolean>;

    closeLottery(overrides?: CallOverrides): Promise<void>;

    closingTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    openBets(
      _closingTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerPool(overrides?: CallOverrides): Promise<BigNumber>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    paymentToken(overrides?: CallOverrides): Promise<string>;

    prize(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prizePool(overrides?: CallOverrides): Promise<BigNumber>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    purchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseTokens(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    bet(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    betPrice(overrides?: CallOverrides): Promise<BigNumber>;

    betsOpen(overrides?: CallOverrides): Promise<BigNumber>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closingTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    openBets(
      _closingTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerPool(overrides?: CallOverrides): Promise<BigNumber>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paymentToken(overrides?: CallOverrides): Promise<BigNumber>;

    prize(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prizePool(overrides?: CallOverrides): Promise<BigNumber>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    purchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bet(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    betFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    betPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    betsOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closingTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRandomNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openBets(
      _closingTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paymentToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prize(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prizePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    purchaseRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
