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
  ID: { input: string; output: string };
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
  /** 8 bytes signed integer */
  Int8: { input: any; output: any };
  JSON: { input: any; output: any };
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any };
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
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  poolAccounts_?: InputMaybe<PoolAccount_Filter>;
  vaultAccounts_?: InputMaybe<VaultAccount_Filter>;
}

export enum Account_OrderBy {
  AuraBalMintTransactions = "auraBalMintTransactions",
  AuraLockerAccount = "auraLockerAccount",
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  Id = "id",
  MerkleDropClaims = "merkleDropClaims",
  PoolAccounts = "poolAccounts",
  VaultAccounts = "vaultAccounts",
}

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  and?: InputMaybe<Array<InputMaybe<AuraBalMintTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<AuraBalMintTransaction_Filter>>>;
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
  AccountId = "account__id",
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
  and?: InputMaybe<Array<InputMaybe<AuraLockerAccount_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AuraLockerAccount_Filter>>>;
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
  AccountId = "account__id",
  AuraLocker = "auraLocker",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
  Balance = "balance",
  BalanceLocked = "balanceLocked",
  BalanceNextUnlockIndex = "balanceNextUnlockIndex",
  Delegate = "delegate",
  DelegateChangedTransactions = "delegateChangedTransactions",
  DelegateUpdatedAt = "delegateUpdatedAt",
  DelegateBalance = "delegate__balance",
  DelegateBalanceLocked = "delegate__balanceLocked",
  DelegateBalanceNextUnlockIndex = "delegate__balanceNextUnlockIndex",
  DelegateDelegateUpdatedAt = "delegate__delegateUpdatedAt",
  DelegateId = "delegate__id",
  DelegateUserLocksLength = "delegate__userLocksLength",
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
  and?: InputMaybe<Array<InputMaybe<AuraLockerRewardData_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AuraLockerRewardData_Filter>>>;
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
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
  Id = "id",
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
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
  and?: InputMaybe<Array<InputMaybe<AuraLockerUserData_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AuraLockerUserData_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  Id = "id",
  RewardPerTokenPaid = "rewardPerTokenPaid",
  Rewards = "rewards",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
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
  and?: InputMaybe<Array<InputMaybe<AuraLockerUserLock_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AuraLockerUserLock_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  Id = "id",
  UnlockTime = "unlockTime",
}

export interface AuraLocker_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<AuraLockerAccount_Filter>;
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
  and?: InputMaybe<Array<InputMaybe<AuraLocker_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AuraLocker_Filter>>>;
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
  snapshots?: Maybe<Array<BalancerSnapshot>>;
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

export interface BalancerSnapshotsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BalancerSnapshot_Filter>;
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
  snapshots_?: InputMaybe<BalancerSnapshot_Filter>;
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
  Snapshots = "snapshots",
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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

export interface CreateLbpInput {
  metadata: LbpMetadataInput;
  poolContract: LbPoolInput;
}

/** The review data for the ERC4626 token */
export interface Erc4626ReviewData {
  __typename?: "Erc4626ReviewData";
  /** If it is an ERC4626 token, this defines whether we can use wrap/unwrap through the buffer in swap paths for this token. */
  canUseBufferForSwaps?: Maybe<Scalars["Boolean"]["output"]>;
  /** The filename of the review of the ERC4626 */
  reviewFile: Scalars["String"]["output"];
  /** A summary of the ERC4626 review, usually just says safe or unsafe */
  summary: Scalars["String"]["output"];
  /** If it is an ERC4626 token, this defines whether we allow underlying tokens to be used for add/remove operations. */
  useUnderlyingForAddRemove?: Maybe<Scalars["Boolean"]["output"]>;
  /** If it is an ERC4626 token, this defines whether we allow the wrapped tokens to be used for add/remove operations. */
  useWrappedForAddRemove?: Maybe<Scalars["Boolean"]["output"]>;
  /** Warnings associated with the ERC4626 */
  warnings: Array<Scalars["String"]["output"]>;
}

/** ExitFee hook specific params. Percentage format is 0.01 -> 0.01%. */
export interface ExitFeeHookParams {
  __typename?: "ExitFeeHookParams";
  exitFeePercentage?: Maybe<Scalars["String"]["output"]>;
}

export interface ExtraReward {
  __typename?: "ExtraReward";
  /** total amount funded - total amount queued */
  amount: Scalars["BigInt"]["output"];
  funded: Array<FundedReward>;
  /** pool.id + token.id */
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  queued: Array<QueuedReward>;
  token: Token;
}

export interface ExtraRewardFundedArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FundedReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<FundedReward_Filter>;
}

export interface ExtraRewardQueuedArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<QueuedReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<QueuedReward_Filter>;
}

export interface ExtraReward_Filter {
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
  and?: InputMaybe<Array<InputMaybe<ExtraReward_Filter>>>;
  funded_?: InputMaybe<FundedReward_Filter>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ExtraReward_Filter>>>;
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
  queued_?: InputMaybe<QueuedReward_Filter>;
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

export enum ExtraReward_OrderBy {
  Amount = "amount",
  Funded = "funded",
  Id = "id",
  Pool = "pool",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
  Queued = "queued",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
}

export interface FxOracle {
  __typename?: "FXOracle";
  decimals?: Maybe<Scalars["Int"]["output"]>;
  divisor?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  tokens: Array<Scalars["Bytes"]["output"]>;
}

export interface FxOracle_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FxOracle_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  divisor?: InputMaybe<Scalars["String"]["input"]>;
  divisor_contains?: InputMaybe<Scalars["String"]["input"]>;
  divisor_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  divisor_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  divisor_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  divisor_gt?: InputMaybe<Scalars["String"]["input"]>;
  divisor_gte?: InputMaybe<Scalars["String"]["input"]>;
  divisor_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  divisor_lt?: InputMaybe<Scalars["String"]["input"]>;
  divisor_lte?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  divisor_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  divisor_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  divisor_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  divisor_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<FxOracle_Filter>>>;
  tokens?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_contains?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_not?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_not_contains?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum FxOracle_OrderBy {
  Decimals = "decimals",
  Divisor = "divisor",
  Id = "id",
  Tokens = "tokens",
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
  and?: InputMaybe<Array<InputMaybe<FactoryPoolData_Filter>>>;
  balancerPoolId?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  balancerPoolId_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  balancerPoolId_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  gauge?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  gauge_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  gauge_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<FactoryPoolData_Filter>>>;
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
  stash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  stash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  stash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
  Stash = "stash",
}

/** FeeTaking hook specific params. Percentage format is 0.01 -> 0.01% */
export interface FeeTakingHookParams {
  __typename?: "FeeTakingHookParams";
  addLiquidityFeePercentage?: Maybe<Scalars["String"]["output"]>;
  removeLiquidityFeePercentage?: Maybe<Scalars["String"]["output"]>;
  swapFeePercentage?: Maybe<Scalars["String"]["output"]>;
}

export interface FundedReward {
  __typename?: "FundedReward";
  amount: Scalars["BigInt"]["output"];
  epoch: Scalars["BigInt"]["output"];
  extraReward: ExtraReward;
  /** pool.id + token.id + epoch + txHash */
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  token: Token;
}

export interface FundedReward_Filter {
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
  and?: InputMaybe<Array<InputMaybe<FundedReward_Filter>>>;
  epoch?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  epoch_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  extraReward?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_?: InputMaybe<ExtraReward_Filter>;
  extraReward_contains?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_gt?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_gte?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  extraReward_lt?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_lte?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  extraReward_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<FundedReward_Filter>>>;
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

export enum FundedReward_OrderBy {
  Amount = "amount",
  Epoch = "epoch",
  ExtraReward = "extraReward",
  ExtraRewardAmount = "extraReward__amount",
  ExtraRewardId = "extraReward__id",
  Id = "id",
  Pool = "pool",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
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
  and?: InputMaybe<Array<InputMaybe<Gauge_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Gauge_Filter>>>;
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
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<Global_Filter>>>;
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
  auraMinter_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auraMinter_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auraMinter_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  aura_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  aura_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  aura_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  booster?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  booster_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  booster_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<Global_Filter>>>;
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
  voteDelegate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  voteDelegate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  voteDelegate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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

export interface GqlAggregatorPoolFilter {
  chainIn?: InputMaybe<Array<GqlChain>>;
  idIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  includeHooks?: InputMaybe<Array<GqlHookType>>;
  minTvl?: InputMaybe<Scalars["Float"]["input"]>;
  poolTypeIn?: InputMaybe<Array<GqlPoolType>>;
  protocolVersionIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  tokensIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
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
  Base = "BASE",
  Fantom = "FANTOM",
  Fraxtal = "FRAXTAL",
  Gnosis = "GNOSIS",
  Hyperevm = "HYPEREVM",
  Mainnet = "MAINNET",
  Mode = "MODE",
  Monad = "MONAD",
  Optimism = "OPTIMISM",
  Plasma = "PLASMA",
  Polygon = "POLYGON",
  Sepolia = "SEPOLIA",
  Sonic = "SONIC",
  Xlayer = "XLAYER",
  Zkevm = "ZKEVM",
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
  chain: GqlChain;
  prices: Array<GqlHistoricalTokenPriceEntry>;
}

export interface GqlHistoricalTokenPriceEntry {
  __typename?: "GqlHistoricalTokenPriceEntry";
  price: Scalars["Float"]["output"];
  timestamp: Scalars["String"]["output"];
  updatedAt: Scalars["Int"]["output"];
  updatedBy?: Maybe<Scalars["String"]["output"]>;
}

/** Hook data */
export interface GqlHook {
  __typename?: "GqlHook";
  address: Scalars["String"]["output"];
  config?: Maybe<HookConfig>;
  /** @deprecated No longer supported */
  dynamicData?: Maybe<GqlHookData>;
  /** @deprecated No longer supported */
  enableHookAdjustedAmounts: Scalars["Boolean"]["output"];
  /** @deprecated unused */
  name: Scalars["String"]["output"];
  /** Hook type specific params */
  params?: Maybe<HookParams>;
  /** The review for this hook if applicable. */
  reviewData?: Maybe<GqlHookReviewData>;
  /** @deprecated No longer supported */
  shouldCallAfterAddLiquidity: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallAfterInitialize: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallAfterRemoveLiquidity: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallAfterSwap: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallBeforeAddLiquidity: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallBeforeInitialize: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallBeforeRemoveLiquidity: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallBeforeSwap: Scalars["Boolean"]["output"];
  /** @deprecated No longer supported */
  shouldCallComputeDynamicSwapFee: Scalars["Boolean"]["output"];
  type: GqlHookType;
}

export interface GqlHookData {
  __typename?: "GqlHookData";
  addLiquidityFeePercentage?: Maybe<Scalars["String"]["output"]>;
  maxSurgeFeePercentage?: Maybe<Scalars["String"]["output"]>;
  removeLiquidityFeePercentage?: Maybe<Scalars["String"]["output"]>;
  surgeThresholdPercentage?: Maybe<Scalars["String"]["output"]>;
  swapFeePercentage?: Maybe<Scalars["String"]["output"]>;
}

/** Represents the review data for the hook */
export interface GqlHookReviewData {
  __typename?: "GqlHookReviewData";
  /** The filename of the review of the hook */
  reviewFile: Scalars["String"]["output"];
  /** A summary of the hook review, usually just says safe or unsafe */
  summary: Scalars["String"]["output"];
  /** Warnings associated with the hook */
  warnings: Array<Scalars["String"]["output"]>;
}

export enum GqlHookType {
  Akron = "AKRON",
  DirectionalFee = "DIRECTIONAL_FEE",
  ExitFee = "EXIT_FEE",
  FeeTaking = "FEE_TAKING",
  Lbp = "LBP",
  Lottery = "LOTTERY",
  MevTax = "MEV_TAX",
  NftliquidityPosition = "NFTLIQUIDITY_POSITION",
  Reclamm = "RECLAMM",
  StableSurge = "STABLE_SURGE",
  Unknown = "UNKNOWN",
  VebalDiscount = "VEBAL_DISCOUNT",
}

export interface GqlLbpTopTrade {
  __typename?: "GqlLBPTopTrade";
  address: Scalars["String"]["output"];
  timestamp: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
}

export interface GqlLoopsData {
  __typename?: "GqlLoopsData";
  /** Actual TotalSupply of LoopS. */
  actualSupply: Scalars["String"]["output"];
  /** The total APR for LoopS */
  apr: Scalars["Float"]["output"];
  /** The amount of stS provided to Aave. */
  collateralAmount: Scalars["String"]["output"];
  /** The amount of stS provided to Aave in S. */
  collateralAmountInEth: Scalars["String"]["output"];
  /** The total S debt amount of the position */
  debtAmount: Scalars["String"]["output"];
  /** The health factor of the Aave position */
  healthFactor: Scalars["String"]["output"];
  /** The amount of leverage the current position has. */
  leverage: Scalars["Float"]["output"];
  /** Net Asset Value. The amount of collateral minus the amount of debt. */
  nav: Scalars["String"]["output"];
  /** The current rate of LoopS against S. */
  rate: Scalars["String"]["output"];
  /** The current amount of stS supplied to the Aave market */
  stSAaveMarketSupply: Scalars["String"]["output"];
  /** The current cap on the stS market on Aave */
  stSAaveMarketSupplyCap: Scalars["String"]["output"];
  /** Net Asset Value in USD. */
  tvl: Scalars["String"]["output"];
}

/** All info on the nested pool if the token is a BPT. It will only support 1 level of nesting. */
export interface GqlNestedPool {
  __typename?: "GqlNestedPool";
  /** Address of the pool. */
  address: Scalars["Bytes"]["output"];
  /** Price rate of this pool or the Balancer Pool Token (BPT). */
  bptPriceRate: Scalars["BigDecimal"]["output"];
  /** Timestamp of when the pool was created. */
  createTime: Scalars["Int"]["output"];
  /** Address of the factory contract that created the pool, if applicable. */
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  /** Hook assigned to a pool */
  hook?: Maybe<GqlHook>;
  /** Unique identifier of the pool. */
  id: Scalars["ID"]["output"];
  /** Liquidity management settings for v3 pools. */
  liquidityManagement?: Maybe<LiquidityManagement>;
  /** Name of the pool. */
  name: Scalars["String"]["output"];
  /** Total liquidity of the parent pool in the nested pool in USD. */
  nestedLiquidity: Scalars["BigDecimal"]["output"];
  /** Percentage of the parents pool shares inside the nested pool. */
  nestedPercentage: Scalars["BigDecimal"]["output"];
  /** Number of shares of the parent pool in the nested pool. */
  nestedShares: Scalars["BigDecimal"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  /** Fee charged for swapping tokens in the pool as %. 0.01 -> 0.01% */
  swapFee: Scalars["BigDecimal"]["output"];
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Symbol of the pool. */
  symbol: Scalars["String"]["output"];
  /** List of all tokens in the pool. */
  tokens: Array<GqlPoolTokenDetail>;
  /** Total liquidity in the pool in USD. */
  totalLiquidity: Scalars["BigDecimal"]["output"];
  /** Total number of shares in the pool. */
  totalShares: Scalars["BigDecimal"]["output"];
  /** Type of the pool. */
  type: GqlPoolType;
  /** Version of the pool. */
  version: Scalars["Int"]["output"];
}

/** Represents an event that occurs when liquidity is added or removed from a pool. */
export interface GqlPoolAddRemoveEventV3 extends GqlPoolEvent {
  __typename?: "GqlPoolAddRemoveEventV3";
  /** The block number of the event. */
  blockNumber: Scalars["Int"]["output"];
  /** The block timestamp of the event. */
  blockTimestamp: Scalars["Int"]["output"];
  /** The chain on which the event occurred. */
  chain: GqlChain;
  /** The unique identifier of the event. */
  id: Scalars["ID"]["output"];
  /** The log index of the event. */
  logIndex: Scalars["Int"]["output"];
  /** The pool ID associated with the event. */
  poolId: Scalars["String"]["output"];
  /** The sender of the event. */
  sender: Scalars["String"]["output"];
  /** The timestamp of the event. */
  timestamp: Scalars["Int"]["output"];
  /** The tokens involved in the event. Ordered by poolToken index. */
  tokens: Array<GqlPoolEventAmount>;
  /** The transaction hash of the event. */
  tx: Scalars["String"]["output"];
  /** The type of the event. */
  type: GqlPoolEventType;
  /** The user address associated with the event. */
  userAddress: Scalars["String"]["output"];
  /** The value of the event in USD. */
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolAggregator {
  __typename?: "GqlPoolAggregator";
  /** The contract address of the pool. */
  address: Scalars["Bytes"]["output"];
  /** Data specific to gyro/fx pools */
  alpha?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to stable pools */
  amp?: Maybe<Scalars["BigInt"]["output"]>;
  /** Data specific to gyro/fx pools */
  beta?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  c?: Maybe<Scalars["String"]["output"]>;
  /** ReClamm: The centeredness margin of the pool */
  centerednessMargin?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** The chain on which the pool is deployed */
  chain: GqlChain;
  /** The timestamp the pool was created. */
  createTime: Scalars["Int"]["output"];
  /** ReClamm: The current fourth root price ratio, an interpolation of the price ratio state */
  currentFourthRootPriceRatio?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** Data specific to gyro pools */
  dSq?: Maybe<Scalars["String"]["output"]>;
  /** ReClamm: Represents how fast the pool can move the virtual balances per day */
  dailyPriceShiftBase?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** The decimals of the BPT, usually 18 */
  decimals: Scalars["Int"]["output"];
  /** Data specific to fx pools */
  delta?: Maybe<Scalars["String"]["output"]>;
  /** Dynamic data such as token balances, swap fees or volume */
  dynamicData: GqlPoolDynamicData;
  /** ReClamm: The fourth root price ratio at the end of an update */
  endFourthRootPriceRatio?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** Data specific to fx pools */
  epsilon?: Maybe<Scalars["String"]["output"]>;
  /** The factory contract address from which the pool was created. */
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  /** Hook assigned to a pool */
  hook?: Maybe<GqlHook>;
  /** The pool id. This is equal to the address for protocolVersion 3 pools */
  id: Scalars["ID"]["output"];
  /** Data specific to gyro/fx pools */
  lambda?: Maybe<Scalars["String"]["output"]>;
  /** The timestamp of the last user interaction */
  lastTimestamp?: Maybe<Scalars["Int"]["output"]>;
  /** ReClamm: The last virtual balances of the pool */
  lastVirtualBalances?: Maybe<Array<Scalars["BigDecimal"]["output"]>>;
  /** Liquidity management settings for v3 pools. */
  liquidityManagement?: Maybe<LiquidityManagement>;
  /** The name of the pool as per contract */
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  /** Returns all pool tokens, including BPTs and nested pools if there are any. Only one nested level deep. */
  poolTokens: Array<GqlPoolTokenDetail>;
  /** ReClamm: The timestamp when the update ends */
  priceRatioUpdateEndTime?: Maybe<Scalars["Int"]["output"]>;
  /** ReClamm: The timestamp when the update begins */
  priceRatioUpdateStartTime?: Maybe<Scalars["Int"]["output"]>;
  /** The protocol version on which the pool is deployed, 1, 2 or 3 */
  protocolVersion: Scalars["Int"]["output"];
  /** QuantAmmWeighted specific fields */
  quantAmmWeightedParams?: Maybe<QuantAmmWeightedParams>;
  /** Data specific to gyro pools */
  root3Alpha?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  s?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  sqrtAlpha?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  sqrtBeta?: Maybe<Scalars["String"]["output"]>;
  /** ReClamm: The fourth root price ratio at the start of an update */
  startFourthRootPriceRatio?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** The token symbol of the pool as per contract */
  symbol: Scalars["String"]["output"];
  /** Data specific to gyro pools */
  tauAlphaX?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  tauAlphaY?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  tauBetaX?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  tauBetaY?: Maybe<Scalars["String"]["output"]>;
  /** The pool type, such as weighted, stable, etc. */
  type: GqlPoolType;
  /** Data specific to gyro pools */
  u?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  v?: Maybe<Scalars["String"]["output"]>;
  /** The version of the pool type. */
  version: Scalars["Int"]["output"];
  /** Data specific to gyro pools */
  w?: Maybe<Scalars["String"]["output"]>;
  /** Data specific to gyro pools */
  z?: Maybe<Scalars["String"]["output"]>;
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

/** All APRs for a pool */
export interface GqlPoolAprItem {
  __typename?: "GqlPoolAprItem";
  /** The APR value in % -> 0.2 = 20% */
  apr: Scalars["Float"]["output"];
  /** The id of the APR item */
  id: Scalars["ID"]["output"];
  /** The reward token address, if the APR originates from token emissions */
  rewardTokenAddress?: Maybe<Scalars["String"]["output"]>;
  /** The reward token symbol, if the APR originates from token emissions */
  rewardTokenSymbol?: Maybe<Scalars["String"]["output"]>;
  /**
   * The title of the APR item, a human readable form
   * @deprecated No replacement, should be built client side
   */
  title: Scalars["String"]["output"];
  /** Specific type of this APR */
  type: GqlPoolAprItemType;
}

/** Enum representing the different types of the APR in a pool. */
export enum GqlPoolAprItemType {
  /** APR that pools earns when BPT is staked on AURA. */
  Aura = "AURA",
  /** Dynamic swap fee APR based on data from the last 24h */
  DynamicSwapFee_24H = "DYNAMIC_SWAP_FEE_24H",
  /** Represents the yield from an IB (Interest-Bearing) asset APR in a pool. */
  IbYield = "IB_YIELD",
  /** APR in a pool that can be earned through locking, i.e. veBAL */
  Locking = "LOCKING",
  /** Reward APR in a pool from maBEETS emissions allocated by gauge votes. Emitted in BEETS. */
  MabeetsEmissions = "MABEETS_EMISSIONS",
  /** Rewards distributed by merkl.xyz */
  Merkl = "MERKL",
  /** Represents if the APR items comes from a nested pool. */
  Nested = "NESTED",
  /** APR calculated for QUANT-AMM pools based on performance measurements over a month */
  QuantAmmUplift = "QUANT_AMM_UPLIFT",
  /** Staking reward APR in a pool from a reward token. */
  Staking = "STAKING",
  /** APR boost that can be earned, i.e. via veBAL or maBEETS. */
  StakingBoost = "STAKING_BOOST",
  /**
   * Cow AMM specific APR
   * @deprecated Use SURPLUS_24H instead
   */
  Surplus = "SURPLUS",
  /** Surplus APR based on data from the last 7d */
  Surplus_7D = "SURPLUS_7D",
  /** Surplus APR based on data from the last 24h */
  Surplus_24H = "SURPLUS_24H",
  /** Surplus APR based on data from the last 30d */
  Surplus_30D = "SURPLUS_30D",
  /**
   * Represents the swap fee APR in a pool.
   * @deprecated Use SWAP_FEE_24H instead
   */
  SwapFee = "SWAP_FEE",
  /** Swap fee APR based on data from the last 7d */
  SwapFee_7D = "SWAP_FEE_7D",
  /** Swap fee APR based on data from the last 24h */
  SwapFee_24H = "SWAP_FEE_24H",
  /** Swap fee APR based on data from the last 30d */
  SwapFee_30D = "SWAP_FEE_30D",
  /** Reward APR in a pool from veBAL emissions allocated by gauge votes. Emitted in BAL. */
  VebalEmissions = "VEBAL_EMISSIONS",
  /** APR that can be earned thourgh voting, i.e. gauge votes */
  Voting = "VOTING",
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

/** The base type as returned by poolGetPool (specific pool query) */
export interface GqlPoolBase {
  /** The contract address of the pool. */
  address: Scalars["Bytes"]["output"];
  /**
   * Returns all pool tokens, including any nested tokens and phantom BPTs as a flattened array.
   * @deprecated Use poolTokens instead
   */
  allTokens: Array<GqlPoolTokenExpanded>;
  /** List of categories assigned by the team based on external factors */
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  /** The chain on which the pool is deployed */
  chain: GqlChain;
  /** The timestamp the pool was created. */
  createTime: Scalars["Int"]["output"];
  /** The decimals of the BPT, usually 18 */
  decimals: Scalars["Int"]["output"];
  /**
   * Only returns main tokens, also known as leave tokens. Wont return any nested BPTs. Used for displaying the tokens that the pool consists of.
   * @deprecated Use poolTokens instead
   */
  displayTokens: Array<GqlPoolTokenDisplay>;
  /** Dynamic data such as token balances, swap fees or volume */
  dynamicData: GqlPoolDynamicData;
  /** The factory contract address from which the pool was created. */
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  /** Whether at least one token in this pool is considered an ERC4626 token and the buffer is allowed. */
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  /** Whether at least one token in this pool is considered an ERC4626 token. */
  hasErc4626: Scalars["Boolean"]["output"];
  /** Whether at least one token in a nested pool is considered an ERC4626 token. */
  hasNestedErc4626: Scalars["Boolean"]["output"];
  /** Hook assigned to a pool */
  hook?: Maybe<GqlHook>;
  /** The pool id. This is equal to the address for protocolVersion 3 pools */
  id: Scalars["ID"]["output"];
  /**
   * Deprecated
   * @deprecated Removed without replacement
   */
  investConfig: GqlPoolInvestConfig;
  /** Liquidity management settings for v3 pools. */
  liquidityManagement?: Maybe<LiquidityManagement>;
  /** The name of the pool as per contract */
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  /** Returns pool tokens, including BPTs and nested pools and their pool tokens if there are any. Only one nested level deep. */
  poolTokens: Array<GqlPoolTokenDetail>;
  /** The protocol version on which the pool is deployed, 1, 2 or 3 */
  protocolVersion: Scalars["Int"]["output"];
  /** Staking options of this pool which emit additional rewards */
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** The token symbol of the pool as per contract */
  symbol: Scalars["String"]["output"];
  /** List of tags assigned by the team based on external factors */
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The pool type, such as weighted, stable, etc. */
  type: GqlPoolType;
  /** If a user address was provided in the query, the user balance is populated here */
  userBalance?: Maybe<GqlPoolUserBalance>;
  /**
   * The vault version on which the pool is deployed, 2 or 3
   * @deprecated use protocolVersion instead
   */
  vaultVersion: Scalars["Int"]["output"];
  /** The version of the pool type. */
  version: Scalars["Int"]["output"];
  /**
   * Deprecated
   * @deprecated Removed without replacement
   */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolComposableStable extends GqlPoolBase {
  __typename?: "GqlPoolComposableStable";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolComposableStableNested {
  __typename?: "GqlPoolComposableStableNested";
  address: Scalars["Bytes"]["output"];
  amp: Scalars["BigInt"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  createTime: Scalars["Int"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  swapFee: Scalars["BigDecimal"]["output"];
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** @deprecated Use poolTokens instead */
  tokens: Array<GqlPoolTokenComposableStableNestedUnion>;
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
  type: GqlPoolType;
  version: Scalars["Int"]["output"];
}

export interface GqlPoolDynamicData {
  __typename?: "GqlPoolDynamicData";
  /** Protocol and pool creator fees combined */
  aggregateSwapFee: Scalars["BigDecimal"]["output"];
  /** Protocol and pool creator fees combined */
  aggregateYieldFee: Scalars["BigDecimal"]["output"];
  /** @deprecated Use aprItems instead */
  apr: GqlPoolApr;
  aprItems: Array<GqlPoolAprItem>;
  fees24h: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  fees24hAth: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  fees24hAthTimestamp: Scalars["Int"]["output"];
  /** @deprecated No longer supported */
  fees24hAtl: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  fees24hAtlTimestamp: Scalars["Int"]["output"];
  fees48h: Scalars["BigDecimal"]["output"];
  holdersCount: Scalars["BigInt"]["output"];
  /** True for bricked pools */
  isInRecoveryMode: Scalars["Boolean"]["output"];
  isPaused: Scalars["Boolean"]["output"];
  lifetimeSwapFees: Scalars["BigDecimal"]["output"];
  lifetimeVolume: Scalars["BigDecimal"]["output"];
  poolId: Scalars["ID"]["output"];
  protocolFees24h: Scalars["BigDecimal"]["output"];
  protocolFees48h: Scalars["BigDecimal"]["output"];
  protocolYieldCapture24h: Scalars["BigDecimal"]["output"];
  protocolYieldCapture48h: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  sharePriceAth: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  sharePriceAthTimestamp: Scalars["Int"]["output"];
  /** @deprecated No longer supported */
  sharePriceAtl: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  sharePriceAtlTimestamp: Scalars["Int"]["output"];
  /** CowAmm specific, equivalent of swap fees */
  surplus24h: Scalars["BigDecimal"]["output"];
  /** CowAmm specific, equivalent of swap fees */
  surplus48h: Scalars["BigDecimal"]["output"];
  /** Disabled for bricked pools */
  swapEnabled: Scalars["Boolean"]["output"];
  swapFee: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  swapsCount: Scalars["BigInt"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  totalLiquidity24hAgo: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  totalLiquidityAth: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  totalLiquidityAthTimestamp: Scalars["Int"]["output"];
  /** @deprecated No longer supported */
  totalLiquidityAtl: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  totalLiquidityAtlTimestamp: Scalars["Int"]["output"];
  totalShares: Scalars["BigDecimal"]["output"];
  totalShares24hAgo: Scalars["BigDecimal"]["output"];
  totalSupply: Scalars["BigDecimal"]["output"];
  volume24h: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  volume24hAth: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  volume24hAthTimestamp: Scalars["Int"]["output"];
  /** @deprecated No longer supported */
  volume24hAtl: Scalars["BigDecimal"]["output"];
  /** @deprecated No longer supported */
  volume24hAtlTimestamp: Scalars["Int"]["output"];
  volume48h: Scalars["BigDecimal"]["output"];
  yieldCapture24h: Scalars["BigDecimal"]["output"];
  yieldCapture48h: Scalars["BigDecimal"]["output"];
}

export interface GqlPoolElement extends GqlPoolBase {
  __typename?: "GqlPoolElement";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  baseToken: Scalars["Bytes"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  principalToken: Scalars["Bytes"]["output"];
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** @deprecated Use poolTokens instead */
  tokens: Array<GqlPoolToken>;
  type: GqlPoolType;
  unitSeconds: Scalars["BigInt"]["output"];
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

/** Represents an event that occurs in a pool. */
export interface GqlPoolEvent {
  /** The block number of the event. */
  blockNumber: Scalars["Int"]["output"];
  /** The block timestamp of the event. */
  blockTimestamp: Scalars["Int"]["output"];
  /** The chain on which the event occurred. */
  chain: GqlChain;
  /** The unique identifier of the event. */
  id: Scalars["ID"]["output"];
  /** The log index of the event. */
  logIndex: Scalars["Int"]["output"];
  /** The pool ID associated with the event. */
  poolId: Scalars["String"]["output"];
  /** The sender of the event. */
  sender: Scalars["String"]["output"];
  /** The timestamp of the event. */
  timestamp: Scalars["Int"]["output"];
  /** The transaction hash of the event. */
  tx: Scalars["String"]["output"];
  /** The type of the event. */
  type: GqlPoolEventType;
  /** The user address associated with the event. */
  userAddress: Scalars["String"]["output"];
  /** The USD value of this event. */
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolEventAmount {
  __typename?: "GqlPoolEventAmount";
  address: Scalars["String"]["output"];
  amount: Scalars["String"]["output"];
  valueUSD: Scalars["Float"]["output"];
}

export enum GqlPoolEventType {
  Add = "ADD",
  Remove = "REMOVE",
  Swap = "SWAP",
}

export enum GqlPoolEventsDataRange {
  NinetyDays = "NINETY_DAYS",
  SevenDays = "SEVEN_DAYS",
  ThirtyDays = "THIRTY_DAYS",
}

export interface GqlPoolEventsFilter {
  chainIn?: InputMaybe<Array<InputMaybe<GqlChain>>>;
  poolId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<GqlPoolEventType>;
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
}

export interface GqlPoolFeaturedPool {
  __typename?: "GqlPoolFeaturedPool";
  description: Scalars["String"]["output"];
  pool: GqlPoolBase;
  poolId: Scalars["ID"]["output"];
  primary: Scalars["Boolean"]["output"];
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
  chainIn?: InputMaybe<Array<GqlChain>>;
  chainNotIn?: InputMaybe<Array<GqlChain>>;
  createTime?: InputMaybe<GqlPoolTimePeriod>;
  idIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  idNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  minTvl?: InputMaybe<Scalars["Float"]["input"]>;
  poolTypeIn?: InputMaybe<Array<GqlPoolType>>;
  poolTypeNotIn?: InputMaybe<Array<GqlPoolType>>;
  protocolVersionIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /**
   * For list of tags see: https://github.com/balancer/metadata/blob/main/pools/index.json
   * Use uppercase
   */
  tagIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * For list of tags see: https://github.com/balancer/metadata/blob/main/pools/index.json
   * Use uppercase
   */
  tagNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokensIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokensNotIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
}

export enum GqlPoolFilterCategory {
  BlackListed = "BLACK_LISTED",
  Incentivized = "INCENTIVIZED",
  Lrt = "LRT",
  Points = "POINTS",
  PointsEigenlayer = "POINTS_EIGENLAYER",
  PointsGyro = "POINTS_GYRO",
  PointsKelp = "POINTS_KELP",
  PointsRenzo = "POINTS_RENZO",
  PointsSwell = "POINTS_SWELL",
  Superfest = "SUPERFEST",
}

export interface GqlPoolFx extends GqlPoolBase {
  __typename?: "GqlPoolFx";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  alpha: Scalars["String"]["output"];
  beta: Scalars["String"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  delta: Scalars["String"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  epsilon: Scalars["String"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  lambda: Scalars["String"]["output"];
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolGyro extends GqlPoolBase {
  __typename?: "GqlPoolGyro";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  alpha: Scalars["String"]["output"];
  beta: Scalars["String"]["output"];
  c: Scalars["String"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  dSq: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  lambda: Scalars["String"]["output"];
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  root3Alpha: Scalars["String"]["output"];
  s: Scalars["String"]["output"];
  sqrtAlpha: Scalars["String"]["output"];
  sqrtBeta: Scalars["String"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  tauAlphaX: Scalars["String"]["output"];
  tauAlphaY: Scalars["String"]["output"];
  tauBetaX: Scalars["String"]["output"];
  tauBetaY: Scalars["String"]["output"];
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  u: Scalars["String"]["output"];
  userBalance?: Maybe<GqlPoolUserBalance>;
  v: Scalars["String"]["output"];
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  w: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
  z: Scalars["String"]["output"];
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
  chain: GqlChain;
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

export enum GqlPoolJoinExitType {
  Exit = "Exit",
  Join = "Join",
}

export interface GqlPoolLiquidityBootstrapping extends GqlPoolBase {
  __typename?: "GqlPoolLiquidityBootstrapping";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolLiquidityBootstrappingV3 extends GqlPoolBase {
  __typename?: "GqlPoolLiquidityBootstrappingV3";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  discord?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  endTime: Scalars["Int"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  farcaster?: Maybe<Scalars["String"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  isProjectTokenSwapInBlocked: Scalars["Boolean"]["output"];
  isSeedless: Scalars["Boolean"]["output"];
  lbpName?: Maybe<Scalars["String"]["output"]>;
  lbpOwner: Scalars["String"]["output"];
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  projectToken: Scalars["String"]["output"];
  projectTokenEndWeight: Scalars["Float"]["output"];
  projectTokenIndex: Scalars["Int"]["output"];
  projectTokenStartWeight: Scalars["Float"]["output"];
  protocolVersion: Scalars["Int"]["output"];
  reserveToken: Scalars["String"]["output"];
  reserveTokenEndWeight: Scalars["Float"]["output"];
  reserveTokenIndex: Scalars["Int"]["output"];
  reserveTokenStartWeight: Scalars["Float"]["output"];
  /** All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again. */
  staking?: Maybe<GqlPoolStaking>;
  startTime: Scalars["Int"]["output"];
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  telegram?: Maybe<Scalars["String"]["output"]>;
  topTrades?: Maybe<Array<GqlLbpTopTrade>>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
  x?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlPoolMetaStable extends GqlPoolBase {
  __typename?: "GqlPoolMetaStable";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** @deprecated Use poolTokens instead */
  tokens: Array<GqlPoolToken>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

/** The pool schema returned for poolGetPools (pool list query) */
export interface GqlPoolMinimal {
  __typename?: "GqlPoolMinimal";
  /** The contract address of the pool. */
  address: Scalars["Bytes"]["output"];
  /**
   * Returns all pool tokens, including any nested tokens and phantom BPTs
   * @deprecated Use poolTokens instead
   */
  allTokens: Array<GqlPoolTokenExpanded>;
  /** List of categories assigned by the team based on external factors */
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  /** The chain on which the pool is deployed */
  chain: GqlChain;
  /** The timestamp the pool was created. */
  createTime: Scalars["Int"]["output"];
  /** The decimals of the BPT, usually 18 */
  decimals: Scalars["Int"]["output"];
  /**
   * Only returns main or underlying tokens, also known as leave tokens. Wont return any nested BPTs. Used for displaying the tokens that the pool consists of.
   * @deprecated Use poolTokens instead
   */
  displayTokens: Array<GqlPoolTokenDisplay>;
  /** Dynamic data such as token balances, swap fees or volume */
  dynamicData: GqlPoolDynamicData;
  /** The factory contract address from which the pool was created. */
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  /** Whether at least one token in this pool is considered an ERC4626 token and the buffer is allowed. */
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  /** Whether at least one token in this pool is considered an ERC4626 token. */
  hasErc4626: Scalars["Boolean"]["output"];
  /** Whether at least one token in a nested pool is considered an ERC4626 token. */
  hasNestedErc4626: Scalars["Boolean"]["output"];
  /** Hook assigned to a pool */
  hook?: Maybe<GqlHook>;
  /** The pool id. This is equal to the address for protocolVersion 3 pools */
  id: Scalars["ID"]["output"];
  /** Pool is receiving rewards when liquidity tokens are staked */
  incentivized: Scalars["Boolean"]["output"];
  /** LBP specific params for v3 pools only. */
  lbpParams?: Maybe<LiquidityBootstrappingPoolV3Params>;
  /** Liquidity management settings for v3 pools. */
  liquidityManagement?: Maybe<LiquidityManagement>;
  /** The name of the pool as per contract */
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  /** Returns all pool tokens, including BPTs and nested pools if there are any. Only one nested level deep. */
  poolTokens: Array<GqlPoolTokenDetail>;
  /** The protocol version on which the pool is deployed, 1, 2 or 3 */
  protocolVersion: Scalars["Int"]["output"];
  /** Staking options of this pool which emit additional rewards */
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** The token symbol of the pool as per contract */
  symbol: Scalars["String"]["output"];
  /** List of tags assigned by the team based on external factors */
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The pool type, such as weighted, stable, etc. */
  type: GqlPoolType;
  /** If a user address was provided in the query, the user balance is populated here */
  userBalance?: Maybe<GqlPoolUserBalance>;
  /**
   * The vault version on which the pool is deployed, 2 or 3
   * @deprecated use protocolVersion instead
   */
  vaultVersion: Scalars["Int"]["output"];
  /** The version of the pool type. */
  version: Scalars["Int"]["output"];
}

/** Result of the poolReloadPools mutation */
export interface GqlPoolMutationResult {
  __typename?: "GqlPoolMutationResult";
  /** The chain that was reloaded. */
  chain: GqlChain;
  /** The error message */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether it was successful or not. */
  success: Scalars["Boolean"]["output"];
  /** The type of pools that were reloaded. */
  type: Scalars["String"]["output"];
}

export type GqlPoolNestedUnion = GqlPoolComposableStableNested;

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
  UserbalanceUsd = "userbalanceUsd",
  Volume24h = "volume24h",
}

export enum GqlPoolOrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export interface GqlPoolQuantAmmWeighted extends GqlPoolBase {
  __typename?: "GqlPoolQuantAmmWeighted";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  quantAmmWeightedParams?: Maybe<QuantAmmWeightedParams>;
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  weightSnapshots?: Maybe<Array<QuantAmmWeightSnapshot>>;
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolReClamm extends GqlPoolBase {
  __typename?: "GqlPoolReClamm";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  /** The centeredness margin of the pool */
  centerednessMargin: Scalars["BigDecimal"]["output"];
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  /** The current fourth root price ratio, an interpolation of the price ratio state */
  currentFourthRootPriceRatio: Scalars["BigDecimal"]["output"];
  /** Represents how fast the pool can move the virtual balances per day */
  dailyPriceShiftBase: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  /** The fourth root price ratio at the end of an update */
  endFourthRootPriceRatio: Scalars["BigDecimal"]["output"];
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  /** The timestamp of the last user interaction */
  lastTimestamp: Scalars["Int"]["output"];
  /** The last virtual balances of the pool */
  lastVirtualBalances: Array<Scalars["BigDecimal"]["output"]>;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  /** The timestamp when the update ends */
  priceRatioUpdateEndTime: Scalars["Int"]["output"];
  /** The timestamp when the update begins */
  priceRatioUpdateStartTime: Scalars["Int"]["output"];
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** The fourth root price ratio at the start of an update */
  startFourthRootPriceRatio: Scalars["BigDecimal"]["output"];
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolSnapshot {
  __typename?: "GqlPoolSnapshot";
  amounts: Array<Scalars["String"]["output"]>;
  chain: GqlChain;
  fees24h: Scalars["String"]["output"];
  /** @deprecated No longer supported */
  holdersCount: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  poolId: Scalars["String"]["output"];
  sharePrice: Scalars["String"]["output"];
  surplus24h: Scalars["String"]["output"];
  swapsCount: Scalars["String"]["output"];
  timestamp: Scalars["Int"]["output"];
  totalLiquidity: Scalars["String"]["output"];
  totalShares: Scalars["String"]["output"];
  /** @deprecated No longer supported */
  totalSurplus: Scalars["String"]["output"];
  /** @deprecated No longer supported */
  totalSwapFee: Scalars["String"]["output"];
  /** @deprecated No longer supported */
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
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  amp: Scalars["BigInt"]["output"];
  bptPriceRate: Scalars["BigDecimal"]["output"];
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** @deprecated Use poolTokens instead */
  tokens: Array<GqlPoolToken>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
  withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolStaking {
  __typename?: "GqlPoolStaking";
  address: Scalars["String"]["output"];
  aura?: Maybe<GqlPoolStakingAura>;
  chain: GqlChain;
  farm?: Maybe<GqlPoolStakingMasterChefFarm>;
  gauge?: Maybe<GqlPoolStakingGauge>;
  id: Scalars["ID"]["output"];
  reliquary?: Maybe<GqlPoolStakingReliquaryFarm>;
  type: GqlPoolStakingType;
  vebal?: Maybe<GqlPoolStakingVebal>;
}

export interface GqlPoolStakingAura {
  __typename?: "GqlPoolStakingAura";
  apr: Scalars["Float"]["output"];
  auraPoolAddress: Scalars["String"]["output"];
  auraPoolId: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isShutdown: Scalars["Boolean"]["output"];
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
  workingSupply: Scalars["String"]["output"];
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
  Aura = "AURA",
  FreshBeets = "FRESH_BEETS",
  Gauge = "GAUGE",
  MasterChef = "MASTER_CHEF",
  Reliquary = "RELIQUARY",
  Vebal = "VEBAL",
}

export interface GqlPoolStakingVebal {
  __typename?: "GqlPoolStakingVebal";
  id: Scalars["ID"]["output"];
  vebalAddress: Scalars["String"]["output"];
}

export interface GqlPoolSwap {
  __typename?: "GqlPoolSwap";
  chain: GqlChain;
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

/** Represents an event that occurs when a swap is made in a pool using the CowAmm protocol. */
export interface GqlPoolSwapEventCowAmm extends GqlPoolEvent {
  __typename?: "GqlPoolSwapEventCowAmm";
  /** The block number of the event. */
  blockNumber: Scalars["Int"]["output"];
  /** The block timestamp of the event. */
  blockTimestamp: Scalars["Int"]["output"];
  /** The chain on which the event occurred. */
  chain: GqlChain;
  /** The fee that this swap generated. */
  fee: GqlPoolEventAmount;
  /** The unique identifier of the event. */
  id: Scalars["ID"]["output"];
  /** The log index of the event. */
  logIndex: Scalars["Int"]["output"];
  /** The pool ID associated with the event. */
  poolId: Scalars["String"]["output"];
  /** The sender of the event. */
  sender: Scalars["String"]["output"];
  /** The surplus generated by the swap. */
  surplus: GqlPoolEventAmount;
  /** The timestamp of the event. */
  timestamp: Scalars["Int"]["output"];
  /** The token that was swapped in the event. */
  tokenIn: GqlPoolEventAmount;
  /** The token that was swapped out in the event. */
  tokenOut: GqlPoolEventAmount;
  /** The transaction hash of the event. */
  tx: Scalars["String"]["output"];
  /** The type of the event. */
  type: GqlPoolEventType;
  /** The user address associated with the event. */
  userAddress: Scalars["String"]["output"];
  /** The value of the event in USD. */
  valueUSD: Scalars["Float"]["output"];
}

/** Represents an event that occurs when a swap is made in a pool. */
export interface GqlPoolSwapEventV3 extends GqlPoolEvent {
  __typename?: "GqlPoolSwapEventV3";
  /** The block number of the event. */
  blockNumber: Scalars["Int"]["output"];
  /** The block timestamp of the event. */
  blockTimestamp: Scalars["Int"]["output"];
  /** The chain on which the event occurred. */
  chain: GqlChain;
  /** The fee that this swap generated. */
  fee: GqlPoolEventAmount;
  /** The unique identifier of the event. */
  id: Scalars["ID"]["output"];
  /** The log index of the event. */
  logIndex: Scalars["Int"]["output"];
  /** The pool ID associated with the event. */
  poolId: Scalars["String"]["output"];
  /** The sender of the event. */
  sender: Scalars["String"]["output"];
  /** The timestamp of the event. */
  timestamp: Scalars["Int"]["output"];
  /** The token that was swapped in the event. */
  tokenIn: GqlPoolEventAmount;
  /** The token that was swapped out in the event. */
  tokenOut: GqlPoolEventAmount;
  /** The transaction hash of the event. */
  tx: Scalars["String"]["output"];
  /** The type of the event. */
  type: GqlPoolEventType;
  /** The user address associated with the event. */
  userAddress: Scalars["String"]["output"];
  /** The value of the event in USD. */
  valueUSD: Scalars["Float"]["output"];
}

export interface GqlPoolTimePeriod {
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
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
  priceRateProvider?: Maybe<Scalars["String"]["output"]>;
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
  priceRateProvider?: Maybe<Scalars["String"]["output"]>;
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export interface GqlPoolTokenComposableStable extends GqlPoolTokenBase {
  __typename?: "GqlPoolTokenComposableStable";
  address: Scalars["String"]["output"];
  balance: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  pool: GqlPoolComposableStableNested;
  priceRate: Scalars["BigDecimal"]["output"];
  priceRateProvider?: Maybe<Scalars["String"]["output"]>;
  symbol: Scalars["String"]["output"];
  totalBalance: Scalars["BigDecimal"]["output"];
  weight?: Maybe<Scalars["BigDecimal"]["output"]>;
}

export type GqlPoolTokenComposableStableNestedUnion = GqlPoolToken;

/**
 * All info on the pool token. It will also include the nested pool if the token is a BPT. It will only support 1 level of nesting.
 * A second (unsupported) level of nesting is shown by having hasNestedPool = true but nestedPool = null.
 */
export interface GqlPoolTokenDetail {
  __typename?: "GqlPoolTokenDetail";
  /** Address of the pool token. */
  address: Scalars["String"]["output"];
  /** Balance of the pool token inside the pool. */
  balance: Scalars["BigDecimal"]["output"];
  /** USD Balance of the pool token. */
  balanceUSD: Scalars["BigDecimal"]["output"];
  /** If it is an ERC4626 token, this defines whether we can use wrap/unwrap through the buffer in swap paths for this token. */
  canUseBufferForSwaps?: Maybe<Scalars["Boolean"]["output"]>;
  chain?: Maybe<GqlChain>;
  chainId?: Maybe<Scalars["Int"]["output"]>;
  /** Coingecko ID */
  coingeckoId?: Maybe<Scalars["String"]["output"]>;
  /** Decimals of the pool token. */
  decimals: Scalars["Int"]["output"];
  /** The ERC4626 review data for the token */
  erc4626ReviewData?: Maybe<Erc4626ReviewData>;
  /** Indicates whether this token is a BPT and therefor has a nested pool. */
  hasNestedPool: Scalars["Boolean"]["output"];
  /** Id of the token. A combination of pool id and token address. */
  id: Scalars["ID"]["output"];
  /** Index of the pool token in the pool as returned by the vault. */
  index: Scalars["Int"]["output"];
  /** Whether the token is in the allow list. */
  isAllowed: Scalars["Boolean"]["output"];
  /**
   * If it is an ERC4626 token, this defines whether we allow it to use the buffer for pool operations.
   * @deprecated Use useUnderlyingForAddRemove and useWrappedForAddRemove instead
   */
  isBufferAllowed: Scalars["Boolean"]["output"];
  /** Whether the token is considered an ERC4626 token. */
  isErc4626: Scalars["Boolean"]["output"];
  /** Whether the token is exempted from taking a protocol yield fee. */
  isExemptFromProtocolYieldFee: Scalars["Boolean"]["output"];
  /** Token logo */
  logoURI?: Maybe<Scalars["String"]["output"]>;
  /** If it is an ERC4626 token, this  defines how much can be deposited into the ERC4626 vault. */
  maxDeposit?: Maybe<Scalars["String"]["output"]>;
  /** If it is an ERC4626 token, this  defines how much can be withdrawn from the ERC4626 vault. */
  maxWithdraw?: Maybe<Scalars["String"]["output"]>;
  /** Name of the pool token. */
  name: Scalars["String"]["output"];
  /** Additional data for the nested pool if the token is a BPT. Null otherwise. */
  nestedPool?: Maybe<GqlNestedPool>;
  /** If it is an appreciating token, it shows the current price rate. 1 otherwise. */
  priceRate: Scalars["BigDecimal"]["output"];
  /** The address of the price rate provider. */
  priceRateProvider?: Maybe<Scalars["String"]["output"]>;
  /** Additional data for the price rate provider, such as reviews or warnings. */
  priceRateProviderData?: Maybe<GqlPriceRateProviderData>;
  /**
   * The priority of the token, can be used for sorting.
   * @deprecated Unused
   */
  priority?: Maybe<Scalars["Int"]["output"]>;
  /** Conversion factor used to adjust for token decimals for uniform precision in calculations. V3 only. */
  scalingFactor?: Maybe<Scalars["BigDecimal"]["output"]>;
  /** Symbol of the pool token. */
  symbol: Scalars["String"]["output"];
  /**
   * Is the token tradable
   * @deprecated Unused
   */
  tradable?: Maybe<Scalars["Boolean"]["output"]>;
  /** If it is an ERC4626, this will be the underlying token if present in the API. */
  underlyingToken?: Maybe<GqlToken>;
  /** If it is an ERC4626 token, this defines whether we allow underlying tokens to be used for add/remove operations. */
  useUnderlyingForAddRemove?: Maybe<Scalars["Boolean"]["output"]>;
  /** If it is an ERC4626 token, this defines whether we allow the wrapped tokens to be used for add/remove operations. */
  useWrappedForAddRemove?: Maybe<Scalars["Boolean"]["output"]>;
  /** The weight of the token in the pool if it is a weighted pool, null otherwise */
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
  isErc4626: Scalars["Boolean"]["output"];
  isMainToken: Scalars["Boolean"]["output"];
  isNested: Scalars["Boolean"]["output"];
  isPhantomBpt: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  weight?: Maybe<Scalars["String"]["output"]>;
}

export type GqlPoolTokenUnion = GqlPoolToken | GqlPoolTokenComposableStable;

/** Supported pool types */
export enum GqlPoolType {
  ComposableStable = "COMPOSABLE_STABLE",
  CowAmm = "COW_AMM",
  Element = "ELEMENT",
  Fx = "FX",
  Gyro = "GYRO",
  Gyro3 = "GYRO3",
  Gyroe = "GYROE",
  Investment = "INVESTMENT",
  LiquidityBootstrapping = "LIQUIDITY_BOOTSTRAPPING",
  MetaStable = "META_STABLE",
  PhantomStable = "PHANTOM_STABLE",
  QuantAmmWeighted = "QUANT_AMM_WEIGHTED",
  Reclamm = "RECLAMM",
  Stable = "STABLE",
  Unknown = "UNKNOWN",
  Weighted = "WEIGHTED",
}

export type GqlPoolUnion =
  | GqlPoolComposableStable
  | GqlPoolElement
  | GqlPoolFx
  | GqlPoolGyro
  | GqlPoolLiquidityBootstrapping
  | GqlPoolLiquidityBootstrappingV3
  | GqlPoolMetaStable
  | GqlPoolQuantAmmWeighted
  | GqlPoolReClamm
  | GqlPoolStable
  | GqlPoolWeighted;

/** If a user address was provided in the query, the user balance is populated here */
export interface GqlPoolUserBalance {
  __typename?: "GqlPoolUserBalance";
  /** The staked BPT balances of the user. */
  stakedBalances: Array<GqlUserStakedBalance>;
  /** Total balance (wallet + staked) as float */
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  /** Total balance (wallet + staked) in USD as float */
  totalBalanceUsd: Scalars["Float"]["output"];
  /** The wallet balance (BPT in wallet) as float. */
  walletBalance: Scalars["AmountHumanReadable"]["output"];
  /** The wallet balance (BPT in wallet) in USD as float. */
  walletBalanceUsd: Scalars["Float"]["output"];
}

export interface GqlPoolUserSwapVolume {
  __typename?: "GqlPoolUserSwapVolume";
  swapVolumeUSD: Scalars["BigDecimal"]["output"];
  userAddress: Scalars["String"]["output"];
}

export interface GqlPoolWeighted extends GqlPoolBase {
  __typename?: "GqlPoolWeighted";
  address: Scalars["Bytes"]["output"];
  /** @deprecated Use poolTokens instead */
  allTokens: Array<GqlPoolTokenExpanded>;
  categories?: Maybe<Array<Maybe<GqlPoolFilterCategory>>>;
  chain: GqlChain;
  createTime: Scalars["Int"]["output"];
  decimals: Scalars["Int"]["output"];
  /** @deprecated Use poolTokens instead */
  displayTokens: Array<GqlPoolTokenDisplay>;
  dynamicData: GqlPoolDynamicData;
  factory?: Maybe<Scalars["Bytes"]["output"]>;
  hasAnyAllowedBuffer: Scalars["Boolean"]["output"];
  hasErc4626: Scalars["Boolean"]["output"];
  hasNestedErc4626: Scalars["Boolean"]["output"];
  hook?: Maybe<GqlHook>;
  id: Scalars["ID"]["output"];
  /** @deprecated Removed without replacement */
  investConfig: GqlPoolInvestConfig;
  liquidityManagement?: Maybe<LiquidityManagement>;
  name: Scalars["String"]["output"];
  /** @deprecated Removed without replacement */
  nestingType: GqlPoolNestingType;
  /**
   * The wallet address of the owner of the pool. Pool owners can set certain properties like swapFees or AMP.
   * @deprecated Use swapFeeManager instead
   */
  owner?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to pause/unpause the pool (or 0 to delegate to governance) */
  pauseManager?: Maybe<Scalars["Bytes"]["output"]>;
  /** Account empowered to set the pool creator fee percentage */
  poolCreator?: Maybe<Scalars["Bytes"]["output"]>;
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  staking?: Maybe<GqlPoolStaking>;
  /** Account empowered to set static swap fees for a pool (when 0 on V2 swap fees are immutable, on V3 delegate to governance) */
  swapFeeManager?: Maybe<Scalars["Bytes"]["output"]>;
  symbol: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /**
   * All tokens of the pool. If it is a nested pool, the nested pool is expanded with its own tokens again.
   * @deprecated Use poolTokens instead
   */
  tokens: Array<GqlPoolTokenUnion>;
  type: GqlPoolType;
  userBalance?: Maybe<GqlPoolUserBalance>;
  /** @deprecated use protocolVersion instead */
  vaultVersion: Scalars["Int"]["output"];
  version: Scalars["Int"]["output"];
  /** @deprecated Removed without replacement */
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

/** Returns the price impact of the path. If there is an error in the price impact calculation, priceImpact will be undefined but the error string is populated. */
export interface GqlPriceImpact {
  __typename?: "GqlPriceImpact";
  /** If priceImpact cant be calculated and is returned as undefined, the error string will be populated. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Price impact in percent 0.01 -> 0.01%; undefined if an error happened. */
  priceImpact?: Maybe<Scalars["AmountHumanReadable"]["output"]>;
}

/** Represents the data of a price rate provider */
export interface GqlPriceRateProviderData {
  __typename?: "GqlPriceRateProviderData";
  /** The address of the price rate provider */
  address: Scalars["String"]["output"];
  /** The factory used to create the price rate provider, if applicable */
  factory?: Maybe<Scalars["String"]["output"]>;
  /** The name of the price rate provider */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The filename of the review of the price rate provider */
  reviewFile?: Maybe<Scalars["String"]["output"]>;
  /** Indicates if the price rate provider has been reviewed */
  reviewed: Scalars["Boolean"]["output"];
  /** A summary of the price rate provider, usually just says safe or unsafe */
  summary?: Maybe<Scalars["String"]["output"]>;
  /** Upgradeable components of the price rate provider */
  upgradeableComponents?: Maybe<
    Array<Maybe<GqlPriceRateProviderUpgradeableComponent>>
  >;
  /** Warnings associated with the price rate provider */
  warnings?: Maybe<Array<Scalars["String"]["output"]>>;
}

/** Represents an upgradeable component of a price rate provider */
export interface GqlPriceRateProviderUpgradeableComponent {
  __typename?: "GqlPriceRateProviderUpgradeableComponent";
  /** The entry point / proxy of the upgradeable component */
  entryPoint: Scalars["String"]["output"];
  /** Indicates if the implementation of the component has been reviewed */
  implementationReviewed: Scalars["String"]["output"];
}

export interface GqlProtocolMetricsAggregated {
  __typename?: "GqlProtocolMetricsAggregated";
  chains: Array<GqlProtocolMetricsChain>;
  numLiquidityProviders: Scalars["BigInt"]["output"];
  poolCount: Scalars["BigInt"]["output"];
  surplus24h: Scalars["BigDecimal"]["output"];
  swapFee24h: Scalars["BigDecimal"]["output"];
  swapVolume24h: Scalars["BigDecimal"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  /** @deprecated No replacement */
  totalSwapFee: Scalars["BigDecimal"]["output"];
  /** @deprecated No replacement */
  totalSwapVolume: Scalars["BigDecimal"]["output"];
  yieldCapture24h: Scalars["BigDecimal"]["output"];
}

export interface GqlProtocolMetricsChain {
  __typename?: "GqlProtocolMetricsChain";
  chainId: Scalars["String"]["output"];
  numLiquidityProviders: Scalars["BigInt"]["output"];
  poolCount: Scalars["BigInt"]["output"];
  surplus24h: Scalars["BigDecimal"]["output"];
  swapFee24h: Scalars["BigDecimal"]["output"];
  swapVolume24h: Scalars["BigDecimal"]["output"];
  totalLiquidity: Scalars["BigDecimal"]["output"];
  /** @deprecated No replacement */
  totalSwapFee: Scalars["BigDecimal"]["output"];
  /** @deprecated No replacement */
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
  totalBalance: Scalars["String"]["output"];
  totalLiquidity: Scalars["String"]["output"];
  userCount: Scalars["String"]["output"];
}

export interface GqlSftmxStakingData {
  __typename?: "GqlSftmxStakingData";
  /** Current exchange rate for sFTMx -> FTM */
  exchangeRate: Scalars["String"]["output"];
  /** Whether maintenance is paused. This pauses reward claiming or harvesting and withdrawing from matured vaults. */
  maintenancePaused: Scalars["Boolean"]["output"];
  /** The maximum FTM amount to depost. */
  maxDepositLimit: Scalars["AmountHumanReadable"]["output"];
  /** The minimum FTM amount to deposit. */
  minDepositLimit: Scalars["AmountHumanReadable"]["output"];
  /** Number of vaults that delegated to validators. */
  numberOfVaults: Scalars["Int"]["output"];
  /** The current rebasing APR for sFTMx. */
  stakingApr: Scalars["String"]["output"];
  /** Total amount of FTM in custody of sFTMx. Staked FTM plus free pool FTM. */
  totalFtmAmount: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of FTM in the free pool. */
  totalFtmAmountInPool: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of FTM staked/delegated to validators. */
  totalFtmAmountStaked: Scalars["AmountHumanReadable"]["output"];
  /** Whether undelegation is paused. Undelegate is the first step to redeem sFTMx. */
  undelegatePaused: Scalars["Boolean"]["output"];
  /** A list of all the vaults that delegated to validators. */
  vaults: Array<GqlSftmxStakingVault>;
  /** Whether withdrawals are paused. Withdraw is the second and final step to redeem sFTMx. */
  withdrawPaused: Scalars["Boolean"]["output"];
  /** Delay to wait between undelegate (1st step) and withdraw (2nd step). */
  withdrawalDelay: Scalars["Int"]["output"];
}

export interface GqlSftmxStakingSnapshot {
  __typename?: "GqlSftmxStakingSnapshot";
  /** Current exchange rate for sFTMx -> FTM */
  exchangeRate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  /** The timestamp of the snapshot. Timestamp is end of day midnight. */
  timestamp: Scalars["Int"]["output"];
  /** Total amount of FTM in custody of sFTMx. Staked FTM plus free pool FTM. */
  totalFtmAmount: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of FTM in the free pool. */
  totalFtmAmountInPool: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of FTM staked/delegated to validators. */
  totalFtmAmountStaked: Scalars["AmountHumanReadable"]["output"];
}

export enum GqlSftmxStakingSnapshotDataRange {
  AllTime = "ALL_TIME",
  NinetyDays = "NINETY_DAYS",
  OneHundredEightyDays = "ONE_HUNDRED_EIGHTY_DAYS",
  OneYear = "ONE_YEAR",
  ThirtyDays = "THIRTY_DAYS",
}

export interface GqlSftmxStakingVault {
  __typename?: "GqlSftmxStakingVault";
  /** The amount of FTM that has been delegated via this vault. */
  ftmAmountStaked: Scalars["AmountHumanReadable"]["output"];
  /** Whether the vault is matured, meaning whether unlock time has passed. */
  isMatured: Scalars["Boolean"]["output"];
  /** Timestamp when the delegated FTM unlocks, matures. */
  unlockTimestamp: Scalars["Int"]["output"];
  /** The address of the validator that the vault has delegated to. */
  validatorAddress: Scalars["String"]["output"];
  /** The ID of the validator that the vault has delegated to. */
  validatorId: Scalars["String"]["output"];
  /** The contract address of the vault. */
  vaultAddress: Scalars["String"]["output"];
  /** The internal index of the vault. */
  vaultIndex: Scalars["Int"]["output"];
}

export interface GqlSftmxWithdrawalRequests {
  __typename?: "GqlSftmxWithdrawalRequests";
  /** Amount of sFTMx that is being redeemed. */
  amountSftmx: Scalars["AmountHumanReadable"]["output"];
  /** The Withdrawal ID, used for interactions. */
  id: Scalars["String"]["output"];
  /** Whether the requests is finished and the user has withdrawn. */
  isWithdrawn: Scalars["Boolean"]["output"];
  /** The timestamp when the request was placed. There is a delay until the user can withdraw. See withdrawalDelay. */
  requestTimestamp: Scalars["Int"]["output"];
  /** The user address that this request belongs to. */
  user: Scalars["String"]["output"];
}

export interface GqlSorCallData {
  __typename?: "GqlSorCallData";
  /** The call data that needs to be sent to the RPC */
  callData: Scalars["String"]["output"];
  /** Maximum amount to be sent for exact out orders */
  maxAmountInRaw?: Maybe<Scalars["String"]["output"]>;
  /** Minimum amount received for exact in orders */
  minAmountOutRaw?: Maybe<Scalars["String"]["output"]>;
  /** The target contract to send the call data to */
  to: Scalars["String"]["output"];
  /** Value in ETH that needs to be sent for native swaps */
  value: Scalars["BigDecimal"]["output"];
}

/** The swap paths for a swap */
export interface GqlSorGetSwapPaths {
  __typename?: "GqlSorGetSwapPaths";
  /**
   * Transaction data that can be posted to an RPC to execute the swap.
   * @deprecated Use Balancer SDK to build swap callData from SOR response
   */
  callData?: Maybe<GqlSorCallData>;
  /** The price of tokenOut in tokenIn. */
  effectivePrice: Scalars["AmountHumanReadable"]["output"];
  /** The price of tokenIn in tokenOut. */
  effectivePriceReversed: Scalars["AmountHumanReadable"]["output"];
  /** The found paths as needed as input for the b-sdk to execute the swap */
  paths: Array<GqlSorPath>;
  /** Price impact of the path */
  priceImpact: GqlPriceImpact;
  /** The version of the protocol these paths are from */
  protocolVersion: Scalars["Int"]["output"];
  /** The return amount in human form. Return amount is either tokenOutAmount (if swapType is exactIn) or tokenInAmount (if swapType is exactOut) */
  returnAmount: Scalars["AmountHumanReadable"]["output"];
  /** The return amount in a raw form */
  returnAmountRaw: Scalars["BigDecimal"]["output"];
  /** The swap routes including pool information. Used to display by the UI */
  routes: Array<GqlSorSwapRoute>;
  /** The swap amount in human form. Swap amount is either tokenInAmount (if swapType is exactIn) or tokenOutAmount (if swapType is exactOut) */
  swapAmount: Scalars["AmountHumanReadable"]["output"];
  /** The swap amount in a raw form */
  swapAmountRaw: Scalars["BigDecimal"]["output"];
  /** The swapType that was provided, exact_in vs exact_out (givenIn vs givenOut) */
  swapType: GqlSorSwapType;
  /** Swaps as needed for the vault swap input to execute the swap */
  swaps: Array<GqlSorSwap>;
  /** All token addresses (or assets) as needed for the vault swap input to execute the swap */
  tokenAddresses: Array<Scalars["String"]["output"]>;
  /** The token address of the tokenIn provided */
  tokenIn: Scalars["String"]["output"];
  /** The amount of tokenIn in human form */
  tokenInAmount: Scalars["AmountHumanReadable"]["output"];
  /** The token address of the tokenOut provided */
  tokenOut: Scalars["String"]["output"];
  /** The amount of tokenOut in human form */
  tokenOutAmount: Scalars["AmountHumanReadable"]["output"];
  /**
   * The version of the vault these paths are from
   * @deprecated Use protocolVersion instead
   */
  vaultVersion: Scalars["Int"]["output"];
}

/** A path of a swap. A swap can have multiple paths. Used as input to execute the swap via b-sdk */
export interface GqlSorPath {
  __typename?: "GqlSorPath";
  /** Input amount of this path in scaled form */
  inputAmountRaw: Scalars["String"]["output"];
  /** A sorted list of booleans that indicate if the respective pool is a buffer */
  isBuffer: Array<Scalars["Boolean"]["output"]>;
  /** Output amount of this path in scaled form */
  outputAmountRaw: Scalars["String"]["output"];
  /** A sorted list of pool ids that are used in this path */
  pools: Array<Scalars["String"]["output"]>;
  /** The version of the protocol these paths are from */
  protocolVersion: Scalars["Int"]["output"];
  /** A sorted list of tokens that are ussed in this path */
  tokens: Array<Token>;
  /**
   * Vault version of this path.
   * @deprecated Use protocolVersion instead
   */
  vaultVersion: Scalars["Int"]["output"];
}

/** A single swap step as used for input to the vault to execute a swap */
export interface GqlSorSwap {
  __typename?: "GqlSorSwap";
  /** Amount to be swapped in this step. 0 for chained swap. */
  amount: Scalars["String"]["output"];
  /** Index of the asset used in the tokenAddress array. */
  assetInIndex: Scalars["Int"]["output"];
  /** Index of the asset used in the tokenAddress array. */
  assetOutIndex: Scalars["Int"]["output"];
  /** Pool id used in this swap step */
  poolId: Scalars["String"]["output"];
  /** UserData used in this swap, generally uses defaults. */
  userData: Scalars["String"]["output"];
}

/** The swap routes including pool information. Used to display by the UI */
export interface GqlSorSwapRoute {
  __typename?: "GqlSorSwapRoute";
  /** The hops this route takes */
  hops: Array<GqlSorSwapRouteHop>;
  /** Share of this route of the total swap */
  share: Scalars["Float"]["output"];
  /** Address of the tokenIn */
  tokenIn: Scalars["String"]["output"];
  /** Amount of the tokenIn in human form */
  tokenInAmount: Scalars["AmountHumanReadable"]["output"];
  /** Address of the tokenOut */
  tokenOut: Scalars["String"]["output"];
  /** Amount of the tokenOut in human form */
  tokenOutAmount: Scalars["AmountHumanReadable"]["output"];
}

/** A hop of a route. A route can have many hops meaning it traverses more than one pool. */
export interface GqlSorSwapRouteHop {
  __typename?: "GqlSorSwapRouteHop";
  /**
   * The pool entity of this hop.
   * @deprecated No longer supported
   */
  pool: GqlPoolMinimal;
  /** The pool id of this hop. */
  poolId: Scalars["String"]["output"];
  /** Address of the tokenIn */
  tokenIn: Scalars["String"]["output"];
  /** Amount of the tokenIn in human form */
  tokenInAmount: Scalars["AmountHumanReadable"]["output"];
  /** Address of the tokenOut */
  tokenOut: Scalars["String"]["output"];
  /** Amount of the tokenOut in human form */
  tokenOutAmount: Scalars["AmountHumanReadable"]["output"];
}

export enum GqlSorSwapType {
  ExactIn = "EXACT_IN",
  ExactOut = "EXACT_OUT",
}

export interface GqlStakedSonicData {
  __typename?: "GqlStakedSonicData";
  /** A list of all the delegated validators. */
  delegatedValidators: Array<GqlStakedSonicDelegatedValidator>;
  /** Current exchange rate for stS -> S */
  exchangeRate: Scalars["String"]["output"];
  /** The total protocol fee collected in the last 24 hours. */
  protocolFee24h: Scalars["String"]["output"];
  /** The total rewards claimed in the last 24 hours. */
  rewardsClaimed24h: Scalars["String"]["output"];
  /** The current rebasing APR for stS. */
  stakingApr: Scalars["String"]["output"];
  /** Total amount of S in custody of stS. Delegated S plus pool S. */
  totalAssets: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of S elegated to validators. */
  totalAssetsDelegated: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of S in the pool to be delegated. */
  totalAssetsPool: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlStakedSonicDelegatedValidator {
  __typename?: "GqlStakedSonicDelegatedValidator";
  /** The amount of S that has been delegated to this validator. */
  assetsDelegated: Scalars["AmountHumanReadable"]["output"];
  /** The id of the validator. */
  validatorId: Scalars["String"]["output"];
}

export interface GqlStakedSonicSnapshot {
  __typename?: "GqlStakedSonicSnapshot";
  /** Current exchange rate for stS -> S */
  exchangeRate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  /** The total protocol fee collected during that day. */
  protocolFee24h: Scalars["String"]["output"];
  /** The total rewards claimed during that day. */
  rewardsClaimed24h: Scalars["String"]["output"];
  /** The timestamp of the snapshot. Timestamp is end of day midnight. */
  timestamp: Scalars["Int"]["output"];
  /** Total amount of S in custody of stS. Delegated S plus pool S. */
  totalAssets: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of S delegated to validators. */
  totalAssetsDelegated: Scalars["AmountHumanReadable"]["output"];
  /** Total amount of S in the pool. */
  totalAssetsPool: Scalars["AmountHumanReadable"]["output"];
}

export enum GqlStakedSonicSnapshotDataRange {
  AllTime = "ALL_TIME",
  NinetyDays = "NINETY_DAYS",
  OneHundredEightyDays = "ONE_HUNDRED_EIGHTY_DAYS",
  OneYear = "ONE_YEAR",
  ThirtyDays = "THIRTY_DAYS",
}

/** Inputs for the call data to create the swap transaction. If this input is given, call data is added to the response. */
export interface GqlSwapCallDataInput {
  /** How long the swap should be valid, provide a timestamp. "999999999999999999" for infinite. Default: infinite */
  deadline?: InputMaybe<Scalars["Int"]["input"]>;
  /** Who receives the output amount. */
  receiver: Scalars["String"]["input"];
  /** Who sends the input amount. */
  sender: Scalars["String"]["input"];
  /** The max slippage in percent 0.01 -> 0.01% */
  slippagePercentage: Scalars["String"]["input"];
}

/** Represents a token in the system */
export interface GqlToken {
  __typename?: "GqlToken";
  /** The address of the token */
  address: Scalars["String"]["output"];
  /** The chain of the token */
  chain: GqlChain;
  /** The chain ID of the token */
  chainId: Scalars["Int"]["output"];
  /** The coingecko ID for this token, if present */
  coingeckoId?: Maybe<Scalars["String"]["output"]>;
  /** The number of decimal places for the token */
  decimals: Scalars["Int"]["output"];
  /** The description of the token */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The Discord URL of the token */
  discordUrl?: Maybe<Scalars["String"]["output"]>;
  /** The ERC4626 review data for the token */
  erc4626ReviewData?: Maybe<Erc4626ReviewData>;
  /** If it is an ERC4626 token, this defines whether we allow it to use the buffer for pool operations. */
  isBufferAllowed: Scalars["Boolean"]["output"];
  /** Whether the token is considered an ERC4626 token. */
  isErc4626: Scalars["Boolean"]["output"];
  /** The logo URI of the token */
  logoURI?: Maybe<Scalars["String"]["output"]>;
  /** If it is an ERC4626 token, this  defines how much can be deposited into the ERC4626 vault. */
  maxDeposit?: Maybe<Scalars["String"]["output"]>;
  /** The name of the token */
  name: Scalars["String"]["output"];
  /** The rate provider data for the token */
  priceRateProviderData?: Maybe<GqlPriceRateProviderData>;
  /** The priority of the token, can be used for sorting. */
  priority: Scalars["Int"]["output"];
  /**
   * The rate provider data for the token
   * @deprecated Use priceRateProviderData instead
   */
  rateProviderData?: Maybe<GqlPriceRateProviderData>;
  /** The symbol of the token */
  symbol: Scalars["String"]["output"];
  /** The Telegram URL of the token */
  telegramUrl?: Maybe<Scalars["String"]["output"]>;
  /** Indicates if the token is tradable */
  tradable: Scalars["Boolean"]["output"];
  /** The Twitter username of the token */
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<GqlTokenType>>;
  /** The ERC4626 underlying token address, if applicable. */
  underlyingTokenAddress?: Maybe<Scalars["String"]["output"]>;
  /** The website URL of the token */
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
  All = "ALL",
  NinetyDay = "NINETY_DAY",
  OneHundredEightyDay = "ONE_HUNDRED_EIGHTY_DAY",
  OneYear = "ONE_YEAR",
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

/** Represents additional data for a token */
export interface GqlTokenDynamicData {
  __typename?: "GqlTokenDynamicData";
  /** The all-time high price of the token */
  ath: Scalars["Float"]["output"];
  /** The all-time low price of the token */
  atl: Scalars["Float"]["output"];
  /** The fully diluted valuation of the token */
  fdv?: Maybe<Scalars["String"]["output"]>;
  /** The highest price in the last 24 hours */
  high24h: Scalars["Float"]["output"];
  /** The unique identifier of the dynamic data */
  id: Scalars["String"]["output"];
  /** The lowest price in the last 24 hours */
  low24h: Scalars["Float"]["output"];
  /** The market capitalization of the token */
  marketCap?: Maybe<Scalars["String"]["output"]>;
  /** The current price of the token */
  price: Scalars["Float"]["output"];
  /** The price change in the last 24 hours */
  priceChange24h: Scalars["Float"]["output"];
  /** The percentage price change in the last 7 days */
  priceChangePercent7d?: Maybe<Scalars["Float"]["output"]>;
  /** The percentage price change in the last 14 days */
  priceChangePercent14d?: Maybe<Scalars["Float"]["output"]>;
  /** The percentage price change in the last 24 hours */
  priceChangePercent24h: Scalars["Float"]["output"];
  /** The percentage price change in the last 30 days */
  priceChangePercent30d?: Maybe<Scalars["Float"]["output"]>;
  /** The address of the token */
  tokenAddress: Scalars["String"]["output"];
  /** The timestamp when the data was last updated */
  updatedAt: Scalars["String"]["output"];
}

/** Provide filters for tokens */
export interface GqlTokenFilter {
  /** Only return tokens with these addresses */
  tokensIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by token type */
  typeIn?: InputMaybe<Array<GqlTokenType>>;
}

/** Result of the poolReloadPools mutation */
export interface GqlTokenMutationResult {
  __typename?: "GqlTokenMutationResult";
  /** The chain that was reloaded. */
  chain: GqlChain;
  /** The error message */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether it was successful or not. */
  success: Scalars["Boolean"]["output"];
}

export interface GqlTokenPrice {
  __typename?: "GqlTokenPrice";
  address: Scalars["String"]["output"];
  chain: GqlChain;
  price: Scalars["Float"]["output"];
  updatedAt: Scalars["Int"]["output"];
  updatedBy?: Maybe<Scalars["String"]["output"]>;
}

export interface GqlTokenPriceChartDataItem {
  __typename?: "GqlTokenPriceChartDataItem";
  id: Scalars["ID"]["output"];
  price: Scalars["AmountHumanReadable"]["output"];
  timestamp: Scalars["Int"]["output"];
}

export enum GqlTokenType {
  BlockedV2 = "BLOCKED_V2",
  BlockedV3 = "BLOCKED_V3",
  Bpt = "BPT",
  Erc4626 = "ERC4626",
  PhantomBpt = "PHANTOM_BPT",
  /** @deprecated Use BLOCKED instead */
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
  chain: GqlChain;
  poolId: Scalars["String"]["output"];
  stakedBalance: Scalars["AmountHumanReadable"]["output"];
  tokenAddress: Scalars["String"]["output"];
  tokenPrice: Scalars["Float"]["output"];
  totalBalance: Scalars["AmountHumanReadable"]["output"];
  walletBalance: Scalars["AmountHumanReadable"]["output"];
}

export interface GqlUserStakedBalance {
  __typename?: "GqlUserStakedBalance";
  /** The staked BPT balance as float. */
  balance: Scalars["AmountHumanReadable"]["output"];
  /** The steaked BPT balance in USD as float. */
  balanceUsd: Scalars["Float"]["output"];
  /** The id of the staking to match with GqlPoolStaking.id. */
  stakingId: Scalars["String"]["output"];
  /** The staking type (Gauge, farm, aura, etc.) in which this balance is staked. */
  stakingType: GqlPoolStakingType;
}

export interface GqlUserSwapVolumeFilter {
  poolIdIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenInIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenOutIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
}

export interface GqlVeBalBalance {
  __typename?: "GqlVeBalBalance";
  balance: Scalars["AmountHumanReadable"]["output"];
  chain: GqlChain;
  locked: Scalars["AmountHumanReadable"]["output"];
  lockedUsd: Scalars["AmountHumanReadable"]["output"];
}

/** Represents a snapshot of a VeBal lock at a specific point in time. */
export interface GqlVeBalLockSnapshot {
  __typename?: "GqlVeBalLockSnapshot";
  /** The locked balance at that time. */
  balance: Scalars["AmountHumanReadable"]["output"];
  bias: Scalars["String"]["output"];
  slope: Scalars["String"]["output"];
  /** The timestamp of the snapshot, snapshots are taking at lock events. */
  timestamp: Scalars["Int"]["output"];
}

export interface GqlVeBalUserData {
  __typename?: "GqlVeBalUserData";
  balance: Scalars["AmountHumanReadable"]["output"];
  lockSnapshots: Array<GqlVeBalLockSnapshot>;
  locked: Scalars["AmountHumanReadable"]["output"];
  lockedUsd: Scalars["AmountHumanReadable"]["output"];
  rank?: Maybe<Scalars["Int"]["output"]>;
}

/** The Gauge that can be voted on through veBAL and that will ultimately receive the rewards. */
export interface GqlVotingGauge {
  __typename?: "GqlVotingGauge";
  /** The timestamp the gauge was added. */
  addedTimestamp?: Maybe<Scalars["Int"]["output"]>;
  /** The address of the root gauge on Ethereum mainnet. */
  address: Scalars["Bytes"]["output"];
  /** The address of the child gauge on the specific chain. */
  childGaugeAddress?: Maybe<Scalars["Bytes"]["output"]>;
  /** Whether the gauge is killed or not. */
  isKilled: Scalars["Boolean"]["output"];
  /** The relative weight the gauge received this epoch (not more than 1.0). */
  relativeWeight: Scalars["String"]["output"];
  /** The relative weight cap. 1.0 for uncapped. */
  relativeWeightCap?: Maybe<Scalars["String"]["output"]>;
}

/** A token inside of a pool with a voting gauge. */
export interface GqlVotingGaugeToken {
  __typename?: "GqlVotingGaugeToken";
  /** The address of the token. */
  address: Scalars["String"]["output"];
  /** The URL to the token logo. */
  logoURI: Scalars["String"]["output"];
  /** The symbol of the token. */
  symbol: Scalars["String"]["output"];
  /** Underlying token address */
  underlyingTokenAddress?: Maybe<Scalars["String"]["output"]>;
  /** If it is a weighted pool, the weigh of the token is shown here in %. 0.5 = 50%. */
  weight?: Maybe<Scalars["String"]["output"]>;
}

/** The pool that can be voted on through veBAL */
export interface GqlVotingPool {
  __typename?: "GqlVotingPool";
  /** The address of the pool. */
  address: Scalars["Bytes"]["output"];
  /** The chain this pool is on. */
  chain: GqlChain;
  /** The gauge that is connected to the pool and that will receive the rewards. */
  gauge: GqlVotingGauge;
  /** Pool ID */
  id: Scalars["ID"]["output"];
  /** Returns all pool tokens, including BPTs and nested pools if there are any. Only one nested level deep. */
  poolTokens: Array<GqlPoolTokenDetail>;
  protocolVersion: Scalars["Int"]["output"];
  /** The symbol of the pool. */
  symbol: Scalars["String"]["output"];
  /** List of tags assigned by the team based on external factors */
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The tokens inside the pool. */
  tokens: Array<GqlVotingGaugeToken>;
  /** The type of the pool. */
  type: GqlPoolType;
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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

export interface HookConfig {
  __typename?: "HookConfig";
  /** True when hook can change the amounts send to the vault. Necessary to deduct the fees. */
  enableHookAdjustedAmounts: Scalars["Boolean"]["output"];
  shouldCallAfterAddLiquidity: Scalars["Boolean"]["output"];
  shouldCallAfterInitialize: Scalars["Boolean"]["output"];
  shouldCallAfterRemoveLiquidity: Scalars["Boolean"]["output"];
  shouldCallAfterSwap: Scalars["Boolean"]["output"];
  shouldCallBeforeAddLiquidity: Scalars["Boolean"]["output"];
  shouldCallBeforeInitialize: Scalars["Boolean"]["output"];
  shouldCallBeforeRemoveLiquidity: Scalars["Boolean"]["output"];
  shouldCallBeforeSwap: Scalars["Boolean"]["output"];
  shouldCallComputeDynamicSwapFee: Scalars["Boolean"]["output"];
}

export type HookParams =
  | ExitFeeHookParams
  | FeeTakingHookParams
  | MevTaxHookParams
  | StableSurgeHookParams;

export enum InvestType {
  Exit = "Exit",
  Join = "Join",
}

export interface JoinExit {
  __typename?: "JoinExit";
  amounts: Array<Scalars["BigDecimal"]["output"]>;
  block?: Maybe<Scalars["BigInt"]["output"]>;
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
  Block = "block",
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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

export interface LbpMetadataInput {
  description: Scalars["String"]["input"];
  discord?: InputMaybe<Scalars["String"]["input"]>;
  farcaster?: InputMaybe<Scalars["String"]["input"]>;
  lbpName: Scalars["String"]["input"];
  telegram?: InputMaybe<Scalars["String"]["input"]>;
  tokenLogo: Scalars["String"]["input"];
  website: Scalars["String"]["input"];
  x?: InputMaybe<Scalars["String"]["input"]>;
}

export interface LbpPriceChartData {
  __typename?: "LBPPriceChartData";
  buyVolume: Scalars["Float"]["output"];
  cumulativeFees: Scalars["Float"]["output"];
  cumulativeVolume: Scalars["Float"]["output"];
  fees: Scalars["Float"]["output"];
  /** @deprecated No longer supported */
  intervalTimestamp: Scalars["Int"]["output"];
  projectTokenBalance: Scalars["Float"]["output"];
  projectTokenPrice: Scalars["Float"]["output"];
  reservePrice: Scalars["Float"]["output"];
  reserveTokenBalance: Scalars["Float"]["output"];
  sellVolume: Scalars["Float"]["output"];
  swapCount: Scalars["Int"]["output"];
  timestamp: Scalars["Int"]["output"];
  tvl: Scalars["Float"]["output"];
  volume: Scalars["Float"]["output"];
}

export interface LbPoolInput {
  address: Scalars["String"]["input"];
  chain: GqlChain;
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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

/** LBP specific params for v3 pools only. */
export interface LiquidityBootstrappingPoolV3Params {
  __typename?: "LiquidityBootstrappingPoolV3Params";
  description?: Maybe<Scalars["String"]["output"]>;
  discord?: Maybe<Scalars["String"]["output"]>;
  endTime: Scalars["Int"]["output"];
  farcaster?: Maybe<Scalars["String"]["output"]>;
  isProjectTokenSwapInBlocked: Scalars["Boolean"]["output"];
  isSeedless: Scalars["Boolean"]["output"];
  lbpName?: Maybe<Scalars["String"]["output"]>;
  lbpOwner: Scalars["String"]["output"];
  projectToken: Scalars["String"]["output"];
  projectTokenEndWeight: Scalars["Float"]["output"];
  projectTokenIndex: Scalars["Int"]["output"];
  projectTokenStartWeight: Scalars["Float"]["output"];
  reserveToken: Scalars["String"]["output"];
  reserveTokenEndWeight: Scalars["Float"]["output"];
  reserveTokenIndex: Scalars["Int"]["output"];
  reserveTokenStartWeight: Scalars["Float"]["output"];
  startTime: Scalars["Int"]["output"];
  telegram?: Maybe<Scalars["String"]["output"]>;
  topTrades?: Maybe<Array<GqlLbpTopTrade>>;
  website?: Maybe<Scalars["String"]["output"]>;
  x?: Maybe<Scalars["String"]["output"]>;
}

/** Liquidity management settings for v3 pools. */
export interface LiquidityManagement {
  __typename?: "LiquidityManagement";
  /** Indicates whether this pool has disabled add and removes of unbalanced/non-proportional liquidity. Meaning it will only support proportional add and remove liquidity. */
  disableUnbalancedLiquidity?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether this pool support additional, custom add liquditiy operations apart from proportional, unbalanced and single asset. */
  enableAddLiquidityCustom?: Maybe<Scalars["Boolean"]["output"]>;
  /** Indicates whether donation is enabled. Meaning you can send funds to the pool without receiving a BPT. */
  enableDonation?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether this pool support additional, custom remove liquditiy operations apart from proportional, unbalanced and single asset. */
  enableRemoveLiquidityCustom?: Maybe<Scalars["Boolean"]["output"]>;
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
  and?: InputMaybe<Array<InputMaybe<LockerDelegateChangedTransaction_Filter>>>;
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
  fromDelegate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  fromDelegate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  fromDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<LockerDelegateChangedTransaction_Filter>>>;
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
  toDelegate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  toDelegate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  toDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
}

export enum LockerDelegateChangedTransaction_OrderBy {
  AuraLocker = "auraLocker",
  AuraLockerAccount = "auraLockerAccount",
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<LockerKickRewardTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  kicked_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  kicked_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  kicked_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<LockerKickRewardTransaction_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<LockerRewardPaidTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<LockerRewardPaidTransaction_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
  Hash = "hash",
  Id = "id",
  Reward = "reward",
  RewardToken = "rewardToken",
  RewardTokenDecimals = "rewardToken__decimals",
  RewardTokenId = "rewardToken__id",
  RewardTokenName = "rewardToken__name",
  RewardTokenSymbol = "rewardToken__symbol",
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
  and?: InputMaybe<Array<InputMaybe<LockerStakedTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<LockerStakedTransaction_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<LockerTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<LockerTransaction_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<LockerWithdrawnTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<LockerWithdrawnTransaction_Filter>>>;
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
  AuraLockerAccountBalance = "auraLockerAccount__balance",
  AuraLockerAccountBalanceLocked = "auraLockerAccount__balanceLocked",
  AuraLockerAccountBalanceNextUnlockIndex = "auraLockerAccount__balanceNextUnlockIndex",
  AuraLockerAccountDelegateUpdatedAt = "auraLockerAccount__delegateUpdatedAt",
  AuraLockerAccountId = "auraLockerAccount__id",
  AuraLockerAccountUserLocksLength = "auraLockerAccount__userLocksLength",
  AuraLockerAddress = "auraLocker__address",
  AuraLockerId = "auraLocker__id",
  AuraLockerIsShutdown = "auraLocker__isShutdown",
  AuraLockerLockedSupply = "auraLocker__lockedSupply",
  AuraLockerTotalSupply = "auraLocker__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<MasterChefPoolInfo_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MasterChefPoolInfo_Filter>>>;
  rewarder?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  rewarder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewarder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  LpTokenDecimals = "lpToken__decimals",
  LpTokenId = "lpToken__id",
  LpTokenName = "lpToken__name",
  LpTokenSymbol = "lpToken__symbol",
  MasterChef = "masterChef",
  MasterChefEndBlock = "masterChef__endBlock",
  MasterChefId = "masterChef__id",
  MasterChefRewardPerBlock = "masterChef__rewardPerBlock",
  MasterChefStartBlock = "masterChef__startBlock",
  MasterChefTotalAllocPoint = "masterChef__totalAllocPoint",
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
  and?: InputMaybe<Array<InputMaybe<MasterChefUserInfo_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MasterChefUserInfo_Filter>>>;
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
  AccountId = "account__id",
  Amount = "amount",
  Id = "id",
  MasterChef = "masterChef",
  MasterChefEndBlock = "masterChef__endBlock",
  MasterChefId = "masterChef__id",
  MasterChefRewardPerBlock = "masterChef__rewardPerBlock",
  MasterChefStartBlock = "masterChef__startBlock",
  MasterChefTotalAllocPoint = "masterChef__totalAllocPoint",
  PoolInfo = "poolInfo",
  PoolInfoAccCvxPerShare = "poolInfo__accCvxPerShare",
  PoolInfoAllocPoint = "poolInfo__allocPoint",
  PoolInfoId = "poolInfo__id",
  PoolInfoLastRewardBlock = "poolInfo__lastRewardBlock",
  PoolInfoLpSupply = "poolInfo__lpSupply",
  PoolInfoRewarder = "poolInfo__rewarder",
  RewardDebt = "rewardDebt",
}

export interface MasterChef_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MasterChef_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MasterChef_Filter>>>;
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
  and?: InputMaybe<Array<InputMaybe<MerkleDropClaim_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MerkleDropClaim_Filter>>>;
}

export enum MerkleDropClaim_OrderBy {
  Account = "account",
  AccountId = "account__id",
  Amount = "amount",
  Id = "id",
  Locked = "locked",
  MerkleDrop = "merkleDrop",
  MerkleDropExpiryTime = "merkleDrop__expiryTime",
  MerkleDropId = "merkleDrop__id",
  MerkleDropMerkleRoot = "merkleDrop__merkleRoot",
  MerkleDropStartTime = "merkleDrop__startTime",
}

export interface MerkleDrop_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MerkleDrop_Filter>>>;
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
  merkleRoot_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  merkleRoot_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<MerkleDrop_Filter>>>;
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

/** MevTax hook specific params. Percentage format is 0.01 -> 0.01%. */
export interface MevTaxHookParams {
  __typename?: "MevTaxHookParams";
  maxMevSwapFeePercentage?: Maybe<Scalars["String"]["output"]>;
  mevTaxMultiplier?: Maybe<Scalars["String"]["output"]>;
  mevTaxThreshold?: Maybe<Scalars["String"]["output"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  beetsPoolLoadReliquarySnapshotsForAllFarms: Scalars["String"]["output"];
  createLBP: Scalars["Boolean"]["output"];
  poolLoadOnChainDataForAllPools: Array<GqlPoolMutationResult>;
  poolLoadSnapshotsForPools: Scalars["String"]["output"];
  poolReloadAllPoolAprs: Scalars["String"]["output"];
  poolReloadPools: Array<GqlPoolMutationResult>;
  poolReloadStakingForAllPools: Scalars["String"]["output"];
  poolReloadSwaps: Scalars["String"]["output"];
  poolSyncAllPoolsFromSubgraph: Array<Scalars["String"]["output"]>;
  poolSyncFxQuoteTokens: Array<GqlPoolMutationResult>;
  poolUpdateLiquidityValuesForAllPools: Scalars["String"]["output"];
  protocolCacheMetrics: Scalars["String"]["output"];
  sftmxSyncStakingData: Scalars["String"]["output"];
  sftmxSyncWithdrawalRequests: Scalars["String"]["output"];
  tokenDeleteTokenType: Scalars["String"]["output"];
  tokenReloadAllTokenTypes: Scalars["String"]["output"];
  tokenReloadErc4626Tokens: Array<GqlTokenMutationResult>;
  tokenReloadTokenPrices?: Maybe<Scalars["Boolean"]["output"]>;
  tokenSyncLatestFxPrices: Scalars["String"]["output"];
  tokenSyncTokenDefinitions: Scalars["String"]["output"];
  userInitStakedBalances: Scalars["String"]["output"];
  userInitWalletBalancesForAllPools: Scalars["String"]["output"];
  userSyncChangedStakedBalances: Scalars["String"]["output"];
  userSyncChangedWalletBalancesForAllPools: Scalars["String"]["output"];
  veBalSyncAllUserBalances: Scalars["String"]["output"];
  veBalSyncTotalSupply: Scalars["String"]["output"];
}

export interface MutationBeetsPoolLoadReliquarySnapshotsForAllFarmsArgs {
  chain: GqlChain;
}

export interface MutationCreateLbpArgs {
  input: CreateLbpInput;
}

export interface MutationPoolLoadOnChainDataForAllPoolsArgs {
  chains: Array<GqlChain>;
}

export interface MutationPoolLoadSnapshotsForPoolsArgs {
  chain: GqlChain;
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolReloadAllPoolAprsArgs {
  chain: GqlChain;
}

export interface MutationPoolReloadPoolsArgs {
  chains: Array<GqlChain>;
}

export interface MutationPoolReloadStakingForAllPoolsArgs {
  stakingTypes: Array<GqlPoolStakingType>;
}

export interface MutationPoolReloadSwapsArgs {
  chain: GqlChain;
  poolId: Scalars["String"]["input"];
}

export interface MutationPoolSyncFxQuoteTokensArgs {
  chains: Array<GqlChain>;
}

export interface MutationTokenDeleteTokenTypeArgs {
  tokenAddress: Scalars["String"]["input"];
  type: GqlTokenType;
}

export interface MutationTokenReloadErc4626TokensArgs {
  chains: Array<GqlChain>;
}

export interface MutationTokenReloadTokenPricesArgs {
  chains: Array<GqlChain>;
}

export interface MutationTokenSyncLatestFxPricesArgs {
  chain: GqlChain;
}

export interface MutationUserInitStakedBalancesArgs {
  stakingTypes: Array<GqlPoolStakingType>;
}

export interface MutationUserInitWalletBalancesForAllPoolsArgs {
  chain?: InputMaybe<GqlChain>;
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
  ampUpdates?: Maybe<Array<AmpUpdate>>;
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
  extraRewards: Array<ExtraReward>;
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
  joinsExits?: Maybe<Array<JoinExit>>;
  lambda?: Maybe<Scalars["BigDecimal"]["output"]>;
  lastJoinExitAmp?: Maybe<Scalars["BigInt"]["output"]>;
  lastPostJoinExitInvariant?: Maybe<Scalars["BigDecimal"]["output"]>;
  latestAmpUpdate?: Maybe<AmpUpdate>;
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
  /** Indicates if a pool can be swapped against. Combines multiple sources, including offchain curation */
  swapEnabled: Scalars["Boolean"]["output"];
  /** External indication from an offchain permissioned actor */
  swapEnabledCurationSignal?: Maybe<Scalars["Boolean"]["output"]>;
  /** The native swapEnabled boolean. internal to the pool. Only applies to Gyro, LBPs and InvestmentPools */
  swapEnabledInternal?: Maybe<Scalars["Boolean"]["output"]>;
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
  totalLiquiditySansBPT?: Maybe<Scalars["BigDecimal"]["output"]>;
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

export interface PoolAmpUpdatesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AmpUpdate_Filter>;
}

export interface PoolCircuitBreakersArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CircuitBreaker_Filter>;
}

export interface PoolExtraRewardsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ExtraReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ExtraReward_Filter>;
}

export interface PoolHistoricalValuesArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface PoolJoinsExitsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<JoinExit_Filter>;
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
  and?: InputMaybe<Array<InputMaybe<PoolAccountRewards_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolAccountRewards_Filter>>>;
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
  PoolAccountId = "poolAccount__id",
  PoolAccountStaked = "poolAccount__staked",
  RewardPerTokenPaid = "rewardPerTokenPaid",
  RewardToken = "rewardToken",
  RewardTokenDecimals = "rewardToken__decimals",
  RewardTokenId = "rewardToken__id",
  RewardTokenName = "rewardToken__name",
  RewardTokenSymbol = "rewardToken__symbol",
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
  and?: InputMaybe<Array<InputMaybe<PoolAccount_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolAccount_Filter>>>;
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
  AccountId = "account__id",
  Id = "id",
  Pool = "pool",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  address: Scalars["Bytes"]["output"];
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
  and?: InputMaybe<Array<InputMaybe<PoolRewardData_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<PoolRewardData_Filter>>>;
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
  Address = "address",
  Id = "id",
  LastUpdateTime = "lastUpdateTime",
  PeriodFinish = "periodFinish",
  Pool = "pool",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
  QueuedRewards = "queuedRewards",
  RewardPerTokenStored = "rewardPerTokenStored",
  RewardRate = "rewardRate",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
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
  and?: InputMaybe<Array<InputMaybe<PoolRewardPaidTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<PoolRewardPaidTransaction_Filter>>>;
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
  PoolAccountId = "poolAccount__id",
  PoolAccountStaked = "poolAccount__staked",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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
  and?: InputMaybe<Array<InputMaybe<PoolStakedTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<PoolStakedTransaction_Filter>>>;
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
  PoolAccountId = "poolAccount__id",
  PoolAccountStaked = "poolAccount__staked",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  and?: InputMaybe<Array<InputMaybe<PoolTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<PoolTransaction_Filter>>>;
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
  PoolAccountId = "poolAccount__id",
  PoolAccountStaked = "poolAccount__staked",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  and?: InputMaybe<Array<InputMaybe<PoolWithdrawnTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<PoolWithdrawnTransaction_Filter>>>;
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
  PoolAccountId = "poolAccount__id",
  PoolAccountStaked = "poolAccount__staked",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
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
  ampUpdates_?: InputMaybe<AmpUpdate_Filter>;
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
  extraRewards_?: InputMaybe<ExtraReward_Filter>;
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
  joinsExits_?: InputMaybe<JoinExit_Filter>;
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
  latestAmpUpdate?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_?: InputMaybe<AmpUpdate_Filter>;
  latestAmpUpdate_contains?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_gt?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_gte?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  latestAmpUpdate_lt?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_lte?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  latestAmpUpdate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  latestAmpUpdate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  latestAmpUpdate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
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
  rewardPool_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  rewardPool_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  rewardPool_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  swapEnabledCurationSignal?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabledCurationSignal_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  swapEnabledCurationSignal_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabledCurationSignal_not_in?: InputMaybe<
    Array<Scalars["Boolean"]["input"]>
  >;
  swapEnabledInternal?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabledInternal_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  swapEnabledInternal_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  swapEnabledInternal_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
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
  totalLiquiditySansBPT?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalLiquiditySansBPT_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalLiquiditySansBPT_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
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
  AmpUpdates = "ampUpdates",
  BaseToken = "baseToken",
  Beta = "beta",
  C = "c",
  CircuitBreakers = "circuitBreakers",
  CreateTime = "createTime",
  DSq = "dSq",
  Delta = "delta",
  DepositToken = "depositToken",
  DepositTokenDecimals = "depositToken__decimals",
  DepositTokenId = "depositToken__id",
  DepositTokenName = "depositToken__name",
  DepositTokenSymbol = "depositToken__symbol",
  Epsilon = "epsilon",
  ExpiryTime = "expiryTime",
  ExtraRewards = "extraRewards",
  Factory = "factory",
  FactoryPoolData = "factoryPoolData",
  FactoryPoolDataAddedAt = "factoryPoolData__addedAt",
  FactoryPoolDataBalancerPoolId = "factoryPoolData__balancerPoolId",
  FactoryPoolDataGauge = "factoryPoolData__gauge",
  FactoryPoolDataId = "factoryPoolData__id",
  FactoryPoolDataIsShutdown = "factoryPoolData__isShutdown",
  FactoryPoolDataStash = "factoryPoolData__stash",
  Gauge = "gauge",
  GaugeBalance = "gauge__balance",
  GaugeId = "gauge__id",
  GaugeTotalSupply = "gauge__totalSupply",
  GaugeWorkingSupply = "gauge__workingSupply",
  HistoricalValues = "historicalValues",
  HoldersCount = "holdersCount",
  Id = "id",
  IsFactoryPool = "isFactoryPool",
  IsInRecoveryMode = "isInRecoveryMode",
  IsPaused = "isPaused",
  JoinExitEnabled = "joinExitEnabled",
  JoinsExits = "joinsExits",
  Lambda = "lambda",
  LastJoinExitAmp = "lastJoinExitAmp",
  LastPostJoinExitInvariant = "lastPostJoinExitInvariant",
  LatestAmpUpdate = "latestAmpUpdate",
  LatestAmpUpdateEndAmp = "latestAmpUpdate__endAmp",
  LatestAmpUpdateEndTimestamp = "latestAmpUpdate__endTimestamp",
  LatestAmpUpdateId = "latestAmpUpdate__id",
  LatestAmpUpdateScheduledTimestamp = "latestAmpUpdate__scheduledTimestamp",
  LatestAmpUpdateStartAmp = "latestAmpUpdate__startAmp",
  LatestAmpUpdateStartTimestamp = "latestAmpUpdate__startTimestamp",
  LowerTarget = "lowerTarget",
  LpToken = "lpToken",
  LpTokenDecimals = "lpToken__decimals",
  LpTokenId = "lpToken__id",
  LpTokenName = "lpToken__name",
  LpTokenSymbol = "lpToken__symbol",
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
  RewardTokenDecimals = "rewardToken__decimals",
  RewardTokenId = "rewardToken__id",
  RewardTokenName = "rewardToken__name",
  RewardTokenSymbol = "rewardToken__symbol",
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
  SwapEnabledCurationSignal = "swapEnabledCurationSignal",
  SwapEnabledInternal = "swapEnabledInternal",
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
  TotalLiquiditySansBpt = "totalLiquiditySansBPT",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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

export interface QuantAmmWeightedDetail {
  __typename?: "QuantAMMWeightedDetail";
  category: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
}

export interface QuantAmmWeightSnapshot {
  __typename?: "QuantAmmWeightSnapshot";
  timestamp: Scalars["Int"]["output"];
  weights?: Maybe<Array<Scalars["Float"]["output"]>>;
}

export interface QuantAmmWeightedParams {
  __typename?: "QuantAmmWeightedParams";
  absoluteWeightGuardRail: Scalars["String"]["output"];
  details: Array<QuantAmmWeightedDetail>;
  epsilonMax: Scalars["String"]["output"];
  lambda: Array<Scalars["String"]["output"]>;
  lastInterpolationTimePossible: Scalars["String"]["output"];
  lastUpdateIntervalTime: Scalars["String"]["output"];
  maxTradeSizeRatio: Scalars["String"]["output"];
  oracleStalenessThreshold: Scalars["String"]["output"];
  poolRegistry: Scalars["String"]["output"];
  updateInterval: Scalars["String"]["output"];
  weightBlockMultipliers: Array<Scalars["String"]["output"]>;
  weightsAtLastUpdateInterval: Array<Scalars["String"]["output"]>;
}

export interface Query {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  /** Returns all pools for a given filter, specific for aggregators */
  aggregatorPools: Array<GqlPoolAggregator>;
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
  /** @deprecated No longer supported */
  blocksGetAverageBlockTime: Scalars["Float"]["output"];
  /** @deprecated No longer supported */
  blocksGetBlocksPerDay: Scalars["Float"]["output"];
  /** @deprecated No longer supported */
  blocksGetBlocksPerSecond: Scalars["Float"]["output"];
  /** @deprecated No longer supported */
  blocksGetBlocksPerYear: Scalars["Float"]["output"];
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  extraReward?: Maybe<ExtraReward>;
  extraRewards: Array<ExtraReward>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  factoryPoolDatas: Array<FactoryPoolData>;
  fundedReward?: Maybe<FundedReward>;
  fundedRewards: Array<FundedReward>;
  fxoracle?: Maybe<FxOracle>;
  fxoracles: Array<FxOracle>;
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
  lbpPriceChart?: Maybe<Array<LbpPriceChartData>>;
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
  /** Get the LoopS data */
  loopsGetData: GqlLoopsData;
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
  poolAccountRewards?: Maybe<PoolAccountRewards>;
  poolAccountRewards_collection: Array<PoolAccountRewards>;
  poolAccounts: Array<PoolAccount>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  /** Getting swap, add and remove events with paging */
  poolEvents: Array<GqlPoolEvent>;
  /**
   * Returns all pools for a given filter, specific for aggregators
   * @deprecated Use aggregatorPools instead
   */
  poolGetAggregatorPools: Array<GqlPoolAggregator>;
  /** Returns the list of featured pools for chains */
  poolGetFeaturedPools: Array<GqlPoolFeaturedPool>;
  /** Returns one pool. If a user address is provided, the user balances for the given pool will also be returned. */
  poolGetPool: GqlPoolBase;
  /** Returns all pools for a given filter */
  poolGetPools: Array<GqlPoolMinimal>;
  /** Returns the number of pools for a given filter. */
  poolGetPoolsCount: Scalars["Int"]["output"];
  /** Gets all the snapshots for a given pool on a chain for a certain range */
  poolGetSnapshots: Array<GqlPoolSnapshot>;
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
  queuedReward?: Maybe<QueuedReward>;
  queuedRewards: Array<QueuedReward>;
  rewardData?: Maybe<RewardData>;
  rewardDatas: Array<RewardData>;
  /** Get the staking data and status for sFTMx */
  sftmxGetStakingData: GqlSftmxStakingData;
  /** Get snapshots for sftmx staking for a specific range */
  sftmxGetStakingSnapshots: Array<GqlSftmxStakingSnapshot>;
  /** Retrieve the withdrawalrequests from a user */
  sftmxGetWithdrawalRequests: Array<GqlSftmxWithdrawalRequests>;
  /** Get swap quote from the SOR v2 */
  sorGetSwapPaths: GqlSorGetSwapPaths;
  /** Get the staking data and status for stS */
  stsGetGqlStakedSonicData: GqlStakedSonicData;
  /** Get snapshots for sftmx staking for a specific range */
  stsGetStakedSonicSnapshots: Array<GqlStakedSonicSnapshot>;
  swap?: Maybe<Swap>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  /**
   * Returns the candlestick chart data for a token for a given range.
   * @deprecated Use tokenGetHistoricalPrices instead
   */
  tokenGetCandlestickChartData: Array<GqlTokenCandlestickChartDataItem>;
  /** Returns all current prices for allowed tokens for a given chain or chains */
  tokenGetCurrentPrices: Array<GqlTokenPrice>;
  /** Returns the historical prices for a given set of tokens for a given chain and range */
  tokenGetHistoricalPrices: Array<GqlHistoricalTokenPrice>;
  /**
   * DEPRECATED: Returns pricing data for a given token for a given range
   * @deprecated Use tokenGetHistoricalPrices instead
   */
  tokenGetPriceChartData: Array<GqlTokenPriceChartDataItem>;
  /**
   * Returns the price of either BAL or BEETS depending on chain
   * @deprecated Use tokenGetTokensDynamicData instead
   */
  tokenGetProtocolTokenPrice: Scalars["AmountHumanReadable"]["output"];
  /** Returns the price of a token priced in another token for a given range. */
  tokenGetRelativePriceChartData: Array<GqlTokenPriceChartDataItem>;
  /**
   * Returns meta data for a given token such as description, website, etc.
   * @deprecated Use tokenGetTokens instead
   */
  tokenGetTokenData?: Maybe<GqlTokenData>;
  /** Returns dynamic data of a token such as price, market cap, etc. */
  tokenGetTokenDynamicData?: Maybe<GqlTokenDynamicData>;
  /** Returns all allowed tokens for a given chain or chains */
  tokenGetTokens: Array<GqlToken>;
  /**
   * Returns meta data for a given set of tokens such as description, website, etc.
   * @deprecated Use tokenGetTokens instead
   */
  tokenGetTokensData: Array<GqlTokenData>;
  /** Returns dynamic data of a set of tokens such as price, market cap, etc. */
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
  /**
   * Will de deprecated in favor of poolGetEvents
   * @deprecated Use poolEvents instead
   */
  userGetPoolJoinExits: Array<GqlPoolJoinExit>;
  userGetStaking: Array<GqlPoolStaking>;
  /**
   * Will de deprecated in favor of poolGetEvents
   * @deprecated Use poolEvents instead
   */
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
  veBalGetUser: GqlVeBalUserData;
  veBalGetUserBalance: Scalars["AmountHumanReadable"]["output"];
  veBalGetUserBalances: Array<GqlVeBalBalance>;
  /** Returns all pools with veBAL gauges that can be voted on. */
  veBalGetVotingList: Array<GqlVotingPool>;
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

export interface QueryAggregatorPoolsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GqlPoolOrderBy>;
  orderDirection?: InputMaybe<GqlPoolOrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlAggregatorPoolFilter>;
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
  chain?: InputMaybe<GqlChain>;
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

export interface QueryExtraRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryExtraRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ExtraReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ExtraReward_Filter>;
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

export interface QueryFundedRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryFundedRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FundedReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundedReward_Filter>;
}

export interface QueryFxoracleArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryFxoraclesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FxOracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FxOracle_Filter>;
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

export interface QueryLbpPriceChartArgs {
  chain: GqlChain;
  dataPoints?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["String"]["input"];
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
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolAccountRewards_CollectionArgs {
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

export interface QueryPoolEventsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlPoolEventsFilter>;
}

export interface QueryPoolGetAggregatorPoolsArgs {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GqlPoolOrderBy>;
  orderDirection?: InputMaybe<GqlPoolOrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GqlPoolFilter>;
}

export interface QueryPoolGetFeaturedPoolsArgs {
  chains: Array<GqlChain>;
}

export interface QueryPoolGetPoolArgs {
  chain?: InputMaybe<GqlChain>;
  id: Scalars["String"]["input"];
  userAddress?: InputMaybe<Scalars["String"]["input"]>;
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
  chain?: InputMaybe<GqlChain>;
  id: Scalars["String"]["input"];
  range: GqlPoolSnapshotDataRange;
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
  chains?: InputMaybe<Array<GqlChain>>;
}

export interface QueryProtocolMetricsChainArgs {
  chain?: InputMaybe<GqlChain>;
}

export interface QueryQueuedRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryQueuedRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<QueuedReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QueuedReward_Filter>;
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

export interface QuerySftmxGetStakingSnapshotsArgs {
  range: GqlSftmxStakingSnapshotDataRange;
}

export interface QuerySftmxGetWithdrawalRequestsArgs {
  user: Scalars["String"]["input"];
}

export interface QuerySorGetSwapPathsArgs {
  chain: GqlChain;
  considerPoolsWithHooks?: InputMaybe<Scalars["Boolean"]["input"]>;
  poolIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  swapAmount: Scalars["AmountHumanReadable"]["input"];
  swapType: GqlSorSwapType;
  tokenIn: Scalars["String"]["input"];
  tokenOut: Scalars["String"]["input"];
  useProtocolVersion?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryStsGetStakedSonicSnapshotsArgs {
  range: GqlStakedSonicSnapshotDataRange;
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
  chain?: InputMaybe<GqlChain>;
  range: GqlTokenChartDataRange;
}

export interface QueryTokenGetCurrentPricesArgs {
  chains?: InputMaybe<Array<GqlChain>>;
}

export interface QueryTokenGetHistoricalPricesArgs {
  addresses: Array<Scalars["String"]["input"]>;
  chain: GqlChain;
  range: GqlTokenChartDataRange;
}

export interface QueryTokenGetPriceChartDataArgs {
  address: Scalars["String"]["input"];
  chain?: InputMaybe<GqlChain>;
  range: GqlTokenChartDataRange;
}

export interface QueryTokenGetProtocolTokenPriceArgs {
  chain?: InputMaybe<GqlChain>;
}

export interface QueryTokenGetRelativePriceChartDataArgs {
  chain?: InputMaybe<GqlChain>;
  range: GqlTokenChartDataRange;
  tokenIn: Scalars["String"]["input"];
  tokenOut: Scalars["String"]["input"];
}

export interface QueryTokenGetTokenDataArgs {
  address: Scalars["String"]["input"];
  chain?: InputMaybe<GqlChain>;
}

export interface QueryTokenGetTokenDynamicDataArgs {
  address: Scalars["String"]["input"];
  chain?: InputMaybe<GqlChain>;
}

export interface QueryTokenGetTokensArgs {
  chains?: InputMaybe<Array<GqlChain>>;
  where?: InputMaybe<GqlTokenFilter>;
}

export interface QueryTokenGetTokensDataArgs {
  addresses: Array<Scalars["String"]["input"]>;
}

export interface QueryTokenGetTokensDynamicDataArgs {
  addresses: Array<Scalars["String"]["input"]>;
  chain?: InputMaybe<GqlChain>;
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

export interface QueryUserGetPoolBalancesArgs {
  address?: InputMaybe<Scalars["String"]["input"]>;
  chains?: InputMaybe<Array<GqlChain>>;
}

export interface QueryUserGetPoolJoinExitsArgs {
  address?: InputMaybe<Scalars["String"]["input"]>;
  chain?: InputMaybe<GqlChain>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  poolId: Scalars["String"]["input"];
  skip?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUserGetStakingArgs {
  address?: InputMaybe<Scalars["String"]["input"]>;
  chains?: InputMaybe<Array<GqlChain>>;
}

export interface QueryUserGetSwapsArgs {
  address?: InputMaybe<Scalars["String"]["input"]>;
  chain?: InputMaybe<GqlChain>;
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

export interface QueryVeBalGetTotalSupplyArgs {
  chain?: InputMaybe<GqlChain>;
}

export interface QueryVeBalGetUserArgs {
  address: Scalars["String"]["input"];
  chain?: InputMaybe<GqlChain>;
}

export interface QueryVeBalGetUserBalanceArgs {
  address?: InputMaybe<Scalars["String"]["input"]>;
  chain?: InputMaybe<GqlChain>;
}

export interface QueryVeBalGetUserBalancesArgs {
  address: Scalars["String"]["input"];
  chains?: InputMaybe<Array<GqlChain>>;
}

export interface QueryVeBalGetVotingListArgs {
  includeKilled?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export interface QueuedReward {
  __typename?: "QueuedReward";
  amount: Scalars["BigInt"]["output"];
  epoch: Scalars["BigInt"]["output"];
  extraReward: ExtraReward;
  /** pool.id + token.id + epoch + txHash */
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  token: Token;
}

export interface QueuedReward_Filter {
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
  and?: InputMaybe<Array<InputMaybe<QueuedReward_Filter>>>;
  epoch?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  epoch_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  epoch_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  extraReward?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_?: InputMaybe<ExtraReward_Filter>;
  extraReward_contains?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_gt?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_gte?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  extraReward_lt?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_lte?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  extraReward_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  extraReward_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<QueuedReward_Filter>>>;
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

export enum QueuedReward_OrderBy {
  Amount = "amount",
  Epoch = "epoch",
  ExtraReward = "extraReward",
  ExtraRewardAmount = "extraReward__amount",
  ExtraRewardId = "extraReward__id",
  Id = "id",
  Pool = "pool",
  PoolId = "pool__id",
  PoolIsFactoryPool = "pool__isFactoryPool",
  PoolRewardPool = "pool__rewardPool",
  PoolStartTime = "pool__startTime",
  PoolTotalStaked = "pool__totalStaked",
  PoolTotalSupply = "pool__totalSupply",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
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
  and?: InputMaybe<Array<InputMaybe<RewardData_Filter>>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]["input"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<RewardData_Filter>>>;
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
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
}

/** StableSurge hook specific params. Percentage format is 0.01 -> 0.01%. */
export interface StableSurgeHookParams {
  __typename?: "StableSurgeHookParams";
  maxSurgeFeePercentage?: Maybe<Scalars["String"]["output"]>;
  surgeThresholdPercentage?: Maybe<Scalars["String"]["output"]>;
}

export interface Swap {
  __typename?: "Swap";
  block?: Maybe<Scalars["BigInt"]["output"]>;
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
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
  Block = "block",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  PoolIdSwapEnabledCurationSignal = "poolId__swapEnabledCurationSignal",
  PoolIdSwapEnabledInternal = "poolId__swapEnabledInternal",
  PoolIdSwapFee = "poolId__swapFee",
  PoolIdSwapsCount = "poolId__swapsCount",
  PoolIdSymbol = "poolId__symbol",
  PoolIdTauAlphaX = "poolId__tauAlphaX",
  PoolIdTauAlphaY = "poolId__tauAlphaY",
  PoolIdTauBetaX = "poolId__tauBetaX",
  PoolIdTauBetaY = "poolId__tauBetaY",
  PoolIdTotalAumFeeCollectedInBpt = "poolId__totalAumFeeCollectedInBPT",
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
  PoolIdTotalLiquiditySansBpt = "poolId__totalLiquiditySansBPT",
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
  PoolSwapEnabledCurationSignal = "pool__swapEnabledCurationSignal",
  PoolSwapEnabledInternal = "pool__swapEnabledInternal",
  PoolSwapFee = "pool__swapFee",
  PoolSwapsCount = "pool__swapsCount",
  PoolSymbol = "pool__symbol",
  PoolTauAlphaX = "pool__tauAlphaX",
  PoolTauAlphaY = "pool__tauAlphaY",
  PoolTauBetaX = "pool__tauBetaX",
  PoolTauBetaY = "pool__tauBetaY",
  PoolTotalAumFeeCollectedInBpt = "pool__totalAumFeeCollectedInBPT",
  PoolTotalLiquidity = "pool__totalLiquidity",
  PoolTotalLiquiditySansBpt = "pool__totalLiquiditySansBPT",
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
  and?: InputMaybe<Array<InputMaybe<VaultAccountReward_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<VaultAccountReward_Filter>>>;
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
  RewardTokenDecimals = "rewardToken__decimals",
  RewardTokenId = "rewardToken__id",
  RewardTokenName = "rewardToken__name",
  RewardTokenSymbol = "rewardToken__symbol",
  Rewards = "rewards",
  VaultAccount = "vaultAccount",
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
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
  and?: InputMaybe<Array<InputMaybe<VaultAccount_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<VaultAccount_Filter>>>;
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
  AccountId = "account__id",
  DepositTransactions = "depositTransactions",
  HarvestTransactions = "harvestTransactions",
  Id = "id",
  RewardPaidTransactions = "rewardPaidTransactions",
  Rewards = "rewards",
  Shares = "shares",
  Vault = "vault",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
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
  and?: InputMaybe<Array<InputMaybe<VaultDepositTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<VaultDepositTransaction_Filter>>>;
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
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
}

export interface VaultHarvestTransaction extends VaultTransaction {
  __typename?: "VaultHarvestTransaction";
  harvested: Scalars["BigInt"]["output"];
  hash: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  sender: Scalars["Bytes"]["output"];
  timestamp: Scalars["Int"]["output"];
  token?: Maybe<Token>;
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultHarvestTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultHarvestTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<VaultHarvestTransaction_Filter>>>;
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
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  Vault = "vault",
  VaultAccount = "vaultAccount",
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
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
  and?: InputMaybe<Array<InputMaybe<VaultRewardData_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<VaultRewardData_Filter>>>;
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
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  Vault = "vault",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
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
  and?: InputMaybe<Array<InputMaybe<VaultRewardPaidTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<VaultRewardPaidTransaction_Filter>>>;
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
  RewardDataId = "rewardData__id",
  RewardDataLastUpdateTime = "rewardData__lastUpdateTime",
  RewardDataPeriodFinish = "rewardData__periodFinish",
  RewardDataQueuedRewards = "rewardData__queuedRewards",
  RewardDataRewardPerTokenStored = "rewardData__rewardPerTokenStored",
  RewardDataRewardRate = "rewardData__rewardRate",
  Timestamp = "timestamp",
  Vault = "vault",
  VaultAccount = "vaultAccount",
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
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
  and?: InputMaybe<Array<InputMaybe<VaultTransaction_Filter>>>;
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<VaultTransaction_Filter>>>;
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
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
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
  and?: InputMaybe<Array<InputMaybe<VaultWithdrawTransaction_Filter>>>;
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
  hash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  hash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  hash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  or?: InputMaybe<Array<InputMaybe<VaultWithdrawTransaction_Filter>>>;
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
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
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
  VaultAccountId = "vaultAccount__id",
  VaultAccountShares = "vaultAccount__shares",
  VaultDecimals = "vault__decimals",
  VaultId = "vault__id",
  VaultName = "vault__name",
  VaultStrategy = "vault__strategy",
  VaultSymbol = "vault__symbol",
  VaultTotalSupply = "vault__totalSupply",
  VaultTotalUnderlying = "vault__totalUnderlying",
}

export interface Vault_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<VaultAccount_Filter>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  rewardData_?: InputMaybe<VaultRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<VaultRewardPaidTransaction_Filter>;
  strategy?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  strategy_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  strategy_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
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
  AssetDecimals = "asset__decimals",
  AssetId = "asset__id",
  AssetName = "asset__name",
  AssetSymbol = "asset__symbol",
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
  UnderlyingDecimals = "underlying__decimals",
  UnderlyingId = "underlying__id",
  UnderlyingName = "underlying__name",
  UnderlyingSymbol = "underlying__symbol",
  WithdrawTransactions = "withdrawTransactions",
}

export interface _Block_ {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]["output"]>;
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
    factoryPoolData?: {
      __typename?: "FactoryPoolData";
      balancerPoolId?: any | null;
      isShutdown: boolean;
    } | null;
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
export const BalancerChartTokenPriceFragmentDoc = gql`
  fragment BalancerChartTokenPrice on TokenPrice {
    id
    timestamp
    price
    amount
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
      factoryPoolData {
        balancerPoolId
        isShutdown
      }
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
      first: 1000
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
      "GqlPoolComposableStable",
      "GqlPoolElement",
      "GqlPoolFx",
      "GqlPoolGyro",
      "GqlPoolLiquidityBootstrapping",
      "GqlPoolLiquidityBootstrappingV3",
      "GqlPoolMetaStable",
      "GqlPoolQuantAmmWeighted",
      "GqlPoolReClamm",
      "GqlPoolStable",
      "GqlPoolWeighted",
    ],
    GqlPoolEvent: [
      "GqlPoolAddRemoveEventV3",
      "GqlPoolSwapEventCowAmm",
      "GqlPoolSwapEventV3",
    ],
    GqlPoolFeaturedPoolGroupItem: [
      "GqlFeaturePoolGroupItemExternalLink",
      "GqlPoolMinimal",
    ],
    GqlPoolNestedUnion: ["GqlPoolComposableStableNested"],
    GqlPoolTokenBase: ["GqlPoolToken", "GqlPoolTokenComposableStable"],
    GqlPoolTokenComposableStableNestedUnion: ["GqlPoolToken"],
    GqlPoolTokenUnion: ["GqlPoolToken", "GqlPoolTokenComposableStable"],
    GqlPoolUnion: [
      "GqlPoolComposableStable",
      "GqlPoolElement",
      "GqlPoolFx",
      "GqlPoolGyro",
      "GqlPoolLiquidityBootstrapping",
      "GqlPoolLiquidityBootstrappingV3",
      "GqlPoolMetaStable",
      "GqlPoolQuantAmmWeighted",
      "GqlPoolReClamm",
      "GqlPoolStable",
      "GqlPoolWeighted",
    ],
    HookParams: [
      "ExitFeeHookParams",
      "FeeTakingHookParams",
      "MevTaxHookParams",
      "StableSurgeHookParams",
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
