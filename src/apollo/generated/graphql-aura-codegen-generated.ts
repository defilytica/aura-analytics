/* tslint:disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AmountHumanReadable: { input: any; output: any };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  Date: { input: any; output: any };
  GqlBigNumber: { input: any; output: any };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
}

export interface Account {
  __typename?: "Account";
  auraBalMintTransactions: Array<AuraBalMintTransaction>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  /**
   * Address
   *
   */
  id: Scalars["ID"]["output"];
  merkleDropClaims: Array<MerkleDropClaim>;
  poolAccounts: Array<PoolAccount>;
  vaultAccounts: Array<VaultAccount>;
}

export interface AccountAuraBalMintTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface AccountMerkleDropClaimsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface AccountPoolAccountsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface AccountVaultAccountsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface Account_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraBalMintTransactions_?: InputMaybe<AuraBalMintTransaction_Filter>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  merkleDropClaims_?: InputMaybe<MerkleDropClaim_Filter>;
  poolAccounts_?: InputMaybe<PoolAccount_Filter>;
  vaultAccounts_?: InputMaybe<VaultAccount_Filter>;
}

export enum Account_OrderBy {
  AuraBalMintTransactions = "auraBalMintTransactions",
  AuraLockerAccount = "auraLockerAccount",
  Id = "id",
  MerkleDropClaims = "merkleDropClaims",
  PoolAccounts = "poolAccounts",
  VaultAccounts = "vaultAccounts",
}

export interface AmpUpdate {
  __typename?: "AmpUpdate";
  endAmp: Scalars["BigInt"]["output"];
  endTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  scheduledTimestamp: Scalars["Int"]["output"];
  startAmp: Scalars["BigInt"]["output"];
  startTimestamp: Scalars["BigInt"]["output"];
}

export interface AmpUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  endAmp?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endAmp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endAmp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  startAmp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startAmp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startAmp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
}

export enum AmpUpdate_OrderBy {
  EndAmp = "endAmp",
  EndTimestamp = "endTimestamp",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  ScheduledTimestamp = "scheduledTimestamp",
  StartAmp = "startAmp",
  StartTimestamp = "startTimestamp",
}

export interface AuraBalMintTransaction {
  __typename?: "AuraBalMintTransaction";
  account: Account;
  amount: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface AuraBalMintTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum AuraBalMintTransaction_OrderBy {
  Account = "account",
  Amount = "amount",
  Hash = "hash",
  Id = "id",
  Timestamp = "timestamp",
}

export interface AuraLocker {
  __typename?: "AuraLocker";
  accounts: Array<AuraLockerAccount>;
  address: Scalars["Bytes"]["output"];
  delegateChangedTransactions: Array<LockerDelegateChangedTransaction>;
  /**
   * Singleton: "AuraLocker"
   *
   */
  id: Scalars["ID"]["output"];
  isShutdown: Scalars["Boolean"]["output"];
  kickRewardTransactions: Array<LockerKickRewardTransaction>;
  lockedSupply: Scalars["BigInt"]["output"];
  rewardData: Array<AuraLockerRewardData>;
  rewardPaidTransactions: Array<LockerRewardPaidTransaction>;
  stakedTransactions: Array<LockerStakedTransaction>;
  totalSupply: Scalars["BigInt"]["output"];
  withdrawnTransactions: Array<LockerWithdrawnTransaction>;
}

export interface AuraLockerAccountsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface AuraLockerDelegateChangedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface AuraLockerKickRewardTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface AuraLockerRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface AuraLockerRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface AuraLockerStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface AuraLockerWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface AuraLockerAccount {
  __typename?: "AuraLockerAccount";
  account: Account;
  auraLocker: AuraLocker;
  balance: Scalars["BigInt"]["output"];
  /**
   * AuraLocker.balances(account)
   *
   */
  balanceLocked: Scalars["BigInt"]["output"];
  balanceNextUnlockIndex: Scalars["Int"]["output"];
  /**
   * Either self-delegated (in which case delegate => this, or another account); or not set
   *
   */
  delegate?: Maybe<AuraLockerAccount>;
  delegateChangedTransactions: Array<LockerDelegateChangedTransaction>;
  /**
   * Timestamp at which `delegate` was updated
   *
   */
  delegateUpdatedAt?: Maybe<Scalars["Int"]["output"]>;
  /**
   * Accounts delegating to this account
   *
   */
  delegators: Array<AuraLockerAccount>;
  /**
   * {Account.id}
   *
   */
  id: Scalars["ID"]["output"];
  kickRewardTransactions: Array<LockerKickRewardTransaction>;
  rewardPaidTransactions: Array<LockerRewardPaidTransaction>;
  stakedTransactions: Array<LockerStakedTransaction>;
  /**
   * AuraLocker.userData(account)
   *
   */
  userData: Array<AuraLockerUserData>;
  /**
   * AuraLocker.userLocks(account)
   *
   */
  userLocks: Array<AuraLockerUserLock>;
  userLocksLength: Scalars["Int"]["output"];
  withdrawnTransactions: Array<LockerWithdrawnTransaction>;
}

export interface AuraLockerAccountDelegateChangedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface AuraLockerAccountDelegatorsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface AuraLockerAccountKickRewardTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface AuraLockerAccountRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface AuraLockerAccountStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface AuraLockerAccountUserDataArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface AuraLockerAccountUserLocksArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface AuraLockerAccountWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface AuraLockerAccount_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  balance?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  balanceLocked_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  balanceLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  balanceNextUnlockIndex?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_gt?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_gte?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  balanceNextUnlockIndex_lt?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_lte?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_not?: InputMaybe<Scalars["Int"]["input"]>;
  balanceNextUnlockIndex_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  balance_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  delegate?: InputMaybe<Scalars["String"]["input"]>;
  delegateChangedTransactions_?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
  delegateUpdatedAt?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_gt?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_gte?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  delegateUpdatedAt_lt?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_lte?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_not?: InputMaybe<Scalars["Int"]["input"]>;
  delegateUpdatedAt_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  delegate_?: InputMaybe<AuraLockerAccount_Filter>;
  delegate_contains?: InputMaybe<Scalars["String"]["input"]>;
  delegate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  delegate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegate_gt?: InputMaybe<Scalars["String"]["input"]>;
  delegate_gte?: InputMaybe<Scalars["String"]["input"]>;
  delegate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  delegate_lt?: InputMaybe<Scalars["String"]["input"]>;
  delegate_lte?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  delegate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  delegate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  delegators_?: InputMaybe<AuraLockerAccount_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  kickRewardTransactions_?: InputMaybe<LockerKickRewardTransaction_Filter>;
  rewardPaidTransactions_?: InputMaybe<LockerRewardPaidTransaction_Filter>;
  stakedTransactions_?: InputMaybe<LockerStakedTransaction_Filter>;
  userData_?: InputMaybe<AuraLockerUserData_Filter>;
  userLocksLength?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_gt?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_gte?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  userLocksLength_lt?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_lte?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_not?: InputMaybe<Scalars["Int"]["input"]>;
  userLocksLength_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  userLocks_?: InputMaybe<AuraLockerUserLock_Filter>;
  withdrawnTransactions_?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export enum AuraLockerAccount_OrderBy {
  Account = "account",
  AuraLocker = "auraLocker",
  Balance = "balance",
  BalanceLocked = "balanceLocked",
  BalanceNextUnlockIndex = "balanceNextUnlockIndex",
  Delegate = "delegate",
  DelegateChangedTransactions = "delegateChangedTransactions",
  DelegateUpdatedAt = "delegateUpdatedAt",
  Delegators = "delegators",
  Id = "id",
  KickRewardTransactions = "kickRewardTransactions",
  RewardPaidTransactions = "rewardPaidTransactions",
  StakedTransactions = "stakedTransactions",
  UserData = "userData",
  UserLocks = "userLocks",
  UserLocksLength = "userLocksLength",
  WithdrawnTransactions = "withdrawnTransactions",
}

export interface AuraLockerRewardData extends RewardData {
  __typename?: "AuraLockerRewardData";
  auraLocker: AuraLocker;
  /**
   * {token.id}
   *
   */
  id: Scalars["ID"]["output"];
  lastUpdateTime: Scalars["Int"]["output"];
  periodFinish: Scalars["Int"]["output"];
  rewardPerTokenStored: Scalars["BigInt"]["output"];
  rewardRate: Scalars["BigInt"]["output"];
  token: Token;
}

export interface AuraLockerRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum AuraLockerRewardData_OrderBy {
  AuraLocker = "auraLocker",
  Id = "id",
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
}

export interface AuraLockerUserData {
  __typename?: "AuraLockerUserData";
  auraLockerAccount: AuraLockerAccount;
  /**
   * {AuraLockerAccount.id}.{Token.id}
   *
   */
  id: Scalars["ID"]["output"];
  rewardPerTokenPaid: Scalars["BigInt"]["output"];
  rewards: Scalars["BigInt"]["output"];
  token: Token;
}

export interface AuraLockerUserData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewards?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum AuraLockerUserData_OrderBy {
  AuraLockerAccount = "auraLockerAccount",
  Id = "id",
  RewardPerTokenPaid = "rewardPerTokenPaid",
  Rewards = "rewards",
  Token = "token",
}

export interface AuraLockerUserLock {
  __typename?: "AuraLockerUserLock";
  amount: Scalars["BigInt"]["output"];
  auraLockerAccount: AuraLockerAccount;
  /**
   * {AuraLockerAccount.id}.{index}
   *
   */
  id: Scalars["ID"]["output"];
  unlockTime: Scalars["Int"]["output"];
}

export interface AuraLockerUserLock_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  unlockTime?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  unlockTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  unlockTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum AuraLockerUserLock_OrderBy {
  Amount = "amount",
  AuraLockerAccount = "auraLockerAccount",
  Id = "id",
  UnlockTime = "unlockTime",
}

export interface AuraLocker_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<AuraLockerAccount_Filter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  delegateChangedTransactions_?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isShutdown?: InputMaybe<Scalars["Boolean"]["input"]>;
  isShutdown_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isShutdown_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isShutdown_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  kickRewardTransactions_?: InputMaybe<LockerKickRewardTransaction_Filter>;
  lockedSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lockedSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardData_?: InputMaybe<AuraLockerRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<LockerRewardPaidTransaction_Filter>;
  stakedTransactions_?: InputMaybe<LockerStakedTransaction_Filter>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  withdrawnTransactions_?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export enum AuraLocker_OrderBy {
  Accounts = "accounts",
  Address = "address",
  DelegateChangedTransactions = "delegateChangedTransactions",
  Id = "id",
  IsShutdown = "isShutdown",
  KickRewardTransactions = "kickRewardTransactions",
  LockedSupply = "lockedSupply",
  RewardData = "rewardData",
  RewardPaidTransactions = "rewardPaidTransactions",
  StakedTransactions = "stakedTransactions",
  TotalSupply = "totalSupply",
  WithdrawnTransactions = "withdrawnTransactions",
}

export interface Balancer {
  __typename?: "Balancer";
  id: Scalars["ID"]["output"];
  poolCount: Scalars["Int"]["output"];
  pools?: Maybe<Array<Pool>>;
  protocolFeesCollector?: Maybe<Scalars["Bytes"]["output"]>;
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalProtocolFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  totalSwapCount: Scalars["BigInt"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
}

export interface BalancerPoolsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Pool_Filter>;
}

export interface BalancerSnapshot {
  __typename?: "BalancerSnapshot";
  id: Scalars["ID"]["output"];
  poolCount: Scalars["Int"]["output"];
  timestamp: Scalars["Int"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalProtocolFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  totalSwapCount: Scalars["BigInt"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
  vault: Balancer;
}

export interface BalancerSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  poolCount?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  poolCount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_not?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Balancer_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum BalancerSnapshot_OrderBy {
  Id = "id",
  PoolCount = "poolCount",
  Timestamp = "timestamp",
  TotalLiquidity = "totalLiquidity",
  TotalProtocolFee = "totalProtocolFee",
  TotalSwapCount = "totalSwapCount",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
  Vault = "vault",
  VaultId = "vault__id",
  VaultPoolCount = "vault__poolCount",
  VaultProtocolFeesCollector = "vault__protocolFeesCollector",
  VaultTotalLiquidity = "vault__totalLiquidity",
  VaultTotalProtocolFee = "vault__totalProtocolFee",
  VaultTotalSwapCount = "vault__totalSwapCount",
  VaultTotalSwapFee = "vault__totalSwapFee",
  VaultTotalSwapVolume = "vault__totalSwapVolume",
}

export interface Balancer_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  poolCount?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  poolCount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_not?: InputMaybe<Scalars["Int"]["input"]>;
  poolCount_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  pools_?: InputMaybe<Pool_Filter>;
  protocolFeesCollector?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  protocolFeesCollector_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  protocolFeesCollector_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum Balancer_OrderBy {
  Id = "id",
  PoolCount = "poolCount",
  Pools = "pools",
  ProtocolFeesCollector = "protocolFeesCollector",
  TotalLiquidity = "totalLiquidity",
  TotalProtocolFee = "totalProtocolFee",
  TotalSwapCount = "totalSwapCount",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
}

export interface Block {
  __typename?: "Block";
  author?: Maybe<Scalars["String"]["output"]>;
  difficulty?: Maybe<Scalars["BigInt"]["output"]>;
  gasLimit?: Maybe<Scalars["BigInt"]["output"]>;
  gasUsed?: Maybe<Scalars["BigInt"]["output"]>;
  id: Scalars["ID"]["output"];
  number: Scalars["BigInt"]["output"];
  parentHash?: Maybe<Scalars["String"]["output"]>;
  receiptsRoot?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["BigInt"]["output"]>;
  stateRoot?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["BigInt"]["output"];
  totalDifficulty?: Maybe<Scalars["BigInt"]["output"]>;
  transactionsRoot?: Maybe<Scalars["String"]["output"]>;
  unclesHash?: Maybe<Scalars["String"]["output"]>;
}

export interface BlockChangedFilter {
  number_gte: Scalars["Int"]["input"];
}

export interface Block_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  author?: InputMaybe<Scalars["String"]["input"]>;
  author_contains?: InputMaybe<Scalars["String"]["input"]>;
  author_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  author_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  author_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  author_gt?: InputMaybe<Scalars["String"]["input"]>;
  author_gte?: InputMaybe<Scalars["String"]["input"]>;
  author_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  author_lt?: InputMaybe<Scalars["String"]["input"]>;
  author_lte?: InputMaybe<Scalars["String"]["input"]>;
  author_not?: InputMaybe<Scalars["String"]["input"]>;
  author_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  author_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  author_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  author_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  author_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  author_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  author_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  author_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  author_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  difficulty?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  difficulty_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  difficulty_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  number?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  number_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  number_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  parentHash?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_contains?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_gt?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_gte?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  parentHash_lt?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_lte?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  parentHash_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  parentHash_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_contains?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_gt?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_gte?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  receiptsRoot_lt?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_lte?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  receiptsRoot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  receiptsRoot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  size_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  size_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  stateRoot?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_contains?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_gt?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_gte?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stateRoot_lt?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_lte?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stateRoot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  stateRoot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalDifficulty?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalDifficulty_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalDifficulty_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionsRoot?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_contains?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_gt?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_gte?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transactionsRoot_lt?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_lte?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  transactionsRoot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transactionsRoot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  transactionsRoot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transactionsRoot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_contains?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_gt?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_gte?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  unclesHash_lt?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_lte?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  unclesHash_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  unclesHash_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export interface Block_Height {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
}

export enum Block_OrderBy {
  Author = "author",
  Difficulty = "difficulty",
  GasLimit = "gasLimit",
  GasUsed = "gasUsed",
  Id = "id",
  Number = "number",
  ParentHash = "parentHash",
  ReceiptsRoot = "receiptsRoot",
  Size = "size",
  StateRoot = "stateRoot",
  Timestamp = "timestamp",
  TotalDifficulty = "totalDifficulty",
  TransactionsRoot = "transactionsRoot",
  UnclesHash = "unclesHash",
}

export interface CircuitBreaker {
  __typename?: "CircuitBreaker";
  bptPrice: Scalars["BigDecimal"]["output"];
  id: Scalars["ID"]["output"];
  lowerBoundPercentage: Scalars["BigDecimal"]["output"];
  pool: Pool;
  token: PoolToken;
  upperBoundPercentage: Scalars["BigDecimal"]["output"];
}

export interface CircuitBreaker_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CircuitBreaker_Filter>>>;
  bptPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  bptPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bptPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lowerBoundPercentage?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  lowerBoundPercentage_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerBoundPercentage_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  or?: InputMaybe<Array<InputMaybe<CircuitBreaker_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<PoolToken_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  upperBoundPercentage?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  upperBoundPercentage_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperBoundPercentage_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
}

export enum CircuitBreaker_OrderBy {
  BptPrice = "bptPrice",
  Id = "id",
  LowerBoundPercentage = "lowerBoundPercentage",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
  Token = "token",
  TokenAddress = "token__address",
  TokenAssetManager = "token__assetManager",
  TokenBalance = "token__balance",
  TokenCashBalance = "token__cashBalance",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenIndex = "token__index",
  TokenIsExemptFromYieldProtocolFee = "token__isExemptFromYieldProtocolFee",
  TokenManagedBalance = "token__managedBalance",
  TokenName = "token__name",
  TokenOldPriceRate = "token__oldPriceRate",
  TokenPaidProtocolFees = "token__paidProtocolFees",
  TokenPriceRate = "token__priceRate",
  TokenSymbol = "token__symbol",
  TokenWeight = "token__weight",
  UpperBoundPercentage = "upperBoundPercentage",
}

export interface FactoryPoolData {
  __typename?: "FactoryPoolData";
  /**
   * Timestamp at which the pool was added
   *
   */
  addedAt?: Maybe<Scalars["Int"]["output"]>;
  balancerPoolId?: Maybe<Scalars["Bytes"]["output"]>;
  gauge: Scalars["Bytes"]["output"];
  /**
   * {pool.id}
   *
   */
  id: Scalars["ID"]["output"];
  isShutdown: Scalars["Boolean"]["output"];
  pool: Pool;
  stash: Scalars["Bytes"]["output"];
}

export interface FactoryPoolData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedAt?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_gt?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_gte?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  addedAt_lt?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_lte?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_not?: InputMaybe<Scalars["Int"]["input"]>;
  addedAt_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  balancerPoolId?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  balancerPoolId_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  gauge?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  gauge_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isShutdown?: InputMaybe<Scalars["Boolean"]["input"]>;
  isShutdown_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isShutdown_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isShutdown_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stash?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  stash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum FactoryPoolData_OrderBy {
  AddedAt = "addedAt",
  BalancerPoolId = "balancerPoolId",
  Gauge = "gauge",
  Id = "id",
  IsShutdown = "isShutdown",
  Pool = "pool",
  Stash = "stash",
}

export interface Gauge {
  __typename?: "Gauge";
  /**
   * gauge.balanceOf(auraProxy)
   *
   */
  balance: Scalars["BigInt"]["output"];
  /**
   * Address
   *
   */
  id: Scalars["ID"]["output"];
  pool?: Maybe<Pool>;
  totalSupply: Scalars["BigInt"]["output"];
  workingSupply: Scalars["BigInt"]["output"];
}

export interface Gauge_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  workingSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  workingSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  workingSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
}

export enum Gauge_OrderBy {
  Balance = "balance",
  Id = "id",
  Pool = "pool",
  TotalSupply = "totalSupply",
  WorkingSupply = "workingSupply",
}

export interface Global {
  __typename?: "Global";
  aura: Scalars["Bytes"]["output"];
  auraBalTotalSupply: Scalars["BigInt"]["output"];
  auraMaxSupply: Scalars["BigInt"]["output"];
  auraMinter: Scalars["Bytes"]["output"];
  auraMinterMinted: Scalars["BigInt"]["output"];
  auraReductionPerCliff: Scalars["BigInt"]["output"];
  auraTotalCliffs: Scalars["BigInt"]["output"];
  auraTotalSupply: Scalars["BigInt"]["output"];
  booster: Scalars["Bytes"]["output"];
  earmarkIncentive: Scalars["BigInt"]["output"];
  /**
   * Singleton: "global"
   *
   */
  id: Scalars["ID"]["output"];
  lockIncentive: Scalars["BigInt"]["output"];
  platformFee: Scalars["BigInt"]["output"];
  stakerIncentive: Scalars["BigInt"]["output"];
  voteDelegate: Scalars["Bytes"]["output"];
}

export interface Global_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aura?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraBalTotalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraBalTotalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraBalTotalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraMaxSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraMaxSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMaxSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraMinter?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinterMinted?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraMinterMinted_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraMinterMinted_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraMinter_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auraMinter_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auraReductionPerCliff?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraReductionPerCliff_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraReductionPerCliff_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraTotalCliffs?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraTotalCliffs_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalCliffs_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraTotalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraTotalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  auraTotalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  aura_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  aura_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  booster?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  booster_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  earmarkIncentive?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  earmarkIncentive_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  earmarkIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lockIncentive?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lockIncentive_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  platformFee?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  platformFee_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  platformFee_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  stakerIncentive?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  stakerIncentive_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakerIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  voteDelegate?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  voteDelegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum Global_OrderBy {
  Aura = "aura",
  AuraBalTotalSupply = "auraBalTotalSupply",
  AuraMaxSupply = "auraMaxSupply",
  AuraMinter = "auraMinter",
  AuraMinterMinted = "auraMinterMinted",
  AuraReductionPerCliff = "auraReductionPerCliff",
  AuraTotalCliffs = "auraTotalCliffs",
  AuraTotalSupply = "auraTotalSupply",
  Booster = "booster",
  EarmarkIncentive = "earmarkIncentive",
  Id = "id",
  LockIncentive = "lockIncentive",
  PlatformFee = "platformFee",
  StakerIncentive = "stakerIncentive",
  VoteDelegate = "voteDelegate",
}

export interface GqlBalancePoolAprItem {
  __typename?: "GqlBalancePoolAprItem";
  apr: GqlPoolAprValue;
  id: Scalars["ID"]["output"];
  subItems?: Maybe<Array<GqlBalancePoolAprSubItem>>;
  title: Scalars["String"]["output"];
}

export interface GqlBalancePoolAprSubItem {
  __typename?: "GqlBalancePoolAprSubItem";
  apr: GqlPoolAprValue;
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
}

export enum GqlChain {
  Arbitrum = "ARBITRUM",
  Avalanche = "AVALANCHE",
  Fantom = "FANTOM",
  Gnosis = "GNOSIS",
  Mainnet = "MAINNET",
  Optimism = "OPTIMISM",
  Polygon = "POLYGON",
  Zkevm = "ZKEVM",
}

export interface GqlContentNewsItem {
  __typename?: "GqlContentNewsItem";
  discussionUrl?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  source: GqlContentNewsItemSource;
  text: Scalars["String"]["output"];
  timestamp: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
}

export enum GqlContentNewsItemSource {
  Discord = "discord",
  Medium = "medium",
  Twitter = "twitter",
}

export interface GqlFeaturePoolGroupItemExternalLink {
  __typename?: "GqlFeaturePoolGroupItemExternalLink";
  buttonText: Scalars["String"]["output"];
  buttonUrl: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
}

export interface GqlHistoricalTokenPrice {
  __typename?: "GqlHistoricalTokenPrice";
  address: Scalars["String"]["output"];
  prices: Array<GqlHistoricalTokenPriceEntry>;
}

export interface GqlHistoricalTokenPriceEntry {
  __typename?: "GqlHistoricalTokenPriceEntry";
  price: Scalars["Float"]["output"];
  timestamp: Scalars["String"]["output"];
}

export interface GqlLatestSyncedBlocks {
  __typename?: "GqlLatestSyncedBlocks";
  poolSyncBlock: Scalars["BigInt"]["output"];
  userStakeSyncBlock: Scalars["BigInt"]["output"];
  userWalletSyncBlock: Scalars["BigInt"]["output"];
}

export interface GqlLge {
  __typename?: "GqlLge";
  address: Scalars["String"]["output"];
  adminAddress: Scalars["String"]["output"];
  adminIsMultisig: Scalars["Boolean"]["output"];
  bannerImageUrl: Scalars["String"]["output"];
  collateralAddress: Scalars["String"]["output"];
  collateralAmount: Scalars["String"]["output"];
  collateralDecimals: Scalars["Int"]["output"];
  collateralEndWeight: Scalars["Int"]["output"];
  collateralStartWeight: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  discordUrl: Scalars["String"]["output"];
  endTimestamp: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  mediumUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  startTimestamp: Scalars["Int"]["output"];
  swapFee: Scalars["String"]["output"];
  telegramUrl: Scalars["String"]["output"];
  tokenAddress: Scalars["String"]["output"];
  tokenAmount: Scalars["String"]["output"];
  tokenDecimals: Scalars["Int"]["output"];
  tokenEndWeight: Scalars["Int"]["output"];
  tokenIconUrl: Scalars["String"]["output"];
  tokenStartWeight: Scalars["Int"]["output"];
  tokenSymbol: Scalars["String"]["output"];
  twitterUrl: Scalars["String"]["output"];
  websiteUrl: Scalars["String"]["output"];
}

export interface GqlLgeCreateInput {
  address: Scalars["String"]["input"];
  bannerImageUrl: Scalars["String"]["input"];
  collateralAddress: Scalars["String"]["input"];
  collateralAmount: Scalars["String"]["input"];
  collateralEndWeight: Scalars["Int"]["input"];
  collateralStartWeight: Scalars["Int"]["input"];
  description: Scalars["String"]["input"];
  discordUrl: Scalars["String"]["input"];
  endTimestamp: Scalars["Int"]["input"];
  id: Scalars["ID"]["input"];
  mediumUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  startTimestamp: Scalars["Int"]["input"];
  swapFee: Scalars["String"]["input"];
  telegramUrl: Scalars["String"]["input"];
  tokenAddress: Scalars["String"]["input"];
  tokenAmount: Scalars["String"]["input"];
  tokenEndWeight: Scalars["Int"]["input"];
  tokenIconUrl: Scalars["String"]["input"];
  tokenStartWeight: Scalars["Int"]["input"];
  twitterUrl: Scalars["String"]["input"];
  websiteUrl: Scalars["String"]["input"];
}

export interface GqlLgePriceData {
  __typename?: "GqlLgePriceData";
  price: Scalars["Float"]["output"];
  timestamp: Scalars["Int"]["output"];
  type: Scalars["String"]["output"];
}

export interface GqlLgeUpdateInput {
  description: Scalars["String"]["input"];
  discordUrl: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  mediumUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  telegramUrl: Scalars["String"]["input"];
  tokenIconUrl: Scalars["String"]["input"];
  twitterUrl: Scalars["String"]["input"];
  websiteUrl: Scalars["String"]["input"];
}

export interface GqlPoolApr {
  __typename?: "GqlPoolApr";
  apr: GqlPoolAprValue;
  hasRewardApr: Scalars["Boolean"]["output"];
  items: Array<GqlBalancePoolAprItem>;
  nativeRewardApr: GqlPoolAprValue;
  swapApr: Scalars["BigDecimal"]["output"];
  thirdPartyApr: GqlPoolAprValue;
}

export interface GqlPoolAprRange {
  __typename?: "GqlPoolAprRange";
  max: Scalars["BigDecimal"]["output"];
  min: Scalars["BigDecimal"]["output"];
}

export interface GqlPoolAprTotal {
  __typename?: "GqlPoolAprTotal";
  total: Scalars["BigDecimal"]["output"];
}

export type GqlPoolAprValue = GqlPoolAprRange | GqlPoolAprTotal;

export interface GqlPoolBase {
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolBatchSwap {
  __typename?: "GqlPoolBatchSwap";
  id: Scalars["ID"]["output"];
  swaps: Array<GqlPoolBatchSwapSwap>;
  timestamp: Scalars["Int"]["output"];
  tokenAmountIn: Scalars["String"]["output"];
  tokenAmountOut: Scalars["String"]["output"];
  tokenIn: Scalars["String"]["output"];
  tokenInPrice: Scalars["Float"]["output"];
  tokenOut: Scalars["String"]["output"];
  tokenOutPrice: Scalars["Float"]["output"];
  tx: Scalars["String"]["output"];
  userAddress: Scalars["String"]["output"];
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolBatchSwapPool {
  __typename?: "GqlPoolBatchSwapPool";
  id: Scalars["ID"]["output"];
  tokens: Array<Scalars["String"]["output"]>;
}

export interface GqlPoolBatchSwapSwap {
  __typename?: "GqlPoolBatchSwapSwap";
  id: Scalars["ID"]["output"];
  pool: GqlPoolMinimal;
  timestamp: Scalars["Int"]["output"];
  tokenAmountIn: Scalars["String"]["output"];
  tokenAmountOut: Scalars["String"]["output"];
  tokenIn: Scalars["String"]["output"];
  tokenOut: Scalars["String"]["output"];
  tx: Scalars["String"]["output"];
  userAddress: Scalars["String"]["output"];
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolDynamicData {
  __typename?: "GqlPoolDynamicData";
  apr: GqlPoolApr;
  fees24h: Scalars["BigDecimal"]["output"];
  fees24hAth: Scalars["BigDecimal"]["output"];
  fees24hAthTimestamp: Scalars["Int"]["output"];
  fees24hAtl: Scalars["BigDecimal"]["output"];
  fees24hAtlTimestamp: Scalars["Int"]["output"];
  fees48h: Scalars["BigDecimal"]["output"];
  holdersCount: Scalars["BigInt"]["output"];
  lifetimeSwapFees: Scalars["BigDecimal"]["output"];
  lifetimeVolume: Scalars["BigDecimal"]["output"];
  poolId: Scalars["ID"]["output"];
  sharePriceAth: Scalars["BigDecimal"]["output"];
  sharePriceAthTimestamp: Scalars["Int"]["output"];
  sharePriceAtl: Scalars["BigDecimal"]["output"];
  sharePriceAtlTimestamp: Scalars["Int"]["output"];
  swapEnabled: Scalars["Boolean"]["output"];
  swapFee: Scalars["BigDecimal"]["output"];
  swapsCount: Scalars["BigInt"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalLiquidity24hAgo: Scalars["BigDecimal"]["output"];
  totalLiquidityAth: Scalars["BigDecimal"]["output"];
  totalLiquidityAthTimestamp: Scalars["Int"]["output"];
  totalLiquidityAtl: Scalars["BigDecimal"]["output"];
  totalLiquidityAtlTimestamp: Scalars["Int"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
  totalShares24hAgo: Scalars["BigDecimal"]["output"];
  volume24h: Scalars["BigDecimal"]["output"];
  volume24hAth: Scalars["BigDecimal"]["output"];
  volume24hAthTimestamp: Scalars["Int"]["output"];
  volume24hAtl: Scalars["BigDecimal"]["output"];
  volume24hAtlTimestamp: Scalars["Int"]["output"];
  volume48h: Scalars["BigDecimal"]["output"];
  yieldCapture24h: Scalars["BigDecimal"]["output"];
  yieldCapture48h: Scalars["BigDecimal"]["output"];
}

export interface GqlPoolElement extends GqlPoolBase {
  __typename?: "GqlPoolElement";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  baseToken: Scalars["Bytes"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  principalToken: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  unitSeconds: Scalars["BigInt"]["output"];
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolFeaturedPoolGroup {
  __typename?: "GqlPoolFeaturedPoolGroup";
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  items: Array<GqlPoolFeaturedPoolGroupItem>;
  title: Scalars["String"]["output"];
}

export type GqlPoolFeaturedPoolGroupItem =
  | GqlFeaturePoolGroupItemExternalLink
  | GqlPoolMinimal;

export interface GqlPoolFilter {
  categoryIn?: InputMaybe<Array<GqlPoolFilterCategory>>;
  categoryNotIn?: InputMaybe<Array<GqlPoolFilterCategory>>;
  chainIn?: InputMaybe<Array<GqlChain>>;
  chainNotIn?: InputMaybe<Array<GqlChain>>;
  filterIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  filterNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  idIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  idNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolTypeIn?: InputMaybe<Array<GqlPoolFilterType>>;
  poolTypeNotIn?: InputMaybe<Array<GqlPoolFilterType>>;
  tokensIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokensNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export enum GqlPoolFilterCategory {
  BlackListed = "BLACK_LISTED",
  Incentivized = "INCENTIVIZED",
}

export interface GqlPoolFilterDefinition {
  __typename?: "GqlPoolFilterDefinition";
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
}

export enum GqlPoolFilterType {
  Element = "ELEMENT",
  Gyro = "GYRO",
  Gyro3 = "GYRO3",
  Gyroe = "GYROE",
  Investment = "INVESTMENT",
  Linear = "LINEAR",
  LiquidityBootstrapping = "LIQUIDITY_BOOTSTRAPPING",
  MetaStable = "META_STABLE",
  PhantomStable = "PHANTOM_STABLE",
  Stable = "STABLE",
  Unknown = "UNKNOWN",
  Weighted = "WEIGHTED",
}

export interface GqlPoolGyro extends GqlPoolBase {
  __typename?: "GqlPoolGyro";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  alpha: Scalars["String"]["output"];
  beta: Scalars["String"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  nestingType: GqlPoolNestingType;
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolTokenUnion>;
  type: Scalars["String"]["output"];
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolInvestConfig {
  __typename?: "GqlPoolInvestConfig";
  options: Array<GqlPoolInvestOption>;
  proportionalEnabled: Scalars["Boolean"]["output"];
  singleAssetEnabled: Scalars["Boolean"]["output"];
}

export interface GqlPoolInvestOption {
  __typename?: "GqlPoolInvestOption";
  poolTokenAddress: Scalars["String"]["output"];
  poolTokenIndex: Scalars["Int"]["output"];
  tokenOptions: Array<GqlPoolToken>;
}

export interface GqlPoolJoinExit {
  __typename?: "GqlPoolJoinExit";
  amounts: Array<GqlPoolJoinExitAmount>;
  id: Scalars["ID"]["output"];
  poolId: Scalars["String"]["output"];
  sender: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
  tx: Scalars["String"]["output"];
  type: GqlPoolJoinExitType;
  valueUSD?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlPoolJoinExitAmount {
  __typename?: "GqlPoolJoinExitAmount";
  address: Scalars["String"]["output"];
  amount: Scalars["String"]["output"];
}

export interface GqlPoolJoinExitFilter {
  poolIdIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export enum GqlPoolJoinExitType {
  Exit = "Exit",
  Join = "Join",
}

export interface GqlPoolLinear extends GqlPoolBase {
  __typename?: "GqlPoolLinear";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  bptPriceRate: Scalars["BigDecimal"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  lowerTarget: Scalars["BigInt"]["output"];
  mainIndex: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  upperTarget: Scalars["BigInt"]["output"];
  withdrawConfig: GqlPoolWithdrawConfig;
  wrappedIndex: Scalars["Int"]["output"];
}

export interface GqlPoolLinearNested {
  __typename?: "GqlPoolLinearNested";
  address: Scalars["Bytes"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  createTime: Scalars["Int"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  lowerTarget: Scalars["BigInt"]["output"];
  mainIndex: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
  upperTarget: Scalars["BigInt"]["output"];
  wrappedIndex: Scalars["Int"]["output"];
}

export interface GqlPoolLinearPoolData {
  __typename?: "GqlPoolLinearPoolData";
  address: Scalars["String"]["output"];
  balance: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  mainToken: GqlPoolLinearPoolMainToken;
  mainTokenTotalBalance: Scalars["String"]["output"];
  poolToken: Scalars["String"]["output"];
  priceRate: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply: Scalars["String"]["output"];
  unwrappedTokenAddress: Scalars["String"]["output"];
  wrappedToken: GqlPoolLinearPoolWrappedToken;
}

export interface GqlPoolLinearPoolMainToken {
  __typename?: "GqlPoolLinearPoolMainToken";
  address: Scalars["String"]["output"];
  balance: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply: Scalars["String"]["output"];
}

export interface GqlPoolLinearPoolWrappedToken {
  __typename?: "GqlPoolLinearPoolWrappedToken";
  address: Scalars["String"]["output"];
  balance: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  priceRate: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply: Scalars["String"]["output"];
}

export interface GqlPoolLiquidityBootstrapping extends GqlPoolBase {
  __typename?: "GqlPoolLiquidityBootstrapping";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  nestingType: GqlPoolNestingType;
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolTokenUnion>;
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolMetaStable extends GqlPoolBase {
  __typename?: "GqlPoolMetaStable";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolMinimal {
  __typename?: "GqlPoolMinimal";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  type: GqlPoolMinimalType;
  version: Scalars["Int"]["output"];
}

export enum GqlPoolMinimalType {
  Element = "ELEMENT",
  Gyro = "GYRO",
  Gyro3 = "GYRO3",
  Gyroe = "GYROE",
  Investment = "INVESTMENT",
  Linear = "LINEAR",
  LiquidityBootstrapping = "LIQUIDITY_BOOTSTRAPPING",
  MetaStable = "META_STABLE",
  PhantomStable = "PHANTOM_STABLE",
  Stable = "STABLE",
  Unknown = "UNKNOWN",
  Weighted = "WEIGHTED",
}

export type GqlPoolNestedUnion =
  | GqlPoolLinearNested
  | GqlPoolPhantomStableNested;

export enum GqlPoolNestingType {
  HasOnlyPhantomBpt = "HAS_ONLY_PHANTOM_BPT",
  HasSomePhantomBpt = "HAS_SOME_PHANTOM_BPT",
  NoNesting = "NO_NESTING",
}

export enum GqlPoolOrderBy {
  Apr = "apr",
  Fees24h = "fees24h",
  TotalLiquidity = "totalLiquidity",
  TotalShares = "totalShares",
  Volume24h = "volume24h",
}

export enum GqlPoolOrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export interface GqlPoolPhantomStable extends GqlPoolBase {
  __typename?: "GqlPoolPhantomStable";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  nestingType: GqlPoolNestingType;
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolTokenUnion>;
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolPhantomStableNested {
  __typename?: "GqlPoolPhantomStableNested";
  address: Scalars["Bytes"]["output"];
  amp: Scalars["BigInt"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  createTime: Scalars["Int"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  nestingType: GqlPoolNestingType;
  owner: Scalars["Bytes"]["output"];
  swapFee: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolTokenPhantomStableNestedUnion>;
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
}

export interface GqlPoolSnapshot {
  __typename?: "GqlPoolSnapshot";
  amounts: Array<Scalars["String"]["output"]>;
  fees24h: Scalars["String"]["output"];
  holdersCount: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Scalars["String"]["output"];
  sharePrice: Scalars["String"]["output"];
  swapsCount: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
  totalLiquidity: Scalars["String"]["output"];
  totalShares: Scalars["String"]["output"];
  totalSwapFee: Scalars["String"]["output"];
  totalSwapVolume: Scalars["String"]["output"];
  volume24h: Scalars["String"]["output"];
}

export enum GqlPoolSnapshotDataRange {
  AllTime = "ALL_TIME",
  NinetyDays = "NINETY_DAYS",
  OneHundredEightyDays = "ONE_HUNDRED_EIGHTY_DAYS",
  OneYear = "ONE_YEAR",
  ThirtyDays = "THIRTY_DAYS",
}

export interface GqlPoolStable extends GqlPoolBase {
  __typename?: "GqlPoolStable";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolStablePhantomPoolData {
  __typename?: "GqlPoolStablePhantomPoolData";
  address: Scalars["String"]["output"];
  balance: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolToken>;
  totalSupply: Scalars["String"]["output"];
}

export interface GqlPoolStaking {
  __typename?: "GqlPoolStaking";
  address: Scalars["String"]["output"];
  farm?: Maybe<GqlPoolStakingMasterChefFarm>;
  gauge?: Maybe<GqlPoolStakingGauge>;
  id: Scalars["ID"]["output"];
  reliquary?: Maybe<GqlPoolStakingReliquaryFarm>;
  type: GqlPoolStakingType;
}

export interface GqlPoolStakingFarmRewarder {
  __typename?: "GqlPoolStakingFarmRewarder";
  address: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  rewardPerSecond: Scalars["String"]["output"];
  tokenAddress: Scalars["String"]["output"];
}

export interface GqlPoolStakingGauge {
  __typename?: "GqlPoolStakingGauge";
  gaugeAddress: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  otherGauges?: Maybe<Array<GqlPoolStakingOtherGauge>>;
  rewards: Array<GqlPoolStakingGaugeReward>;
  status: GqlPoolStakingGaugeStatus;
  version: Scalars["Int"]["output"];
}

export interface GqlPoolStakingGaugeReward {
  __typename?: "GqlPoolStakingGaugeReward";
  id: Scalars["ID"]["output"];
  rewardPerSecond: Scalars["String"]["output"];
  tokenAddress: Scalars["String"]["output"];
}

export enum GqlPoolStakingGaugeStatus {
  Active = "ACTIVE",
  Killed = "KILLED",
  Preferred = "PREFERRED",
}

export interface GqlPoolStakingMasterChefFarm {
  __typename?: "GqlPoolStakingMasterChefFarm";
  beetsPerBlock: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  rewarders?: Maybe<Array<GqlPoolStakingFarmRewarder>>;
}

export interface GqlPoolStakingOtherGauge {
  __typename?: "GqlPoolStakingOtherGauge";
  gaugeAddress: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  rewards: Array<GqlPoolStakingGaugeReward>;
  status: GqlPoolStakingGaugeStatus;
  version: Scalars["Int"]["output"];
}

export interface GqlPoolStakingReliquaryFarm {
  __typename?: "GqlPoolStakingReliquaryFarm";
  beetsPerSecond: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  levels?: Maybe<Array<GqlPoolStakingReliquaryFarmLevel>>;
  totalBalance: Scalars["String"]["output"];
  totalWeightedBalance: Scalars["String"]["output"];
}

export interface GqlPoolStakingReliquaryFarmLevel {
  __typename?: "GqlPoolStakingReliquaryFarmLevel";
  allocationPoints: Scalars["Int"]["output"];
  apr: Scalars["BigDecimal"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  requiredMaturity: Scalars["Int"]["output"];
}

export enum GqlPoolStakingType {
  FreshBeets = "FRESH_BEETS",
  Gauge = "GAUGE",
  MasterChef = "MASTER_CHEF",
  Reliquary = "RELIQUARY",
}

export interface GqlPoolSwap {
  __typename?: "GqlPoolSwap";
  id: Scalars["ID"]["output"];
  poolId: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
  tokenAmountIn: Scalars["String"]["output"];
  tokenAmountOut: Scalars["String"]["output"];
  tokenIn: Scalars["String"]["output"];
  tokenOut: Scalars["String"]["output"];
  tx: Scalars["String"]["output"];
  userAddress: Scalars["String"]["output"];
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolSwapFilter {
  poolIdIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenOutIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export interface GqlPoolToken extends GqlPoolTokenBase {
  __typename?: "GqlPoolToken";
  address: Scalars["String"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  priceRate: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface GqlPoolTokenBase {
  address: Scalars["String"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  priceRate: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface GqlPoolTokenDisplay {
  __typename?: "GqlPoolTokenDisplay";
  address: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  nestedTokens?: Maybe<Array<GqlPoolTokenDisplay>>;
  symbol: Scalars["String"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface GqlPoolTokenExpanded {
  __typename?: "GqlPoolTokenExpanded";
  address: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  isMainToken: Scalars["Boolean"]["output"];
  isNested: Scalars["Boolean"]["output"];
  isPhantomBpt: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  weight?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlPoolTokenLinear extends GqlPoolTokenBase {
  __typename?: "GqlPoolTokenLinear";
  address: Scalars["String"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  mainTokenBalance: Scalars["BigDecimal"]["output"];
  name: Scalars["String"]["output"];
  pool: GqlPoolLinearNested;
  priceRate: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  totalMainTokenBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
  wrappedTokenBalance: Scalars["BigDecimal"]["output"];
}

export interface GqlPoolTokenPhantomStable extends GqlPoolTokenBase {
  __typename?: "GqlPoolTokenPhantomStable";
  address: Scalars["String"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  pool: GqlPoolPhantomStableNested;
  priceRate: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export type GqlPoolTokenPhantomStableNestedUnion =
  | GqlPoolToken
  | GqlPoolTokenLinear;

export type GqlPoolTokenUnion =
  | GqlPoolToken
  | GqlPoolTokenLinear
  | GqlPoolTokenPhantomStable;

export type GqlPoolUnion =
  | GqlPoolElement
  | GqlPoolGyro
  | GqlPoolLinear
  | GqlPoolLiquidityBootstrapping
  | GqlPoolMetaStable
  | GqlPoolPhantomStable
  | GqlPoolStable
  | GqlPoolWeighted;

export interface GqlPoolUserSwapVolume {
  __typename?: "GqlPoolUserSwapVolume";
  swapVolumeUSD: Scalars["BigDecimal"]["output"];
  userAddress: Scalars["String"]["output"];
}

export interface GqlPoolWeighted extends GqlPoolBase {
  __typename?: "GqlPoolWeighted";
  address: Scalars["Bytes"]["output"];
  allTokens: Array<GqlPoolTokenExpanded>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  investConfig: GqlPoolInvestConfig;
  name: Scalars["String"]["output"];
  nestingType: GqlPoolNestingType;
  owner: Scalars["Bytes"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  symbol: Scalars["String"]["output"];
  tokens: Array<GqlPoolTokenUnion>;
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolWithdrawConfig {
  __typename?: "GqlPoolWithdrawConfig";
  options: Array<GqlPoolWithdrawOption>;
  proportionalEnabled: Scalars["Boolean"]["output"];
  singleAssetEnabled: Scalars["Boolean"]["output"];
}

export interface GqlPoolWithdrawOption {
  __typename?: "GqlPoolWithdrawOption";
  poolTokenAddress: Scalars["String"]["output"];
  poolTokenIndex: Scalars["Int"]["output"];
  tokenOptions: Array<GqlPoolToken>;
}

export interface GqlProtocolMetricsAggregated {
  __typename?: "GqlProtocolMetricsAggregated";
  chains: Array<GqlProtocolMetricsChain>;
  numLiquidityProviders: Scalars["BigInt"]["output"];
  poolCount: Scalars["BigInt"]["output"];
  swapFee7d: Scalars["BigDecimal"]["output"];
  swapFee24h: Scalars["BigDecimal"]["output"];
  swapVolume7d: Scalars["BigDecimal"]["output"];
  swapVolume24h: Scalars["BigDecimal"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
  yieldCapture24h: Scalars["BigDecimal"]["output"];
}

export interface GqlProtocolMetricsChain {
  __typename?: "GqlProtocolMetricsChain";
  chainId: Scalars["String"]["output"];
  numLiquidityProviders: Scalars["BigInt"]["output"];
  poolCount: Scalars["BigInt"]["output"];
  swapFee7d: Scalars["BigDecimal"]["output"];
  swapFee24h: Scalars["BigDecimal"]["output"];
  swapVolume7d: Scalars["BigDecimal"]["output"];
  swapVolume24h: Scalars["BigDecimal"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
  yieldCapture24h: Scalars["BigDecimal"]["output"];
}

export interface GqlRelicSnapshot {
  __typename?: "GqlRelicSnapshot";
  balance: Scalars["String"]["output"];
  entryTimestamp: Scalars["Int"]["output"];
  farmId: Scalars["String"]["output"];
  level: Scalars["Int"]["output"];
  relicId: Scalars["Int"]["output"];
}

export interface GqlReliquaryFarmLevelSnapshot {
  __typename?: "GqlReliquaryFarmLevelSnapshot";
  balance: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  level: Scalars["String"]["output"];
}

export interface GqlReliquaryFarmSnapshot {
  __typename?: "GqlReliquaryFarmSnapshot";
  dailyDeposited: Scalars["String"]["output"];
  dailyWithdrawn: Scalars["String"]["output"];
  farmId: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  levelBalances: Array<GqlReliquaryFarmLevelSnapshot>;
  relicCount: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
  tokenBalances: Array<GqlReliquaryTokenBalanceSnapshot>;
  totalBalance: Scalars["String"]["output"];
  totalLiquidity: Scalars["String"]["output"];
  userCount: Scalars["String"]["output"];
}

export interface GqlReliquaryTokenBalanceSnapshot {
  __typename?: "GqlReliquaryTokenBalanceSnapshot";
  address: Scalars["String"]["output"];
  balance: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
}

export interface GqlSorGetBatchSwapForTokensInResponse {
  __typename?: "GqlSorGetBatchSwapForTokensInResponse";
  assets: Array<Scalars["String"]["output"]>;
  swaps: Array<GqlSorSwap>;
  tokenOutAmount: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlSorGetSwapsResponse {
  __typename?: "GqlSorGetSwapsResponse";
  effectivePrice: Scalars["AmountHumanReadable"]["output"];
  effectivePriceReversed: Scalars["AmountHumanReadable"]["output"];
  marketSp: Scalars["String"]["output"];
  priceImpact: Scalars["AmountHumanReadable"]["output"];
  returnAmount: Scalars["AmountHumanReadable"]["output"];
  returnAmountConsideringFees: Scalars["BigDecimal"]["output"];
  returnAmountFromSwaps?: Maybe<Scalars["BigDecimal"]["output"]>;
  returnAmountScaled: Scalars["BigDecimal"]["output"];
  routes: Array<GqlSorSwapRoute>;
  swapAmount: Scalars["AmountHumanReadable"]["output"];
  swapAmountForSwaps?: Maybe<Scalars["BigDecimal"]["output"]>;
  swapAmountScaled: Scalars["BigDecimal"]["output"];
  swapType: GqlSorSwapType;
  swaps: Array<GqlSorSwap>;
  tokenAddresses: Array<Scalars["String"]["output"]>;
  tokenIn: Scalars["String"]["output"];
  tokenInAmount: Scalars["AmountHumanReadable"]["output"];
  tokenOut: Scalars["String"]["output"];
  tokenOutAmount: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlSorSwap {
  __typename?: "GqlSorSwap";
  amount: Scalars["String"]["output"];
  assetInIndex: Scalars["Int"]["output"];
  assetOutIndex: Scalars["Int"]["output"];
  poolId: Scalars["String"]["output"];
  userData: Scalars["String"]["output"];
}

export interface GqlSorSwapOptionsInput {
  forceRefresh?: InputMaybe<Scalars["Boolean"]["input"]>;
  maxPools?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface GqlSorSwapRoute {
  __typename?: "GqlSorSwapRoute";
  hops: Array<GqlSorSwapRouteHop>;
  share: Scalars["Float"]["output"];
  tokenIn: Scalars["String"]["output"];
  tokenInAmount: Scalars["BigDecimal"]["output"];
  tokenOut: Scalars["String"]["output"];
  tokenOutAmount: Scalars["BigDecimal"]["output"];
}

export interface GqlSorSwapRouteHop {
  __typename?: "GqlSorSwapRouteHop";
  pool: GqlPoolMinimal;
  poolId: Scalars["String"]["output"];
  tokenIn: Scalars["String"]["output"];
  tokenInAmount: Scalars["BigDecimal"]["output"];
  tokenOut: Scalars["String"]["output"];
  tokenOutAmount: Scalars["BigDecimal"]["output"];
}

export enum GqlSorSwapType {
  ExactIn = "EXACT_IN",
  ExactOut = "EXACT_OUT",
}

export interface GqlToken {
  __typename?: "GqlToken";
  address: Scalars["String"]["output"];
  chainId: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  discordUrl?: Maybe<Scalars["String"]["output"]>;
  logoURI?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  priority: Scalars["Int"]["output"];
  symbol: Scalars["String"]["output"];
  telegramUrl?: Maybe<Scalars["String"]["output"]>;
  tradable: Scalars["Boolean"]["output"];
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlTokenAmountHumanReadable {
  address: Scalars["String"]["input"];
  amount: Scalars["AmountHumanReadable"]["input"];
}

export interface GqlTokenCandlestickChartDataItem {
  __typename?: "GqlTokenCandlestickChartDataItem";
  close: Scalars["AmountHumanReadable"]["output"];
  high: Scalars["AmountHumanReadable"]["output"];
  id: Scalars["ID"]["output"];
  low: Scalars["AmountHumanReadable"]["output"];
  open: Scalars["AmountHumanReadable"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export enum GqlTokenChartDataRange {
  SevenDay = "SEVEN_DAY",
  ThirtyDay = "THIRTY_DAY",
}

export interface GqlTokenData {
  __typename?: "GqlTokenData";
  description?: Maybe<Scalars["String"]["output"]>;
  discordUrl?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  telegramUrl?: Maybe<Scalars["String"]["output"]>;
  tokenAddress: Scalars["String"]["output"];
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlTokenDynamicData {
  __typename?: "GqlTokenDynamicData";
  ath: Scalars["Float"]["output"];
  atl: Scalars["Float"]["output"];
  fdv?: Maybe<Scalars["String"]["output"]>;
  high24h: Scalars["Float"]["output"];
  id: Scalars["String"]["output"];
  low24h: Scalars["Float"]["output"];
  marketCap?: Maybe<Scalars["String"]["output"]>;
  price: Scalars["Float"]["output"];
  priceChange24h: Scalars["Float"]["output"];
  priceChangePercent7d?: Maybe<Scalars["Float"]["output"]>;
  priceChangePercent14d?: Maybe<Scalars["Float"]["output"]>;
  priceChangePercent24h: Scalars["Float"]["output"];
  priceChangePercent30d?: Maybe<Scalars["Float"]["output"]>;
  tokenAddress: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
}

export interface GqlTokenPrice {
  __typename?: "GqlTokenPrice";
  address: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
}

export interface GqlTokenPriceChartDataItem {
  __typename?: "GqlTokenPriceChartDataItem";
  id: Scalars["ID"]["output"];
  price: Scalars["AmountHumanReadable"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export enum GqlTokenType {
  Bpt = "BPT",
  LinearWrappedToken = "LINEAR_WRAPPED_TOKEN",
  PhantomBpt = "PHANTOM_BPT",
  WhiteListed = "WHITE_LISTED",
}

export interface GqlUserFbeetsBalance {
  __typename?: "GqlUserFbeetsBalance";
  id: Scalars["String"]["output"];
  stakedBalance: Scalars["AmountHumanReadable"]["output"];
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  walletBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlUserPoolBalance {
  __typename?: "GqlUserPoolBalance";
  poolId: Scalars["String"]["output"];
  stakedBalance: Scalars["AmountHumanReadable"]["output"];
  tokenAddress: Scalars["String"]["output"];
  tokenPrice: Scalars["Float"]["output"];
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  walletBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlUserPoolSnapshot {
  __typename?: "GqlUserPoolSnapshot";
  farmBalance: Scalars["AmountHumanReadable"]["output"];
  fees24h: Scalars["AmountHumanReadable"]["output"];
  gaugeBalance: Scalars["AmountHumanReadable"]["output"];
  percentShare: Scalars["Float"]["output"];
  timestamp: Scalars["Int"]["output"];
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  totalValueUSD: Scalars["AmountHumanReadable"]["output"];
  walletBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlUserPortfolioSnapshot {
  __typename?: "GqlUserPortfolioSnapshot";
  farmBalance: Scalars["AmountHumanReadable"]["output"];
  fees24h: Scalars["AmountHumanReadable"]["output"];
  gaugeBalance: Scalars["AmountHumanReadable"]["output"];
  pools: Array<GqlUserPoolSnapshot>;
  timestamp: Scalars["Int"]["output"];
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  totalFees: Scalars["AmountHumanReadable"]["output"];
  totalValueUSD: Scalars["AmountHumanReadable"]["output"];
  walletBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlUserRelicSnapshot {
  __typename?: "GqlUserRelicSnapshot";
  relicCount: Scalars["Int"]["output"];
  relicSnapshots: Array<GqlRelicSnapshot>;
  timestamp: Scalars["Int"]["output"];
  totalBalance: Scalars["String"]["output"];
}

export enum GqlUserSnapshotDataRange {
  AllTime = "ALL_TIME",
  NinetyDays = "NINETY_DAYS",
  OneHundredEightyDays = "ONE_HUNDRED_EIGHTY_DAYS",
  OneYear = "ONE_YEAR",
  ThirtyDays = "THIRTY_DAYS",
}

export interface GqlUserSwapVolumeFilter {
  poolIdIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenOutIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export interface GradualWeightUpdate {
  __typename?: "GradualWeightUpdate";
  endTimestamp: Scalars["BigInt"]["output"];
  endWeights: Array<Scalars["BigInt"]["output"]>;
  id: Scalars["ID"]["output"];
  poolId: Pool;
  scheduledTimestamp: Scalars["Int"]["output"];
  startTimestamp: Scalars["BigInt"]["output"];
  startWeights: Array<Scalars["BigInt"]["output"]>;
}

export interface GradualWeightUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
}

export enum GradualWeightUpdate_OrderBy {
  EndTimestamp = "endTimestamp",
  EndWeights = "endWeights",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  ScheduledTimestamp = "scheduledTimestamp",
  StartTimestamp = "startTimestamp",
  StartWeights = "startWeights",
}

export enum InvestType {
  Exit = "Exit",
  Join = "Join",
}

export interface JoinExit {
  __typename?: "JoinExit";
  amounts: Array<Scalars["BigDecimal"]["output"]>;
  id: Scalars["ID"]["output"];
  pool: Pool;
  sender: Scalars["Bytes"]["output"];
  timestamp: Scalars["Int"]["output"];
  tx: Scalars["Bytes"]["output"];
  type: InvestType;
  user: User;
  valueUSD?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface JoinExit_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_contains?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  and?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  sender?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  tx?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  type?: InputMaybe<InvestType>;
  type_in?: InputMaybe<Array<InvestType>>;
  type_not?: InputMaybe<InvestType>;
  type_not_in?: InputMaybe<Array<InvestType>>;
  user?: InputMaybe<Scalars["String"]["input"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]["input"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user_gt?: InputMaybe<Scalars["String"]["input"]>;
  user_gte?: InputMaybe<Scalars["String"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user_lt?: InputMaybe<Scalars["String"]["input"]>;
  user_lte?: InputMaybe<Scalars["String"]["input"]>;
  user_not?: InputMaybe<Scalars["String"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  valueUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  valueUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum JoinExit_OrderBy {
  Amounts = "amounts",
  Id = "id",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
  Sender = "sender",
  Timestamp = "timestamp",
  Tx = "tx",
  Type = "type",
  User = "user",
  UserId = "user__id",
  ValueUsd = "valueUSD",
}

export interface LatestPrice {
  __typename?: "LatestPrice";
  asset: Scalars["Bytes"]["output"];
  block: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  price: Scalars["BigDecimal"]["output"];
  pricingAsset: Scalars["Bytes"]["output"];
}

export interface LatestPrice_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  asset?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  asset_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum LatestPrice_OrderBy {
  Asset = "asset",
  Block = "block",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  Price = "price",
  PricingAsset = "pricingAsset",
}

export interface LockerDelegateChangedTransaction extends LockerTransaction {
  __typename?: "LockerDelegateChangedTransaction";
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  fromDelegate: Scalars["Bytes"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  timestamp: Scalars["Int"]["output"];
  toDelegate: Scalars["Bytes"]["output"];
}

export interface LockerDelegateChangedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  fromDelegate?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  fromDelegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  toDelegate?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  toDelegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum LockerDelegateChangedTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  FromDelegate = "fromDelegate",
  Hash = "hash",
  Id = "id",
  Timestamp = "timestamp",
  ToDelegate = "toDelegate",
}

export interface LockerKickRewardTransaction extends LockerTransaction {
  __typename?: "LockerKickRewardTransaction";
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  kicked: Scalars["Bytes"]["output"];
  reward: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface LockerKickRewardTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  kicked?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  kicked_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  reward?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum LockerKickRewardTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  Hash = "hash",
  Id = "id",
  Kicked = "kicked",
  Reward = "reward",
  Timestamp = "timestamp",
}

export interface LockerRewardPaidTransaction extends LockerTransaction {
  __typename?: "LockerRewardPaidTransaction";
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  reward: Scalars["BigInt"]["output"];
  rewardToken: Token;
  timestamp: Scalars["Int"]["output"];
}

export interface LockerRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  reward?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardToken?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum LockerRewardPaidTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  Hash = "hash",
  Id = "id",
  Reward = "reward",
  RewardToken = "rewardToken",
  Timestamp = "timestamp",
}

export interface LockerStakedTransaction extends LockerTransaction {
  __typename?: "LockerStakedTransaction";
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  lockedAmount: Scalars["BigInt"]["output"];
  paidAmount: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface LockerStakedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lockedAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lockedAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  paidAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  paidAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  paidAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum LockerStakedTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  Hash = "hash",
  Id = "id",
  LockedAmount = "lockedAmount",
  PaidAmount = "paidAmount",
  Timestamp = "timestamp",
}

export interface LockerTransaction {
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface LockerTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum LockerTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  Hash = "hash",
  Id = "id",
  Timestamp = "timestamp",
}

export interface LockerWithdrawnTransaction extends LockerTransaction {
  __typename?: "LockerWithdrawnTransaction";
  amount: Scalars["BigInt"]["output"];
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  relocked: Scalars["Boolean"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface LockerWithdrawnTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  auraLocker?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  relocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  relocked_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  relocked_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  relocked_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum LockerWithdrawnTransaction_OrderBy {
  Amount = "amount",
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  Hash = "hash",
  Id = "id",
  Relocked = "relocked",
  Timestamp = "timestamp",
}

export interface ManagementOperation {
  __typename?: "ManagementOperation";
  cashDelta: Scalars["BigDecimal"]["output"];
  id: Scalars["ID"]["output"];
  managedDelta: Scalars["BigDecimal"]["output"];
  poolTokenId: PoolToken;
  timestamp: Scalars["Int"]["output"];
  type: OperationType;
}

export interface ManagementOperation_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  cashDelta?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  cashDelta_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashDelta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  managedDelta?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managedDelta_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedDelta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  poolTokenId?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_?: InputMaybe<PoolToken_Filter>;
  poolTokenId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolTokenId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolTokenId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolTokenId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  type?: InputMaybe<OperationType>;
  type_in?: InputMaybe<Array<OperationType>>;
  type_not?: InputMaybe<OperationType>;
  type_not_in?: InputMaybe<Array<OperationType>>;
}

export enum ManagementOperation_OrderBy {
  CashDelta = "cashDelta",
  Id = "id",
  ManagedDelta = "managedDelta",
  PoolTokenId = "poolTokenId",
  PoolTokenIdAddress = "poolTokenId__address",
  PoolTokenIdAssetManager = "poolTokenId__assetManager",
  PoolTokenIdBalance = "poolTokenId__balance",
  PoolTokenIdCashBalance = "poolTokenId__cashBalance",
  PoolTokenIdDecimals = "poolTokenId__decimals",
  PoolTokenIdId = "poolTokenId__id",
  PoolTokenIdIndex = "poolTokenId__index",
  PoolTokenIdIsExemptFromYieldProtocolFee = "poolTokenId__isExemptFromYieldProtocolFee",
  PoolTokenIdManagedBalance = "poolTokenId__managedBalance",
  PoolTokenIdName = "poolTokenId__name",
  PoolTokenIdOldPriceRate = "poolTokenId__oldPriceRate",
  PoolTokenIdPaidProtocolFees = "poolTokenId__paidProtocolFees",
  PoolTokenIdPriceRate = "poolTokenId__priceRate",
  PoolTokenIdSymbol = "poolTokenId__symbol",
  PoolTokenIdWeight = "poolTokenId__weight",
  Timestamp = "timestamp",
  Type = "type",
}

export interface MasterChef {
  __typename?: "MasterChef";
  endBlock: Scalars["BigInt"]["output"];
  /**
   * Address
   *
   */
  id: Scalars["ID"]["output"];
  poolInfos: Array<MasterChefPoolInfo>;
  rewardPerBlock: Scalars["BigInt"]["output"];
  startBlock: Scalars["BigInt"]["output"];
  totalAllocPoint: Scalars["BigInt"]["output"];
  userInfos: Array<MasterChefUserInfo>;
}

export interface MasterChefPoolInfosArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface MasterChefUserInfosArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface MasterChefPoolInfo {
  __typename?: "MasterChefPoolInfo";
  accCvxPerShare: Scalars["BigInt"]["output"];
  allocPoint: Scalars["BigInt"]["output"];
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars["ID"]["output"];
  lastRewardBlock: Scalars["BigInt"]["output"];
  lpSupply: Scalars["BigInt"]["output"];
  lpToken: Token;
  masterChef: MasterChef;
  rewarder: Scalars["Bytes"]["output"];
  userInfos: Array<MasterChefUserInfo>;
}

export interface MasterChefPoolInfoUserInfosArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface MasterChefPoolInfo_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accCvxPerShare?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accCvxPerShare_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  accCvxPerShare_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  allocPoint?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  allocPoint_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  allocPoint_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastRewardBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastRewardBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastRewardBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lpSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lpSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lpSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lpToken?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_?: InputMaybe<Token_Filter>;
  lpToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lpToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lpToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_?: InputMaybe<MasterChef_Filter>;
  masterChef_contains?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_gt?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_gte?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  masterChef_lt?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_lte?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  masterChef_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewarder?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  rewarder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  userInfos_?: InputMaybe<MasterChefUserInfo_Filter>;
}

export enum MasterChefPoolInfo_OrderBy {
  AccCvxPerShare = "accCvxPerShare",
  AllocPoint = "allocPoint",
  Id = "id",
  LastRewardBlock = "lastRewardBlock",
  LpSupply = "lpSupply",
  LpToken = "lpToken",
  MasterChef = "masterChef",
  Rewarder = "rewarder",
  UserInfos = "userInfos",
}

export interface MasterChefUserInfo {
  __typename?: "MasterChefUserInfo";
  account: Account;
  amount: Scalars["BigInt"]["output"];
  /**
   * ${poolInfo.id}.${account.id}
   *
   */
  id: Scalars["ID"]["output"];
  masterChef: MasterChef;
  poolInfo: MasterChefPoolInfo;
  rewardDebt: Scalars["BigInt"]["output"];
}

export interface MasterChefUserInfo_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  masterChef?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_?: InputMaybe<MasterChef_Filter>;
  masterChef_contains?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_gt?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_gte?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  masterChef_lt?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_lte?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  masterChef_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_?: InputMaybe<MasterChefPoolInfo_Filter>;
  poolInfo_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolInfo_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolInfo_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolInfo_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardDebt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardDebt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
}

export enum MasterChefUserInfo_OrderBy {
  Account = "account",
  Amount = "amount",
  Id = "id",
  MasterChef = "masterChef",
  PoolInfo = "poolInfo",
  RewardDebt = "rewardDebt",
}

export interface MasterChef_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  endBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  poolInfos_?: InputMaybe<MasterChefPoolInfo_Filter>;
  rewardPerBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalAllocPoint?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalAllocPoint_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalAllocPoint_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  userInfos_?: InputMaybe<MasterChefUserInfo_Filter>;
}

export enum MasterChef_OrderBy {
  EndBlock = "endBlock",
  Id = "id",
  PoolInfos = "poolInfos",
  RewardPerBlock = "rewardPerBlock",
  StartBlock = "startBlock",
  TotalAllocPoint = "totalAllocPoint",
  UserInfos = "userInfos",
}

export interface MerkleDrop {
  __typename?: "MerkleDrop";
  claims: Array<MerkleDropClaim>;
  expiryTime: Scalars["Int"]["output"];
  /**
   * Address
   *
   */
  id: Scalars["ID"]["output"];
  merkleRoot: Scalars["Bytes"]["output"];
  startTime: Scalars["Int"]["output"];
}

export interface MerkleDropClaimsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface MerkleDropClaim {
  __typename?: "MerkleDropClaim";
  account: Account;
  amount: Scalars["BigInt"]["output"];
  /**
   * {merkleDrop.id}.{account.id}
   *
   */
  id: Scalars["ID"]["output"];
  locked: Scalars["Boolean"]["output"];
  merkleDrop: MerkleDrop;
}

export interface MerkleDropClaim_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  locked_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  locked_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  locked_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  merkleDrop?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_?: InputMaybe<MerkleDrop_Filter>;
  merkleDrop_contains?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_gt?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_gte?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  merkleDrop_lt?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_lte?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  merkleDrop_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  merkleDrop_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum MerkleDropClaim_OrderBy {
  Account = "account",
  Amount = "amount",
  Id = "id",
  Locked = "locked",
  MerkleDrop = "merkleDrop",
}

export interface MerkleDrop_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  claims_?: InputMaybe<MerkleDropClaim_Filter>;
  expiryTime?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  expiryTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  expiryTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  merkleRoot?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  merkleRoot_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  startTime?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  startTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum MerkleDrop_OrderBy {
  Claims = "claims",
  ExpiryTime = "expiryTime",
  Id = "id",
  MerkleRoot = "merkleRoot",
  StartTime = "startTime",
}

export interface Mutation {
  __typename?: "Mutation";
  beetsPoolLoadReliquarySnapshotsForAllFarms: Scalars["String"]["output"];
  beetsSyncFbeetsRatio: Scalars["String"]["output"];
  cacheAverageBlockTime: Scalars["String"]["output"];
  lgeCreate: GqlLge;
  lgeSyncFromSanity: Scalars["String"]["output"];
  poolBlackListAddPool: Scalars["String"]["output"];
  poolBlackListRemovePool: Scalars["String"]["output"];
  poolDeletePool: Scalars["String"]["output"];
  poolInitializeSnapshotsForPool: Scalars["String"]["output"];
  poolLoadOnChainDataForAllPools: Scalars["String"]["output"];
  poolLoadOnChainDataForPoolsWithActiveUpdates: Scalars["String"]["output"];
  poolLoadSnapshotsForAllPools: Scalars["String"]["output"];
  poolLoadSnapshotsForPools: Scalars["String"]["output"];
  poolReloadAllPoolAprs: Scalars["String"]["output"];
  poolReloadAllTokenNestedPoolIds: Scalars["String"]["output"];
  poolReloadPoolNestedTokens: Scalars["String"]["output"];
  poolReloadPoolTokenIndexes: Scalars["String"]["output"];
  poolReloadStakingForAllPools: Scalars["String"]["output"];
  poolSetPoolsWithPreferredGaugesAsIncentivized: Scalars["String"]["output"];
  poolSyncAllPoolVersions: Scalars["String"]["output"];
  poolSyncAllPoolsFromSubgraph: Array<Scalars["String"]["output"]>;
  poolSyncLatestSnapshotsForAllPools: Scalars["String"]["output"];
  poolSyncNewPoolsFromSubgraph: Array<Scalars["String"]["output"]>;
  poolSyncPool: Scalars["String"]["output"];
  poolSyncPoolAllTokensRelationship: Scalars["String"]["output"];
  poolSyncSanityPoolData: Scalars["String"]["output"];
  poolSyncStakingForPools: Scalars["String"]["output"];
  poolSyncSwapsForLast48Hours: Scalars["String"]["output"];
  poolSyncTotalShares: Scalars["String"]["output"];
  poolUpdateAprs: Scalars["String"]["output"];
  poolUpdateLifetimeValuesForAllPools: Scalars["String"]["output"];
  poolUpdateLiquidity24hAgoForAllPools: Scalars["String"]["output"];
  poolUpdateLiquidityValuesForAllPools: Scalars["String"]["output"];
  poolUpdateVolumeAndFeeValuesForAllPools: Scalars["String"]["output"];
  protocolCacheMetrics: Scalars["String"]["output"];
  tokenDeletePrice: Scalars["Boolean"]["output"];
  tokenDeleteTokenType: Scalars["String"]["output"];
  tokenInitChartData: Scalars["String"]["output"];
  tokenReloadAllTokenTypes: Scalars["String"]["output"];
  tokenReloadTokenPrices?: Maybe<Scalars["Boolean"]["output"]>;
  tokenSyncTokenDefinitions: Scalars["String"]["output"];
  tokenSyncTokenDynamicData: Scalars["String"]["output"];
  userInitStakedBalances: Scalars["String"]["output"];
  userInitWalletBalancesForAllPools: Scalars["String"]["output"];
  userInitWalletBalancesForPool: Scalars["String"]["output"];
  userLoadAllRelicSnapshots: Scalars["String"]["output"];
  userSyncBalance: Scalars["String"]["output"];
  userSyncBalanceAllPools: Scalars["String"]["output"];
  userSyncChangedStakedBalances: Scalars["String"]["output"];
  userSyncChangedWalletBalancesForAllPools: Scalars["String"]["output"];
  veBalSyncAllUserBalances: Scalars["String"]["output"];
  veBalSyncTotalSupply: Scalars["String"]["output"];
}

export interface MutationLgeCreateArgs {
  lge: GqlLgeCreateInput;
}

export interface MutationPoolBlackListAddPoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolBlackListRemovePoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolDeletePoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolInitializeSnapshotsForPoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolLoadSnapshotsForPoolsArgs {
  poolIds: Array<Scalars["String"]["input"]>;
  reload?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export interface MutationPoolReloadPoolNestedTokensArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolReloadPoolTokenIndexesArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolReloadStakingForAllPoolsArgs {
  stakingTypes: Array<GqlPoolStakingType>;
}

export interface MutationPoolSyncLatestSnapshotsForAllPoolsArgs {
  daysToSync?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface MutationPoolSyncPoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationTokenDeletePriceArgs {
  timestamp: Scalars["Int"]["input"];
  tokenAddress: Scalars["String"]["input"];
}

export interface MutationTokenDeleteTokenTypeArgs {
  tokenAddress: Scalars["String"]["input"];
  type: GqlTokenType;
}

export interface MutationTokenInitChartDataArgs {
  tokenAddress: Scalars["String"]["input"];
}

export interface MutationUserInitStakedBalancesArgs {
  stakingTypes: Array<GqlPoolStakingType>;
}

export interface MutationUserInitWalletBalancesForPoolArgs {
  poolId: Scalars["String"]["input"];
}

export interface MutationUserSyncBalanceArgs {
  poolId: Scalars["String"]["input"];
}

export enum OperationType {
  Deposit = "Deposit",
  Update = "Update",
  Withdraw = "Withdraw",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export interface Pool {
  __typename?: "Pool";
  accounts: Array<PoolAccount>;
  address: Scalars["Bytes"]["output"];
  alpha?: Maybe<Scalars["BigDecimal"]["output"]>;
  amp?: Maybe<Scalars["BigInt"]["output"]>;
  baseToken?: Maybe<Scalars["Bytes"]["output"]>;
  beta?: Maybe<Scalars["BigDecimal"]["output"]>;
  c?: Maybe<Scalars["BigDecimal"]["output"]>;
  circuitBreakers?: Maybe<Array<CircuitBreaker>>;
  createTime: Scalars["Int"]["output"];
  dSq?: Maybe<Scalars["BigDecimal"]["output"]>;
  delta?: Maybe<Scalars["BigDecimal"]["output"]>;
  /**
   * The Aura deposit token; a 1:1 token representing an LP deposit.
   * - Factory pools    => an auraLP token
   * - auraBAL staking  => auraBAL
   *
   */
  depositToken: Token;
  epsilon?: Maybe<Scalars["BigDecimal"]["output"]>;
  expiryTime?: Maybe<Scalars["BigInt"]["output"]>;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  /**
   * Gauge associated with the pool
   *
   */
  gauge?: Maybe<Gauge>;
  historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
  holdersCount: Scalars["BigInt"]["output"];
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars["ID"]["output"];
  isFactoryPool: Scalars["Boolean"]["output"];
  isInRecoveryMode?: Maybe<Scalars["Boolean"]["output"]>;
  isPaused?: Maybe<Scalars["Boolean"]["output"]>;
  joinExitEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  lambda?: Maybe<Scalars["BigDecimal"]["output"]>;
  lastJoinExitAmp?: Maybe<Scalars["BigInt"]["output"]>;
  lastPostJoinExitInvariant?: Maybe<Scalars["BigDecimal"]["output"]>;
  lowerTarget?: Maybe<Scalars["BigDecimal"]["output"]>;
  /**
   * LP Token refers to:
   * - Factory pools    => e.g. a given BPT
   * - auraBAL staking  => BAL
   *
   */
  lpToken: Token;
  mainIndex?: Maybe<Scalars["Int"]["output"]>;
  managementAumFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  managementFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  mustAllowlistLPs?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  oracleEnabled: Scalars["Boolean"]["output"];
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  poolType?: Maybe<Scalars["String"]["output"]>;
  poolTypeVersion?: Maybe<Scalars["Int"]["output"]>;
  priceRateProviders?: Maybe<Array<PriceRateProvider>>;
  principalToken?: Maybe<Scalars["Bytes"]["output"]>;
  protocolAumFeeCache?: Maybe<Scalars["BigDecimal"]["output"]>;
  protocolId?: Maybe<Scalars["Int"]["output"]>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolSwapFeeCache?: Maybe<Scalars["BigDecimal"]["output"]>;
  protocolYieldFeeCache?: Maybe<Scalars["BigDecimal"]["output"]>;
  /**
   * List of rewards per-token
   *
   */
  rewardData: Array<PoolRewardData>;
  /**
   * Reward paid transactions for this pool
   *
   */
  rewardPaidTransactions: Array<PoolRewardPaidTransaction>;
  /**
   * BaseRewardPool
   *
   */
  rewardPool: Scalars["Bytes"]["output"];
  /**
   * Reward token of BaseRewardPool
   *
   */
  rewardToken: Token;
  root3Alpha?: Maybe<Scalars["BigDecimal"]["output"]>;
  s?: Maybe<Scalars["BigDecimal"]["output"]>;
  shares?: Maybe<Array<PoolShare>>;
  snapshots?: Maybe<Array<PoolSnapshot>>;
  sqrtAlpha?: Maybe<Scalars["BigDecimal"]["output"]>;
  sqrtBeta?: Maybe<Scalars["BigDecimal"]["output"]>;
  /**
   * Staked transactions for this pool
   *
   */
  stakedTransactions: Array<PoolStakedTransaction>;
  /**
   * auraBal initial staking only
   *
   */
  startTime?: Maybe<Scalars["Int"]["output"]>;
  strategyType: Scalars["Int"]["output"];
  swapEnabled: Scalars["Boolean"]["output"];
  swapFee: Scalars["BigDecimal"]["output"];
  swaps?: Maybe<Array<Swap>>;
  swapsCount: Scalars["BigInt"]["output"];
  symbol?: Maybe<Scalars["String"]["output"]>;
  tauAlphaX?: Maybe<Scalars["BigDecimal"]["output"]>;
  tauAlphaY?: Maybe<Scalars["BigDecimal"]["output"]>;
  tauBetaX?: Maybe<Scalars["BigDecimal"]["output"]>;
  tauBetaY?: Maybe<Scalars["BigDecimal"]["output"]>;
  tokens?: Maybe<Array<PoolToken>>;
  tokensList: Array<Scalars["Bytes"]["output"]>;
  totalAumFeeCollectedInBPT?: Maybe<Scalars["BigDecimal"]["output"]>;
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalProtocolFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  totalProtocolFeePaidInBPT?: Maybe<Scalars["BigDecimal"]["output"]>;
  totalShares: Scalars["BigDecimal"]["output"];
  /**
   * Total staked in the rewardPool
   *
   */
  totalStaked: Scalars["BigInt"]["output"];
  /**
   * Total supply of the depositToken
   *
   */
  totalSupply: Scalars["BigInt"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
  totalWeight?: Maybe<Scalars["BigDecimal"]["output"]>;
  tx?: Maybe<Scalars["Bytes"]["output"]>;
  u?: Maybe<Scalars["BigDecimal"]["output"]>;
  unitSeconds?: Maybe<Scalars["BigInt"]["output"]>;
  upperTarget?: Maybe<Scalars["BigDecimal"]["output"]>;
  v?: Maybe<Scalars["BigDecimal"]["output"]>;
  vaultID: Balancer;
  w?: Maybe<Scalars["BigDecimal"]["output"]>;
  weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
  /**
   * Withdrawn transactions for this pool
   *
   */
  withdrawnTransactions: Array<PoolWithdrawnTransaction>;
  wrappedIndex?: Maybe<Scalars["Int"]["output"]>;
  z?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface PoolAccountsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface PoolCircuitBreakersArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CircuitBreaker_Filter>;
}

export interface PoolHistoricalValuesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface PoolPriceRateProvidersArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface PoolRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface PoolRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface PoolSharesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface PoolSnapshotsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface PoolStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface PoolSwapsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Swap_Filter>;
}

export interface PoolTokensArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface PoolWeightUpdatesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface PoolWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface PoolAccount {
  __typename?: "PoolAccount";
  account: Account;
  /**
   * {Pool.id}.{Account.id}
   *
   */
  id: Scalars["ID"]["output"];
  pool: Pool;
  /**
   * Reward paid transactions for this pool account
   *
   */
  rewardPaidTransactions: Array<PoolRewardPaidTransaction>;
  rewards: Array<PoolAccountRewards>;
  /**
   * rewardsPool.balanceOf(account)
   * i.e. the account's staked LP tokens
   *
   */
  staked: Scalars["BigInt"]["output"];
  /**
   * Staked transactions for this pool account
   *
   */
  stakedTransactions: Array<PoolStakedTransaction>;
  /**
   * Withdrawn transactions for this pool account
   *
   */
  withdrawnTransactions: Array<PoolWithdrawnTransaction>;
}

export interface PoolAccountRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface PoolAccountRewardsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface PoolAccountStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface PoolAccountWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface PoolAccountRewards {
  __typename?: "PoolAccountRewards";
  /**
   * {rewardsToken.id}.{poolAccount.id}
   *
   */
  id: Scalars["ID"]["output"];
  poolAccount: PoolAccount;
  /**
   * userRewardPerTokenPaid(account)
   *
   */
  rewardPerTokenPaid: Scalars["BigInt"]["output"];
  rewardToken: Token;
  /**
   * rewards(account)
   *
   */
  rewards: Scalars["BigInt"]["output"];
}

export interface PoolAccountRewards_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  poolAccount?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardToken?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewards?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
}

export enum PoolAccountRewards_OrderBy {
  Id = "id",
  PoolAccount = "poolAccount",
  RewardPerTokenPaid = "rewardPerTokenPaid",
  RewardToken = "rewardToken",
  Rewards = "rewards",
}

export interface PoolAccount_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardPaidTransactions_?: InputMaybe<PoolRewardPaidTransaction_Filter>;
  rewards_?: InputMaybe<PoolAccountRewards_Filter>;
  staked?: InputMaybe<Scalars["BigInt"]["input"]>;
  stakedTransactions_?: InputMaybe<PoolStakedTransaction_Filter>;
  staked_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  staked_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  staked_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  staked_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  staked_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  staked_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  staked_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  withdrawnTransactions_?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export enum PoolAccount_OrderBy {
  Account = "account",
  Id = "id",
  Pool = "pool",
  RewardPaidTransactions = "rewardPaidTransactions",
  Rewards = "rewards",
  Staked = "staked",
  StakedTransactions = "stakedTransactions",
  WithdrawnTransactions = "withdrawnTransactions",
}

export interface PoolContract {
  __typename?: "PoolContract";
  id: Scalars["ID"]["output"];
  pool: Pool;
}

export interface PoolContract_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum PoolContract_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
}

export interface PoolHistoricalLiquidity {
  __typename?: "PoolHistoricalLiquidity";
  block: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  poolLiquidity: Scalars["BigDecimal"]["output"];
  poolShareValue: Scalars["BigDecimal"]["output"];
  poolTotalShares: Scalars["BigDecimal"]["output"];
  pricingAsset: Scalars["Bytes"]["output"];
}

export interface PoolHistoricalLiquidity_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolLiquidity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolShareValue?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolShareValue_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolShareValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolTotalShares?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolTotalShares_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  poolTotalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum PoolHistoricalLiquidity_OrderBy {
  Block = "block",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  PoolLiquidity = "poolLiquidity",
  PoolShareValue = "poolShareValue",
  PoolTotalShares = "poolTotalShares",
  PricingAsset = "pricingAsset",
}

export interface PoolRewardData extends RewardData {
  __typename?: "PoolRewardData";
  /**
   * {pool.id}.{token.id}
   *
   */
  id: Scalars["ID"]["output"];
  lastUpdateTime: Scalars["Int"]["output"];
  periodFinish: Scalars["Int"]["output"];
  pool: Pool;
  queuedRewards: Scalars["BigInt"]["output"];
  rewardPerTokenStored: Scalars["BigInt"]["output"];
  rewardRate: Scalars["BigInt"]["output"];
  token: Token;
}

export interface PoolRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  queuedRewards?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  queuedRewards_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum PoolRewardData_OrderBy {
  Id = "id",
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  Pool = "pool",
  QueuedRewards = "queuedRewards",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
}

export interface PoolRewardPaidTransaction extends PoolTransaction {
  __typename?: "PoolRewardPaidTransaction";
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  pool: Pool;
  poolAccount: PoolAccount;
  reward: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface PoolRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reward?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum PoolRewardPaidTransaction_OrderBy {
  Hash = "hash",
  Id = "id",
  Pool = "pool",
  PoolAccount = "poolAccount",
  Reward = "reward",
  Timestamp = "timestamp",
}

export interface PoolShare {
  __typename?: "PoolShare";
  balance: Scalars["BigDecimal"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  userAddress: User;
}

export interface PoolShare_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  balance?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum PoolShare_OrderBy {
  Balance = "balance",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  UserAddress = "userAddress",
  UserAddressId = "userAddress__id",
}

export interface PoolSnapshot {
  __typename?: "PoolSnapshot";
  amounts: Array<Scalars["BigDecimal"]["output"]>;
  holdersCount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  liquidity: Scalars["BigDecimal"]["output"];
  pool: Pool;
  protocolFee?: Maybe<Scalars["BigDecimal"]["output"]>;
  swapFees: Scalars["BigDecimal"]["output"];
  swapVolume: Scalars["BigDecimal"]["output"];
  swapsCount: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
}

export interface PoolSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_contains?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amounts_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  and?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  holdersCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  holdersCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  liquidity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapFees?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapFees_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFees_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapsCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  swapsCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  totalShares?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalShares_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum PoolSnapshot_OrderBy {
  Amounts = "amounts",
  HoldersCount = "holdersCount",
  Id = "id",
  Liquidity = "liquidity",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
  ProtocolFee = "protocolFee",
  SwapFees = "swapFees",
  SwapVolume = "swapVolume",
  SwapsCount = "swapsCount",
  Timestamp = "timestamp",
  TotalShares = "totalShares",
}

export interface PoolStakedTransaction extends PoolTransaction {
  __typename?: "PoolStakedTransaction";
  amount: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"]["output"];
}

export interface PoolStakedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum PoolStakedTransaction_OrderBy {
  Amount = "amount",
  Hash = "hash",
  Id = "id",
  Pool = "pool",
  PoolAccount = "poolAccount",
  Timestamp = "timestamp",
}

export interface PoolToken {
  __typename?: "PoolToken";
  address: Scalars["String"]["output"];
  assetManager: Scalars["Bytes"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  cashBalance: Scalars["BigDecimal"]["output"];
  circuitBreaker?: Maybe<CircuitBreaker>;
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index?: Maybe<Scalars["Int"]["output"]>;
  isExemptFromYieldProtocolFee?: Maybe<Scalars["Boolean"]["output"]>;
  managedBalance: Scalars["BigDecimal"]["output"];
  managements?: Maybe<Array<ManagementOperation>>;
  name: Scalars["String"]["output"];
  oldPriceRate?: Maybe<Scalars["BigDecimal"]["output"]>;
  paidProtocolFees?: Maybe<Scalars["BigDecimal"]["output"]>;
  poolId?: Maybe<Pool>;
  priceRate: Scalars["BigDecimal"]["output"];
  symbol: Scalars["String"]["output"];
  token: Token;
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface PoolTokenManagementsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface PoolToken_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_gt?: InputMaybe<Scalars["String"]["input"]>;
  address_gte?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_lt?: InputMaybe<Scalars["String"]["input"]>;
  address_lte?: InputMaybe<Scalars["String"]["input"]>;
  address_not?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  assetManager?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  assetManager_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  assetManager_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  balance?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  cashBalance?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  cashBalance_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  cashBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  circuitBreaker?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_?: InputMaybe<CircuitBreaker_Filter>;
  circuitBreaker_contains?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_gt?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_gte?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  circuitBreaker_lt?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_lte?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  circuitBreaker_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  circuitBreaker_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  circuitBreaker_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  index?: InputMaybe<Scalars["Int"]["input"]>;
  index_gt?: InputMaybe<Scalars["Int"]["input"]>;
  index_gte?: InputMaybe<Scalars["Int"]["input"]>;
  index_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  index_lt?: InputMaybe<Scalars["Int"]["input"]>;
  index_lte?: InputMaybe<Scalars["Int"]["input"]>;
  index_not?: InputMaybe<Scalars["Int"]["input"]>;
  index_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  isExemptFromYieldProtocolFee?: InputMaybe<Scalars["Boolean"]["input"]>;
  isExemptFromYieldProtocolFee_in?: InputMaybe<
    Array<Scalars["Boolean"]["input"]>
  >;
  isExemptFromYieldProtocolFee_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isExemptFromYieldProtocolFee_not_in?: InputMaybe<
    Array<Scalars["Boolean"]["input"]>
  >;
  managedBalance?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managedBalance_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managedBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managements_?: InputMaybe<ManagementOperation_Filter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  oldPriceRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  oldPriceRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  oldPriceRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  paidProtocolFees?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  paidProtocolFees_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  paidProtocolFees_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  priceRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  priceRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  priceRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  weight_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  weight_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum PoolToken_OrderBy {
  Address = "address",
  AssetManager = "assetManager",
  Balance = "balance",
  CashBalance = "cashBalance",
  CircuitBreaker = "circuitBreaker",
  CircuitBreakerBptPrice = "circuitBreaker__bptPrice",
  CircuitBreakerId = "circuitBreaker__id",
  CircuitBreakerLowerBoundPercentage = "circuitBreaker__lowerBoundPercentage",
  CircuitBreakerUpperBoundPercentage = "circuitBreaker__upperBoundPercentage",
  Decimals = "decimals",
  Id = "id",
  Index = "index",
  IsExemptFromYieldProtocolFee = "isExemptFromYieldProtocolFee",
  ManagedBalance = "managedBalance",
  Managements = "managements",
  Name = "name",
  OldPriceRate = "oldPriceRate",
  PaidProtocolFees = "paidProtocolFees",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  PriceRate = "priceRate",
  Symbol = "symbol",
  Token = "token",
  TokenAddress = "token__address",
  TokenDecimals = "token__decimals",
  TokenFxOracleDecimals = "token__fxOracleDecimals",
  TokenId = "token__id",
  TokenLatestFxPrice = "token__latestFXPrice",
  TokenLatestUsdPrice = "token__latestUSDPrice",
  TokenLatestUsdPriceTimestamp = "token__latestUSDPriceTimestamp",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalBalanceNotional = "token__totalBalanceNotional",
  TokenTotalBalanceUsd = "token__totalBalanceUSD",
  TokenTotalSwapCount = "token__totalSwapCount",
  TokenTotalVolumeNotional = "token__totalVolumeNotional",
  TokenTotalVolumeUsd = "token__totalVolumeUSD",
  Weight = "weight",
}

export interface PoolTransaction {
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"]["output"];
}

export interface PoolTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum PoolTransaction_OrderBy {
  Hash = "hash",
  Id = "id",
  Pool = "pool",
  PoolAccount = "poolAccount",
  Timestamp = "timestamp",
}

export interface PoolWithdrawnTransaction extends PoolTransaction {
  __typename?: "PoolWithdrawnTransaction";
  amount: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"]["output"];
}

export interface PoolWithdrawnTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum PoolWithdrawnTransaction_OrderBy {
  Amount = "amount",
  Hash = "hash",
  Id = "id",
  Pool = "pool",
  PoolAccount = "poolAccount",
  Timestamp = "timestamp",
}

export interface Pool_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<PoolAccount_Filter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  alpha?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  alpha_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  alpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amp?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  baseToken?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  baseToken_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  beta?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  beta_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  c?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  c_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  c_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  circuitBreakers_?: InputMaybe<CircuitBreaker_Filter>;
  createTime?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  createTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  createTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  dSq?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  dSq_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dSq_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  delta?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  delta_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  delta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  depositToken?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_?: InputMaybe<Token_Filter>;
  depositToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  depositToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  depositToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  depositToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  epsilon?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  epsilon_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  epsilon_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  expiryTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiryTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  factory?: InputMaybe<Scalars["Bytes"]["input"]>;
  factoryPoolData?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_?: InputMaybe<FactoryPoolData_Filter>;
  factoryPoolData_contains?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_gt?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_gte?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  factoryPoolData_lt?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_lte?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  factoryPoolData_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  factoryPoolData_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  factoryPoolData_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  factory_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  factory_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  gauge?: InputMaybe<Scalars["String"]["input"]>;
  gauge_?: InputMaybe<Gauge_Filter>;
  gauge_contains?: InputMaybe<Scalars["String"]["input"]>;
  gauge_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  gauge_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  gauge_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  gauge_gt?: InputMaybe<Scalars["String"]["input"]>;
  gauge_gte?: InputMaybe<Scalars["String"]["input"]>;
  gauge_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  gauge_lt?: InputMaybe<Scalars["String"]["input"]>;
  gauge_lte?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  gauge_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  gauge_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  gauge_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  gauge_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  historicalValues_?: InputMaybe<PoolHistoricalLiquidity_Filter>;
  holdersCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  holdersCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  holdersCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isFactoryPool?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFactoryPool_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isFactoryPool_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFactoryPool_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isInRecoveryMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  isInRecoveryMode_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isInRecoveryMode_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isInRecoveryMode_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isPaused?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPaused_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isPaused_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPaused_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  joinExitEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  joinExitEnabled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  joinExitEnabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  joinExitEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  lambda?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  lambda_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lambda_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  lastJoinExitAmp?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastJoinExitAmp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastJoinExitAmp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastPostJoinExitInvariant?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  lastPostJoinExitInvariant_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lastPostJoinExitInvariant_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  lowerTarget?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  lowerTarget_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  lowerTarget_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  lpToken?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_?: InputMaybe<Token_Filter>;
  lpToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lpToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lpToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  mainIndex?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_gt?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_gte?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  mainIndex_lt?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_lte?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_not?: InputMaybe<Scalars["Int"]["input"]>;
  mainIndex_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  managementAumFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managementAumFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementAumFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managementFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  managementFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  managementFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  mustAllowlistLPs?: InputMaybe<Scalars["Boolean"]["input"]>;
  mustAllowlistLPs_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  mustAllowlistLPs_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  mustAllowlistLPs_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  oracleEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  oracleEnabled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  oracleEnabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  oracleEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  poolType?: InputMaybe<Scalars["String"]["input"]>;
  poolTypeVersion?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_gt?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_gte?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  poolTypeVersion_lt?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_lte?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_not?: InputMaybe<Scalars["Int"]["input"]>;
  poolTypeVersion_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  poolType_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolType_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolType_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolType_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolType_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  priceRateProviders_?: InputMaybe<PriceRateProvider_Filter>;
  principalToken?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  principalToken_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  principalToken_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  protocolAumFeeCache?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolAumFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolAumFeeCache_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  protocolId?: InputMaybe<Scalars["Int"]["input"]>;
  protocolIdData?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_?: InputMaybe<ProtocolIdData_Filter>;
  protocolIdData_contains?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_gt?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_gte?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  protocolIdData_lt?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_lte?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  protocolIdData_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  protocolIdData_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  protocolIdData_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  protocolId_gt?: InputMaybe<Scalars["Int"]["input"]>;
  protocolId_gte?: InputMaybe<Scalars["Int"]["input"]>;
  protocolId_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  protocolId_lt?: InputMaybe<Scalars["Int"]["input"]>;
  protocolId_lte?: InputMaybe<Scalars["Int"]["input"]>;
  protocolId_not?: InputMaybe<Scalars["Int"]["input"]>;
  protocolId_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  protocolSwapFeeCache?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolSwapFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolSwapFeeCache_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  protocolYieldFeeCache?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolYieldFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolYieldFeeCache_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  rewardData_?: InputMaybe<PoolRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<PoolRewardPaidTransaction_Filter>;
  rewardPool?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  rewardPool_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  rewardToken?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  root3Alpha?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  root3Alpha_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  root3Alpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  s?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  s_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  s_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  shares_?: InputMaybe<PoolShare_Filter>;
  snapshots_?: InputMaybe<PoolSnapshot_Filter>;
  sqrtAlpha?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  sqrtAlpha_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtAlpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  sqrtBeta?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  sqrtBeta_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sqrtBeta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  stakedTransactions_?: InputMaybe<PoolStakedTransaction_Filter>;
  startTime?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  startTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  strategyType?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_gt?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_gte?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  strategyType_lt?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_lte?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_not?: InputMaybe<Scalars["Int"]["input"]>;
  strategyType_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  swapEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  swapEnabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  swapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  swapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  swapsCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  swapsCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  swapsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  swaps_?: InputMaybe<Swap_Filter>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tauAlphaX?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauAlphaX_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauAlphaY?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauAlphaY_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauAlphaY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauBetaX?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauBetaX_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauBetaY?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tauBetaY_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tauBetaY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokensList?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokensList_contains?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokensList_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokensList_not?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokensList_not_contains?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokensList_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_?: InputMaybe<PoolToken_Filter>;
  totalAumFeeCollectedInBPT?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalAumFeeCollectedInBPT_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalAumFeeCollectedInBPT_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalProtocolFeePaidInBPT_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFeePaidInBPT_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalProtocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalProtocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalShares?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalShares_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalStaked?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalStaked_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalStaked_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalWeight?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalWeight_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalWeight_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tx?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  u?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  u_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  u_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  unitSeconds?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  unitSeconds_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  unitSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  upperTarget?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  upperTarget_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  upperTarget_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  v?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  v_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  v_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  vaultID?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_?: InputMaybe<Balancer_Filter>;
  vaultID_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultID_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultID_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultID_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  w?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  w_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  w_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  weightUpdates_?: InputMaybe<GradualWeightUpdate_Filter>;
  withdrawnTransactions_?: InputMaybe<PoolWithdrawnTransaction_Filter>;
  wrappedIndex?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_gt?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_gte?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  wrappedIndex_lt?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_lte?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_not?: InputMaybe<Scalars["Int"]["input"]>;
  wrappedIndex_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  z?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  z_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  z_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum Pool_OrderBy {
  Accounts = "accounts",
  Address = "address",
  Alpha = "alpha",
  Amp = "amp",
  BaseToken = "baseToken",
  Beta = "beta",
  C = "c",
  CircuitBreakers = "circuitBreakers",
  CreateTime = "createTime",
  DSq = "dSq",
  Delta = "delta",
  DepositToken = "depositToken",
  Epsilon = "epsilon",
  ExpiryTime = "expiryTime",
  Factory = "factory",
  FactoryPoolData = "factoryPoolData",
  Gauge = "gauge",
  HistoricalValues = "historicalValues",
  HoldersCount = "holdersCount",
  Id = "id",
  IsFactoryPool = "isFactoryPool",
  IsInRecoveryMode = "isInRecoveryMode",
  IsPaused = "isPaused",
  JoinExitEnabled = "joinExitEnabled",
  Lambda = "lambda",
  LastJoinExitAmp = "lastJoinExitAmp",
  LastPostJoinExitInvariant = "lastPostJoinExitInvariant",
  LowerTarget = "lowerTarget",
  LpToken = "lpToken",
  MainIndex = "mainIndex",
  ManagementAumFee = "managementAumFee",
  ManagementFee = "managementFee",
  MustAllowlistLPs = "mustAllowlistLPs",
  Name = "name",
  OracleEnabled = "oracleEnabled",
  Owner = "owner",
  PoolType = "poolType",
  PoolTypeVersion = "poolTypeVersion",
  PriceRateProviders = "priceRateProviders",
  PrincipalToken = "principalToken",
  ProtocolAumFeeCache = "protocolAumFeeCache",
  ProtocolId = "protocolId",
  ProtocolIdData = "protocolIdData",
  ProtocolIdDataId = "protocolIdData__id",
  ProtocolIdDataName = "protocolIdData__name",
  ProtocolSwapFeeCache = "protocolSwapFeeCache",
  ProtocolYieldFeeCache = "protocolYieldFeeCache",
  RewardData = "rewardData",
  RewardPaidTransactions = "rewardPaidTransactions",
  RewardPool = "rewardPool",
  RewardToken = "rewardToken",
  Root3Alpha = "root3Alpha",
  S = "s",
  Shares = "shares",
  Snapshots = "snapshots",
  SqrtAlpha = "sqrtAlpha",
  SqrtBeta = "sqrtBeta",
  StakedTransactions = "stakedTransactions",
  StartTime = "startTime",
  StrategyType = "strategyType",
  SwapEnabled = "swapEnabled",
  SwapFee = "swapFee",
  Swaps = "swaps",
  SwapsCount = "swapsCount",
  Symbol = "symbol",
  TauAlphaX = "tauAlphaX",
  TauAlphaY = "tauAlphaY",
  TauBetaX = "tauBetaX",
  TauBetaY = "tauBetaY",
  Tokens = "tokens",
  TokensList = "tokensList",
  TotalAumFeeCollectedInBpt = "totalAumFeeCollectedInBPT",
  TotalLiquidity = "totalLiquidity",
  TotalProtocolFee = "totalProtocolFee",
  TotalProtocolFeePaidInBpt = "totalProtocolFeePaidInBPT",
  TotalShares = "totalShares",
  TotalStaked = "totalStaked",
  TotalSupply = "totalSupply",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
  TotalWeight = "totalWeight",
  Tx = "tx",
  U = "u",
  UnitSeconds = "unitSeconds",
  UpperTarget = "upperTarget",
  V = "v",
  VaultId = "vaultID",
  VaultIdId = "vaultID__id",
  VaultIdPoolCount = "vaultID__poolCount",
  VaultIdProtocolFeesCollector = "vaultID__protocolFeesCollector",
  VaultIdTotalLiquidity = "vaultID__totalLiquidity",
  VaultIdTotalProtocolFee = "vaultID__totalProtocolFee",
  VaultIdTotalSwapCount = "vaultID__totalSwapCount",
  VaultIdTotalSwapFee = "vaultID__totalSwapFee",
  VaultIdTotalSwapVolume = "vaultID__totalSwapVolume",
  W = "w",
  WeightUpdates = "weightUpdates",
  WithdrawnTransactions = "withdrawnTransactions",
  WrappedIndex = "wrappedIndex",
  Z = "z",
}

export interface PriceRateProvider {
  __typename?: "PriceRateProvider";
  address: Scalars["Bytes"]["output"];
  cacheDuration?: Maybe<Scalars["Int"]["output"]>;
  cacheExpiry?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  lastCached?: Maybe<Scalars["Int"]["output"]>;
  poolId: Pool;
  rate?: Maybe<Scalars["BigDecimal"]["output"]>;
  token: PoolToken;
}

export interface PriceRateProvider_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  cacheDuration?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_gt?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_gte?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  cacheDuration_lt?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_lte?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_not?: InputMaybe<Scalars["Int"]["input"]>;
  cacheDuration_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  cacheExpiry?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_gt?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_gte?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  cacheExpiry_lt?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_lte?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_not?: InputMaybe<Scalars["Int"]["input"]>;
  cacheExpiry_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastCached?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastCached_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastCached_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  rate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<PoolToken_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum PriceRateProvider_OrderBy {
  Address = "address",
  CacheDuration = "cacheDuration",
  CacheExpiry = "cacheExpiry",
  Id = "id",
  LastCached = "lastCached",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  Rate = "rate",
  Token = "token",
  TokenAddress = "token__address",
  TokenAssetManager = "token__assetManager",
  TokenBalance = "token__balance",
  TokenCashBalance = "token__cashBalance",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenIndex = "token__index",
  TokenIsExemptFromYieldProtocolFee = "token__isExemptFromYieldProtocolFee",
  TokenManagedBalance = "token__managedBalance",
  TokenName = "token__name",
  TokenOldPriceRate = "token__oldPriceRate",
  TokenPaidProtocolFees = "token__paidProtocolFees",
  TokenPriceRate = "token__priceRate",
  TokenSymbol = "token__symbol",
  TokenWeight = "token__weight",
}

export interface ProtocolIdData {
  __typename?: "ProtocolIdData";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
}

export interface ProtocolIdData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolIdData_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<ProtocolIdData_Filter>>>;
}

export enum ProtocolIdData_OrderBy {
  Id = "id",
  Name = "name",
}

export interface Query {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  auraBalMintTransaction?: Maybe<AuraBalMintTransaction>;
  auraBalMintTransactions: Array<AuraBalMintTransaction>;
  auraLocker?: Maybe<AuraLocker>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  auraLockerAccounts: Array<AuraLockerAccount>;
  auraLockerRewardData?: Maybe<AuraLockerRewardData>;
  auraLockerRewardDatas: Array<AuraLockerRewardData>;
  auraLockerUserData?: Maybe<AuraLockerUserData>;
  auraLockerUserDatas: Array<AuraLockerUserData>;
  auraLockerUserLock?: Maybe<AuraLockerUserLock>;
  auraLockerUserLocks: Array<AuraLockerUserLock>;
  auraLockers: Array<AuraLocker>;
  balancer?: Maybe<Balancer>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  balancers: Array<Balancer>;
  beetsGetFbeetsRatio: Scalars["String"]["output"];
  beetsPoolGetReliquaryFarmSnapshots: Array<GqlReliquaryFarmSnapshot>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  blocksGetAverageBlockTime: Scalars["Float"]["output"];
  blocksGetBlocksPerDay: Scalars["Float"]["output"];
  blocksGetBlocksPerSecond: Scalars["Float"]["output"];
  blocksGetBlocksPerYear: Scalars["Float"]["output"];
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  contentGetNewsItems: Array<GqlContentNewsItem>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  factoryPoolDatas: Array<FactoryPoolData>;
  gauge?: Maybe<Gauge>;
  gauges: Array<Gauge>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  latestSyncedBlocks: GqlLatestSyncedBlocks;
  lge: GqlLge;
  lgeGetChartData: Array<Maybe<GqlLgePriceData>>;
  lges: Array<GqlLge>;
  lockerDelegateChangedTransaction?: Maybe<LockerDelegateChangedTransaction>;
  lockerDelegateChangedTransactions: Array<LockerDelegateChangedTransaction>;
  lockerKickRewardTransaction?: Maybe<LockerKickRewardTransaction>;
  lockerKickRewardTransactions: Array<LockerKickRewardTransaction>;
  lockerRewardPaidTransaction?: Maybe<LockerRewardPaidTransaction>;
  lockerRewardPaidTransactions: Array<LockerRewardPaidTransaction>;
  lockerStakedTransaction?: Maybe<LockerStakedTransaction>;
  lockerStakedTransactions: Array<LockerStakedTransaction>;
  lockerTransaction?: Maybe<LockerTransaction>;
  lockerTransactions: Array<LockerTransaction>;
  lockerWithdrawnTransaction?: Maybe<LockerWithdrawnTransaction>;
  lockerWithdrawnTransactions: Array<LockerWithdrawnTransaction>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  masterChef?: Maybe<MasterChef>;
  masterChefPoolInfo?: Maybe<MasterChefPoolInfo>;
  masterChefPoolInfos: Array<MasterChefPoolInfo>;
  masterChefUserInfo?: Maybe<MasterChefUserInfo>;
  masterChefUserInfos: Array<MasterChefUserInfo>;
  masterChefs: Array<MasterChef>;
  merkleDrop?: Maybe<MerkleDrop>;
  merkleDropClaim?: Maybe<MerkleDropClaim>;
  merkleDropClaims: Array<MerkleDropClaim>;
  merkleDrops: Array<MerkleDrop>;
  pool?: Maybe<Pool>;
  poolAccount?: Maybe<PoolAccount>;
  poolAccountRewards: Array<PoolAccountRewards>;
  poolAccounts: Array<PoolAccount>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolGetAllPoolsSnapshots: Array<GqlPoolSnapshot>;
  poolGetBatchSwaps: Array<GqlPoolBatchSwap>;
  poolGetFeaturedPoolGroups: Array<GqlPoolFeaturedPoolGroup>;
  poolGetJoinExits: Array<GqlPoolJoinExit>;
  poolGetLinearPools: Array<GqlPoolLinear>;
  poolGetPool: GqlPoolBase;
  poolGetPoolFilters: Array<GqlPoolFilterDefinition>;
  poolGetPools: Array<GqlPoolMinimal>;
  poolGetPoolsCount: Scalars["Int"]["output"];
  poolGetSnapshots: Array<GqlPoolSnapshot>;
  poolGetSwaps: Array<GqlPoolSwap>;
  poolGetUserSwapVolume: Array<GqlPoolUserSwapVolume>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolRewardData?: Maybe<PoolRewardData>;
  poolRewardDatas: Array<PoolRewardData>;
  poolRewardPaidTransaction?: Maybe<PoolRewardPaidTransaction>;
  poolRewardPaidTransactions: Array<PoolRewardPaidTransaction>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  poolStakedTransaction?: Maybe<PoolStakedTransaction>;
  poolStakedTransactions: Array<PoolStakedTransaction>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  poolTransaction?: Maybe<PoolTransaction>;
  poolTransactions: Array<PoolTransaction>;
  poolWithdrawnTransaction?: Maybe<PoolWithdrawnTransaction>;
  poolWithdrawnTransactions: Array<PoolWithdrawnTransaction>;
  pools: Array<Pool>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  protocolMetricsAggregated: GqlProtocolMetricsAggregated;
  protocolMetricsChain: GqlProtocolMetricsChain;
  rewardData?: Maybe<RewardData>;
  rewardDatas: Array<RewardData>;
  sorGetBatchSwapForTokensIn: GqlSorGetBatchSwapForTokensInResponse;
  sorGetSwaps: GqlSorGetSwapsResponse;
  swap?: Maybe<Swap>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenGetCandlestickChartData: Array<GqlTokenCandlestickChartDataItem>;
  tokenGetCurrentPrices: Array<GqlTokenPrice>;
  tokenGetHistoricalPrices: Array<GqlHistoricalTokenPrice>;
  tokenGetPriceChartData: Array<GqlTokenPriceChartDataItem>;
  tokenGetProtocolTokenPrice: Scalars["AmountHumanReadable"]["output"];
  tokenGetRelativePriceChartData: Array<GqlTokenPriceChartDataItem>;
  tokenGetTokenData?: Maybe<GqlTokenData>;
  tokenGetTokenDynamicData?: Maybe<GqlTokenDynamicData>;
  tokenGetTokens: Array<GqlToken>;
  tokenGetTokensData: Array<GqlTokenData>;
  tokenGetTokensDynamicData: Array<GqlTokenDynamicData>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tokens: Array<Token>;
  tradePair?: Maybe<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  tradePairs: Array<TradePair>;
  user?: Maybe<User>;
  userGetFbeetsBalance: GqlUserFbeetsBalance;
  userGetPoolBalances: Array<GqlUserPoolBalance>;
  userGetPoolJoinExits: Array<GqlPoolJoinExit>;
  userGetPoolSnapshots: Array<GqlUserPoolSnapshot>;
  userGetPortfolioSnapshots: Array<GqlUserPortfolioSnapshot>;
  userGetRelicSnapshots: Array<GqlUserRelicSnapshot>;
  userGetStaking: Array<GqlPoolStaking>;
  userGetSwaps: Array<GqlPoolSwap>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaultAccount?: Maybe<VaultAccount>;
  vaultAccountReward?: Maybe<VaultAccountReward>;
  vaultAccountRewards: Array<VaultAccountReward>;
  vaultAccounts: Array<VaultAccount>;
  vaultDepositTransaction?: Maybe<VaultDepositTransaction>;
  vaultDepositTransactions: Array<VaultDepositTransaction>;
  vaultHarvestTransaction?: Maybe<VaultHarvestTransaction>;
  vaultHarvestTransactions: Array<VaultHarvestTransaction>;
  vaultRewardData?: Maybe<VaultRewardData>;
  vaultRewardDatas: Array<VaultRewardData>;
  vaultRewardPaidTransaction?: Maybe<VaultRewardPaidTransaction>;
  vaultRewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  vaultTransaction?: Maybe<VaultTransaction>;
  vaultTransactions: Array<VaultTransaction>;
  vaultWithdrawTransaction?: Maybe<VaultWithdrawTransaction>;
  vaultWithdrawTransactions: Array<VaultWithdrawTransaction>;
  vaults: Array<Vault>;
  veBalGetTotalSupply: Scalars["AmountHumanReadable"]["output"];
  veBalGetUserBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface Query_MetaArgs {
  block?: InputMaybe<Block_Height>;
}

export interface QueryAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
}

export interface QueryAmpUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAmpUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
}

export interface QueryAuraBalMintTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraBalMintTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface QueryAuraLockerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface QueryAuraLockerRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface QueryAuraLockerUserDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerUserDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface QueryAuraLockerUserLockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerUserLocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface QueryAuraLockersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
}

export interface QueryBalancerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
}

export interface QueryBalancersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
}

export interface QueryBeetsPoolGetReliquaryFarmSnapshotsArgs {
  id: Scalars["String"]["input"];
  range: GqlPoolSnapshotDataRange;
}

export interface QueryBlockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBlocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
}

export interface QueryCircuitBreakerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryCircuitBreakersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CircuitBreaker_Filter>;
}

export interface QueryFactoryPoolDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryFactoryPoolDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
}

export interface QueryGaugeArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Gauge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gauge_Filter>;
}

export interface QueryGlobalArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGlobalsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
}

export interface QueryGradualWeightUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGradualWeightUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface QueryJoinExitArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryJoinExitsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
}

export interface QueryLatestPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLatestPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
}

export interface QueryLgeArgs {
  id: Scalars["ID"]["input"];
}

export interface QueryLgeGetChartDataArgs {
  id: Scalars["ID"]["input"];
}

export interface QueryLockerDelegateChangedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerDelegateChangedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface QueryLockerKickRewardTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerKickRewardTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface QueryLockerRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface QueryLockerStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface QueryLockerTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerTransaction_Filter>;
}

export interface QueryLockerWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface QueryManagementOperationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryManagementOperationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface QueryMasterChefArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefPoolInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefPoolInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface QueryMasterChefUserInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefUserInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface QueryMasterChefsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
}

export interface QueryMerkleDropArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMerkleDropClaimArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMerkleDropClaimsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface QueryMerkleDropsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
}

export interface QueryPoolArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface QueryPoolAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface QueryPoolContractArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolContractsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
}

export interface QueryPoolGetAllPoolsSnapshotsArgs {
  range: GqlPoolSnapshotDataRange;
}

export interface QueryPoolGetBatchSwapsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlPoolSwapFilter>;
}

export interface QueryPoolGetJoinExitsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlPoolJoinExitFilter>;
}

export interface QueryPoolGetPoolArgs {
  id: Scalars["String"]["input"];
}

export interface QueryPoolGetPoolsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GqlPoolOrderBy>;
  orderDirection?: InputMaybe<GqlPoolOrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  textSearch?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<GqlPoolFilter>;
}

export interface QueryPoolGetPoolsCountArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GqlPoolOrderBy>;
  orderDirection?: InputMaybe<GqlPoolOrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  textSearch?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<GqlPoolFilter>;
}

export interface QueryPoolGetSnapshotsArgs {
  id: Scalars["String"]["input"];
  range: GqlPoolSnapshotDataRange;
}

export interface QueryPoolGetSwapsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlPoolSwapFilter>;
}

export interface QueryPoolGetUserSwapVolumeArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlUserSwapVolumeFilter>;
}

export interface QueryPoolHistoricalLiquiditiesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface QueryPoolHistoricalLiquidityArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface QueryPoolRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface QueryPoolShareArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSharesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface QueryPoolSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface QueryPoolStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface QueryPoolTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface QueryPoolTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTransaction_Filter>;
}

export interface QueryPoolWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface QueryPoolsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
}

export interface QueryPriceRateProviderArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPriceRateProvidersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface QueryProtocolIdDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryProtocolIdDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
}

export interface QueryProtocolMetricsAggregatedArgs {
  chainIds: Array<Scalars["String"]["input"]>;
}

export interface QueryRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
}

export interface QuerySorGetBatchSwapForTokensInArgs {
  swapOptions: GqlSorSwapOptionsInput;
  tokenOut: Scalars["String"]["input"];
  tokensIn: Array<GqlTokenAmountHumanReadable>;
}

export interface QuerySorGetSwapsArgs {
  swapAmount: Scalars["BigDecimal"]["input"];
  swapOptions: GqlSorSwapOptionsInput;
  swapType: GqlSorSwapType;
  tokenIn: Scalars["String"]["input"];
  tokenOut: Scalars["String"]["input"];
}

export interface QuerySwapArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapFeeUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapFeeUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
}

export interface QuerySwapsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
}

export interface QueryTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenGetCandlestickChartDataArgs {
  address: Scalars["String"]["input"];
  range: GqlTokenChartDataRange;
}

export interface QueryTokenGetHistoricalPricesArgs {
  addresses: Array<Scalars["String"]["input"]>;
}

export interface QueryTokenGetPriceChartDataArgs {
  address: Scalars["String"]["input"];
  range: GqlTokenChartDataRange;
}

export interface QueryTokenGetRelativePriceChartDataArgs {
  range: GqlTokenChartDataRange;
  tokenIn: Scalars["String"]["input"];
  tokenOut: Scalars["String"]["input"];
}

export interface QueryTokenGetTokenDataArgs {
  address: Scalars["String"]["input"];
}

export interface QueryTokenGetTokenDynamicDataArgs {
  address: Scalars["String"]["input"];
}

export interface QueryTokenGetTokensDataArgs {
  addresses: Array<Scalars["String"]["input"]>;
}

export interface QueryTokenGetTokensDynamicDataArgs {
  addresses: Array<Scalars["String"]["input"]>;
}

export interface QueryTokenPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
}

export interface QueryTokenSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface QueryTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
}

export interface QueryTradePairArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
}

export interface QueryTradePairsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
}

export interface QueryUserArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserGetPoolJoinExitsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  poolId: Scalars["String"]["input"];
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUserGetPoolSnapshotsArgs {
  poolId: Scalars["String"]["input"];
  range: GqlUserSnapshotDataRange;
}

export interface QueryUserGetPortfolioSnapshotsArgs {
  days: Scalars["Int"]["input"];
}

export interface QueryUserGetRelicSnapshotsArgs {
  farmId: Scalars["String"]["input"];
  range: GqlUserSnapshotDataRange;
}

export interface QueryUserGetSwapsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  poolId: Scalars["String"]["input"];
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUserInternalBalanceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserInternalBalancesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface QueryUsersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
}

export interface QueryVaultArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface QueryVaultAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface QueryVaultDepositTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultDepositTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface QueryVaultHarvestTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultHarvestTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface QueryVaultRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardData_Filter>;
}

export interface QueryVaultRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface QueryVaultTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTransaction_Filter>;
}

export interface QueryVaultWithdrawTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultWithdrawTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface QueryVaultsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
}

export interface RewardData {
  /**
   * Last time any user took action
   *
   */
  lastUpdateTime: Scalars["Int"]["output"];
  /**
   * Timestamp for current period finish
   *
   */
  periodFinish: Scalars["Int"]["output"];
  /**
   * Ever increasing rewardPerToken rate, based on % of total supply
   *
   */
  rewardPerTokenStored: Scalars["BigInt"]["output"];
  /**
   * RewardRate for the rest of the period
   *
   */
  rewardRate: Scalars["BigInt"]["output"];
  token: Token;
}

export interface RewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum RewardData_OrderBy {
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
}

export interface Subscription {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  auraBalMintTransaction?: Maybe<AuraBalMintTransaction>;
  auraBalMintTransactions: Array<AuraBalMintTransaction>;
  auraLocker?: Maybe<AuraLocker>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  auraLockerAccounts: Array<AuraLockerAccount>;
  auraLockerRewardData?: Maybe<AuraLockerRewardData>;
  auraLockerRewardDatas: Array<AuraLockerRewardData>;
  auraLockerUserData?: Maybe<AuraLockerUserData>;
  auraLockerUserDatas: Array<AuraLockerUserData>;
  auraLockerUserLock?: Maybe<AuraLockerUserLock>;
  auraLockerUserLocks: Array<AuraLockerUserLock>;
  auraLockers: Array<AuraLocker>;
  balancer?: Maybe<Balancer>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  balancers: Array<Balancer>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  factoryPoolDatas: Array<FactoryPoolData>;
  gauge?: Maybe<Gauge>;
  gauges: Array<Gauge>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  lockerDelegateChangedTransaction?: Maybe<LockerDelegateChangedTransaction>;
  lockerDelegateChangedTransactions: Array<LockerDelegateChangedTransaction>;
  lockerKickRewardTransaction?: Maybe<LockerKickRewardTransaction>;
  lockerKickRewardTransactions: Array<LockerKickRewardTransaction>;
  lockerRewardPaidTransaction?: Maybe<LockerRewardPaidTransaction>;
  lockerRewardPaidTransactions: Array<LockerRewardPaidTransaction>;
  lockerStakedTransaction?: Maybe<LockerStakedTransaction>;
  lockerStakedTransactions: Array<LockerStakedTransaction>;
  lockerTransaction?: Maybe<LockerTransaction>;
  lockerTransactions: Array<LockerTransaction>;
  lockerWithdrawnTransaction?: Maybe<LockerWithdrawnTransaction>;
  lockerWithdrawnTransactions: Array<LockerWithdrawnTransaction>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  masterChef?: Maybe<MasterChef>;
  masterChefPoolInfo?: Maybe<MasterChefPoolInfo>;
  masterChefPoolInfos: Array<MasterChefPoolInfo>;
  masterChefUserInfo?: Maybe<MasterChefUserInfo>;
  masterChefUserInfos: Array<MasterChefUserInfo>;
  masterChefs: Array<MasterChef>;
  merkleDrop?: Maybe<MerkleDrop>;
  merkleDropClaim?: Maybe<MerkleDropClaim>;
  merkleDropClaims: Array<MerkleDropClaim>;
  merkleDrops: Array<MerkleDrop>;
  pool?: Maybe<Pool>;
  poolAccount?: Maybe<PoolAccount>;
  poolAccountRewards: Array<PoolAccountRewards>;
  poolAccounts: Array<PoolAccount>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolRewardData?: Maybe<PoolRewardData>;
  poolRewardDatas: Array<PoolRewardData>;
  poolRewardPaidTransaction?: Maybe<PoolRewardPaidTransaction>;
  poolRewardPaidTransactions: Array<PoolRewardPaidTransaction>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  poolStakedTransaction?: Maybe<PoolStakedTransaction>;
  poolStakedTransactions: Array<PoolStakedTransaction>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  poolTransaction?: Maybe<PoolTransaction>;
  poolTransactions: Array<PoolTransaction>;
  poolWithdrawnTransaction?: Maybe<PoolWithdrawnTransaction>;
  poolWithdrawnTransactions: Array<PoolWithdrawnTransaction>;
  pools: Array<Pool>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  rewardData?: Maybe<RewardData>;
  rewardDatas: Array<RewardData>;
  swap?: Maybe<Swap>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tokens: Array<Token>;
  tradePair?: Maybe<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  tradePairs: Array<TradePair>;
  user?: Maybe<User>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaultAccount?: Maybe<VaultAccount>;
  vaultAccountReward?: Maybe<VaultAccountReward>;
  vaultAccountRewards: Array<VaultAccountReward>;
  vaultAccounts: Array<VaultAccount>;
  vaultDepositTransaction?: Maybe<VaultDepositTransaction>;
  vaultDepositTransactions: Array<VaultDepositTransaction>;
  vaultHarvestTransaction?: Maybe<VaultHarvestTransaction>;
  vaultHarvestTransactions: Array<VaultHarvestTransaction>;
  vaultRewardData?: Maybe<VaultRewardData>;
  vaultRewardDatas: Array<VaultRewardData>;
  vaultRewardPaidTransaction?: Maybe<VaultRewardPaidTransaction>;
  vaultRewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  vaultTransaction?: Maybe<VaultTransaction>;
  vaultTransactions: Array<VaultTransaction>;
  vaultWithdrawTransaction?: Maybe<VaultWithdrawTransaction>;
  vaultWithdrawTransactions: Array<VaultWithdrawTransaction>;
  vaults: Array<Vault>;
}

export interface Subscription_MetaArgs {
  block?: InputMaybe<Block_Height>;
}

export interface SubscriptionAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
}

export interface SubscriptionAmpUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAmpUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
}

export interface SubscriptionAuraBalMintTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraBalMintTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface SubscriptionAuraLockerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface SubscriptionAuraLockerRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface SubscriptionAuraLockerUserDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerUserDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface SubscriptionAuraLockerUserLockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerUserLocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface SubscriptionAuraLockersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
}

export interface SubscriptionBalancerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
}

export interface SubscriptionBalancersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
}

export interface SubscriptionBlockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBlocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
}

export interface SubscriptionCircuitBreakerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionCircuitBreakersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CircuitBreaker_Filter>;
}

export interface SubscriptionFactoryPoolDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionFactoryPoolDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
}

export interface SubscriptionGaugeArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Gauge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gauge_Filter>;
}

export interface SubscriptionGlobalArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGlobalsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
}

export interface SubscriptionGradualWeightUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGradualWeightUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface SubscriptionJoinExitArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionJoinExitsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
}

export interface SubscriptionLatestPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLatestPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
}

export interface SubscriptionLockerDelegateChangedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerDelegateChangedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface SubscriptionLockerKickRewardTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerKickRewardTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface SubscriptionLockerRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface SubscriptionLockerStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface SubscriptionLockerTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerTransaction_Filter>;
}

export interface SubscriptionLockerWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface SubscriptionManagementOperationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionManagementOperationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface SubscriptionMasterChefArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefPoolInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefPoolInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface SubscriptionMasterChefUserInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefUserInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface SubscriptionMasterChefsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
}

export interface SubscriptionMerkleDropArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMerkleDropClaimArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMerkleDropClaimsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface SubscriptionMerkleDropsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
}

export interface SubscriptionPoolArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface SubscriptionPoolAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface SubscriptionPoolContractArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolContractsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
}

export interface SubscriptionPoolHistoricalLiquiditiesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface SubscriptionPoolHistoricalLiquidityArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface SubscriptionPoolRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface SubscriptionPoolShareArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSharesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface SubscriptionPoolSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface SubscriptionPoolStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface SubscriptionPoolTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface SubscriptionPoolTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTransaction_Filter>;
}

export interface SubscriptionPoolWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface SubscriptionPoolsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
}

export interface SubscriptionPriceRateProviderArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPriceRateProvidersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface SubscriptionProtocolIdDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionProtocolIdDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
}

export interface SubscriptionRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
}

export interface SubscriptionSwapArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapFeeUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapFeeUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
}

export interface SubscriptionSwapsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
}

export interface SubscriptionTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
}

export interface SubscriptionTokenSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface SubscriptionTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
}

export interface SubscriptionTradePairArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
}

export interface SubscriptionTradePairsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
}

export interface SubscriptionUserArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalanceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalancesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface SubscriptionUsersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
}

export interface SubscriptionVaultArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface SubscriptionVaultAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface SubscriptionVaultDepositTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultDepositTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface SubscriptionVaultHarvestTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultHarvestTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface SubscriptionVaultRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardData_Filter>;
}

export interface SubscriptionVaultRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface SubscriptionVaultTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTransaction_Filter>;
}

export interface SubscriptionVaultWithdrawTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultWithdrawTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface SubscriptionVaultsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
}

export interface Swap {
  __typename?: "Swap";
  caller: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  timestamp: Scalars["Int"]["output"];
  tokenAmountIn: Scalars["BigDecimal"]["output"];
  tokenAmountOut: Scalars["BigDecimal"]["output"];
  tokenIn: Scalars["Bytes"]["output"];
  tokenInSym: Scalars["String"]["output"];
  tokenOut: Scalars["Bytes"]["output"];
  tokenOutSym: Scalars["String"]["output"];
  tx: Scalars["Bytes"]["output"];
  userAddress: User;
  valueUSD: Scalars["BigDecimal"]["output"];
}

export interface SwapFeeUpdate {
  __typename?: "SwapFeeUpdate";
  endSwapFeePercentage: Scalars["BigDecimal"]["output"];
  endTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  pool: Pool;
  scheduledTimestamp: Scalars["Int"]["output"];
  startSwapFeePercentage: Scalars["BigDecimal"]["output"];
  startTimestamp: Scalars["BigInt"]["output"];
}

export interface SwapFeeUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  endSwapFeePercentage?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  endSwapFeePercentage_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  endSwapFeePercentage_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  endTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  startSwapFeePercentage?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  startSwapFeePercentage_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  startSwapFeePercentage_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  startTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
}

export enum SwapFeeUpdate_OrderBy {
  EndSwapFeePercentage = "endSwapFeePercentage",
  EndTimestamp = "endTimestamp",
  Id = "id",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
  ScheduledTimestamp = "scheduledTimestamp",
  StartSwapFeePercentage = "startSwapFeePercentage",
  StartTimestamp = "startTimestamp",
}

export interface Swap_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  caller?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  caller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  tokenAmountIn?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokenAmountIn_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokenAmountOut?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokenAmountOut_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmountOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokenIn?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenInSym?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInSym_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInSym_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInSym_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenIn_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenIn_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIn_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenOut?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOutSym?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenOutSym_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenOutSym_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenOutSym_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenOut_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenOut_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenOut_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tx?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  valueUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  valueUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum Swap_OrderBy {
  Caller = "caller",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  Timestamp = "timestamp",
  TokenAmountIn = "tokenAmountIn",
  TokenAmountOut = "tokenAmountOut",
  TokenIn = "tokenIn",
  TokenInSym = "tokenInSym",
  TokenOut = "tokenOut",
  TokenOutSym = "tokenOutSym",
  Tx = "tx",
  UserAddress = "userAddress",
  UserAddressId = "userAddress__id",
  ValueUsd = "valueUSD",
}

export interface Token {
  __typename?: "Token";
  address: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  fxOracleDecimals?: Maybe<Scalars["Int"]["output"]>;
  /**
   * Address
   *
   */
  id: Scalars["ID"]["output"];
  latestFXPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  latestPrice?: Maybe<LatestPrice>;
  latestUSDPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  latestUSDPriceTimestamp?: Maybe<Scalars["BigInt"]["output"]>;
  name: Scalars["String"]["output"];
  pool?: Maybe<Pool>;
  symbol: Scalars["String"]["output"];
  totalBalanceNotional: Scalars["BigDecimal"]["output"];
  totalBalanceUSD: Scalars["BigDecimal"]["output"];
  totalSwapCount: Scalars["BigInt"]["output"];
  totalVolumeNotional: Scalars["BigDecimal"]["output"];
  totalVolumeUSD: Scalars["BigDecimal"]["output"];
}

export interface TokenPrice {
  __typename?: "TokenPrice";
  amount: Scalars["BigDecimal"]["output"];
  asset: Scalars["Bytes"]["output"];
  block: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Pool;
  price: Scalars["BigDecimal"]["output"];
  pricingAsset: Scalars["Bytes"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export interface TokenPrice_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  asset?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  asset_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  asset_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolId_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export enum TokenPrice_OrderBy {
  Amount = "amount",
  Asset = "asset",
  Block = "block",
  Id = "id",
  PoolId = "poolId",
  PoolIdAddress = "poolId__address",
  PoolIdAlpha = "poolId__alpha",
  PoolIdAmp = "poolId__amp",
  PoolIdBaseToken = "poolId__baseToken",
  PoolIdBeta = "poolId__beta",
  PoolIdC = "poolId__c",
  PoolIdCreateTime = "poolId__createTime",
  PoolIdDSq = "poolId__dSq",
  PoolIdDelta = "poolId__delta",
  PoolIdEpsilon = "poolId__epsilon",
  PoolIdExpiryTime = "poolId__expiryTime",
  PoolIdFactory = "poolId__factory",
  PoolIdHoldersCount = "poolId__holdersCount",
  PoolIdId = "poolId__id",
  PoolIdIsInRecoveryMode = "poolId__isInRecoveryMode",
  PoolIdIsPaused = "poolId__isPaused",
  PoolIdJoinExitEnabled = "poolId__joinExitEnabled",
  PoolIdLambda = "poolId__lambda",
  PoolIdLastJoinExitAmp = "poolId__lastJoinExitAmp",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementAumFee = "poolId__managementAumFee",
  PoolIdManagementFee = "poolId__managementFee",
  PoolIdMustAllowlistLPs = "poolId__mustAllowlistLPs",
  PoolIdName = "poolId__name",
  PoolIdOracleEnabled = "poolId__oracleEnabled",
  PoolIdOwner = "poolId__owner",
  PoolIdPoolType = "poolId__poolType",
  PoolIdPoolTypeVersion = "poolId__poolTypeVersion",
  PoolIdPrincipalToken = "poolId__principalToken",
  PoolIdProtocolAumFeeCache = "poolId__protocolAumFeeCache",
  PoolIdProtocolId = "poolId__protocolId",
  PoolIdProtocolSwapFeeCache = "poolId__protocolSwapFeeCache",
  PoolIdProtocolYieldFeeCache = "poolId__protocolYieldFeeCache",
  PoolIdRoot3Alpha = "poolId__root3Alpha",
  PoolIdS = "poolId__s",
  PoolIdSqrtAlpha = "poolId__sqrtAlpha",
  PoolIdSqrtBeta = "poolId__sqrtBeta",
  PoolIdStrategyType = "poolId__strategyType",
  PoolIdSwapEnabled = "poolId__swapEnabled",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalProtocolFee = "poolId__totalProtocolFee",
  PoolIdTotalProtocolFeePaidInBpt = "poolId__totalProtocolFeePaidInBPT",
  PoolIdTotalShares = "poolId__totalShares",
  PoolIdTotalSwapFee = "poolId__totalSwapFee",
  PoolIdTotalSwapVolume = "poolId__totalSwapVolume",
  PoolIdTotalWeight = "poolId__totalWeight",
  PoolIdTx = "poolId__tx",
  PoolIdU = "poolId__u",
  PoolIdUnitSeconds = "poolId__unitSeconds",
  PoolIdUpperTarget = "poolId__upperTarget",
  PoolIdV = "poolId__v",
  PoolIdW = "poolId__w",
  PoolIdWrappedIndex = "poolId__wrappedIndex",
  PoolIdZ = "poolId__z",
  Price = "price",
  PricingAsset = "pricingAsset",
  Timestamp = "timestamp",
}

export interface TokenSnapshot {
  __typename?: "TokenSnapshot";
  id: Scalars["ID"]["output"];
  timestamp: Scalars["Int"]["output"];
  token: Token;
  totalBalanceNotional: Scalars["BigDecimal"]["output"];
  totalBalanceUSD: Scalars["BigDecimal"]["output"];
  totalSwapCount: Scalars["BigInt"]["output"];
  totalVolumeNotional: Scalars["BigDecimal"]["output"];
  totalVolumeUSD: Scalars["BigDecimal"]["output"];
}

export interface TokenSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalBalanceNotional?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalBalanceUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalVolumeNotional?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum TokenSnapshot_OrderBy {
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "token__address",
  TokenDecimals = "token__decimals",
  TokenFxOracleDecimals = "token__fxOracleDecimals",
  TokenId = "token__id",
  TokenLatestFxPrice = "token__latestFXPrice",
  TokenLatestUsdPrice = "token__latestUSDPrice",
  TokenLatestUsdPriceTimestamp = "token__latestUSDPriceTimestamp",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalBalanceNotional = "token__totalBalanceNotional",
  TokenTotalBalanceUsd = "token__totalBalanceUSD",
  TokenTotalSwapCount = "token__totalSwapCount",
  TokenTotalVolumeNotional = "token__totalVolumeNotional",
  TokenTotalVolumeUsd = "token__totalVolumeUSD",
  TotalBalanceNotional = "totalBalanceNotional",
  TotalBalanceUsd = "totalBalanceUSD",
  TotalSwapCount = "totalSwapCount",
  TotalVolumeNotional = "totalVolumeNotional",
  TotalVolumeUsd = "totalVolumeUSD",
}

export interface Token_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_gt?: InputMaybe<Scalars["String"]["input"]>;
  address_gte?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_lt?: InputMaybe<Scalars["String"]["input"]>;
  address_lte?: InputMaybe<Scalars["String"]["input"]>;
  address_not?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  fxOracleDecimals?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  fxOracleDecimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  fxOracleDecimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  latestFXPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  latestFXPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestFXPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  latestPrice?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_?: InputMaybe<LatestPrice_Filter>;
  latestPrice_contains?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_gt?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_gte?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  latestPrice_lt?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_lte?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  latestPrice_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestUSDPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPriceTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  latestUSDPriceTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestUSDPriceTimestamp_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  latestUSDPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  latestUSDPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  latestUSDPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalBalanceNotional?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceNotional_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalBalanceUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalVolumeNotional?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeNotional_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum Token_OrderBy {
  Address = "address",
  Decimals = "decimals",
  FxOracleDecimals = "fxOracleDecimals",
  Id = "id",
  LatestFxPrice = "latestFXPrice",
  LatestPrice = "latestPrice",
  LatestPriceAsset = "latestPrice__asset",
  LatestPriceBlock = "latestPrice__block",
  LatestPriceId = "latestPrice__id",
  LatestPricePrice = "latestPrice__price",
  LatestPricePricingAsset = "latestPrice__pricingAsset",
  LatestUsdPrice = "latestUSDPrice",
  LatestUsdPriceTimestamp = "latestUSDPriceTimestamp",
  Name = "name",
  Pool = "pool",
  PoolAddress = "pool__address",
  PoolAlpha = "pool__alpha",
  PoolAmp = "pool__amp",
  PoolBaseToken = "pool__baseToken",
  PoolBeta = "pool__beta",
  PoolC = "pool__c",
  PoolCreateTime = "pool__createTime",
  PoolDSq = "pool__dSq",
  PoolDelta = "pool__delta",
  PoolEpsilon = "pool__epsilon",
  PoolExpiryTime = "pool__expiryTime",
  PoolFactory = "pool__factory",
  PoolHoldersCount = "pool__holdersCount",
  PoolId = "pool__id",
  PoolIsInRecoveryMode = "pool__isInRecoveryMode",
  PoolIsPaused = "pool__isPaused",
  PoolJoinExitEnabled = "pool__joinExitEnabled",
  PoolLambda = "pool__lambda",
  PoolLastJoinExitAmp = "pool__lastJoinExitAmp",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementAumFee = "pool__managementAumFee",
  PoolManagementFee = "pool__managementFee",
  PoolMustAllowlistLPs = "pool__mustAllowlistLPs",
  PoolName = "pool__name",
  PoolOracleEnabled = "pool__oracleEnabled",
  PoolOwner = "pool__owner",
  PoolPoolType = "pool__poolType",
  PoolPoolTypeVersion = "pool__poolTypeVersion",
  PoolPrincipalToken = "pool__principalToken",
  PoolProtocolAumFeeCache = "pool__protocolAumFeeCache",
  PoolProtocolId = "pool__protocolId",
  PoolProtocolSwapFeeCache = "pool__protocolSwapFeeCache",
  PoolProtocolYieldFeeCache = "pool__protocolYieldFeeCache",
  PoolRoot3Alpha = "pool__root3Alpha",
  PoolS = "pool__s",
  PoolSqrtAlpha = "pool__sqrtAlpha",
  PoolSqrtBeta = "pool__sqrtBeta",
  PoolStrategyType = "pool__strategyType",
  PoolSwapEnabled = "pool__swapEnabled",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalProtocolFee = "pool__totalProtocolFee",
  PoolTotalProtocolFeePaidInBpt = "pool__totalProtocolFeePaidInBPT",
  PoolTotalShares = "pool__totalShares",
  PoolTotalSwapFee = "pool__totalSwapFee",
  PoolTotalSwapVolume = "pool__totalSwapVolume",
  PoolTotalWeight = "pool__totalWeight",
  PoolTx = "pool__tx",
  PoolU = "pool__u",
  PoolUnitSeconds = "pool__unitSeconds",
  PoolUpperTarget = "pool__upperTarget",
  PoolV = "pool__v",
  PoolW = "pool__w",
  PoolWrappedIndex = "pool__wrappedIndex",
  PoolZ = "pool__z",
  Symbol = "symbol",
  TotalBalanceNotional = "totalBalanceNotional",
  TotalBalanceUsd = "totalBalanceUSD",
  TotalSwapCount = "totalSwapCount",
  TotalVolumeNotional = "totalVolumeNotional",
  TotalVolumeUsd = "totalVolumeUSD",
}

export interface TradePair {
  __typename?: "TradePair";
  /** Token Address - Token Address */
  id: Scalars["ID"]["output"];
  token0: Token;
  token1: Token;
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
}

export interface TradePairSnapshot {
  __typename?: "TradePairSnapshot";
  id: Scalars["ID"]["output"];
  pair: TradePair;
  timestamp: Scalars["Int"]["output"];
  totalSwapFee: Scalars["BigDecimal"]["output"];
  totalSwapVolume: Scalars["BigDecimal"]["output"];
}

export interface TradePairSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  pair?: InputMaybe<Scalars["String"]["input"]>;
  pair_?: InputMaybe<TradePair_Filter>;
  pair_contains?: InputMaybe<Scalars["String"]["input"]>;
  pair_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pair_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pair_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pair_gt?: InputMaybe<Scalars["String"]["input"]>;
  pair_gte?: InputMaybe<Scalars["String"]["input"]>;
  pair_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pair_lt?: InputMaybe<Scalars["String"]["input"]>;
  pair_lte?: InputMaybe<Scalars["String"]["input"]>;
  pair_not?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pair_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pair_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pair_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum TradePairSnapshot_OrderBy {
  Id = "id",
  Pair = "pair",
  PairId = "pair__id",
  PairTotalSwapFee = "pair__totalSwapFee",
  PairTotalSwapVolume = "pair__totalSwapVolume",
  Timestamp = "timestamp",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
}

export interface TradePair_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePair_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TradePair_Filter>>>;
  token0?: InputMaybe<Scalars["String"]["input"]>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars["String"]["input"]>;
  token0_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token0_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token0_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token0_gt?: InputMaybe<Scalars["String"]["input"]>;
  token0_gte?: InputMaybe<Scalars["String"]["input"]>;
  token0_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token0_lt?: InputMaybe<Scalars["String"]["input"]>;
  token0_lte?: InputMaybe<Scalars["String"]["input"]>;
  token0_not?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token0_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token0_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token0_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1?: InputMaybe<Scalars["String"]["input"]>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars["String"]["input"]>;
  token1_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token1_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1_gt?: InputMaybe<Scalars["String"]["input"]>;
  token1_gte?: InputMaybe<Scalars["String"]["input"]>;
  token1_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token1_lt?: InputMaybe<Scalars["String"]["input"]>;
  token1_lte?: InputMaybe<Scalars["String"]["input"]>;
  token1_not?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token1_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token1_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token1_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
}

export enum TradePair_OrderBy {
  Id = "id",
  Token0 = "token0",
  Token0Address = "token0__address",
  Token0Decimals = "token0__decimals",
  Token0FxOracleDecimals = "token0__fxOracleDecimals",
  Token0Id = "token0__id",
  Token0LatestFxPrice = "token0__latestFXPrice",
  Token0LatestUsdPrice = "token0__latestUSDPrice",
  Token0LatestUsdPriceTimestamp = "token0__latestUSDPriceTimestamp",
  Token0Name = "token0__name",
  Token0Symbol = "token0__symbol",
  Token0TotalBalanceNotional = "token0__totalBalanceNotional",
  Token0TotalBalanceUsd = "token0__totalBalanceUSD",
  Token0TotalSwapCount = "token0__totalSwapCount",
  Token0TotalVolumeNotional = "token0__totalVolumeNotional",
  Token0TotalVolumeUsd = "token0__totalVolumeUSD",
  Token1 = "token1",
  Token1Address = "token1__address",
  Token1Decimals = "token1__decimals",
  Token1FxOracleDecimals = "token1__fxOracleDecimals",
  Token1Id = "token1__id",
  Token1LatestFxPrice = "token1__latestFXPrice",
  Token1LatestUsdPrice = "token1__latestUSDPrice",
  Token1LatestUsdPriceTimestamp = "token1__latestUSDPriceTimestamp",
  Token1Name = "token1__name",
  Token1Symbol = "token1__symbol",
  Token1TotalBalanceNotional = "token1__totalBalanceNotional",
  Token1TotalBalanceUsd = "token1__totalBalanceUSD",
  Token1TotalSwapCount = "token1__totalSwapCount",
  Token1TotalVolumeNotional = "token1__totalVolumeNotional",
  Token1TotalVolumeUsd = "token1__totalVolumeUSD",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
}

export interface User {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  sharesOwned?: Maybe<Array<PoolShare>>;
  swaps?: Maybe<Array<Swap>>;
  userInternalBalances?: Maybe<Array<UserInternalBalance>>;
}

export interface UserSharesOwnedArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface UserSwapsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Swap_Filter>;
}

export interface UserUserInternalBalancesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface UserInternalBalance {
  __typename?: "UserInternalBalance";
  balance: Scalars["BigDecimal"]["output"];
  id: Scalars["ID"]["output"];
  token: Scalars["Bytes"]["output"];
  tokenInfo?: Maybe<Token>;
  userAddress?: Maybe<User>;
}

export interface UserInternalBalance_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  balance?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  token?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenInfo?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_?: InputMaybe<Token_Filter>;
  tokenInfo_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInfo_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInfo_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenInfo_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum UserInternalBalance_OrderBy {
  Balance = "balance",
  Id = "id",
  Token = "token",
  TokenInfo = "tokenInfo",
  TokenInfoAddress = "tokenInfo__address",
  TokenInfoDecimals = "tokenInfo__decimals",
  TokenInfoFxOracleDecimals = "tokenInfo__fxOracleDecimals",
  TokenInfoId = "tokenInfo__id",
  TokenInfoLatestFxPrice = "tokenInfo__latestFXPrice",
  TokenInfoLatestUsdPrice = "tokenInfo__latestUSDPrice",
  TokenInfoLatestUsdPriceTimestamp = "tokenInfo__latestUSDPriceTimestamp",
  TokenInfoName = "tokenInfo__name",
  TokenInfoSymbol = "tokenInfo__symbol",
  TokenInfoTotalBalanceNotional = "tokenInfo__totalBalanceNotional",
  TokenInfoTotalBalanceUsd = "tokenInfo__totalBalanceUSD",
  TokenInfoTotalSwapCount = "tokenInfo__totalSwapCount",
  TokenInfoTotalVolumeNotional = "tokenInfo__totalVolumeNotional",
  TokenInfoTotalVolumeUsd = "tokenInfo__totalVolumeUSD",
  UserAddress = "userAddress",
  UserAddressId = "userAddress__id",
}

export interface User_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  sharesOwned_?: InputMaybe<PoolShare_Filter>;
  swaps_?: InputMaybe<Swap_Filter>;
  userInternalBalances_?: InputMaybe<UserInternalBalance_Filter>;
}

export enum User_OrderBy {
  Id = "id",
  SharesOwned = "sharesOwned",
  Swaps = "swaps",
  UserInternalBalances = "userInternalBalances",
}

/**
 * ERC-4626 Vault
 *
 */
export interface Vault {
  __typename?: "Vault";
  accounts: Array<VaultAccount>;
  asset: Token;
  decimals: Scalars["Int"]["output"];
  depositTransactions: Array<VaultDepositTransaction>;
  harvestTransactions: Array<VaultHarvestTransaction>;
  /**
   * Vault address
   *
   */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  rewardData: Array<VaultRewardData>;
  rewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  strategy: Scalars["Bytes"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply: Scalars["BigInt"]["output"];
  /**
   * Note that this field may not reflect the current value, as it is not updated on every
   * transfer event; rather, it is updated on deposit/stake/harvest.
   *
   */
  totalUnderlying: Scalars["BigInt"]["output"];
  underlying: Token;
  withdrawTransactions: Array<VaultWithdrawTransaction>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultAccountsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultAccount_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultDepositTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultHarvestTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultRewardData_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultWithdrawTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface VaultAccount {
  __typename?: "VaultAccount";
  account: Account;
  depositTransactions: Array<VaultDepositTransaction>;
  harvestTransactions: Array<VaultHarvestTransaction>;
  /**
   * {Vault.id}.{Account.id}
   *
   */
  id: Scalars["ID"]["output"];
  rewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  rewards: Array<VaultAccountReward>;
  shares: Scalars["BigInt"]["output"];
  vault: Vault;
  withdrawTransactions: Array<VaultWithdrawTransaction>;
}

export interface VaultAccountDepositTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface VaultAccountHarvestTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface VaultAccountRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface VaultAccountRewardsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface VaultAccountWithdrawTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface VaultAccountReward {
  __typename?: "VaultAccountReward";
  /**
   * {rewardsToken.id}.{vaultAccount.id}
   *
   */
  id: Scalars["ID"]["output"];
  /**
   * userRewardPerTokenPaid(account)
   *
   */
  rewardPerTokenPaid: Scalars["BigInt"]["output"];
  rewardToken: Token;
  /**
   * rewards(account)
   *
   */
  rewards: Scalars["BigInt"]["output"];
  vaultAccount: VaultAccount;
}

export interface VaultAccountReward_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardToken?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewards?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultAccountReward_OrderBy {
  Id = "id",
  RewardPerTokenPaid = "rewardPerTokenPaid",
  RewardToken = "rewardToken",
  Rewards = "rewards",
  VaultAccount = "vaultAccount",
}

export interface VaultAccount_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  depositTransactions_?: InputMaybe<VaultDepositTransaction_Filter>;
  harvestTransactions_?: InputMaybe<VaultHarvestTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  rewardPaidTransactions_?: InputMaybe<VaultRewardPaidTransaction_Filter>;
  rewards_?: InputMaybe<VaultAccountReward_Filter>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawTransactions_?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export enum VaultAccount_OrderBy {
  Account = "account",
  DepositTransactions = "depositTransactions",
  HarvestTransactions = "harvestTransactions",
  Id = "id",
  RewardPaidTransactions = "rewardPaidTransactions",
  Rewards = "rewards",
  Shares = "shares",
  Vault = "vault",
  WithdrawTransactions = "withdrawTransactions",
}

export interface VaultDepositTransaction extends VaultTransaction {
  __typename?: "VaultDepositTransaction";
  assets: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  sender: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultDepositTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assets?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  assets_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultDepositTransaction_OrderBy {
  Assets = "assets",
  Hash = "hash",
  Id = "id",
  Owner = "owner",
  Sender = "sender",
  Shares = "shares",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
}

export interface VaultHarvestTransaction extends VaultTransaction {
  __typename?: "VaultHarvestTransaction";
  harvested: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  sender: Scalars["Bytes"]["output"];
  timestamp: Scalars["Int"]["output"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultHarvestTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  harvested?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  harvested_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  harvested_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  sender?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultHarvestTransaction_OrderBy {
  Harvested = "harvested",
  Hash = "hash",
  Id = "id",
  Sender = "sender",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
}

export interface VaultRewardData extends RewardData {
  __typename?: "VaultRewardData";
  /**
   * {Vault.id}.{token.id}
   *
   */
  id: Scalars["ID"]["output"];
  lastUpdateTime: Scalars["Int"]["output"];
  periodFinish: Scalars["Int"]["output"];
  queuedRewards: Scalars["BigInt"]["output"];
  rewardPerTokenStored: Scalars["BigInt"]["output"];
  rewardRate: Scalars["BigInt"]["output"];
  token: Token;
  vault?: Maybe<Vault>;
}

export interface VaultRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]["input"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  queuedRewards?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  queuedRewards_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  queuedRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultRewardData_OrderBy {
  Id = "id",
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  QueuedRewards = "queuedRewards",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
  Vault = "vault",
}

export interface VaultRewardPaidTransaction extends VaultTransaction {
  __typename?: "VaultRewardPaidTransaction";
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  reward: Scalars["BigInt"]["output"];
  rewardData: VaultRewardData;
  timestamp: Scalars["Int"]["output"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  reward?: InputMaybe<Scalars["BigInt"]["input"]>;
  rewardData?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_?: InputMaybe<VaultRewardData_Filter>;
  rewardData_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_gt?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_gte?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardData_lt?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_lte?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  rewardData_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultRewardPaidTransaction_OrderBy {
  Hash = "hash",
  Id = "id",
  Reward = "reward",
  RewardData = "rewardData",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
}

export interface VaultTransaction {
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  timestamp: Scalars["Int"]["output"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultTransaction_OrderBy {
  Hash = "hash",
  Id = "id",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
}

export interface VaultWithdrawTransaction extends VaultTransaction {
  __typename?: "VaultWithdrawTransaction";
  assets: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  receiver: Scalars["Bytes"]["output"];
  sender: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  timestamp: Scalars["Int"]["output"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultWithdrawTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assets?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  assets_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  assets_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
}

export enum VaultWithdrawTransaction_OrderBy {
  Assets = "assets",
  Hash = "hash",
  Id = "id",
  Owner = "owner",
  Receiver = "receiver",
  Sender = "sender",
  Shares = "shares",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
}

export interface Vault_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<VaultAccount_Filter>;
  asset?: InputMaybe<Scalars["String"]["input"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]["input"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  asset_gt?: InputMaybe<Scalars["String"]["input"]>;
  asset_gte?: InputMaybe<Scalars["String"]["input"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  asset_lt?: InputMaybe<Scalars["String"]["input"]>;
  asset_lte?: InputMaybe<Scalars["String"]["input"]>;
  asset_not?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  depositTransactions_?: InputMaybe<VaultDepositTransaction_Filter>;
  harvestTransactions_?: InputMaybe<VaultHarvestTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rewardData_?: InputMaybe<VaultRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<VaultRewardPaidTransaction_Filter>;
  strategy?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  strategy_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalUnderlying?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalUnderlying_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalUnderlying_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  underlying?: InputMaybe<Scalars["String"]["input"]>;
  underlying_?: InputMaybe<Token_Filter>;
  underlying_contains?: InputMaybe<Scalars["String"]["input"]>;
  underlying_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  underlying_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  underlying_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  underlying_gt?: InputMaybe<Scalars["String"]["input"]>;
  underlying_gte?: InputMaybe<Scalars["String"]["input"]>;
  underlying_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  underlying_lt?: InputMaybe<Scalars["String"]["input"]>;
  underlying_lte?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  underlying_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  underlying_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  underlying_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  underlying_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawTransactions_?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export enum Vault_OrderBy {
  Accounts = "accounts",
  Asset = "asset",
  Decimals = "decimals",
  DepositTransactions = "depositTransactions",
  HarvestTransactions = "harvestTransactions",
  Id = "id",
  Name = "name",
  RewardData = "rewardData",
  RewardPaidTransactions = "rewardPaidTransactions",
  Strategy = "strategy",
  Symbol = "symbol",
  TotalSupply = "totalSupply",
  TotalUnderlying = "totalUnderlying",
  Underlying = "underlying",
  WithdrawTransactions = "withdrawTransactions",
}

export interface _Block_ {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
}

/** The type for the top-level _meta field */
export interface _Meta_ {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type AuraBalMintTransactionsQueryVariables = Exact<{
  startTimestamp: Scalars["Int"]["input"];
}>;

export type AuraBalMintTransactionsQuery = {
  __typename?: "Query";
  auraBalMintTransactions: Array<{
    __typename?: "AuraBalMintTransaction";
    timestamp: number;
    hash: any;
    amount: any;
    account: { __typename?: "Account"; id: string };
  }>;
};

export type AuraBalTransactionsQueryVariables = Exact<{ [key: string]: never }>;

export type AuraBalTransactionsQuery = {
  __typename?: "Query";
  vaultHarvestTransactions: Array<{
    __typename?: "VaultHarvestTransaction";
    timestamp: number;
    harvested: any;
    hash: any;
    sender: any;
  }>;
  vaultDepositTransactions: Array<{
    __typename?: "VaultDepositTransaction";
    timestamp: number;
    assets: any;
    shares: any;
    hash: any;
    sender: any;
  }>;
  vaultWithdrawTransactions: Array<{
    __typename?: "VaultWithdrawTransaction";
    timestamp: number;
    assets: any;
    shares: any;
    hash: any;
    sender: any;
  }>;
};

export type AuraGlobalStatsQueryVariables = Exact<{ [key: string]: never }>;

export type AuraGlobalStatsQuery = {
  __typename?: "Query";
  global?: {
    __typename?: "Global";
    id: string;
    aura: any;
    auraTotalSupply: any;
    auraBalTotalSupply: any;
    auraMaxSupply: any;
    auraReductionPerCliff: any;
    auraTotalCliffs: any;
  } | null;
  masterChefs: Array<{
    __typename?: "MasterChef";
    id: string;
    endBlock: any;
    startBlock: any;
    totalAllocPoint: any;
    rewardPerBlock: any;
  }>;
  tokens: Array<{
    __typename?: "Token";
    id: string;
    decimals: number;
    symbol: string;
    name: string;
  }>;
  auraLockers: Array<{ __typename?: "AuraLocker"; lockedSupply: any }>;
};

export type AuraPoolsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
}>;

export type AuraPoolsQuery = {
  __typename?: "Query";
  pools: Array<{
    __typename?: "Pool";
    totalStaked: any;
    id: string;
    gauge?: {
      __typename?: "Gauge";
      id: string;
      totalSupply: any;
      workingSupply: any;
      balance: any;
      pool?: {
        __typename?: "Pool";
        id: string;
        factoryPoolData?: {
          __typename?: "FactoryPoolData";
          balancerPoolId?: any | null;
          isShutdown: boolean;
        } | null;
      } | null;
    } | null;
  }>;
};

export type PoolLeaderboardQueryVariables = Exact<{
  poolId: Scalars["ID"]["input"];
}>;

export type PoolLeaderboardQuery = {
  __typename?: "Query";
  leaderboard?: {
    __typename?: "Pool";
    totalStaked: any;
    accounts: Array<{
      __typename?: "PoolAccount";
      staked: any;
      account: { __typename?: "Account"; id: string };
    }>;
  } | null;
};

export type PoolWithdrawnTransactionsQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type PoolWithdrawnTransactionsQuery = {
  __typename?: "Query";
  poolWithdrawnTransactions: Array<{
    __typename?: "PoolWithdrawnTransaction";
    amount: any;
    id: string;
    timestamp: number;
  }>;
  poolRewardPaidTransactions: Array<{
    __typename?: "PoolRewardPaidTransaction";
    id: string;
    reward: any;
    timestamp: number;
  }>;
  poolStakedTransactions: Array<{
    __typename?: "PoolStakedTransaction";
    amount: any;
    timestamp: number;
    id: string;
  }>;
};

export type VaultLeaderboardQueryVariables = Exact<{
  vaultId: Scalars["ID"]["input"];
}>;

export type VaultLeaderboardQuery = {
  __typename?: "Query";
  leaderboard?: {
    __typename?: "Vault";
    totalSupply: any;
    accounts: Array<{
      __typename?: "VaultAccount";
      shares: any;
      account: { __typename?: "Account"; id: string };
    }>;
  } | null;
};

export type AuraQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars["String"]["input"]>;
  hasAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type AuraQuery = {
  __typename?: "Query";
  auraBal?: {
    __typename?: "Pool";
    id: string;
    isFactoryPool: boolean;
    rewardPool: any;
    totalSupply: any;
    totalStaked: any;
    rewardData: Array<{
      __typename?: "PoolRewardData";
      queuedRewards: any;
      id: string;
      periodFinish: number;
      lastUpdateTime: number;
      rewardPerTokenStored: any;
      rewardRate: any;
      token: {
        __typename?: "Token";
        id: string;
        decimals: number;
        symbol: string;
        name: string;
      };
    }>;
    accounts?: Array<{
      __typename?: "PoolAccount";
      id: string;
      staked: any;
      rewards: Array<{
        __typename?: "PoolAccountRewards";
        id: string;
        rewards: any;
        rewardPerTokenPaid: any;
        rewardToken: {
          __typename?: "Token";
          id: string;
          decimals: number;
          symbol: string;
          name: string;
        };
      }>;
    }>;
    depositToken: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    lpToken: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    factoryPoolData?: {
      __typename?: "FactoryPoolData";
      id: string;
      addedAt?: number | null;
      isShutdown: boolean;
      stash: any;
      gauge: any;
    } | null;
    gauge?: {
      __typename?: "Gauge";
      id: string;
      balance: any;
      totalSupply: any;
      workingSupply: any;
    } | null;
  } | null;
  factoryPools: Array<{
    __typename?: "Pool";
    id: string;
    isFactoryPool: boolean;
    rewardPool: any;
    totalSupply: any;
    totalStaked: any;
    rewardData: Array<{
      __typename?: "PoolRewardData";
      queuedRewards: any;
      id: string;
      periodFinish: number;
      lastUpdateTime: number;
      rewardPerTokenStored: any;
      rewardRate: any;
      token: {
        __typename?: "Token";
        id: string;
        decimals: number;
        symbol: string;
        name: string;
      };
    }>;
    accounts?: Array<{
      __typename?: "PoolAccount";
      id: string;
      staked: any;
      rewards: Array<{
        __typename?: "PoolAccountRewards";
        id: string;
        rewards: any;
        rewardPerTokenPaid: any;
        rewardToken: {
          __typename?: "Token";
          id: string;
          decimals: number;
          symbol: string;
          name: string;
        };
      }>;
    }>;
    depositToken: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    lpToken: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    factoryPoolData?: {
      __typename?: "FactoryPoolData";
      id: string;
      addedAt?: number | null;
      isShutdown: boolean;
      stash: any;
      gauge: any;
    } | null;
    gauge?: {
      __typename?: "Gauge";
      id: string;
      balance: any;
      totalSupply: any;
      workingSupply: any;
    } | null;
  }>;
  vault?: {
    __typename?: "Vault";
    id: string;
    decimals: number;
    name: string;
    symbol: string;
    strategy: any;
    totalSupply: any;
    totalUnderlying: any;
    underlying: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    asset: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
    rewardData: Array<{
      __typename?: "VaultRewardData";
      id: string;
      periodFinish: number;
      lastUpdateTime: number;
      rewardPerTokenStored: any;
      rewardRate: any;
      queuedRewards: any;
      token: {
        __typename?: "Token";
        id: string;
        decimals: number;
        symbol: string;
        name: string;
      };
    }>;
    accounts?: Array<{
      __typename?: "VaultAccount";
      id: string;
      shares: any;
      rewards: Array<{
        __typename?: "VaultAccountReward";
        id: string;
        rewardPerTokenPaid: any;
        rewards: any;
        rewardToken: {
          __typename?: "Token";
          id: string;
          decimals: number;
          symbol: string;
          name: string;
        };
      }>;
    }>;
  } | null;
  _meta?: {
    __typename?: "_Meta_";
    block: { __typename?: "_Block_"; number: number };
  } | null;
};

export type AuraBlockFragment = {
  __typename?: "Query";
  _meta?: {
    __typename?: "_Meta_";
    block: { __typename?: "_Block_"; number: number };
  } | null;
};

export type AllPoolFragment = {
  __typename?: "Pool";
  id: string;
  isFactoryPool: boolean;
  rewardPool: any;
  totalSupply: any;
  totalStaked: any;
  depositToken: {
    __typename?: "Token";
    id: string;
    decimals: number;
    symbol: string;
    name: string;
  };
  lpToken: {
    __typename?: "Token";
    id: string;
    decimals: number;
    symbol: string;
    name: string;
  };
  factoryPoolData?: {
    __typename?: "FactoryPoolData";
    id: string;
    addedAt?: number | null;
    isShutdown: boolean;
    stash: any;
    gauge: any;
  } | null;
  gauge?: {
    __typename?: "Gauge";
    id: string;
    balance: any;
    totalSupply: any;
    workingSupply: any;
  } | null;
};

export type AllTokenFragment = {
  __typename?: "Token";
  id: string;
  decimals: number;
  symbol: string;
  name: string;
};

export type AllPoolRewardDataFragment = {
  __typename?: "PoolRewardData";
  id: string;
  periodFinish: number;
  lastUpdateTime: number;
  rewardPerTokenStored: any;
  rewardRate: any;
  token: {
    __typename?: "Token";
    id: string;
    decimals: number;
    symbol: string;
    name: string;
  };
};

export type AllPoolAccountFragment = {
  __typename?: "PoolAccount";
  id: string;
  staked: any;
  rewards: Array<{
    __typename?: "PoolAccountRewards";
    id: string;
    rewards: any;
    rewardPerTokenPaid: any;
    rewardToken: {
      __typename?: "Token";
      id: string;
      decimals: number;
      symbol: string;
      name: string;
    };
  }>;
};

export type AllPoolAccountRewardsFragment = {
  __typename?: "PoolAccountRewards";
  id: string;
  rewards: any;
  rewardPerTokenPaid: any;
  rewardToken: {
    __typename?: "Token";
    id: string;
    decimals: number;
    symbol: string;
    name: string;
  };
};

export type LockerLeaderboardQueryVariables = Exact<{ [key: string]: never }>;

export type LockerLeaderboardQuery = {
  __typename?: "Query";
  auraLockerLeaderboard?: {
    __typename?: "AuraLocker";
    lockedSupply: any;
    accounts: Array<{
      __typename?: "AuraLockerAccount";
      id: string;
      balanceLocked: any;
      userLocksLength: number;
      userLocks: Array<{
        __typename?: "AuraLockerUserLock";
        amount: any;
        unlockTime: number;
      }>;
      withdrawnTransactions: Array<{
        __typename?: "LockerWithdrawnTransaction";
        amount: any;
        relocked: boolean;
        timestamp: number;
      }>;
    }>;
  } | null;
};

export type GetProtocolDataQueryVariables = Exact<{
  startTimestamp: Scalars["Int"]["input"];
  block24: Block_Height;
  block48: Block_Height;
}>;

export type GetProtocolDataQuery = {
  __typename?: "Query";
  balancers: Array<{
    __typename?: "Balancer";
    totalLiquidity: any;
    totalSwapCount: any;
    totalSwapFee: any;
    totalSwapVolume: any;
    poolCount: number;
  }>;
  balancers24: Array<{
    __typename?: "Balancer";
    totalLiquidity: any;
    totalSwapCount: any;
    totalSwapFee: any;
    totalSwapVolume: any;
    poolCount: number;
  }>;
  balancers48: Array<{
    __typename?: "Balancer";
    totalLiquidity: any;
    totalSwapCount: any;
    totalSwapFee: any;
    totalSwapVolume: any;
    poolCount: number;
  }>;
  balancerSnapshots: Array<{
    __typename?: "BalancerSnapshot";
    id: string;
    timestamp: number;
    poolCount: number;
    totalLiquidity: any;
    totalSwapCount: any;
    totalSwapVolume: any;
    totalSwapFee: any;
  }>;
  whaleSwaps: Array<{
    __typename?: "Swap";
    id: string;
    caller: any;
    tokenIn: any;
    tokenInSym: string;
    tokenOut: any;
    tokenOutSym: string;
    tokenAmountIn: any;
    tokenAmountOut: any;
    valueUSD: any;
    timestamp: number;
    tx: any;
    poolId: {
      __typename?: "Pool";
      id: string;
      name?: string | null;
      address: any;
      swapFee: any;
    };
    userAddress: { __typename?: "User"; id: string };
  }>;
};

export type GetTokenDataQueryVariables = Exact<{
  block24: Block_Height;
  first: Scalars["Int"]["input"];
}>;

export type GetTokenDataQuery = {
  __typename?: "Query";
  tokens: Array<{
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  }>;
  tokens24: Array<{
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  }>;
};

export type GetTokenSingleDataQueryVariables = Exact<{
  address: Scalars["String"]["input"];
  block24: Block_Height;
}>;

export type GetTokenSingleDataQuery = {
  __typename?: "Query";
  tokens: Array<{
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  }>;
  tokens24: Array<{
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  }>;
};

export type GetTokenPageDataQueryVariables = Exact<{
  address: Scalars["String"]["input"];
  startTimestamp: Scalars["Int"]["input"];
}>;

export type GetTokenPageDataQuery = {
  __typename?: "Query";
  tokenSnapshots: Array<{
    __typename?: "TokenSnapshot";
    id: string;
    timestamp: number;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
  }>;
};

export type GetTransactionDataQueryVariables = Exact<{
  addresses: Array<Scalars["Bytes"]["input"]> | Scalars["Bytes"]["input"];
  poolIds: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
  startTimestamp: Scalars["Int"]["input"];
}>;

export type GetTransactionDataQuery = {
  __typename?: "Query";
  swapsIn: Array<{
    __typename?: "Swap";
    id: string;
    caller: any;
    tokenIn: any;
    tokenInSym: string;
    tokenOut: any;
    tokenOutSym: string;
    tokenAmountIn: any;
    tokenAmountOut: any;
    valueUSD: any;
    timestamp: number;
    tx: any;
    poolId: {
      __typename?: "Pool";
      id: string;
      name?: string | null;
      address: any;
      swapFee: any;
    };
    userAddress: { __typename?: "User"; id: string };
  }>;
  swapsOut: Array<{
    __typename?: "Swap";
    id: string;
    caller: any;
    tokenIn: any;
    tokenInSym: string;
    tokenOut: any;
    tokenOutSym: string;
    tokenAmountIn: any;
    tokenAmountOut: any;
    valueUSD: any;
    timestamp: number;
    tx: any;
    poolId: {
      __typename?: "Pool";
      id: string;
      name?: string | null;
      address: any;
      swapFee: any;
    };
    userAddress: { __typename?: "User"; id: string };
  }>;
  joinExits: Array<{
    __typename?: "JoinExit";
    amounts: Array<any>;
    valueUSD?: any | null;
    id: string;
    sender: any;
    timestamp: number;
    tx: any;
    type: InvestType;
    pool: { __typename?: "Pool"; id: string; tokensList: Array<any> };
  }>;
};

export type TokenSnapshotFragment = {
  __typename?: "TokenSnapshot";
  id: string;
  timestamp: number;
  totalBalanceUSD: any;
  totalBalanceNotional: any;
  totalVolumeUSD: any;
  totalVolumeNotional: any;
  totalSwapCount: any;
};

export type GetPoolDataQueryVariables = Exact<{
  block24: Block_Height;
  first: Scalars["Int"]["input"];
}>;

export type GetPoolDataQuery = {
  __typename?: "Query";
  pools: Array<{
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  }>;
  pools24: Array<{
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  }>;
};

export type GetUserWalletPoolDataQueryVariables = Exact<{
  userAddress: Scalars["String"]["input"];
  block: Scalars["Int"]["input"];
}>;

export type GetUserWalletPoolDataQuery = {
  __typename?: "Query";
  poolShares: Array<{
    __typename?: "PoolShare";
    balance: any;
    poolId: {
      __typename?: "Pool";
      id: string;
      totalLiquidity: any;
      totalShares: any;
    };
  }>;
};

export type GetPoolChartDataQueryVariables = Exact<{
  poolId: Scalars["String"]["input"];
  startTimestamp: Scalars["Int"]["input"];
}>;

export type GetPoolChartDataQuery = {
  __typename?: "Query";
  poolSnapshots: Array<{
    __typename?: "PoolSnapshot";
    id: string;
    amounts: Array<any>;
    swapVolume: any;
    swapFees: any;
    timestamp: number;
    swapsCount: any;
    holdersCount: any;
    pool: {
      __typename?: "Pool";
      id: string;
      tokens?: Array<{
        __typename?: "PoolToken";
        address: string;
        balance: any;
      }> | null;
    };
  }>;
};

export type BalancerPoolSwapFeeSnapshotQueryVariables = Exact<{
  startTimestamp: Scalars["Int"]["input"];
  endTimeStamp: Scalars["Int"]["input"];
}>;

export type BalancerPoolSwapFeeSnapshotQuery = {
  __typename?: "Query";
  poolSnapshots: Array<{
    __typename?: "PoolSnapshot";
    id: string;
    amounts: Array<any>;
    totalShares: any;
    swapVolume: any;
    swapFees: any;
    timestamp: number;
    swapsCount: any;
    holdersCount: any;
    pool: { __typename?: "Pool"; id: string };
  }>;
};

export type LatestPriceFragment = {
  __typename?: "LatestPrice";
  asset: any;
  pricingAsset: any;
  price: any;
  poolId: { __typename?: "Pool"; id: string };
};

export type BalancerProtocolDataQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balancer_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerProtocolDataQuery = {
  __typename?: "Query";
  balancers: Array<{
    __typename?: "Balancer";
    id: string;
    totalLiquidity: any;
    totalSwapVolume: any;
    totalSwapFee: any;
    poolCount: number;
    totalSwapCount: any;
  }>;
};

export type BalancerUserQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    sharesOwned?: Array<{
      __typename?: "PoolShare";
      balance: any;
      poolId: { __typename?: "Pool"; id: string };
    }> | null;
  } | null;
};

export type BalancerUsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: string;
    sharesOwned?: Array<{
      __typename?: "PoolShare";
      balance: any;
      poolId: { __typename?: "Pool"; id: string };
    }> | null;
  }>;
};

export type UserFragment = {
  __typename?: "User";
  id: string;
  sharesOwned?: Array<{
    __typename?: "PoolShare";
    balance: any;
    poolId: { __typename?: "Pool"; id: string };
  }> | null;
};

export type BalancerTokenPricesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerTokenPricesQuery = {
  __typename?: "Query";
  tokenPrices: Array<{
    __typename?: "TokenPrice";
    id: string;
    asset: any;
    amount: any;
    pricingAsset: any;
    price: any;
    block: any;
    timestamp: number;
    poolId: { __typename?: "Pool"; id: string };
  }>;
};

export type BalancerChartTokenPricesQueryVariables = Exact<{
  asset: Scalars["Bytes"]["input"];
}>;

export type BalancerChartTokenPricesQuery = {
  __typename?: "Query";
  prices1: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
  prices2: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
  prices3: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
  prices4: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
  prices5: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
  prices6: Array<{
    __typename?: "TokenPrice";
    id: string;
    timestamp: number;
    price: any;
    amount: any;
  }>;
};

export type BalancerChartTokenPriceFragment = {
  __typename?: "TokenPrice";
  id: string;
  timestamp: number;
  price: any;
  amount: any;
};

export type BalancerTokenPriceFragment = {
  __typename?: "TokenPrice";
  id: string;
  asset: any;
  amount: any;
  pricingAsset: any;
  price: any;
  block: any;
  timestamp: number;
  poolId: { __typename?: "Pool"; id: string };
};

export type BalancerPoolFragment = {
  __typename?: "Pool";
  id: string;
  address: any;
  poolType?: string | null;
  symbol?: string | null;
  name?: string | null;
  swapFee: any;
  totalWeight?: any | null;
  totalSwapVolume: any;
  totalSwapFee: any;
  totalLiquidity: any;
  totalShares: any;
  swapsCount: any;
  holdersCount: any;
  createTime: number;
  owner?: any | null;
  amp?: any | null;
  factory?: any | null;
  strategyType: number;
  swapEnabled: boolean;
  tokens?: Array<{
    __typename?: "PoolToken";
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    address: string;
    balance: any;
    weight?: any | null;
    priceRate: any;
    poolId?: { __typename?: "Pool"; id: string; address: any } | null;
  }> | null;
};

export type BalancerPoolTokenFragment = {
  __typename?: "PoolToken";
  id: string;
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  balance: any;
  weight?: any | null;
  priceRate: any;
  poolId?: { __typename?: "Pool"; id: string; address: any } | null;
};

export type GetBalancerPoolsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type GetBalancerPoolsQuery = {
  __typename?: "Query";
  pools: Array<{
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  }>;
};

export type GetBalancerPoolQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  block24?: InputMaybe<Block_Height>;
}>;

export type GetBalancerPoolQuery = {
  __typename?: "Query";
  pool?: {
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  } | null;
  pool24?: {
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  } | null;
};

export type BalancerPoolTokensQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolToken_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerPoolTokensQuery = {
  __typename?: "Query";
  poolTokens: Array<{
    __typename?: "PoolToken";
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    address: string;
    balance: any;
    weight?: any | null;
    priceRate: any;
    poolId?: { __typename?: "Pool"; id: string; address: any } | null;
  }>;
};

export type BalancerPoolHistoricalLiquiditiesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerPoolHistoricalLiquiditiesQuery = {
  __typename?: "Query";
  poolHistoricalLiquidities: Array<{
    __typename?: "PoolHistoricalLiquidity";
    id: string;
    poolTotalShares: any;
    poolLiquidity: any;
    poolShareValue: any;
    pricingAsset: any;
    block: any;
    poolId: { __typename?: "Pool"; id: string };
  }>;
};

export type BalancerPoolSnapshotsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerPoolSnapshotsQuery = {
  __typename?: "Query";
  poolSnapshots: Array<{
    __typename?: "PoolSnapshot";
    id: string;
    totalShares: any;
    swapVolume: any;
    swapFees: any;
    timestamp: number;
    pool: { __typename?: "Pool"; id: string };
  }>;
};

export type BalancerPoolSnapshotFragment = {
  __typename?: "PoolSnapshot";
  id: string;
  totalShares: any;
  swapVolume: any;
  swapFees: any;
  timestamp: number;
  pool: { __typename?: "Pool"; id: string };
};

export type BalancerLatestPricesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestPrice_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerLatestPricesQuery = {
  __typename?: "Query";
  latestPrices: Array<{
    __typename?: "LatestPrice";
    id: string;
    asset: any;
    price: any;
    pricingAsset: any;
    poolId: { __typename?: "Pool"; id: string };
  }>;
};

export type BalancerJoinExitsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JoinExit_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerJoinExitsQuery = {
  __typename?: "Query";
  joinExits: Array<{
    __typename?: "JoinExit";
    amounts: Array<any>;
    valueUSD?: any | null;
    id: string;
    sender: any;
    timestamp: number;
    tx: any;
    type: InvestType;
    pool: { __typename?: "Pool"; id: string; tokensList: Array<any> };
  }>;
};

export type BalancerJoinExitFragment = {
  __typename?: "JoinExit";
  amounts: Array<any>;
  valueUSD?: any | null;
  id: string;
  sender: any;
  timestamp: number;
  tx: any;
  type: InvestType;
  pool: { __typename?: "Pool"; id: string; tokensList: Array<any> };
};

export type BalancePortfolioDataQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  previousBlockNumber: Scalars["Int"]["input"];
}>;

export type BalancePortfolioDataQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    sharesOwned?: Array<{
      __typename?: "PoolShare";
      balance: any;
      poolId: { __typename?: "Pool"; id: string };
    }> | null;
  } | null;
  pools: Array<{
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  }>;
  previousUser?: {
    __typename?: "User";
    id: string;
    sharesOwned?: Array<{
      __typename?: "PoolShare";
      balance: any;
      poolId: { __typename?: "Pool"; id: string };
    }> | null;
  } | null;
  previousPools: Array<{
    __typename?: "Pool";
    id: string;
    address: any;
    poolType?: string | null;
    symbol?: string | null;
    name?: string | null;
    swapFee: any;
    totalWeight?: any | null;
    totalSwapVolume: any;
    totalSwapFee: any;
    totalLiquidity: any;
    totalShares: any;
    swapsCount: any;
    holdersCount: any;
    createTime: number;
    owner?: any | null;
    amp?: any | null;
    factory?: any | null;
    strategyType: number;
    swapEnabled: boolean;
    tokens?: Array<{
      __typename?: "PoolToken";
      id: string;
      symbol: string;
      name: string;
      decimals: number;
      address: string;
      balance: any;
      weight?: any | null;
      priceRate: any;
      poolId?: { __typename?: "Pool"; id: string; address: any } | null;
    }> | null;
  }>;
};

export type BalancerSwapsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerSwapsQuery = {
  __typename?: "Query";
  swaps: Array<{
    __typename?: "Swap";
    id: string;
    caller: any;
    tokenIn: any;
    tokenInSym: string;
    tokenOut: any;
    tokenOutSym: string;
    tokenAmountIn: any;
    tokenAmountOut: any;
    valueUSD: any;
    timestamp: number;
    tx: any;
    poolId: {
      __typename?: "Pool";
      id: string;
      name?: string | null;
      address: any;
      swapFee: any;
    };
    userAddress: { __typename?: "User"; id: string };
  }>;
};

export type BalancerSwapFragment = {
  __typename?: "Swap";
  id: string;
  caller: any;
  tokenIn: any;
  tokenInSym: string;
  tokenOut: any;
  tokenOutSym: string;
  tokenAmountIn: any;
  tokenAmountOut: any;
  valueUSD: any;
  timestamp: number;
  tx: any;
  poolId: {
    __typename?: "Pool";
    id: string;
    name?: string | null;
    address: any;
    swapFee: any;
  };
  userAddress: { __typename?: "User"; id: string };
};

export type GetBalancerTokensQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type GetBalancerTokensQuery = {
  __typename?: "Query";
  tokens: Array<{
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  }>;
};

export type BalancerTokenFragment = {
  __typename?: "Token";
  id: string;
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  totalBalanceUSD: any;
  totalBalanceNotional: any;
  totalVolumeUSD: any;
  totalVolumeNotional: any;
  totalSwapCount: any;
  latestUSDPrice?: any | null;
};

export type BalancerTradePairsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradePair_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type BalancerTradePairsQuery = {
  __typename?: "Query";
  tradePairs: Array<{
    __typename?: "TradePair";
    id: string;
    totalSwapVolume: any;
    totalSwapFee: any;
    token0: {
      __typename?: "Token";
      id: string;
      address: string;
      decimals: number;
      name: string;
      symbol: string;
      totalBalanceUSD: any;
      totalBalanceNotional: any;
      totalVolumeUSD: any;
      totalVolumeNotional: any;
      totalSwapCount: any;
      latestUSDPrice?: any | null;
    };
    token1: {
      __typename?: "Token";
      id: string;
      address: string;
      decimals: number;
      name: string;
      symbol: string;
      totalBalanceUSD: any;
      totalBalanceNotional: any;
      totalVolumeUSD: any;
      totalVolumeNotional: any;
      totalSwapCount: any;
      latestUSDPrice?: any | null;
    };
  }>;
};

export type BalancerTradePairFragment = {
  __typename?: "TradePair";
  id: string;
  totalSwapVolume: any;
  totalSwapFee: any;
  token0: {
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  };
  token1: {
    __typename?: "Token";
    id: string;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    totalBalanceUSD: any;
    totalBalanceNotional: any;
    totalVolumeUSD: any;
    totalVolumeNotional: any;
    totalSwapCount: any;
    latestUSDPrice?: any | null;
  };
};

export type GetBalancerSnapshotsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type GetBalancerSnapshotsQuery = {
  __typename?: "Query";
  balancerSnapshots: Array<{
    __typename?: "BalancerSnapshot";
    id: string;
    timestamp: number;
    poolCount: number;
    totalLiquidity: any;
    totalSwapCount: any;
    totalSwapVolume: any;
    totalSwapFee: any;
  }>;
};

export type BalancerSnapshotFragment = {
  __typename?: "BalancerSnapshot";
  id: string;
  timestamp: number;
  poolCount: number;
  totalLiquidity: any;
  totalSwapCount: any;
  totalSwapVolume: any;
  totalSwapFee: any;
};

export type GetLatestPricesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestPrice_Filter>;
  block?: InputMaybe<Block_Height>;
}>;

export type GetLatestPricesQuery = {
  __typename?: "Query";
  latestPrices: Array<{
    __typename?: "LatestPrice";
    asset: any;
    pricingAsset: any;
    price: any;
    poolId: { __typename?: "Pool"; id: string };
  }>;
};

export type GetLatestBlockQueryVariables = Exact<{ [key: string]: never }>;

export type GetLatestBlockQuery = {
  __typename?: "Query";
  blocks: Array<{
    __typename?: "Block";
    id: string;
    number: any;
    timestamp: any;
  }>;
};

export type GetTokenListQueryVariables = Exact<{ [key: string]: never }>;

export type GetTokenListQuery = {
  __typename?: "Query";
  tokenGetTokens: Array<{
    __typename?: "GqlToken";
    address: string;
    name: string;
    logoURI?: string | null;
  }>;
};

export const AuraBlockFragmentDoc = gql`
  fragment AuraBlock on Query {
    _meta {
      block {
        number
      }
    }
  }
`;
export const AllTokenFragmentDoc = gql`
  fragment AllToken on Token {
    id
    decimals
    symbol
    name
  }
`;
export const AllPoolFragmentDoc = gql`
  fragment AllPool on Pool {
    id
    depositToken {
      ...AllToken
    }
    lpToken {
      ...AllToken
    }
    isFactoryPool
    factoryPoolData {
      id
      addedAt
      isShutdown
      stash
      gauge
    }
    gauge {
      id
      balance
      totalSupply
      workingSupply
    }
    rewardPool
    totalSupply
    totalStaked
  }
  ${AllTokenFragmentDoc}
`;
export const AllPoolRewardDataFragmentDoc = gql`
  fragment AllPoolRewardData on PoolRewardData {
    id
    token {
      ...AllToken
    }
    periodFinish
    lastUpdateTime
    rewardPerTokenStored
    rewardRate
  }
  ${AllTokenFragmentDoc}
`;
export const AllPoolAccountRewardsFragmentDoc = gql`
  fragment AllPoolAccountRewards on PoolAccountRewards {
    id
    rewards
    rewardPerTokenPaid
    rewardToken {
      ...AllToken
    }
  }
  ${AllTokenFragmentDoc}
`;
export const AllPoolAccountFragmentDoc = gql`
  fragment AllPoolAccount on PoolAccount {
    id
    staked
    rewards {
      ...AllPoolAccountRewards
    }
  }
  ${AllPoolAccountRewardsFragmentDoc}
`;
export const TokenSnapshotFragmentDoc = gql`
  fragment TokenSnapshot on TokenSnapshot {
    id
    timestamp
    totalBalanceUSD
    totalBalanceNotional
    totalVolumeUSD
    totalVolumeNotional
    totalSwapCount
  }
`;
export const LatestPriceFragmentDoc = gql`
  fragment LatestPrice on LatestPrice {
    asset
    pricingAsset
    price
    poolId {
      id
    }
  }
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    id
    sharesOwned(first: 1000) {
      balance
      poolId {
        id
      }
    }
  }
`;
export const BalancerChartTokenPriceFragmentDoc = gql`
  fragment BalancerChartTokenPrice on TokenPrice {
    id
    timestamp
    price
    amount
  }
`;
export const BalancerTokenPriceFragmentDoc = gql`
  fragment BalancerTokenPrice on TokenPrice {
    id
    poolId {
      id
    }
    asset
    amount
    pricingAsset
    price
    block
    timestamp
  }
`;
export const BalancerPoolTokenFragmentDoc = gql`
  fragment BalancerPoolToken on PoolToken {
    id
    symbol
    name
    decimals
    address
    balance
    weight
    priceRate
    poolId {
      id
      address
    }
  }
`;
export const BalancerPoolFragmentDoc = gql`
  fragment BalancerPool on Pool {
    id
    address
    poolType
    symbol
    name
    swapFee
    totalWeight
    totalSwapVolume
    totalSwapFee
    totalLiquidity
    totalShares
    swapsCount
    holdersCount
    createTime
    owner
    amp
    factory
    strategyType
    swapEnabled
    tokens(first: 10) {
      ...BalancerPoolToken
    }
  }
  ${BalancerPoolTokenFragmentDoc}
`;
export const BalancerPoolSnapshotFragmentDoc = gql`
  fragment BalancerPoolSnapshot on PoolSnapshot {
    id
    pool {
      id
    }
    totalShares
    swapVolume
    swapFees
    timestamp
  }
`;
export const BalancerJoinExitFragmentDoc = gql`
  fragment BalancerJoinExit on JoinExit {
    amounts
    valueUSD
    id
    sender
    timestamp
    tx
    type
    pool {
      id
      tokensList
    }
  }
`;
export const BalancerSwapFragmentDoc = gql`
  fragment BalancerSwap on Swap {
    id
    caller
    tokenIn
    tokenInSym
    tokenOut
    tokenOutSym
    tokenAmountIn
    tokenAmountOut
    valueUSD
    poolId {
      id
      name
      address
      swapFee
    }
    userAddress {
      id
    }
    timestamp
    tx
  }
`;
export const BalancerTokenFragmentDoc = gql`
  fragment BalancerToken on Token {
    id
    address
    decimals
    name
    symbol
    totalBalanceUSD
    totalBalanceNotional
    totalVolumeUSD
    totalVolumeNotional
    totalSwapCount
    latestUSDPrice
  }
`;
export const BalancerTradePairFragmentDoc = gql`
  fragment BalancerTradePair on TradePair {
    id
    token0 {
      ...BalancerToken
    }
    token1 {
      ...BalancerToken
    }
    totalSwapVolume
    totalSwapFee
  }
  ${BalancerTokenFragmentDoc}
`;
export const BalancerSnapshotFragmentDoc = gql`
  fragment BalancerSnapshot on BalancerSnapshot {
    id
    timestamp
    poolCount
    totalLiquidity
    totalSwapCount
    totalSwapVolume
    totalSwapFee
  }
`;
export const AuraBalMintTransactionsDocument = gql`
  query AuraBalMintTransactions($startTimestamp: Int!) {
    auraBalMintTransactions(
      where: { timestamp_gt: $startTimestamp }
      first: 1000
      orderBy: timestamp
      orderDirection: asc
    ) {
      timestamp
      hash
      account {
        id
      }
      amount
    }
  }
`;

/**
 * __useAuraBalMintTransactionsQuery__
 *
 * To run a query within a React component, call `useAuraBalMintTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraBalMintTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraBalMintTransactionsQuery({
 *   variables: {
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useAuraBalMintTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuraBalMintTransactionsQuery,
    AuraBalMintTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AuraBalMintTransactionsQuery,
    AuraBalMintTransactionsQueryVariables
  >(AuraBalMintTransactionsDocument, options);
}
export function useAuraBalMintTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuraBalMintTransactionsQuery,
    AuraBalMintTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AuraBalMintTransactionsQuery,
    AuraBalMintTransactionsQueryVariables
  >(AuraBalMintTransactionsDocument, options);
}
export type AuraBalMintTransactionsQueryHookResult = ReturnType<
  typeof useAuraBalMintTransactionsQuery
>;
export type AuraBalMintTransactionsLazyQueryHookResult = ReturnType<
  typeof useAuraBalMintTransactionsLazyQuery
>;
export type AuraBalMintTransactionsQueryResult = Apollo.QueryResult<
  AuraBalMintTransactionsQuery,
  AuraBalMintTransactionsQueryVariables
>;
export const AuraBalTransactionsDocument = gql`
  query AuraBalTransactions {
    vaultHarvestTransactions(
      first: 1000
      orderBy: timestamp
      orderDirection: asc
    ) {
      timestamp
      harvested
      hash
      sender
    }
    vaultDepositTransactions(
      first: 1000
      orderBy: timestamp
      orderDirection: asc
    ) {
      timestamp
      assets
      shares
      hash
      sender
    }
    vaultWithdrawTransactions(
      first: 1000
      orderBy: timestamp
      orderDirection: asc
    ) {
      timestamp
      assets
      shares
      hash
      sender
    }
  }
`;

/**
 * __useAuraBalTransactionsQuery__
 *
 * To run a query within a React component, call `useAuraBalTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraBalTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraBalTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuraBalTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AuraBalTransactionsQuery,
    AuraBalTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AuraBalTransactionsQuery,
    AuraBalTransactionsQueryVariables
  >(AuraBalTransactionsDocument, options);
}
export function useAuraBalTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuraBalTransactionsQuery,
    AuraBalTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AuraBalTransactionsQuery,
    AuraBalTransactionsQueryVariables
  >(AuraBalTransactionsDocument, options);
}
export type AuraBalTransactionsQueryHookResult = ReturnType<
  typeof useAuraBalTransactionsQuery
>;
export type AuraBalTransactionsLazyQueryHookResult = ReturnType<
  typeof useAuraBalTransactionsLazyQuery
>;
export type AuraBalTransactionsQueryResult = Apollo.QueryResult<
  AuraBalTransactionsQuery,
  AuraBalTransactionsQueryVariables
>;
export const AuraGlobalStatsDocument = gql`
  query AuraGlobalStats {
    global(id: "global") {
      id
      aura
      auraTotalSupply
      auraBalTotalSupply
      auraMaxSupply
      auraReductionPerCliff
      auraTotalCliffs
    }
    masterChefs {
      id
      endBlock
      startBlock
      totalAllocPoint
      rewardPerBlock
    }
    tokens(first: 1000) {
      ...AllToken
    }
    auraLockers {
      lockedSupply
    }
  }
  ${AllTokenFragmentDoc}
`;

/**
 * __useAuraGlobalStatsQuery__
 *
 * To run a query within a React component, call `useAuraGlobalStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraGlobalStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraGlobalStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuraGlobalStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AuraGlobalStatsQuery,
    AuraGlobalStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuraGlobalStatsQuery, AuraGlobalStatsQueryVariables>(
    AuraGlobalStatsDocument,
    options
  );
}
export function useAuraGlobalStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuraGlobalStatsQuery,
    AuraGlobalStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AuraGlobalStatsQuery,
    AuraGlobalStatsQueryVariables
  >(AuraGlobalStatsDocument, options);
}
export type AuraGlobalStatsQueryHookResult = ReturnType<
  typeof useAuraGlobalStatsQuery
>;
export type AuraGlobalStatsLazyQueryHookResult = ReturnType<
  typeof useAuraGlobalStatsLazyQuery
>;
export type AuraGlobalStatsQueryResult = Apollo.QueryResult<
  AuraGlobalStatsQuery,
  AuraGlobalStatsQueryVariables
>;
export const AuraPoolsDocument = gql`
  query AuraPools($block: Block_height) {
    pools(block: $block) {
      totalStaked
      id
      gauge {
        id
        pool {
          id
          factoryPoolData {
            balancerPoolId
            isShutdown
          }
        }
        totalSupply
        workingSupply
        balance
      }
    }
  }
`;

/**
 * __useAuraPoolsQuery__
 *
 * To run a query within a React component, call `useAuraPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraPoolsQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useAuraPoolsQuery(
  baseOptions?: Apollo.QueryHookOptions<AuraPoolsQuery, AuraPoolsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuraPoolsQuery, AuraPoolsQueryVariables>(
    AuraPoolsDocument,
    options
  );
}
export function useAuraPoolsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuraPoolsQuery,
    AuraPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuraPoolsQuery, AuraPoolsQueryVariables>(
    AuraPoolsDocument,
    options
  );
}
export type AuraPoolsQueryHookResult = ReturnType<typeof useAuraPoolsQuery>;
export type AuraPoolsLazyQueryHookResult = ReturnType<
  typeof useAuraPoolsLazyQuery
>;
export type AuraPoolsQueryResult = Apollo.QueryResult<
  AuraPoolsQuery,
  AuraPoolsQueryVariables
>;
export const PoolLeaderboardDocument = gql`
  query PoolLeaderboard($poolId: ID!) {
    leaderboard: pool(id: $poolId) {
      accounts(
        first: 1000
        where: { staked_gt: 1000 }
        orderBy: staked
        orderDirection: desc
      ) {
        staked
        account {
          id
        }
      }
      totalStaked
    }
  }
`;

/**
 * __usePoolLeaderboardQuery__
 *
 * To run a query within a React component, call `usePoolLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolLeaderboardQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *   },
 * });
 */
export function usePoolLeaderboardQuery(
  baseOptions: Apollo.QueryHookOptions<
    PoolLeaderboardQuery,
    PoolLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PoolLeaderboardQuery, PoolLeaderboardQueryVariables>(
    PoolLeaderboardDocument,
    options
  );
}
export function usePoolLeaderboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PoolLeaderboardQuery,
    PoolLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PoolLeaderboardQuery,
    PoolLeaderboardQueryVariables
  >(PoolLeaderboardDocument, options);
}
export type PoolLeaderboardQueryHookResult = ReturnType<
  typeof usePoolLeaderboardQuery
>;
export type PoolLeaderboardLazyQueryHookResult = ReturnType<
  typeof usePoolLeaderboardLazyQuery
>;
export type PoolLeaderboardQueryResult = Apollo.QueryResult<
  PoolLeaderboardQuery,
  PoolLeaderboardQueryVariables
>;
export const PoolWithdrawnTransactionsDocument = gql`
  query PoolWithdrawnTransactions($block: Block_height, $first: Int) {
    poolWithdrawnTransactions(block: $block, first: $first) {
      amount
      id
      timestamp
    }
    poolRewardPaidTransactions(block: $block, first: $first) {
      id
      reward
      timestamp
    }
    poolStakedTransactions(block: $block, first: $first) {
      amount
      timestamp
      id
    }
  }
`;

/**
 * __usePoolWithdrawnTransactionsQuery__
 *
 * To run a query within a React component, call `usePoolWithdrawnTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolWithdrawnTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolWithdrawnTransactionsQuery({
 *   variables: {
 *      block: // value for 'block'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePoolWithdrawnTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PoolWithdrawnTransactionsQuery,
    PoolWithdrawnTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PoolWithdrawnTransactionsQuery,
    PoolWithdrawnTransactionsQueryVariables
  >(PoolWithdrawnTransactionsDocument, options);
}
export function usePoolWithdrawnTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PoolWithdrawnTransactionsQuery,
    PoolWithdrawnTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PoolWithdrawnTransactionsQuery,
    PoolWithdrawnTransactionsQueryVariables
  >(PoolWithdrawnTransactionsDocument, options);
}
export type PoolWithdrawnTransactionsQueryHookResult = ReturnType<
  typeof usePoolWithdrawnTransactionsQuery
>;
export type PoolWithdrawnTransactionsLazyQueryHookResult = ReturnType<
  typeof usePoolWithdrawnTransactionsLazyQuery
>;
export type PoolWithdrawnTransactionsQueryResult = Apollo.QueryResult<
  PoolWithdrawnTransactionsQuery,
  PoolWithdrawnTransactionsQueryVariables
>;
export const VaultLeaderboardDocument = gql`
  query VaultLeaderboard($vaultId: ID!) {
    leaderboard: vault(id: $vaultId) {
      accounts(
        first: 1000
        where: { shares_gt: 1000 }
        orderBy: shares
        orderDirection: desc
      ) {
        shares
        account {
          id
        }
      }
      totalSupply
    }
  }
`;

/**
 * __useVaultLeaderboardQuery__
 *
 * To run a query within a React component, call `useVaultLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useVaultLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVaultLeaderboardQuery({
 *   variables: {
 *      vaultId: // value for 'vaultId'
 *   },
 * });
 */
export function useVaultLeaderboardQuery(
  baseOptions: Apollo.QueryHookOptions<
    VaultLeaderboardQuery,
    VaultLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VaultLeaderboardQuery, VaultLeaderboardQueryVariables>(
    VaultLeaderboardDocument,
    options
  );
}
export function useVaultLeaderboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VaultLeaderboardQuery,
    VaultLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    VaultLeaderboardQuery,
    VaultLeaderboardQueryVariables
  >(VaultLeaderboardDocument, options);
}
export type VaultLeaderboardQueryHookResult = ReturnType<
  typeof useVaultLeaderboardQuery
>;
export type VaultLeaderboardLazyQueryHookResult = ReturnType<
  typeof useVaultLeaderboardLazyQuery
>;
export type VaultLeaderboardQueryResult = Apollo.QueryResult<
  VaultLeaderboardQuery,
  VaultLeaderboardQueryVariables
>;
export const AuraDocument = gql`
  query Aura($accountId: String = "", $hasAccount: Boolean = false) {
    ...AuraBlock
    auraBal: pool(id: "auraBal") {
      ...AllPool
      rewardData {
        ...AllPoolRewardData
        queuedRewards
      }
      accounts(where: { account: $accountId }) @include(if: $hasAccount) {
        ...AllPoolAccount
      }
    }
    factoryPools: pools(where: { isFactoryPool: true }) {
      ...AllPool
      rewardData {
        ...AllPoolRewardData
        queuedRewards
      }
      accounts(where: { account: $accountId }) @include(if: $hasAccount) {
        ...AllPoolAccount
      }
    }
    vault(id: "0xfaa2ed111b4f580fcb85c48e6dc6782dc5fcd7a6") {
      id
      decimals
      name
      symbol
      strategy
      totalSupply
      totalUnderlying
      underlying {
        ...AllToken
      }
      asset {
        ...AllToken
      }
      rewardData {
        id
        token {
          ...AllToken
        }
        periodFinish
        lastUpdateTime
        rewardPerTokenStored
        rewardRate
        queuedRewards
      }
      accounts(where: { account: $accountId }) @include(if: $hasAccount) {
        id
        shares
        rewards {
          id
          rewardToken {
            ...AllToken
          }
          rewardPerTokenPaid
          rewards
        }
      }
    }
  }
  ${AuraBlockFragmentDoc}
  ${AllPoolFragmentDoc}
  ${AllPoolRewardDataFragmentDoc}
  ${AllPoolAccountFragmentDoc}
  ${AllTokenFragmentDoc}
`;

/**
 * __useAuraQuery__
 *
 * To run a query within a React component, call `useAuraQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      hasAccount: // value for 'hasAccount'
 *   },
 * });
 */
export function useAuraQuery(
  baseOptions?: Apollo.QueryHookOptions<AuraQuery, AuraQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuraQuery, AuraQueryVariables>(AuraDocument, options);
}
export function useAuraLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuraQuery, AuraQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuraQuery, AuraQueryVariables>(
    AuraDocument,
    options
  );
}
export type AuraQueryHookResult = ReturnType<typeof useAuraQuery>;
export type AuraLazyQueryHookResult = ReturnType<typeof useAuraLazyQuery>;
export type AuraQueryResult = Apollo.QueryResult<AuraQuery, AuraQueryVariables>;
export const LockerLeaderboardDocument = gql`
  query LockerLeaderboard {
    auraLockerLeaderboard: auraLocker(id: "auraLocker") {
      accounts(
        first: 1000
        where: { balance_gt: 1000000000000000000 }
        orderBy: balanceLocked
        orderDirection: desc
      ) {
        id
        balanceLocked
        userLocksLength
        userLocks {
          amount
          unlockTime
        }
        withdrawnTransactions {
          amount
          relocked
          timestamp
        }
      }
      lockedSupply
    }
  }
`;

/**
 * __useLockerLeaderboardQuery__
 *
 * To run a query within a React component, call `useLockerLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLockerLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLockerLeaderboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useLockerLeaderboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LockerLeaderboardQuery,
    LockerLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    LockerLeaderboardQuery,
    LockerLeaderboardQueryVariables
  >(LockerLeaderboardDocument, options);
}
export function useLockerLeaderboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LockerLeaderboardQuery,
    LockerLeaderboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LockerLeaderboardQuery,
    LockerLeaderboardQueryVariables
  >(LockerLeaderboardDocument, options);
}
export type LockerLeaderboardQueryHookResult = ReturnType<
  typeof useLockerLeaderboardQuery
>;
export type LockerLeaderboardLazyQueryHookResult = ReturnType<
  typeof useLockerLeaderboardLazyQuery
>;
export type LockerLeaderboardQueryResult = Apollo.QueryResult<
  LockerLeaderboardQuery,
  LockerLeaderboardQueryVariables
>;
export const GetProtocolDataDocument = gql`
  query GetProtocolData(
    $startTimestamp: Int!
    $block24: Block_height!
    $block48: Block_height!
  ) {
    balancers(first: 1) {
      totalLiquidity
      totalSwapCount
      totalSwapFee
      totalSwapVolume
      poolCount
    }
    balancers24: balancers(first: 1, block: $block24) {
      totalLiquidity
      totalSwapCount
      totalSwapFee
      totalSwapVolume
      poolCount
    }
    balancers48: balancers(first: 1, block: $block48) {
      totalLiquidity
      totalSwapCount
      totalSwapFee
      totalSwapVolume
      poolCount
    }
    balancerSnapshots(
      first: 1000
      orderBy: timestamp
      orderDirection: asc
      where: { timestamp_gte: $startTimestamp }
    ) {
      ...BalancerSnapshot
    }
    whaleSwaps: swaps(
      first: 100
      orderBy: timestamp
      orderDirection: desc
      where: { valueUSD_gte: "10000" }
    ) {
      ...BalancerSwap
    }
  }
  ${BalancerSnapshotFragmentDoc}
  ${BalancerSwapFragmentDoc}
`;

/**
 * __useGetProtocolDataQuery__
 *
 * To run a query within a React component, call `useGetProtocolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProtocolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProtocolDataQuery({
 *   variables: {
 *      startTimestamp: // value for 'startTimestamp'
 *      block24: // value for 'block24'
 *      block48: // value for 'block48'
 *   },
 * });
 */
export function useGetProtocolDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProtocolDataQuery,
    GetProtocolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProtocolDataQuery, GetProtocolDataQueryVariables>(
    GetProtocolDataDocument,
    options
  );
}
export function useGetProtocolDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProtocolDataQuery,
    GetProtocolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProtocolDataQuery,
    GetProtocolDataQueryVariables
  >(GetProtocolDataDocument, options);
}
export type GetProtocolDataQueryHookResult = ReturnType<
  typeof useGetProtocolDataQuery
>;
export type GetProtocolDataLazyQueryHookResult = ReturnType<
  typeof useGetProtocolDataLazyQuery
>;
export type GetProtocolDataQueryResult = Apollo.QueryResult<
  GetProtocolDataQuery,
  GetProtocolDataQueryVariables
>;
export const GetTokenDataDocument = gql`
  query GetTokenData($block24: Block_height!, $first: Int!) {
    tokens: tokens(
      first: $first
      orderBy: totalBalanceUSD
      orderDirection: desc
    ) {
      ...BalancerToken
    }
    tokens24: tokens(
      first: $first
      orderBy: totalBalanceUSD
      orderDirection: desc
      block: $block24
    ) {
      ...BalancerToken
    }
  }
  ${BalancerTokenFragmentDoc}
`;

/**
 * __useGetTokenDataQuery__
 *
 * To run a query within a React component, call `useGetTokenDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenDataQuery({
 *   variables: {
 *      block24: // value for 'block24'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetTokenDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTokenDataQuery,
    GetTokenDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTokenDataQuery, GetTokenDataQueryVariables>(
    GetTokenDataDocument,
    options
  );
}
export function useGetTokenDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTokenDataQuery,
    GetTokenDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTokenDataQuery, GetTokenDataQueryVariables>(
    GetTokenDataDocument,
    options
  );
}
export type GetTokenDataQueryHookResult = ReturnType<
  typeof useGetTokenDataQuery
>;
export type GetTokenDataLazyQueryHookResult = ReturnType<
  typeof useGetTokenDataLazyQuery
>;
export type GetTokenDataQueryResult = Apollo.QueryResult<
  GetTokenDataQuery,
  GetTokenDataQueryVariables
>;
export const GetTokenSingleDataDocument = gql`
  query GetTokenSingleData($address: String!, $block24: Block_height!) {
    tokens: tokens(
      orderBy: totalBalanceUSD
      orderDirection: desc
      where: { address: $address }
    ) {
      ...BalancerToken
    }
    tokens24: tokens(
      orderBy: totalBalanceUSD
      orderDirection: desc
      block: $block24
      where: { address: $address }
    ) {
      ...BalancerToken
    }
  }
  ${BalancerTokenFragmentDoc}
`;

/**
 * __useGetTokenSingleDataQuery__
 *
 * To run a query within a React component, call `useGetTokenSingleDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenSingleDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenSingleDataQuery({
 *   variables: {
 *      address: // value for 'address'
 *      block24: // value for 'block24'
 *   },
 * });
 */
export function useGetTokenSingleDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTokenSingleDataQuery,
    GetTokenSingleDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTokenSingleDataQuery,
    GetTokenSingleDataQueryVariables
  >(GetTokenSingleDataDocument, options);
}
export function useGetTokenSingleDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTokenSingleDataQuery,
    GetTokenSingleDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTokenSingleDataQuery,
    GetTokenSingleDataQueryVariables
  >(GetTokenSingleDataDocument, options);
}
export type GetTokenSingleDataQueryHookResult = ReturnType<
  typeof useGetTokenSingleDataQuery
>;
export type GetTokenSingleDataLazyQueryHookResult = ReturnType<
  typeof useGetTokenSingleDataLazyQuery
>;
export type GetTokenSingleDataQueryResult = Apollo.QueryResult<
  GetTokenSingleDataQuery,
  GetTokenSingleDataQueryVariables
>;
export const GetTokenPageDataDocument = gql`
  query GetTokenPageData($address: String!, $startTimestamp: Int!) {
    tokenSnapshots(
      first: 500
      orderBy: timestamp
      orderDirection: asc
      where: { token: $address, timestamp_gte: $startTimestamp }
    ) {
      ...TokenSnapshot
    }
  }
  ${TokenSnapshotFragmentDoc}
`;

/**
 * __useGetTokenPageDataQuery__
 *
 * To run a query within a React component, call `useGetTokenPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenPageDataQuery({
 *   variables: {
 *      address: // value for 'address'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetTokenPageDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTokenPageDataQuery,
    GetTokenPageDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>(
    GetTokenPageDataDocument,
    options
  );
}
export function useGetTokenPageDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTokenPageDataQuery,
    GetTokenPageDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTokenPageDataQuery,
    GetTokenPageDataQueryVariables
  >(GetTokenPageDataDocument, options);
}
export type GetTokenPageDataQueryHookResult = ReturnType<
  typeof useGetTokenPageDataQuery
>;
export type GetTokenPageDataLazyQueryHookResult = ReturnType<
  typeof useGetTokenPageDataLazyQuery
>;
export type GetTokenPageDataQueryResult = Apollo.QueryResult<
  GetTokenPageDataQuery,
  GetTokenPageDataQueryVariables
>;
export const GetTransactionDataDocument = gql`
  query GetTransactionData(
    $addresses: [Bytes!]!
    $poolIds: [String!]!
    $startTimestamp: Int!
  ) {
    swapsIn: swaps(
      first: 500
      orderBy: timestamp
      orderDirection: desc
      where: {
        tokenIn_in: $addresses
        poolId_in: $poolIds
        timestamp_gte: $startTimestamp
      }
    ) {
      ...BalancerSwap
    }
    swapsOut: swaps(
      first: 500
      orderBy: timestamp
      orderDirection: desc
      where: {
        tokenOut_in: $addresses
        poolId_in: $poolIds
        timestamp_gte: $startTimestamp
      }
    ) {
      ...BalancerSwap
    }
    joinExits(
      first: 150
      orderBy: timestamp
      orderDirection: desc
      where: { pool_in: $poolIds, timestamp_gte: $startTimestamp }
    ) {
      ...BalancerJoinExit
    }
  }
  ${BalancerSwapFragmentDoc}
  ${BalancerJoinExitFragmentDoc}
`;

/**
 * __useGetTransactionDataQuery__
 *
 * To run a query within a React component, call `useGetTransactionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionDataQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *      poolIds: // value for 'poolIds'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetTransactionDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransactionDataQuery,
    GetTransactionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTransactionDataQuery,
    GetTransactionDataQueryVariables
  >(GetTransactionDataDocument, options);
}
export function useGetTransactionDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionDataQuery,
    GetTransactionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTransactionDataQuery,
    GetTransactionDataQueryVariables
  >(GetTransactionDataDocument, options);
}
export type GetTransactionDataQueryHookResult = ReturnType<
  typeof useGetTransactionDataQuery
>;
export type GetTransactionDataLazyQueryHookResult = ReturnType<
  typeof useGetTransactionDataLazyQuery
>;
export type GetTransactionDataQueryResult = Apollo.QueryResult<
  GetTransactionDataQuery,
  GetTransactionDataQueryVariables
>;
export const GetPoolDataDocument = gql`
  query GetPoolData($block24: Block_height!, $first: Int!) {
    pools(first: $first, orderBy: totalLiquidity, orderDirection: desc) {
      ...BalancerPool
    }
    pools24: pools(
      first: $first
      orderBy: totalLiquidity
      orderDirection: desc
      block: $block24
    ) {
      ...BalancerPool
    }
  }
  ${BalancerPoolFragmentDoc}
`;

/**
 * __useGetPoolDataQuery__
 *
 * To run a query within a React component, call `useGetPoolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolDataQuery({
 *   variables: {
 *      block24: // value for 'block24'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPoolDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPoolDataQuery,
    GetPoolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPoolDataQuery, GetPoolDataQueryVariables>(
    GetPoolDataDocument,
    options
  );
}
export function useGetPoolDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPoolDataQuery,
    GetPoolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPoolDataQuery, GetPoolDataQueryVariables>(
    GetPoolDataDocument,
    options
  );
}
export type GetPoolDataQueryHookResult = ReturnType<typeof useGetPoolDataQuery>;
export type GetPoolDataLazyQueryHookResult = ReturnType<
  typeof useGetPoolDataLazyQuery
>;
export type GetPoolDataQueryResult = Apollo.QueryResult<
  GetPoolDataQuery,
  GetPoolDataQueryVariables
>;
export const GetUserWalletPoolDataDocument = gql`
  query GetUserWalletPoolData($userAddress: String!, $block: Int!) {
    poolShares(
      block: { number: $block }
      first: 1000
      where: { userAddress: $userAddress, balance_gt: 0 }
    ) {
      balance
      poolId {
        id
        totalLiquidity
        totalShares
      }
    }
  }
`;

/**
 * __useGetUserWalletPoolDataQuery__
 *
 * To run a query within a React component, call `useGetUserWalletPoolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWalletPoolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWalletPoolDataQuery({
 *   variables: {
 *      userAddress: // value for 'userAddress'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetUserWalletPoolDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserWalletPoolDataQuery,
    GetUserWalletPoolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserWalletPoolDataQuery,
    GetUserWalletPoolDataQueryVariables
  >(GetUserWalletPoolDataDocument, options);
}
export function useGetUserWalletPoolDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserWalletPoolDataQuery,
    GetUserWalletPoolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserWalletPoolDataQuery,
    GetUserWalletPoolDataQueryVariables
  >(GetUserWalletPoolDataDocument, options);
}
export type GetUserWalletPoolDataQueryHookResult = ReturnType<
  typeof useGetUserWalletPoolDataQuery
>;
export type GetUserWalletPoolDataLazyQueryHookResult = ReturnType<
  typeof useGetUserWalletPoolDataLazyQuery
>;
export type GetUserWalletPoolDataQueryResult = Apollo.QueryResult<
  GetUserWalletPoolDataQuery,
  GetUserWalletPoolDataQueryVariables
>;
export const GetPoolChartDataDocument = gql`
  query GetPoolChartData($poolId: String!, $startTimestamp: Int!) {
    poolSnapshots(
      first: 1000
      orderBy: timestamp
      orderDirection: asc
      where: { pool: $poolId, timestamp_gte: $startTimestamp }
    ) {
      id
      amounts
      swapVolume
      swapFees
      timestamp
      swapsCount
      holdersCount
      pool {
        id
        tokens {
          address
          balance
        }
      }
    }
  }
`;

/**
 * __useGetPoolChartDataQuery__
 *
 * To run a query within a React component, call `useGetPoolChartDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolChartDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolChartDataQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetPoolChartDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPoolChartDataQuery,
    GetPoolChartDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>(
    GetPoolChartDataDocument,
    options
  );
}
export function useGetPoolChartDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPoolChartDataQuery,
    GetPoolChartDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPoolChartDataQuery,
    GetPoolChartDataQueryVariables
  >(GetPoolChartDataDocument, options);
}
export type GetPoolChartDataQueryHookResult = ReturnType<
  typeof useGetPoolChartDataQuery
>;
export type GetPoolChartDataLazyQueryHookResult = ReturnType<
  typeof useGetPoolChartDataLazyQuery
>;
export type GetPoolChartDataQueryResult = Apollo.QueryResult<
  GetPoolChartDataQuery,
  GetPoolChartDataQueryVariables
>;
export const BalancerPoolSwapFeeSnapshotDocument = gql`
  query BalancerPoolSwapFeeSnapshot(
    $startTimestamp: Int!
    $endTimeStamp: Int!
  ) {
    poolSnapshots(
      first: 1000
      orderBy: swapFees
      orderDirection: desc
      where: { timestamp_in: [$startTimestamp, $endTimeStamp] }
    ) {
      id
      amounts
      totalShares
      swapVolume
      swapFees
      timestamp
      swapsCount
      holdersCount
      pool {
        id
      }
    }
  }
`;

/**
 * __useBalancerPoolSwapFeeSnapshotQuery__
 *
 * To run a query within a React component, call `useBalancerPoolSwapFeeSnapshotQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolSwapFeeSnapshotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolSwapFeeSnapshotQuery({
 *   variables: {
 *      startTimestamp: // value for 'startTimestamp'
 *      endTimeStamp: // value for 'endTimeStamp'
 *   },
 * });
 */
export function useBalancerPoolSwapFeeSnapshotQuery(
  baseOptions: Apollo.QueryHookOptions<
    BalancerPoolSwapFeeSnapshotQuery,
    BalancerPoolSwapFeeSnapshotQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerPoolSwapFeeSnapshotQuery,
    BalancerPoolSwapFeeSnapshotQueryVariables
  >(BalancerPoolSwapFeeSnapshotDocument, options);
}
export function useBalancerPoolSwapFeeSnapshotLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerPoolSwapFeeSnapshotQuery,
    BalancerPoolSwapFeeSnapshotQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerPoolSwapFeeSnapshotQuery,
    BalancerPoolSwapFeeSnapshotQueryVariables
  >(BalancerPoolSwapFeeSnapshotDocument, options);
}
export type BalancerPoolSwapFeeSnapshotQueryHookResult = ReturnType<
  typeof useBalancerPoolSwapFeeSnapshotQuery
>;
export type BalancerPoolSwapFeeSnapshotLazyQueryHookResult = ReturnType<
  typeof useBalancerPoolSwapFeeSnapshotLazyQuery
>;
export type BalancerPoolSwapFeeSnapshotQueryResult = Apollo.QueryResult<
  BalancerPoolSwapFeeSnapshotQuery,
  BalancerPoolSwapFeeSnapshotQueryVariables
>;
export const BalancerProtocolDataDocument = gql`
  query BalancerProtocolData(
    $skip: Int
    $first: Int
    $orderBy: Balancer_orderBy
    $orderDirection: OrderDirection
    $where: Balancer_filter
    $block: Block_height
  ) {
    balancers(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      id
      totalLiquidity
      totalSwapVolume
      totalSwapFee
      poolCount
      totalSwapCount
    }
  }
`;

/**
 * __useBalancerProtocolDataQuery__
 *
 * To run a query within a React component, call `useBalancerProtocolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerProtocolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerProtocolDataQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerProtocolDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerProtocolDataQuery,
    BalancerProtocolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerProtocolDataQuery,
    BalancerProtocolDataQueryVariables
  >(BalancerProtocolDataDocument, options);
}
export function useBalancerProtocolDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerProtocolDataQuery,
    BalancerProtocolDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerProtocolDataQuery,
    BalancerProtocolDataQueryVariables
  >(BalancerProtocolDataDocument, options);
}
export type BalancerProtocolDataQueryHookResult = ReturnType<
  typeof useBalancerProtocolDataQuery
>;
export type BalancerProtocolDataLazyQueryHookResult = ReturnType<
  typeof useBalancerProtocolDataLazyQuery
>;
export type BalancerProtocolDataQueryResult = Apollo.QueryResult<
  BalancerProtocolDataQuery,
  BalancerProtocolDataQueryVariables
>;
export const BalancerUserDocument = gql`
  query BalancerUser($id: ID!, $block: Block_height) {
    user(id: $id, block: $block) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useBalancerUserQuery__
 *
 * To run a query within a React component, call `useBalancerUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    BalancerUserQuery,
    BalancerUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BalancerUserQuery, BalancerUserQueryVariables>(
    BalancerUserDocument,
    options
  );
}
export function useBalancerUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerUserQuery,
    BalancerUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BalancerUserQuery, BalancerUserQueryVariables>(
    BalancerUserDocument,
    options
  );
}
export type BalancerUserQueryHookResult = ReturnType<
  typeof useBalancerUserQuery
>;
export type BalancerUserLazyQueryHookResult = ReturnType<
  typeof useBalancerUserLazyQuery
>;
export type BalancerUserQueryResult = Apollo.QueryResult<
  BalancerUserQuery,
  BalancerUserQueryVariables
>;
export const BalancerUsersDocument = gql`
  query BalancerUsers(
    $skip: Int
    $first: Int
    $orderBy: User_orderBy
    $orderDirection: OrderDirection
    $where: User_filter
    $block: Block_height
  ) {
    users(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useBalancerUsersQuery__
 *
 * To run a query within a React component, call `useBalancerUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerUsersQuery,
    BalancerUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BalancerUsersQuery, BalancerUsersQueryVariables>(
    BalancerUsersDocument,
    options
  );
}
export function useBalancerUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerUsersQuery,
    BalancerUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BalancerUsersQuery, BalancerUsersQueryVariables>(
    BalancerUsersDocument,
    options
  );
}
export type BalancerUsersQueryHookResult = ReturnType<
  typeof useBalancerUsersQuery
>;
export type BalancerUsersLazyQueryHookResult = ReturnType<
  typeof useBalancerUsersLazyQuery
>;
export type BalancerUsersQueryResult = Apollo.QueryResult<
  BalancerUsersQuery,
  BalancerUsersQueryVariables
>;
export const BalancerTokenPricesDocument = gql`
  query BalancerTokenPrices(
    $skip: Int
    $first: Int
    $orderBy: TokenPrice_orderBy
    $orderDirection: OrderDirection
    $where: TokenPrice_filter
    $block: Block_height
  ) {
    tokenPrices(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerTokenPrice
    }
  }
  ${BalancerTokenPriceFragmentDoc}
`;

/**
 * __useBalancerTokenPricesQuery__
 *
 * To run a query within a React component, call `useBalancerTokenPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerTokenPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerTokenPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerTokenPricesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerTokenPricesQuery,
    BalancerTokenPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerTokenPricesQuery,
    BalancerTokenPricesQueryVariables
  >(BalancerTokenPricesDocument, options);
}
export function useBalancerTokenPricesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerTokenPricesQuery,
    BalancerTokenPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerTokenPricesQuery,
    BalancerTokenPricesQueryVariables
  >(BalancerTokenPricesDocument, options);
}
export type BalancerTokenPricesQueryHookResult = ReturnType<
  typeof useBalancerTokenPricesQuery
>;
export type BalancerTokenPricesLazyQueryHookResult = ReturnType<
  typeof useBalancerTokenPricesLazyQuery
>;
export type BalancerTokenPricesQueryResult = Apollo.QueryResult<
  BalancerTokenPricesQuery,
  BalancerTokenPricesQueryVariables
>;
export const BalancerChartTokenPricesDocument = gql`
  query BalancerChartTokenPrices($asset: Bytes!) {
    prices1: tokenPrices(
      skip: 0
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
    prices2: tokenPrices(
      skip: 1000
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
    prices3: tokenPrices(
      skip: 2000
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
    prices4: tokenPrices(
      skip: 3000
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
    prices5: tokenPrices(
      skip: 4000
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
    prices6: tokenPrices(
      skip: 5000
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { asset: $asset }
    ) {
      ...BalancerChartTokenPrice
    }
  }
  ${BalancerChartTokenPriceFragmentDoc}
`;

/**
 * __useBalancerChartTokenPricesQuery__
 *
 * To run a query within a React component, call `useBalancerChartTokenPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerChartTokenPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerChartTokenPricesQuery({
 *   variables: {
 *      asset: // value for 'asset'
 *   },
 * });
 */
export function useBalancerChartTokenPricesQuery(
  baseOptions: Apollo.QueryHookOptions<
    BalancerChartTokenPricesQuery,
    BalancerChartTokenPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerChartTokenPricesQuery,
    BalancerChartTokenPricesQueryVariables
  >(BalancerChartTokenPricesDocument, options);
}
export function useBalancerChartTokenPricesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerChartTokenPricesQuery,
    BalancerChartTokenPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerChartTokenPricesQuery,
    BalancerChartTokenPricesQueryVariables
  >(BalancerChartTokenPricesDocument, options);
}
export type BalancerChartTokenPricesQueryHookResult = ReturnType<
  typeof useBalancerChartTokenPricesQuery
>;
export type BalancerChartTokenPricesLazyQueryHookResult = ReturnType<
  typeof useBalancerChartTokenPricesLazyQuery
>;
export type BalancerChartTokenPricesQueryResult = Apollo.QueryResult<
  BalancerChartTokenPricesQuery,
  BalancerChartTokenPricesQueryVariables
>;
export const GetBalancerPoolsDocument = gql`
  query GetBalancerPools(
    $skip: Int
    $first: Int
    $orderBy: Pool_orderBy
    $orderDirection: OrderDirection
    $where: Pool_filter
    $block: Block_height
  ) {
    pools(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerPool
    }
  }
  ${BalancerPoolFragmentDoc}
`;

/**
 * __useGetBalancerPoolsQuery__
 *
 * To run a query within a React component, call `useGetBalancerPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerPoolsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerPoolsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBalancerPoolsQuery,
    GetBalancerPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>(
    GetBalancerPoolsDocument,
    options
  );
}
export function useGetBalancerPoolsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBalancerPoolsQuery,
    GetBalancerPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBalancerPoolsQuery,
    GetBalancerPoolsQueryVariables
  >(GetBalancerPoolsDocument, options);
}
export type GetBalancerPoolsQueryHookResult = ReturnType<
  typeof useGetBalancerPoolsQuery
>;
export type GetBalancerPoolsLazyQueryHookResult = ReturnType<
  typeof useGetBalancerPoolsLazyQuery
>;
export type GetBalancerPoolsQueryResult = Apollo.QueryResult<
  GetBalancerPoolsQuery,
  GetBalancerPoolsQueryVariables
>;
export const GetBalancerPoolDocument = gql`
  query GetBalancerPool($id: ID!, $block24: Block_height) {
    pool(id: $id) {
      ...BalancerPool
    }
    pool24: pool(id: $id, block: $block24) {
      ...BalancerPool
    }
  }
  ${BalancerPoolFragmentDoc}
`;

/**
 * __useGetBalancerPoolQuery__
 *
 * To run a query within a React component, call `useGetBalancerPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerPoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block24: // value for 'block24'
 *   },
 * });
 */
export function useGetBalancerPoolQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBalancerPoolQuery,
    GetBalancerPoolQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>(
    GetBalancerPoolDocument,
    options
  );
}
export function useGetBalancerPoolLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBalancerPoolQuery,
    GetBalancerPoolQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBalancerPoolQuery,
    GetBalancerPoolQueryVariables
  >(GetBalancerPoolDocument, options);
}
export type GetBalancerPoolQueryHookResult = ReturnType<
  typeof useGetBalancerPoolQuery
>;
export type GetBalancerPoolLazyQueryHookResult = ReturnType<
  typeof useGetBalancerPoolLazyQuery
>;
export type GetBalancerPoolQueryResult = Apollo.QueryResult<
  GetBalancerPoolQuery,
  GetBalancerPoolQueryVariables
>;
export const BalancerPoolTokensDocument = gql`
  query BalancerPoolTokens(
    $skip: Int
    $first: Int
    $orderBy: PoolToken_orderBy
    $orderDirection: OrderDirection
    $where: PoolToken_filter
    $block: Block_height
  ) {
    poolTokens(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerPoolToken
    }
  }
  ${BalancerPoolTokenFragmentDoc}
`;

/**
 * __useBalancerPoolTokensQuery__
 *
 * To run a query within a React component, call `useBalancerPoolTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolTokensQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerPoolTokensQuery,
    BalancerPoolTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerPoolTokensQuery,
    BalancerPoolTokensQueryVariables
  >(BalancerPoolTokensDocument, options);
}
export function useBalancerPoolTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerPoolTokensQuery,
    BalancerPoolTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerPoolTokensQuery,
    BalancerPoolTokensQueryVariables
  >(BalancerPoolTokensDocument, options);
}
export type BalancerPoolTokensQueryHookResult = ReturnType<
  typeof useBalancerPoolTokensQuery
>;
export type BalancerPoolTokensLazyQueryHookResult = ReturnType<
  typeof useBalancerPoolTokensLazyQuery
>;
export type BalancerPoolTokensQueryResult = Apollo.QueryResult<
  BalancerPoolTokensQuery,
  BalancerPoolTokensQueryVariables
>;
export const BalancerPoolHistoricalLiquiditiesDocument = gql`
  query BalancerPoolHistoricalLiquidities(
    $skip: Int
    $first: Int
    $orderBy: PoolHistoricalLiquidity_orderBy
    $orderDirection: OrderDirection
    $where: PoolHistoricalLiquidity_filter
    $block: Block_height
  ) {
    poolHistoricalLiquidities(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      id
      poolId {
        id
      }
      poolTotalShares
      poolLiquidity
      poolShareValue
      pricingAsset
      block
    }
  }
`;

/**
 * __useBalancerPoolHistoricalLiquiditiesQuery__
 *
 * To run a query within a React component, call `useBalancerPoolHistoricalLiquiditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolHistoricalLiquiditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolHistoricalLiquiditiesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolHistoricalLiquiditiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerPoolHistoricalLiquiditiesQuery,
    BalancerPoolHistoricalLiquiditiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerPoolHistoricalLiquiditiesQuery,
    BalancerPoolHistoricalLiquiditiesQueryVariables
  >(BalancerPoolHistoricalLiquiditiesDocument, options);
}
export function useBalancerPoolHistoricalLiquiditiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerPoolHistoricalLiquiditiesQuery,
    BalancerPoolHistoricalLiquiditiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerPoolHistoricalLiquiditiesQuery,
    BalancerPoolHistoricalLiquiditiesQueryVariables
  >(BalancerPoolHistoricalLiquiditiesDocument, options);
}
export type BalancerPoolHistoricalLiquiditiesQueryHookResult = ReturnType<
  typeof useBalancerPoolHistoricalLiquiditiesQuery
>;
export type BalancerPoolHistoricalLiquiditiesLazyQueryHookResult = ReturnType<
  typeof useBalancerPoolHistoricalLiquiditiesLazyQuery
>;
export type BalancerPoolHistoricalLiquiditiesQueryResult = Apollo.QueryResult<
  BalancerPoolHistoricalLiquiditiesQuery,
  BalancerPoolHistoricalLiquiditiesQueryVariables
>;
export const BalancerPoolSnapshotsDocument = gql`
  query BalancerPoolSnapshots(
    $skip: Int
    $first: Int
    $orderBy: PoolSnapshot_orderBy
    $orderDirection: OrderDirection
    $where: PoolSnapshot_filter
    $block: Block_height
  ) {
    poolSnapshots(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerPoolSnapshot
    }
  }
  ${BalancerPoolSnapshotFragmentDoc}
`;

/**
 * __useBalancerPoolSnapshotsQuery__
 *
 * To run a query within a React component, call `useBalancerPoolSnapshotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolSnapshotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolSnapshotsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolSnapshotsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerPoolSnapshotsQuery,
    BalancerPoolSnapshotsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerPoolSnapshotsQuery,
    BalancerPoolSnapshotsQueryVariables
  >(BalancerPoolSnapshotsDocument, options);
}
export function useBalancerPoolSnapshotsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerPoolSnapshotsQuery,
    BalancerPoolSnapshotsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerPoolSnapshotsQuery,
    BalancerPoolSnapshotsQueryVariables
  >(BalancerPoolSnapshotsDocument, options);
}
export type BalancerPoolSnapshotsQueryHookResult = ReturnType<
  typeof useBalancerPoolSnapshotsQuery
>;
export type BalancerPoolSnapshotsLazyQueryHookResult = ReturnType<
  typeof useBalancerPoolSnapshotsLazyQuery
>;
export type BalancerPoolSnapshotsQueryResult = Apollo.QueryResult<
  BalancerPoolSnapshotsQuery,
  BalancerPoolSnapshotsQueryVariables
>;
export const BalancerLatestPricesDocument = gql`
  query BalancerLatestPrices(
    $skip: Int
    $first: Int
    $orderBy: LatestPrice_orderBy
    $orderDirection: OrderDirection
    $where: LatestPrice_filter
    $block: Block_height
  ) {
    latestPrices(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      id
      asset
      price
      poolId {
        id
      }
      pricingAsset
    }
  }
`;

/**
 * __useBalancerLatestPricesQuery__
 *
 * To run a query within a React component, call `useBalancerLatestPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerLatestPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerLatestPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerLatestPricesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerLatestPricesQuery,
    BalancerLatestPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerLatestPricesQuery,
    BalancerLatestPricesQueryVariables
  >(BalancerLatestPricesDocument, options);
}
export function useBalancerLatestPricesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerLatestPricesQuery,
    BalancerLatestPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerLatestPricesQuery,
    BalancerLatestPricesQueryVariables
  >(BalancerLatestPricesDocument, options);
}
export type BalancerLatestPricesQueryHookResult = ReturnType<
  typeof useBalancerLatestPricesQuery
>;
export type BalancerLatestPricesLazyQueryHookResult = ReturnType<
  typeof useBalancerLatestPricesLazyQuery
>;
export type BalancerLatestPricesQueryResult = Apollo.QueryResult<
  BalancerLatestPricesQuery,
  BalancerLatestPricesQueryVariables
>;
export const BalancerJoinExitsDocument = gql`
  query BalancerJoinExits(
    $skip: Int
    $first: Int
    $orderBy: JoinExit_orderBy
    $orderDirection: OrderDirection
    $where: JoinExit_filter
    $block: Block_height
  ) {
    joinExits(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerJoinExit
    }
  }
  ${BalancerJoinExitFragmentDoc}
`;

/**
 * __useBalancerJoinExitsQuery__
 *
 * To run a query within a React component, call `useBalancerJoinExitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerJoinExitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerJoinExitsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerJoinExitsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerJoinExitsQuery,
    BalancerJoinExitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerJoinExitsQuery,
    BalancerJoinExitsQueryVariables
  >(BalancerJoinExitsDocument, options);
}
export function useBalancerJoinExitsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerJoinExitsQuery,
    BalancerJoinExitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerJoinExitsQuery,
    BalancerJoinExitsQueryVariables
  >(BalancerJoinExitsDocument, options);
}
export type BalancerJoinExitsQueryHookResult = ReturnType<
  typeof useBalancerJoinExitsQuery
>;
export type BalancerJoinExitsLazyQueryHookResult = ReturnType<
  typeof useBalancerJoinExitsLazyQuery
>;
export type BalancerJoinExitsQueryResult = Apollo.QueryResult<
  BalancerJoinExitsQuery,
  BalancerJoinExitsQueryVariables
>;
export const BalancePortfolioDataDocument = gql`
  query BalancePortfolioData($id: ID!, $previousBlockNumber: Int!) {
    user(id: $id) {
      ...User
    }
    pools(first: 1000, where: { totalShares_gt: "0" }) {
      ...BalancerPool
    }
    previousUser: user(id: $id, block: { number: $previousBlockNumber }) {
      ...User
    }
    previousPools: pools(
      first: 1000
      where: { totalShares_gt: "0" }
      block: { number: $previousBlockNumber }
    ) {
      ...BalancerPool
    }
  }
  ${UserFragmentDoc}
  ${BalancerPoolFragmentDoc}
`;

/**
 * __useBalancePortfolioDataQuery__
 *
 * To run a query within a React component, call `useBalancePortfolioDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancePortfolioDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancePortfolioDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *      previousBlockNumber: // value for 'previousBlockNumber'
 *   },
 * });
 */
export function useBalancePortfolioDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    BalancePortfolioDataQuery,
    BalancePortfolioDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancePortfolioDataQuery,
    BalancePortfolioDataQueryVariables
  >(BalancePortfolioDataDocument, options);
}
export function useBalancePortfolioDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancePortfolioDataQuery,
    BalancePortfolioDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancePortfolioDataQuery,
    BalancePortfolioDataQueryVariables
  >(BalancePortfolioDataDocument, options);
}
export type BalancePortfolioDataQueryHookResult = ReturnType<
  typeof useBalancePortfolioDataQuery
>;
export type BalancePortfolioDataLazyQueryHookResult = ReturnType<
  typeof useBalancePortfolioDataLazyQuery
>;
export type BalancePortfolioDataQueryResult = Apollo.QueryResult<
  BalancePortfolioDataQuery,
  BalancePortfolioDataQueryVariables
>;
export const BalancerSwapsDocument = gql`
  query BalancerSwaps(
    $skip: Int
    $first: Int
    $orderBy: Swap_orderBy
    $orderDirection: OrderDirection
    $where: Swap_filter
    $block: Block_height
  ) {
    swaps(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerSwap
    }
  }
  ${BalancerSwapFragmentDoc}
`;

/**
 * __useBalancerSwapsQuery__
 *
 * To run a query within a React component, call `useBalancerSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerSwapsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerSwapsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerSwapsQuery,
    BalancerSwapsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BalancerSwapsQuery, BalancerSwapsQueryVariables>(
    BalancerSwapsDocument,
    options
  );
}
export function useBalancerSwapsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerSwapsQuery,
    BalancerSwapsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BalancerSwapsQuery, BalancerSwapsQueryVariables>(
    BalancerSwapsDocument,
    options
  );
}
export type BalancerSwapsQueryHookResult = ReturnType<
  typeof useBalancerSwapsQuery
>;
export type BalancerSwapsLazyQueryHookResult = ReturnType<
  typeof useBalancerSwapsLazyQuery
>;
export type BalancerSwapsQueryResult = Apollo.QueryResult<
  BalancerSwapsQuery,
  BalancerSwapsQueryVariables
>;
export const GetBalancerTokensDocument = gql`
  query GetBalancerTokens(
    $skip: Int
    $first: Int
    $orderBy: Token_orderBy
    $orderDirection: OrderDirection
    $where: Token_filter
    $block: Block_height
  ) {
    tokens(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerToken
    }
  }
  ${BalancerTokenFragmentDoc}
`;

/**
 * __useGetBalancerTokensQuery__
 *
 * To run a query within a React component, call `useGetBalancerTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerTokensQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBalancerTokensQuery,
    GetBalancerTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBalancerTokensQuery,
    GetBalancerTokensQueryVariables
  >(GetBalancerTokensDocument, options);
}
export function useGetBalancerTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBalancerTokensQuery,
    GetBalancerTokensQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBalancerTokensQuery,
    GetBalancerTokensQueryVariables
  >(GetBalancerTokensDocument, options);
}
export type GetBalancerTokensQueryHookResult = ReturnType<
  typeof useGetBalancerTokensQuery
>;
export type GetBalancerTokensLazyQueryHookResult = ReturnType<
  typeof useGetBalancerTokensLazyQuery
>;
export type GetBalancerTokensQueryResult = Apollo.QueryResult<
  GetBalancerTokensQuery,
  GetBalancerTokensQueryVariables
>;
export const BalancerTradePairsDocument = gql`
  query BalancerTradePairs(
    $skip: Int
    $first: Int
    $orderBy: TradePair_orderBy
    $orderDirection: OrderDirection
    $where: TradePair_filter
    $block: Block_height
  ) {
    tradePairs(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerTradePair
    }
  }
  ${BalancerTradePairFragmentDoc}
`;

/**
 * __useBalancerTradePairsQuery__
 *
 * To run a query within a React component, call `useBalancerTradePairsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerTradePairsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerTradePairsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerTradePairsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BalancerTradePairsQuery,
    BalancerTradePairsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BalancerTradePairsQuery,
    BalancerTradePairsQueryVariables
  >(BalancerTradePairsDocument, options);
}
export function useBalancerTradePairsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BalancerTradePairsQuery,
    BalancerTradePairsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BalancerTradePairsQuery,
    BalancerTradePairsQueryVariables
  >(BalancerTradePairsDocument, options);
}
export type BalancerTradePairsQueryHookResult = ReturnType<
  typeof useBalancerTradePairsQuery
>;
export type BalancerTradePairsLazyQueryHookResult = ReturnType<
  typeof useBalancerTradePairsLazyQuery
>;
export type BalancerTradePairsQueryResult = Apollo.QueryResult<
  BalancerTradePairsQuery,
  BalancerTradePairsQueryVariables
>;
export const GetBalancerSnapshotsDocument = gql`
  query GetBalancerSnapshots(
    $skip: Int
    $first: Int
    $orderBy: BalancerSnapshot_orderBy
    $orderDirection: OrderDirection
    $where: BalancerSnapshot_filter
    $block: Block_height
  ) {
    balancerSnapshots(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...BalancerSnapshot
    }
  }
  ${BalancerSnapshotFragmentDoc}
`;

/**
 * __useGetBalancerSnapshotsQuery__
 *
 * To run a query within a React component, call `useGetBalancerSnapshotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerSnapshotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerSnapshotsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerSnapshotsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBalancerSnapshotsQuery,
    GetBalancerSnapshotsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBalancerSnapshotsQuery,
    GetBalancerSnapshotsQueryVariables
  >(GetBalancerSnapshotsDocument, options);
}
export function useGetBalancerSnapshotsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBalancerSnapshotsQuery,
    GetBalancerSnapshotsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBalancerSnapshotsQuery,
    GetBalancerSnapshotsQueryVariables
  >(GetBalancerSnapshotsDocument, options);
}
export type GetBalancerSnapshotsQueryHookResult = ReturnType<
  typeof useGetBalancerSnapshotsQuery
>;
export type GetBalancerSnapshotsLazyQueryHookResult = ReturnType<
  typeof useGetBalancerSnapshotsLazyQuery
>;
export type GetBalancerSnapshotsQueryResult = Apollo.QueryResult<
  GetBalancerSnapshotsQuery,
  GetBalancerSnapshotsQueryVariables
>;
export const GetLatestPricesDocument = gql`
  query GetLatestPrices(
    $skip: Int
    $first: Int
    $orderBy: LatestPrice_orderBy
    $orderDirection: OrderDirection
    $where: LatestPrice_filter
    $block: Block_height
  ) {
    latestPrices(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
      block: $block
    ) {
      ...LatestPrice
    }
  }
  ${LatestPriceFragmentDoc}
`;

/**
 * __useGetLatestPricesQuery__
 *
 * To run a query within a React component, call `useGetLatestPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetLatestPricesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLatestPricesQuery,
    GetLatestPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLatestPricesQuery, GetLatestPricesQueryVariables>(
    GetLatestPricesDocument,
    options
  );
}
export function useGetLatestPricesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLatestPricesQuery,
    GetLatestPricesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLatestPricesQuery,
    GetLatestPricesQueryVariables
  >(GetLatestPricesDocument, options);
}
export type GetLatestPricesQueryHookResult = ReturnType<
  typeof useGetLatestPricesQuery
>;
export type GetLatestPricesLazyQueryHookResult = ReturnType<
  typeof useGetLatestPricesLazyQuery
>;
export type GetLatestPricesQueryResult = Apollo.QueryResult<
  GetLatestPricesQuery,
  GetLatestPricesQueryVariables
>;
export const GetLatestBlockDocument = gql`
  query GetLatestBlock {
    blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
      id
      number
      timestamp
    }
  }
`;

/**
 * __useGetLatestBlockQuery__
 *
 * To run a query within a React component, call `useGetLatestBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestBlockQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestBlockQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLatestBlockQuery,
    GetLatestBlockQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(
    GetLatestBlockDocument,
    options
  );
}
export function useGetLatestBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLatestBlockQuery,
    GetLatestBlockQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(
    GetLatestBlockDocument,
    options
  );
}
export type GetLatestBlockQueryHookResult = ReturnType<
  typeof useGetLatestBlockQuery
>;
export type GetLatestBlockLazyQueryHookResult = ReturnType<
  typeof useGetLatestBlockLazyQuery
>;
export type GetLatestBlockQueryResult = Apollo.QueryResult<
  GetLatestBlockQuery,
  GetLatestBlockQueryVariables
>;
export const GetTokenListDocument = gql`
  query GetTokenList {
    tokenGetTokens {
      address
      name
      logoURI
    }
  }
`;

/**
 * __useGetTokenListQuery__
 *
 * To run a query within a React component, call `useGetTokenListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTokenListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTokenListQuery,
    GetTokenListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTokenListQuery, GetTokenListQueryVariables>(
    GetTokenListDocument,
    options
  );
}
export function useGetTokenListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTokenListQuery,
    GetTokenListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTokenListQuery, GetTokenListQueryVariables>(
    GetTokenListDocument,
    options
  );
}
export type GetTokenListQueryHookResult = ReturnType<
  typeof useGetTokenListQuery
>;
export type GetTokenListLazyQueryHookResult = ReturnType<
  typeof useGetTokenListLazyQuery
>;
export type GetTokenListQueryResult = Apollo.QueryResult<
  GetTokenListQuery,
  GetTokenListQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GqlPoolAprValue: ["GqlPoolAprRange", "GqlPoolAprTotal"],
    GqlPoolBase: [
      "GqlPoolElement",
      "GqlPoolGyro",
      "GqlPoolLinear",
      "GqlPoolLiquidityBootstrapping",
      "GqlPoolMetaStable",
      "GqlPoolPhantomStable",
      "GqlPoolStable",
      "GqlPoolWeighted",
    ],
    GqlPoolFeaturedPoolGroupItem: [
      "GqlFeaturePoolGroupItemExternalLink",
      "GqlPoolMinimal",
    ],
    GqlPoolNestedUnion: ["GqlPoolLinearNested", "GqlPoolPhantomStableNested"],
    GqlPoolTokenBase: [
      "GqlPoolToken",
      "GqlPoolTokenLinear",
      "GqlPoolTokenPhantomStable",
    ],
    GqlPoolTokenPhantomStableNestedUnion: [
      "GqlPoolToken",
      "GqlPoolTokenLinear",
    ],
    GqlPoolTokenUnion: [
      "GqlPoolToken",
      "GqlPoolTokenLinear",
      "GqlPoolTokenPhantomStable",
    ],
    GqlPoolUnion: [
      "GqlPoolElement",
      "GqlPoolGyro",
      "GqlPoolLinear",
      "GqlPoolLiquidityBootstrapping",
      "GqlPoolMetaStable",
      "GqlPoolPhantomStable",
      "GqlPoolStable",
      "GqlPoolWeighted",
    ],
    LockerTransaction: [
      "LockerDelegateChangedTransaction",
      "LockerKickRewardTransaction",
      "LockerRewardPaidTransaction",
      "LockerStakedTransaction",
      "LockerWithdrawnTransaction",
    ],
    PoolTransaction: [
      "PoolRewardPaidTransaction",
      "PoolStakedTransaction",
      "PoolWithdrawnTransaction",
    ],
    RewardData: ["AuraLockerRewardData", "PoolRewardData", "VaultRewardData"],
    VaultTransaction: [
      "VaultDepositTransaction",
      "VaultHarvestTransaction",
      "VaultRewardPaidTransaction",
      "VaultWithdrawTransaction",
    ],
  },
};
export default result;
