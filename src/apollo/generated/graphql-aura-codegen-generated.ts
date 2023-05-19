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
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
}

export interface Account {
  __typename?: "Account";
  auraBalMintTransactions: Array<AuraBalMintTransaction>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  /**
   * Address
   *
   */
  id: Scalars["ID"];
  merkleDropClaims: Array<MerkleDropClaim>;
  poolAccounts: Array<PoolAccount>;
  vaultAccounts: Array<VaultAccount>;
}

export interface AccountAuraBalMintTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface AccountMerkleDropClaimsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface AccountPoolAccountsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface AccountVaultAccountsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface Account_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraBalMintTransactions_?: InputMaybe<AuraBalMintTransaction_Filter>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  endAmp: Scalars["BigInt"];
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  poolId: Pool;
  scheduledTimestamp: Scalars["Int"];
  startAmp: Scalars["BigInt"];
  startTimestamp: Scalars["BigInt"];
}

export interface AmpUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  endAmp?: InputMaybe<Scalars["BigInt"]>;
  endAmp_gt?: InputMaybe<Scalars["BigInt"]>;
  endAmp_gte?: InputMaybe<Scalars["BigInt"]>;
  endAmp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endAmp_lt?: InputMaybe<Scalars["BigInt"]>;
  endAmp_lte?: InputMaybe<Scalars["BigInt"]>;
  endAmp_not?: InputMaybe<Scalars["BigInt"]>;
  endAmp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  startAmp?: InputMaybe<Scalars["BigInt"]>;
  startAmp_gt?: InputMaybe<Scalars["BigInt"]>;
  startAmp_gte?: InputMaybe<Scalars["BigInt"]>;
  startAmp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startAmp_lt?: InputMaybe<Scalars["BigInt"]>;
  startAmp_lte?: InputMaybe<Scalars["BigInt"]>;
  startAmp_not?: InputMaybe<Scalars["BigInt"]>;
  startAmp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  amount: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  timestamp: Scalars["Int"];
}

export interface AuraBalMintTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  address: Scalars["Bytes"];
  delegateChangedTransactions: Array<LockerDelegateChangedTransaction>;
  /**
   * Singleton: "AuraLocker"
   *
   */
  id: Scalars["ID"];
  isShutdown: Scalars["Boolean"];
  kickRewardTransactions: Array<LockerKickRewardTransaction>;
  lockedSupply: Scalars["BigInt"];
  rewardData: Array<AuraLockerRewardData>;
  rewardPaidTransactions: Array<LockerRewardPaidTransaction>;
  stakedTransactions: Array<LockerStakedTransaction>;
  totalSupply: Scalars["BigInt"];
  withdrawnTransactions: Array<LockerWithdrawnTransaction>;
}

export interface AuraLockerAccountsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface AuraLockerDelegateChangedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface AuraLockerKickRewardTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface AuraLockerRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface AuraLockerRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface AuraLockerStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface AuraLockerWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface AuraLockerAccount {
  __typename?: "AuraLockerAccount";
  account: Account;
  auraLocker: AuraLocker;
  balance: Scalars["BigInt"];
  /**
   * AuraLocker.balances(account)
   *
   */
  balanceLocked: Scalars["BigInt"];
  balanceNextUnlockIndex: Scalars["Int"];
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
  delegateUpdatedAt?: Maybe<Scalars["Int"]>;
  /**
   * Accounts delegating to this account
   *
   */
  delegators: Array<AuraLockerAccount>;
  /**
   * {Account.id}
   *
   */
  id: Scalars["ID"];
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
  userLocksLength: Scalars["Int"];
  withdrawnTransactions: Array<LockerWithdrawnTransaction>;
}

export interface AuraLockerAccountDelegateChangedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface AuraLockerAccountDelegatorsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface AuraLockerAccountKickRewardTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface AuraLockerAccountRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface AuraLockerAccountStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface AuraLockerAccountUserDataArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface AuraLockerAccountUserLocksArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface AuraLockerAccountWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface AuraLockerAccount_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  balance?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_gt?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_gte?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balanceLocked_lt?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_lte?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_not?: InputMaybe<Scalars["BigInt"]>;
  balanceLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balanceNextUnlockIndex?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_gt?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_gte?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  balanceNextUnlockIndex_lt?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_lte?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_not?: InputMaybe<Scalars["Int"]>;
  balanceNextUnlockIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  balance_gt?: InputMaybe<Scalars["BigInt"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  delegate?: InputMaybe<Scalars["String"]>;
  delegateChangedTransactions_?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
  delegateUpdatedAt?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_gt?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_gte?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_in?: InputMaybe<Array<Scalars["Int"]>>;
  delegateUpdatedAt_lt?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_lte?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_not?: InputMaybe<Scalars["Int"]>;
  delegateUpdatedAt_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  delegate_?: InputMaybe<AuraLockerAccount_Filter>;
  delegate_contains?: InputMaybe<Scalars["String"]>;
  delegate_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegate_ends_with?: InputMaybe<Scalars["String"]>;
  delegate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_gt?: InputMaybe<Scalars["String"]>;
  delegate_gte?: InputMaybe<Scalars["String"]>;
  delegate_in?: InputMaybe<Array<Scalars["String"]>>;
  delegate_lt?: InputMaybe<Scalars["String"]>;
  delegate_lte?: InputMaybe<Scalars["String"]>;
  delegate_not?: InputMaybe<Scalars["String"]>;
  delegate_not_contains?: InputMaybe<Scalars["String"]>;
  delegate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  delegate_not_ends_with?: InputMaybe<Scalars["String"]>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  delegate_not_starts_with?: InputMaybe<Scalars["String"]>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegate_starts_with?: InputMaybe<Scalars["String"]>;
  delegate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  delegators_?: InputMaybe<AuraLockerAccount_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  kickRewardTransactions_?: InputMaybe<LockerKickRewardTransaction_Filter>;
  rewardPaidTransactions_?: InputMaybe<LockerRewardPaidTransaction_Filter>;
  stakedTransactions_?: InputMaybe<LockerStakedTransaction_Filter>;
  userData_?: InputMaybe<AuraLockerUserData_Filter>;
  userLocksLength?: InputMaybe<Scalars["Int"]>;
  userLocksLength_gt?: InputMaybe<Scalars["Int"]>;
  userLocksLength_gte?: InputMaybe<Scalars["Int"]>;
  userLocksLength_in?: InputMaybe<Array<Scalars["Int"]>>;
  userLocksLength_lt?: InputMaybe<Scalars["Int"]>;
  userLocksLength_lte?: InputMaybe<Scalars["Int"]>;
  userLocksLength_not?: InputMaybe<Scalars["Int"]>;
  userLocksLength_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  id: Scalars["ID"];
  lastUpdateTime: Scalars["Int"];
  periodFinish: Scalars["Int"];
  rewardPerTokenStored: Scalars["BigInt"];
  rewardRate: Scalars["BigInt"];
  token: Token;
}

export interface AuraLockerRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
  rewardPerTokenPaid: Scalars["BigInt"];
  rewards: Scalars["BigInt"];
  token: Token;
}

export interface AuraLockerUserData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewards?: InputMaybe<Scalars["BigInt"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  amount: Scalars["BigInt"];
  auraLockerAccount: AuraLockerAccount;
  /**
   * {AuraLockerAccount.id}.{index}
   *
   */
  id: Scalars["ID"];
  unlockTime: Scalars["Int"];
}

export interface AuraLockerUserLock_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  unlockTime?: InputMaybe<Scalars["Int"]>;
  unlockTime_gt?: InputMaybe<Scalars["Int"]>;
  unlockTime_gte?: InputMaybe<Scalars["Int"]>;
  unlockTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  unlockTime_lt?: InputMaybe<Scalars["Int"]>;
  unlockTime_lte?: InputMaybe<Scalars["Int"]>;
  unlockTime_not?: InputMaybe<Scalars["Int"]>;
  unlockTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegateChangedTransactions_?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isShutdown?: InputMaybe<Scalars["Boolean"]>;
  isShutdown_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isShutdown_not?: InputMaybe<Scalars["Boolean"]>;
  isShutdown_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  kickRewardTransactions_?: InputMaybe<LockerKickRewardTransaction_Filter>;
  lockedSupply?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lockedSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_not?: InputMaybe<Scalars["BigInt"]>;
  lockedSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardData_?: InputMaybe<AuraLockerRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<LockerRewardPaidTransaction_Filter>;
  stakedTransactions_?: InputMaybe<LockerStakedTransaction_Filter>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  id: Scalars["ID"];
  poolCount: Scalars["Int"];
  pools?: Maybe<Array<Pool>>;
  totalLiquidity: Scalars["BigDecimal"];
  totalSwapCount: Scalars["BigInt"];
  totalSwapFee: Scalars["BigDecimal"];
  totalSwapVolume: Scalars["BigDecimal"];
}

export interface BalancerPoolsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Pool_Filter>;
}

export interface BalancerSnapshot {
  __typename?: "BalancerSnapshot";
  id: Scalars["ID"];
  poolCount: Scalars["Int"];
  timestamp: Scalars["Int"];
  totalLiquidity: Scalars["BigDecimal"];
  totalSwapCount: Scalars["BigInt"];
  totalSwapFee: Scalars["BigDecimal"];
  totalSwapVolume: Scalars["BigDecimal"];
  vault: Balancer;
}

export interface BalancerSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  poolCount?: InputMaybe<Scalars["Int"]>;
  poolCount_gt?: InputMaybe<Scalars["Int"]>;
  poolCount_gte?: InputMaybe<Scalars["Int"]>;
  poolCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  poolCount_lt?: InputMaybe<Scalars["Int"]>;
  poolCount_lte?: InputMaybe<Scalars["Int"]>;
  poolCount_not?: InputMaybe<Scalars["Int"]>;
  poolCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Balancer_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum BalancerSnapshot_OrderBy {
  Id = "id",
  PoolCount = "poolCount",
  Timestamp = "timestamp",
  TotalLiquidity = "totalLiquidity",
  TotalSwapCount = "totalSwapCount",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
  Vault = "vault",
  VaultId = "vault__id",
  VaultPoolCount = "vault__poolCount",
  VaultTotalLiquidity = "vault__totalLiquidity",
  VaultTotalSwapCount = "vault__totalSwapCount",
  VaultTotalSwapFee = "vault__totalSwapFee",
  VaultTotalSwapVolume = "vault__totalSwapVolume",
}

export interface Balancer_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  poolCount?: InputMaybe<Scalars["Int"]>;
  poolCount_gt?: InputMaybe<Scalars["Int"]>;
  poolCount_gte?: InputMaybe<Scalars["Int"]>;
  poolCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  poolCount_lt?: InputMaybe<Scalars["Int"]>;
  poolCount_lte?: InputMaybe<Scalars["Int"]>;
  poolCount_not?: InputMaybe<Scalars["Int"]>;
  poolCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  pools_?: InputMaybe<Pool_Filter>;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum Balancer_OrderBy {
  Id = "id",
  PoolCount = "poolCount",
  Pools = "pools",
  TotalLiquidity = "totalLiquidity",
  TotalSwapCount = "totalSwapCount",
  TotalSwapFee = "totalSwapFee",
  TotalSwapVolume = "totalSwapVolume",
}

export interface Block {
  __typename?: "Block";
  author?: Maybe<Scalars["String"]>;
  difficulty?: Maybe<Scalars["BigInt"]>;
  gasLimit?: Maybe<Scalars["BigInt"]>;
  gasUsed?: Maybe<Scalars["BigInt"]>;
  id: Scalars["ID"];
  number: Scalars["BigInt"];
  parentHash?: Maybe<Scalars["String"]>;
  receiptsRoot?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["BigInt"]>;
  stateRoot?: Maybe<Scalars["String"]>;
  timestamp: Scalars["BigInt"];
  totalDifficulty?: Maybe<Scalars["BigInt"]>;
  transactionsRoot?: Maybe<Scalars["String"]>;
  unclesHash?: Maybe<Scalars["String"]>;
}

export interface BlockChangedFilter {
  number_gte: Scalars["Int"];
}

export interface Block_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  author?: InputMaybe<Scalars["String"]>;
  author_contains?: InputMaybe<Scalars["String"]>;
  author_contains_nocase?: InputMaybe<Scalars["String"]>;
  author_ends_with?: InputMaybe<Scalars["String"]>;
  author_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  author_gt?: InputMaybe<Scalars["String"]>;
  author_gte?: InputMaybe<Scalars["String"]>;
  author_in?: InputMaybe<Array<Scalars["String"]>>;
  author_lt?: InputMaybe<Scalars["String"]>;
  author_lte?: InputMaybe<Scalars["String"]>;
  author_not?: InputMaybe<Scalars["String"]>;
  author_not_contains?: InputMaybe<Scalars["String"]>;
  author_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  author_not_ends_with?: InputMaybe<Scalars["String"]>;
  author_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  author_not_in?: InputMaybe<Array<Scalars["String"]>>;
  author_not_starts_with?: InputMaybe<Scalars["String"]>;
  author_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  author_starts_with?: InputMaybe<Scalars["String"]>;
  author_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["BigInt"]>;
  difficulty_gt?: InputMaybe<Scalars["BigInt"]>;
  difficulty_gte?: InputMaybe<Scalars["BigInt"]>;
  difficulty_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  difficulty_lt?: InputMaybe<Scalars["BigInt"]>;
  difficulty_lte?: InputMaybe<Scalars["BigInt"]>;
  difficulty_not?: InputMaybe<Scalars["BigInt"]>;
  difficulty_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  number?: InputMaybe<Scalars["BigInt"]>;
  number_gt?: InputMaybe<Scalars["BigInt"]>;
  number_gte?: InputMaybe<Scalars["BigInt"]>;
  number_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  number_lt?: InputMaybe<Scalars["BigInt"]>;
  number_lte?: InputMaybe<Scalars["BigInt"]>;
  number_not?: InputMaybe<Scalars["BigInt"]>;
  number_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  parentHash?: InputMaybe<Scalars["String"]>;
  parentHash_contains?: InputMaybe<Scalars["String"]>;
  parentHash_contains_nocase?: InputMaybe<Scalars["String"]>;
  parentHash_ends_with?: InputMaybe<Scalars["String"]>;
  parentHash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  parentHash_gt?: InputMaybe<Scalars["String"]>;
  parentHash_gte?: InputMaybe<Scalars["String"]>;
  parentHash_in?: InputMaybe<Array<Scalars["String"]>>;
  parentHash_lt?: InputMaybe<Scalars["String"]>;
  parentHash_lte?: InputMaybe<Scalars["String"]>;
  parentHash_not?: InputMaybe<Scalars["String"]>;
  parentHash_not_contains?: InputMaybe<Scalars["String"]>;
  parentHash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  parentHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  parentHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  parentHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  parentHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  parentHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  parentHash_starts_with?: InputMaybe<Scalars["String"]>;
  parentHash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot?: InputMaybe<Scalars["String"]>;
  receiptsRoot_contains?: InputMaybe<Scalars["String"]>;
  receiptsRoot_contains_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot_ends_with?: InputMaybe<Scalars["String"]>;
  receiptsRoot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot_gt?: InputMaybe<Scalars["String"]>;
  receiptsRoot_gte?: InputMaybe<Scalars["String"]>;
  receiptsRoot_in?: InputMaybe<Array<Scalars["String"]>>;
  receiptsRoot_lt?: InputMaybe<Scalars["String"]>;
  receiptsRoot_lte?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_contains?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_ends_with?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  receiptsRoot_not_starts_with?: InputMaybe<Scalars["String"]>;
  receiptsRoot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  receiptsRoot_starts_with?: InputMaybe<Scalars["String"]>;
  receiptsRoot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["BigInt"]>;
  size_gt?: InputMaybe<Scalars["BigInt"]>;
  size_gte?: InputMaybe<Scalars["BigInt"]>;
  size_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  size_lt?: InputMaybe<Scalars["BigInt"]>;
  size_lte?: InputMaybe<Scalars["BigInt"]>;
  size_not?: InputMaybe<Scalars["BigInt"]>;
  size_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stateRoot?: InputMaybe<Scalars["String"]>;
  stateRoot_contains?: InputMaybe<Scalars["String"]>;
  stateRoot_contains_nocase?: InputMaybe<Scalars["String"]>;
  stateRoot_ends_with?: InputMaybe<Scalars["String"]>;
  stateRoot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  stateRoot_gt?: InputMaybe<Scalars["String"]>;
  stateRoot_gte?: InputMaybe<Scalars["String"]>;
  stateRoot_in?: InputMaybe<Array<Scalars["String"]>>;
  stateRoot_lt?: InputMaybe<Scalars["String"]>;
  stateRoot_lte?: InputMaybe<Scalars["String"]>;
  stateRoot_not?: InputMaybe<Scalars["String"]>;
  stateRoot_not_contains?: InputMaybe<Scalars["String"]>;
  stateRoot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  stateRoot_not_ends_with?: InputMaybe<Scalars["String"]>;
  stateRoot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  stateRoot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  stateRoot_not_starts_with?: InputMaybe<Scalars["String"]>;
  stateRoot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stateRoot_starts_with?: InputMaybe<Scalars["String"]>;
  stateRoot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalDifficulty?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_gt?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_gte?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalDifficulty_lt?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_lte?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_not?: InputMaybe<Scalars["BigInt"]>;
  totalDifficulty_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionsRoot?: InputMaybe<Scalars["String"]>;
  transactionsRoot_contains?: InputMaybe<Scalars["String"]>;
  transactionsRoot_contains_nocase?: InputMaybe<Scalars["String"]>;
  transactionsRoot_ends_with?: InputMaybe<Scalars["String"]>;
  transactionsRoot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionsRoot_gt?: InputMaybe<Scalars["String"]>;
  transactionsRoot_gte?: InputMaybe<Scalars["String"]>;
  transactionsRoot_in?: InputMaybe<Array<Scalars["String"]>>;
  transactionsRoot_lt?: InputMaybe<Scalars["String"]>;
  transactionsRoot_lte?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_contains?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_ends_with?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transactionsRoot_not_starts_with?: InputMaybe<Scalars["String"]>;
  transactionsRoot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionsRoot_starts_with?: InputMaybe<Scalars["String"]>;
  transactionsRoot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash?: InputMaybe<Scalars["String"]>;
  unclesHash_contains?: InputMaybe<Scalars["String"]>;
  unclesHash_contains_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash_ends_with?: InputMaybe<Scalars["String"]>;
  unclesHash_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash_gt?: InputMaybe<Scalars["String"]>;
  unclesHash_gte?: InputMaybe<Scalars["String"]>;
  unclesHash_in?: InputMaybe<Array<Scalars["String"]>>;
  unclesHash_lt?: InputMaybe<Scalars["String"]>;
  unclesHash_lte?: InputMaybe<Scalars["String"]>;
  unclesHash_not?: InputMaybe<Scalars["String"]>;
  unclesHash_not_contains?: InputMaybe<Scalars["String"]>;
  unclesHash_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  unclesHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash_not_in?: InputMaybe<Array<Scalars["String"]>>;
  unclesHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  unclesHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  unclesHash_starts_with?: InputMaybe<Scalars["String"]>;
  unclesHash_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export interface Block_Height {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
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

export interface FactoryPoolData {
  __typename?: "FactoryPoolData";
  /**
   * Timestamp at which the pool was added
   *
   */
  addedAt?: Maybe<Scalars["Int"]>;
  balancerPoolId?: Maybe<Scalars["Bytes"]>;
  gauge: Scalars["Bytes"];
  /**
   * {pool.id}
   *
   */
  id: Scalars["ID"];
  isShutdown: Scalars["Boolean"];
  pool: Pool;
  stash: Scalars["Bytes"];
}

export interface FactoryPoolData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedAt?: InputMaybe<Scalars["Int"]>;
  addedAt_gt?: InputMaybe<Scalars["Int"]>;
  addedAt_gte?: InputMaybe<Scalars["Int"]>;
  addedAt_in?: InputMaybe<Array<Scalars["Int"]>>;
  addedAt_lt?: InputMaybe<Scalars["Int"]>;
  addedAt_lte?: InputMaybe<Scalars["Int"]>;
  addedAt_not?: InputMaybe<Scalars["Int"]>;
  addedAt_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  balancerPoolId?: InputMaybe<Scalars["Bytes"]>;
  balancerPoolId_contains?: InputMaybe<Scalars["Bytes"]>;
  balancerPoolId_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  balancerPoolId_not?: InputMaybe<Scalars["Bytes"]>;
  balancerPoolId_not_contains?: InputMaybe<Scalars["Bytes"]>;
  balancerPoolId_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  gauge?: InputMaybe<Scalars["Bytes"]>;
  gauge_contains?: InputMaybe<Scalars["Bytes"]>;
  gauge_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  gauge_not?: InputMaybe<Scalars["Bytes"]>;
  gauge_not_contains?: InputMaybe<Scalars["Bytes"]>;
  gauge_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isShutdown?: InputMaybe<Scalars["Boolean"]>;
  isShutdown_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isShutdown_not?: InputMaybe<Scalars["Boolean"]>;
  isShutdown_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  stash?: InputMaybe<Scalars["Bytes"]>;
  stash_contains?: InputMaybe<Scalars["Bytes"]>;
  stash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  stash_not?: InputMaybe<Scalars["Bytes"]>;
  stash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  stash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  balance: Scalars["BigInt"];
  /**
   * Address
   *
   */
  id: Scalars["ID"];
  pool?: Maybe<Pool>;
  totalSupply: Scalars["BigInt"];
  workingSupply: Scalars["BigInt"];
}

export interface Gauge_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars["BigInt"]>;
  balance_gt?: InputMaybe<Scalars["BigInt"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workingSupply?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workingSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_not?: InputMaybe<Scalars["BigInt"]>;
  workingSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  aura: Scalars["Bytes"];
  auraBalTotalSupply: Scalars["BigInt"];
  auraMaxSupply: Scalars["BigInt"];
  auraMinter: Scalars["Bytes"];
  auraMinterMinted: Scalars["BigInt"];
  auraReductionPerCliff: Scalars["BigInt"];
  auraTotalCliffs: Scalars["BigInt"];
  auraTotalSupply: Scalars["BigInt"];
  booster: Scalars["Bytes"];
  earmarkIncentive: Scalars["BigInt"];
  /**
   * Singleton: "global"
   *
   */
  id: Scalars["ID"];
  lockIncentive: Scalars["BigInt"];
  platformFee: Scalars["BigInt"];
  stakerIncentive: Scalars["BigInt"];
  voteDelegate: Scalars["Bytes"];
}

export interface Global_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aura?: InputMaybe<Scalars["Bytes"]>;
  auraBalTotalSupply?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraBalTotalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  auraBalTotalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraMaxSupply?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraMaxSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_not?: InputMaybe<Scalars["BigInt"]>;
  auraMaxSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraMinter?: InputMaybe<Scalars["Bytes"]>;
  auraMinterMinted?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_gt?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_gte?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraMinterMinted_lt?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_lte?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_not?: InputMaybe<Scalars["BigInt"]>;
  auraMinterMinted_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraMinter_contains?: InputMaybe<Scalars["Bytes"]>;
  auraMinter_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  auraMinter_not?: InputMaybe<Scalars["Bytes"]>;
  auraMinter_not_contains?: InputMaybe<Scalars["Bytes"]>;
  auraMinter_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  auraReductionPerCliff?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_gt?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_gte?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraReductionPerCliff_lt?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_lte?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_not?: InputMaybe<Scalars["BigInt"]>;
  auraReductionPerCliff_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraTotalCliffs?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_gt?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_gte?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraTotalCliffs_lt?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_lte?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_not?: InputMaybe<Scalars["BigInt"]>;
  auraTotalCliffs_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraTotalSupply?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraTotalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  auraTotalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  aura_contains?: InputMaybe<Scalars["Bytes"]>;
  aura_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  aura_not?: InputMaybe<Scalars["Bytes"]>;
  aura_not_contains?: InputMaybe<Scalars["Bytes"]>;
  aura_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  booster?: InputMaybe<Scalars["Bytes"]>;
  booster_contains?: InputMaybe<Scalars["Bytes"]>;
  booster_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  booster_not?: InputMaybe<Scalars["Bytes"]>;
  booster_not_contains?: InputMaybe<Scalars["Bytes"]>;
  booster_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  earmarkIncentive?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_gt?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_gte?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  earmarkIncentive_lt?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_lte?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_not?: InputMaybe<Scalars["BigInt"]>;
  earmarkIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lockIncentive?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_gt?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_gte?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lockIncentive_lt?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_lte?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_not?: InputMaybe<Scalars["BigInt"]>;
  lockIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  platformFee?: InputMaybe<Scalars["BigInt"]>;
  platformFee_gt?: InputMaybe<Scalars["BigInt"]>;
  platformFee_gte?: InputMaybe<Scalars["BigInt"]>;
  platformFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  platformFee_lt?: InputMaybe<Scalars["BigInt"]>;
  platformFee_lte?: InputMaybe<Scalars["BigInt"]>;
  platformFee_not?: InputMaybe<Scalars["BigInt"]>;
  platformFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stakerIncentive?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_gt?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_gte?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  stakerIncentive_lt?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_lte?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_not?: InputMaybe<Scalars["BigInt"]>;
  stakerIncentive_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  voteDelegate?: InputMaybe<Scalars["Bytes"]>;
  voteDelegate_contains?: InputMaybe<Scalars["Bytes"]>;
  voteDelegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  voteDelegate_not?: InputMaybe<Scalars["Bytes"]>;
  voteDelegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  voteDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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

export interface GradualWeightUpdate {
  __typename?: "GradualWeightUpdate";
  endTimestamp: Scalars["BigInt"];
  endWeights: Array<Scalars["BigInt"]>;
  id: Scalars["ID"];
  poolId: Pool;
  scheduledTimestamp: Scalars["Int"];
  startTimestamp: Scalars["BigInt"];
  startWeights: Array<Scalars["BigInt"]>;
}

export interface GradualWeightUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  endWeights_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  startWeights_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  amounts: Array<Scalars["BigDecimal"]>;
  id: Scalars["ID"];
  pool: Pool;
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  tx: Scalars["Bytes"];
  type: InvestType;
  user: User;
  valueUSD?: Maybe<Scalars["BigDecimal"]>;
}

export interface JoinExit_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_gt?: InputMaybe<Scalars["Bytes"]>;
  sender_gte?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_lt?: InputMaybe<Scalars["Bytes"]>;
  sender_lte?: InputMaybe<Scalars["Bytes"]>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  tx?: InputMaybe<Scalars["Bytes"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  type?: InputMaybe<InvestType>;
  type_in?: InputMaybe<Array<InvestType>>;
  type_not?: InputMaybe<InvestType>;
  type_not_in?: InputMaybe<Array<InvestType>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  valueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  PoolLambda = "pool__lambda",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementFee = "pool__managementFee",
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
  PoolTotalLiquidity = "pool__totalLiquidity",
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
  asset: Scalars["Bytes"];
  block: Scalars["BigInt"];
  id: Scalars["ID"];
  poolId: Pool;
  price: Scalars["BigDecimal"];
  pricingAsset: Scalars["Bytes"];
}

export interface LatestPrice_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  asset?: InputMaybe<Scalars["Bytes"]>;
  asset_contains?: InputMaybe<Scalars["Bytes"]>;
  asset_gt?: InputMaybe<Scalars["Bytes"]>;
  asset_gte?: InputMaybe<Scalars["Bytes"]>;
  asset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  asset_lt?: InputMaybe<Scalars["Bytes"]>;
  asset_lte?: InputMaybe<Scalars["Bytes"]>;
  asset_not?: InputMaybe<Scalars["Bytes"]>;
  asset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  asset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["BigDecimal"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  fromDelegate: Scalars["Bytes"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  timestamp: Scalars["Int"];
  toDelegate: Scalars["Bytes"];
}

export interface LockerDelegateChangedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  fromDelegate?: InputMaybe<Scalars["Bytes"]>;
  fromDelegate_contains?: InputMaybe<Scalars["Bytes"]>;
  fromDelegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  fromDelegate_not?: InputMaybe<Scalars["Bytes"]>;
  fromDelegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  fromDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  toDelegate?: InputMaybe<Scalars["Bytes"]>;
  toDelegate_contains?: InputMaybe<Scalars["Bytes"]>;
  toDelegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  toDelegate_not?: InputMaybe<Scalars["Bytes"]>;
  toDelegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  toDelegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  kicked: Scalars["Bytes"];
  reward: Scalars["BigInt"];
  timestamp: Scalars["Int"];
}

export interface LockerKickRewardTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  kicked?: InputMaybe<Scalars["Bytes"]>;
  kicked_contains?: InputMaybe<Scalars["Bytes"]>;
  kicked_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  kicked_not?: InputMaybe<Scalars["Bytes"]>;
  kicked_not_contains?: InputMaybe<Scalars["Bytes"]>;
  kicked_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reward?: InputMaybe<Scalars["BigInt"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  reward: Scalars["BigInt"];
  rewardToken: Token;
  timestamp: Scalars["Int"];
}

export interface LockerRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  reward?: InputMaybe<Scalars["BigInt"]>;
  rewardToken?: InputMaybe<Scalars["String"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  lockedAmount: Scalars["BigInt"];
  paidAmount: Scalars["BigInt"];
  timestamp: Scalars["Int"];
}

export interface LockerStakedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lockedAmount?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lockedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  paidAmount?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  paidAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_not?: InputMaybe<Scalars["BigInt"]>;
  paidAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  timestamp: Scalars["Int"];
}

export interface LockerTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  amount: Scalars["BigInt"];
  auraLocker: AuraLocker;
  auraLockerAccount: AuraLockerAccount;
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  relocked: Scalars["Boolean"];
  timestamp: Scalars["Int"];
}

export interface LockerWithdrawnTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auraLocker?: InputMaybe<Scalars["String"]>;
  auraLockerAccount?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_?: InputMaybe<AuraLockerAccount_Filter>;
  auraLockerAccount_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_gte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_lt?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_lte?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars["String"]>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_?: InputMaybe<AuraLocker_Filter>;
  auraLocker_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_gt?: InputMaybe<Scalars["String"]>;
  auraLocker_gte?: InputMaybe<Scalars["String"]>;
  auraLocker_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_lt?: InputMaybe<Scalars["String"]>;
  auraLocker_lte?: InputMaybe<Scalars["String"]>;
  auraLocker_not?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains?: InputMaybe<Scalars["String"]>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with?: InputMaybe<Scalars["String"]>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  relocked?: InputMaybe<Scalars["Boolean"]>;
  relocked_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  relocked_not?: InputMaybe<Scalars["Boolean"]>;
  relocked_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  cashDelta: Scalars["BigDecimal"];
  id: Scalars["ID"];
  managedDelta: Scalars["BigDecimal"];
  poolTokenId: PoolToken;
  timestamp: Scalars["Int"];
  type: OperationType;
}

export interface ManagementOperation_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  cashDelta?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cashDelta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_not?: InputMaybe<Scalars["BigDecimal"]>;
  cashDelta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  managedDelta?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  managedDelta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_not?: InputMaybe<Scalars["BigDecimal"]>;
  managedDelta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  poolTokenId?: InputMaybe<Scalars["String"]>;
  poolTokenId_?: InputMaybe<PoolToken_Filter>;
  poolTokenId_contains?: InputMaybe<Scalars["String"]>;
  poolTokenId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolTokenId_ends_with?: InputMaybe<Scalars["String"]>;
  poolTokenId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolTokenId_gt?: InputMaybe<Scalars["String"]>;
  poolTokenId_gte?: InputMaybe<Scalars["String"]>;
  poolTokenId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolTokenId_lt?: InputMaybe<Scalars["String"]>;
  poolTokenId_lte?: InputMaybe<Scalars["String"]>;
  poolTokenId_not?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_contains?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolTokenId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolTokenId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolTokenId_starts_with?: InputMaybe<Scalars["String"]>;
  poolTokenId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  PoolTokenIdPriceRate = "poolTokenId__priceRate",
  PoolTokenIdSymbol = "poolTokenId__symbol",
  PoolTokenIdWeight = "poolTokenId__weight",
  Timestamp = "timestamp",
  Type = "type",
}

export interface MasterChef {
  __typename?: "MasterChef";
  endBlock: Scalars["BigInt"];
  /**
   * Address
   *
   */
  id: Scalars["ID"];
  poolInfos: Array<MasterChefPoolInfo>;
  rewardPerBlock: Scalars["BigInt"];
  startBlock: Scalars["BigInt"];
  totalAllocPoint: Scalars["BigInt"];
  userInfos: Array<MasterChefUserInfo>;
}

export interface MasterChefPoolInfosArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface MasterChefUserInfosArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface MasterChefPoolInfo {
  __typename?: "MasterChefPoolInfo";
  accCvxPerShare: Scalars["BigInt"];
  allocPoint: Scalars["BigInt"];
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars["ID"];
  lastRewardBlock: Scalars["BigInt"];
  lpSupply: Scalars["BigInt"];
  lpToken: Token;
  masterChef: MasterChef;
  rewarder: Scalars["Bytes"];
  userInfos: Array<MasterChefUserInfo>;
}

export interface MasterChefPoolInfoUserInfosArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface MasterChefPoolInfo_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accCvxPerShare?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_gt?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_gte?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accCvxPerShare_lt?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_lte?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_not?: InputMaybe<Scalars["BigInt"]>;
  accCvxPerShare_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  allocPoint?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_gt?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_gte?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  allocPoint_lt?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_lte?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_not?: InputMaybe<Scalars["BigInt"]>;
  allocPoint_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastRewardBlock?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastRewardBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_not?: InputMaybe<Scalars["BigInt"]>;
  lastRewardBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lpSupply?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lpSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_not?: InputMaybe<Scalars["BigInt"]>;
  lpSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lpToken?: InputMaybe<Scalars["String"]>;
  lpToken_?: InputMaybe<Token_Filter>;
  lpToken_contains?: InputMaybe<Scalars["String"]>;
  lpToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_ends_with?: InputMaybe<Scalars["String"]>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_gt?: InputMaybe<Scalars["String"]>;
  lpToken_gte?: InputMaybe<Scalars["String"]>;
  lpToken_in?: InputMaybe<Array<Scalars["String"]>>;
  lpToken_lt?: InputMaybe<Scalars["String"]>;
  lpToken_lte?: InputMaybe<Scalars["String"]>;
  lpToken_not?: InputMaybe<Scalars["String"]>;
  lpToken_not_contains?: InputMaybe<Scalars["String"]>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lpToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_starts_with?: InputMaybe<Scalars["String"]>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef?: InputMaybe<Scalars["String"]>;
  masterChef_?: InputMaybe<MasterChef_Filter>;
  masterChef_contains?: InputMaybe<Scalars["String"]>;
  masterChef_contains_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_ends_with?: InputMaybe<Scalars["String"]>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_gt?: InputMaybe<Scalars["String"]>;
  masterChef_gte?: InputMaybe<Scalars["String"]>;
  masterChef_in?: InputMaybe<Array<Scalars["String"]>>;
  masterChef_lt?: InputMaybe<Scalars["String"]>;
  masterChef_lte?: InputMaybe<Scalars["String"]>;
  masterChef_not?: InputMaybe<Scalars["String"]>;
  masterChef_not_contains?: InputMaybe<Scalars["String"]>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_not_ends_with?: InputMaybe<Scalars["String"]>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_not_in?: InputMaybe<Array<Scalars["String"]>>;
  masterChef_not_starts_with?: InputMaybe<Scalars["String"]>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_starts_with?: InputMaybe<Scalars["String"]>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewarder?: InputMaybe<Scalars["Bytes"]>;
  rewarder_contains?: InputMaybe<Scalars["Bytes"]>;
  rewarder_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewarder_not?: InputMaybe<Scalars["Bytes"]>;
  rewarder_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewarder_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  amount: Scalars["BigInt"];
  /**
   * ${poolInfo.id}.${account.id}
   *
   */
  id: Scalars["ID"];
  masterChef: MasterChef;
  poolInfo: MasterChefPoolInfo;
  rewardDebt: Scalars["BigInt"];
}

export interface MasterChefUserInfo_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  masterChef?: InputMaybe<Scalars["String"]>;
  masterChef_?: InputMaybe<MasterChef_Filter>;
  masterChef_contains?: InputMaybe<Scalars["String"]>;
  masterChef_contains_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_ends_with?: InputMaybe<Scalars["String"]>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_gt?: InputMaybe<Scalars["String"]>;
  masterChef_gte?: InputMaybe<Scalars["String"]>;
  masterChef_in?: InputMaybe<Array<Scalars["String"]>>;
  masterChef_lt?: InputMaybe<Scalars["String"]>;
  masterChef_lte?: InputMaybe<Scalars["String"]>;
  masterChef_not?: InputMaybe<Scalars["String"]>;
  masterChef_not_contains?: InputMaybe<Scalars["String"]>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_not_ends_with?: InputMaybe<Scalars["String"]>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_not_in?: InputMaybe<Array<Scalars["String"]>>;
  masterChef_not_starts_with?: InputMaybe<Scalars["String"]>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  masterChef_starts_with?: InputMaybe<Scalars["String"]>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo?: InputMaybe<Scalars["String"]>;
  poolInfo_?: InputMaybe<MasterChefPoolInfo_Filter>;
  poolInfo_contains?: InputMaybe<Scalars["String"]>;
  poolInfo_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo_ends_with?: InputMaybe<Scalars["String"]>;
  poolInfo_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo_gt?: InputMaybe<Scalars["String"]>;
  poolInfo_gte?: InputMaybe<Scalars["String"]>;
  poolInfo_in?: InputMaybe<Array<Scalars["String"]>>;
  poolInfo_lt?: InputMaybe<Scalars["String"]>;
  poolInfo_lte?: InputMaybe<Scalars["String"]>;
  poolInfo_not?: InputMaybe<Scalars["String"]>;
  poolInfo_not_contains?: InputMaybe<Scalars["String"]>;
  poolInfo_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolInfo_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolInfo_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolInfo_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolInfo_starts_with?: InputMaybe<Scalars["String"]>;
  poolInfo_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardDebt?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardDebt_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_not?: InputMaybe<Scalars["BigInt"]>;
  rewardDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  endBlock?: InputMaybe<Scalars["BigInt"]>;
  endBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  endBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  endBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  endBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  endBlock_not?: InputMaybe<Scalars["BigInt"]>;
  endBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  poolInfos_?: InputMaybe<MasterChefPoolInfo_Filter>;
  rewardPerBlock?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startBlock?: InputMaybe<Scalars["BigInt"]>;
  startBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  startBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  startBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  startBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  startBlock_not?: InputMaybe<Scalars["BigInt"]>;
  startBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalAllocPoint?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_gt?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_gte?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalAllocPoint_lt?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_lte?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_not?: InputMaybe<Scalars["BigInt"]>;
  totalAllocPoint_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  expiryTime: Scalars["Int"];
  /**
   * Address
   *
   */
  id: Scalars["ID"];
  merkleRoot: Scalars["Bytes"];
  startTime: Scalars["Int"];
}

export interface MerkleDropClaimsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface MerkleDropClaim {
  __typename?: "MerkleDropClaim";
  account: Account;
  amount: Scalars["BigInt"];
  /**
   * {merkleDrop.id}.{account.id}
   *
   */
  id: Scalars["ID"];
  locked: Scalars["Boolean"];
  merkleDrop: MerkleDrop;
}

export interface MerkleDropClaim_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  locked?: InputMaybe<Scalars["Boolean"]>;
  locked_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  locked_not?: InputMaybe<Scalars["Boolean"]>;
  locked_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  merkleDrop?: InputMaybe<Scalars["String"]>;
  merkleDrop_?: InputMaybe<MerkleDrop_Filter>;
  merkleDrop_contains?: InputMaybe<Scalars["String"]>;
  merkleDrop_contains_nocase?: InputMaybe<Scalars["String"]>;
  merkleDrop_ends_with?: InputMaybe<Scalars["String"]>;
  merkleDrop_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  merkleDrop_gt?: InputMaybe<Scalars["String"]>;
  merkleDrop_gte?: InputMaybe<Scalars["String"]>;
  merkleDrop_in?: InputMaybe<Array<Scalars["String"]>>;
  merkleDrop_lt?: InputMaybe<Scalars["String"]>;
  merkleDrop_lte?: InputMaybe<Scalars["String"]>;
  merkleDrop_not?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_contains?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_ends_with?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_in?: InputMaybe<Array<Scalars["String"]>>;
  merkleDrop_not_starts_with?: InputMaybe<Scalars["String"]>;
  merkleDrop_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  merkleDrop_starts_with?: InputMaybe<Scalars["String"]>;
  merkleDrop_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  expiryTime?: InputMaybe<Scalars["Int"]>;
  expiryTime_gt?: InputMaybe<Scalars["Int"]>;
  expiryTime_gte?: InputMaybe<Scalars["Int"]>;
  expiryTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  expiryTime_lt?: InputMaybe<Scalars["Int"]>;
  expiryTime_lte?: InputMaybe<Scalars["Int"]>;
  expiryTime_not?: InputMaybe<Scalars["Int"]>;
  expiryTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  merkleRoot?: InputMaybe<Scalars["Bytes"]>;
  merkleRoot_contains?: InputMaybe<Scalars["Bytes"]>;
  merkleRoot_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  merkleRoot_not?: InputMaybe<Scalars["Bytes"]>;
  merkleRoot_not_contains?: InputMaybe<Scalars["Bytes"]>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  startTime?: InputMaybe<Scalars["Int"]>;
  startTime_gt?: InputMaybe<Scalars["Int"]>;
  startTime_gte?: InputMaybe<Scalars["Int"]>;
  startTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  startTime_lt?: InputMaybe<Scalars["Int"]>;
  startTime_lte?: InputMaybe<Scalars["Int"]>;
  startTime_not?: InputMaybe<Scalars["Int"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
}

export enum MerkleDrop_OrderBy {
  Claims = "claims",
  ExpiryTime = "expiryTime",
  Id = "id",
  MerkleRoot = "merkleRoot",
  StartTime = "startTime",
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
  address: Scalars["Bytes"];
  alpha?: Maybe<Scalars["BigDecimal"]>;
  amp?: Maybe<Scalars["BigInt"]>;
  baseToken?: Maybe<Scalars["Bytes"]>;
  beta?: Maybe<Scalars["BigDecimal"]>;
  c?: Maybe<Scalars["BigDecimal"]>;
  createTime: Scalars["Int"];
  dSq?: Maybe<Scalars["BigDecimal"]>;
  delta?: Maybe<Scalars["BigDecimal"]>;
  /**
   * The Aura deposit token; a 1:1 token representing an LP deposit.
   * - Factory pools    => an auraLP token
   * - auraBAL staking  => auraBAL
   *
   */
  depositToken: Token;
  epsilon?: Maybe<Scalars["BigDecimal"]>;
  expiryTime?: Maybe<Scalars["BigInt"]>;
  factory?: Maybe<Scalars["Bytes"]>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  /**
   * Gauge associated with the pool
   *
   */
  gauge?: Maybe<Gauge>;
  historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
  holdersCount: Scalars["BigInt"];
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars["ID"];
  isFactoryPool: Scalars["Boolean"];
  isInRecoveryMode?: Maybe<Scalars["Boolean"]>;
  isPaused?: Maybe<Scalars["Boolean"]>;
  lambda?: Maybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant?: Maybe<Scalars["BigDecimal"]>;
  lowerTarget?: Maybe<Scalars["BigDecimal"]>;
  /**
   * LP Token refers to:
   * - Factory pools    => e.g. a given BPT
   * - auraBAL staking  => BAL
   *
   */
  lpToken: Token;
  mainIndex?: Maybe<Scalars["Int"]>;
  managementFee?: Maybe<Scalars["BigDecimal"]>;
  name?: Maybe<Scalars["String"]>;
  oracleEnabled: Scalars["Boolean"];
  owner?: Maybe<Scalars["Bytes"]>;
  poolType?: Maybe<Scalars["String"]>;
  poolTypeVersion?: Maybe<Scalars["Int"]>;
  priceRateProviders?: Maybe<Array<PriceRateProvider>>;
  principalToken?: Maybe<Scalars["Bytes"]>;
  protocolAumFeeCache?: Maybe<Scalars["BigDecimal"]>;
  protocolId?: Maybe<Scalars["Int"]>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolSwapFeeCache?: Maybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache?: Maybe<Scalars["BigDecimal"]>;
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
  rewardPool: Scalars["Bytes"];
  /**
   * Reward token of BaseRewardPool
   *
   */
  rewardToken: Token;
  root3Alpha?: Maybe<Scalars["BigDecimal"]>;
  s?: Maybe<Scalars["BigDecimal"]>;
  shares?: Maybe<Array<PoolShare>>;
  snapshots?: Maybe<Array<PoolSnapshot>>;
  sqrtAlpha?: Maybe<Scalars["BigDecimal"]>;
  sqrtBeta?: Maybe<Scalars["BigDecimal"]>;
  /**
   * Staked transactions for this pool
   *
   */
  stakedTransactions: Array<PoolStakedTransaction>;
  /**
   * auraBal initial staking only
   *
   */
  startTime?: Maybe<Scalars["Int"]>;
  strategyType: Scalars["Int"];
  swapEnabled: Scalars["Boolean"];
  swapFee: Scalars["BigDecimal"];
  swaps?: Maybe<Array<Swap>>;
  swapsCount: Scalars["BigInt"];
  symbol?: Maybe<Scalars["String"]>;
  tauAlphaX?: Maybe<Scalars["BigDecimal"]>;
  tauAlphaY?: Maybe<Scalars["BigDecimal"]>;
  tauBetaX?: Maybe<Scalars["BigDecimal"]>;
  tauBetaY?: Maybe<Scalars["BigDecimal"]>;
  tokens?: Maybe<Array<PoolToken>>;
  tokensList: Array<Scalars["Bytes"]>;
  totalLiquidity: Scalars["BigDecimal"];
  totalShares: Scalars["BigDecimal"];
  /**
   * Total staked in the rewardPool
   *
   */
  totalStaked: Scalars["BigInt"];
  /**
   * Total supply of the depositToken
   *
   */
  totalSupply: Scalars["BigInt"];
  totalSwapFee: Scalars["BigDecimal"];
  totalSwapVolume: Scalars["BigDecimal"];
  totalWeight?: Maybe<Scalars["BigDecimal"]>;
  tx?: Maybe<Scalars["Bytes"]>;
  u?: Maybe<Scalars["BigDecimal"]>;
  unitSeconds?: Maybe<Scalars["BigInt"]>;
  upperTarget?: Maybe<Scalars["BigDecimal"]>;
  v?: Maybe<Scalars["BigDecimal"]>;
  vaultID: Balancer;
  w?: Maybe<Scalars["BigDecimal"]>;
  weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
  /**
   * Withdrawn transactions for this pool
   *
   */
  withdrawnTransactions: Array<PoolWithdrawnTransaction>;
  wrappedIndex?: Maybe<Scalars["Int"]>;
  z?: Maybe<Scalars["BigDecimal"]>;
}

export interface PoolAccountsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface PoolHistoricalValuesArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface PoolPriceRateProvidersArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface PoolRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface PoolRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface PoolSharesArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface PoolSnapshotsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface PoolStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface PoolSwapsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
}

export interface PoolTokensArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface PoolWeightUpdatesArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface PoolWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface PoolAccount {
  __typename?: "PoolAccount";
  account: Account;
  /**
   * {Pool.id}.{Account.id}
   *
   */
  id: Scalars["ID"];
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
  staked: Scalars["BigInt"];
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
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface PoolAccountRewardsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface PoolAccountStakedTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface PoolAccountWithdrawnTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface PoolAccountRewards {
  __typename?: "PoolAccountRewards";
  /**
   * {rewardsToken.id}.{poolAccount.id}
   *
   */
  id: Scalars["ID"];
  poolAccount: PoolAccount;
  /**
   * userRewardPerTokenPaid(account)
   *
   */
  rewardPerTokenPaid: Scalars["BigInt"];
  rewardToken: Token;
  /**
   * rewards(account)
   *
   */
  rewards: Scalars["BigInt"];
}

export interface PoolAccountRewards_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  poolAccount?: InputMaybe<Scalars["String"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardToken?: InputMaybe<Scalars["String"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewards?: InputMaybe<Scalars["BigInt"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardPaidTransactions_?: InputMaybe<PoolRewardPaidTransaction_Filter>;
  rewards_?: InputMaybe<PoolAccountRewards_Filter>;
  staked?: InputMaybe<Scalars["BigInt"]>;
  stakedTransactions_?: InputMaybe<PoolStakedTransaction_Filter>;
  staked_gt?: InputMaybe<Scalars["BigInt"]>;
  staked_gte?: InputMaybe<Scalars["BigInt"]>;
  staked_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  staked_lt?: InputMaybe<Scalars["BigInt"]>;
  staked_lte?: InputMaybe<Scalars["BigInt"]>;
  staked_not?: InputMaybe<Scalars["BigInt"]>;
  staked_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  id: Scalars["ID"];
  pool: Pool;
}

export interface PoolContract_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  PoolLambda = "pool__lambda",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementFee = "pool__managementFee",
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
  PoolTotalLiquidity = "pool__totalLiquidity",
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
  block: Scalars["BigInt"];
  id: Scalars["ID"];
  poolId: Pool;
  poolLiquidity: Scalars["BigDecimal"];
  poolShareValue: Scalars["BigDecimal"];
  poolTotalShares: Scalars["BigDecimal"];
  pricingAsset: Scalars["Bytes"];
}

export interface PoolHistoricalLiquidity_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolLiquidity?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  poolLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_not?: InputMaybe<Scalars["BigDecimal"]>;
  poolLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  poolShareValue?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_gt?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_gte?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  poolShareValue_lt?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_lte?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_not?: InputMaybe<Scalars["BigDecimal"]>;
  poolShareValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  poolTotalShares?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_gt?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_gte?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  poolTotalShares_lt?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_lte?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_not?: InputMaybe<Scalars["BigDecimal"]>;
  poolTotalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  id: Scalars["ID"];
  lastUpdateTime: Scalars["Int"];
  periodFinish: Scalars["Int"];
  pool: Pool;
  queuedRewards: Scalars["BigInt"];
  rewardPerTokenStored: Scalars["BigInt"];
  rewardRate: Scalars["BigInt"];
  token: Token;
}

export interface PoolRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  queuedRewards?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_gt?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_gte?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  queuedRewards_lt?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_lte?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_not?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  pool: Pool;
  poolAccount: PoolAccount;
  reward: Scalars["BigInt"];
  timestamp: Scalars["Int"];
}

export interface PoolRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  poolAccount?: InputMaybe<Scalars["String"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward?: InputMaybe<Scalars["BigInt"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  balance: Scalars["BigDecimal"];
  id: Scalars["ID"];
  poolId: Pool;
  userAddress: User;
}

export interface PoolShare_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress?: InputMaybe<Scalars["String"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]>;
  userAddress_not?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  amounts: Array<Scalars["BigDecimal"]>;
  holdersCount: Scalars["BigInt"];
  id: Scalars["ID"];
  liquidity: Scalars["BigDecimal"];
  pool: Pool;
  swapFees: Scalars["BigDecimal"];
  swapVolume: Scalars["BigDecimal"];
  swapsCount: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  totalShares: Scalars["BigDecimal"];
}

export interface PoolSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  holdersCount?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_gt?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_gte?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  holdersCount_lt?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_lte?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_not?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidity?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  liquidity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_not?: InputMaybe<Scalars["BigDecimal"]>;
  liquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  swapFees?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_gt?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_gte?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapFees_lt?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_lte?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_not?: InputMaybe<Scalars["BigDecimal"]>;
  swapFees_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  swapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapsCount?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_not?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalShares?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalShares_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  PoolLambda = "pool__lambda",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementFee = "pool__managementFee",
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
  PoolTotalLiquidity = "pool__totalLiquidity",
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
  SwapFees = "swapFees",
  SwapVolume = "swapVolume",
  SwapsCount = "swapsCount",
  Timestamp = "timestamp",
  TotalShares = "totalShares",
}

export interface PoolStakedTransaction extends PoolTransaction {
  __typename?: "PoolStakedTransaction";
  amount: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"];
}

export interface PoolStakedTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  poolAccount?: InputMaybe<Scalars["String"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  address: Scalars["String"];
  assetManager: Scalars["Bytes"];
  balance: Scalars["BigDecimal"];
  cashBalance: Scalars["BigDecimal"];
  decimals: Scalars["Int"];
  id: Scalars["ID"];
  index?: Maybe<Scalars["Int"]>;
  isExemptFromYieldProtocolFee?: Maybe<Scalars["Boolean"]>;
  managedBalance: Scalars["BigDecimal"];
  managements?: Maybe<Array<ManagementOperation>>;
  name: Scalars["String"];
  oldPriceRate?: Maybe<Scalars["BigDecimal"]>;
  poolId?: Maybe<Pool>;
  priceRate: Scalars["BigDecimal"];
  symbol: Scalars["String"];
  token: Token;
  weight?: Maybe<Scalars["BigDecimal"]>;
}

export interface PoolTokenManagementsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface PoolToken_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  address_gt?: InputMaybe<Scalars["String"]>;
  address_gte?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<Scalars["String"]>>;
  address_lt?: InputMaybe<Scalars["String"]>;
  address_lte?: InputMaybe<Scalars["String"]>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  assetManager?: InputMaybe<Scalars["Bytes"]>;
  assetManager_contains?: InputMaybe<Scalars["Bytes"]>;
  assetManager_gt?: InputMaybe<Scalars["Bytes"]>;
  assetManager_gte?: InputMaybe<Scalars["Bytes"]>;
  assetManager_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  assetManager_lt?: InputMaybe<Scalars["Bytes"]>;
  assetManager_lte?: InputMaybe<Scalars["Bytes"]>;
  assetManager_not?: InputMaybe<Scalars["Bytes"]>;
  assetManager_not_contains?: InputMaybe<Scalars["Bytes"]>;
  assetManager_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cashBalance?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cashBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  cashBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["Int"]>;
  index_gt?: InputMaybe<Scalars["Int"]>;
  index_gte?: InputMaybe<Scalars["Int"]>;
  index_in?: InputMaybe<Array<Scalars["Int"]>>;
  index_lt?: InputMaybe<Scalars["Int"]>;
  index_lte?: InputMaybe<Scalars["Int"]>;
  index_not?: InputMaybe<Scalars["Int"]>;
  index_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  isExemptFromYieldProtocolFee?: InputMaybe<Scalars["Boolean"]>;
  isExemptFromYieldProtocolFee_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isExemptFromYieldProtocolFee_not?: InputMaybe<Scalars["Boolean"]>;
  isExemptFromYieldProtocolFee_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  managedBalance?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  managedBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  managedBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  managements_?: InputMaybe<ManagementOperation_Filter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oldPriceRate?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  oldPriceRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  oldPriceRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  priceRate?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["BigDecimal"]>;
  weight_gt?: InputMaybe<Scalars["BigDecimal"]>;
  weight_gte?: InputMaybe<Scalars["BigDecimal"]>;
  weight_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weight_lt?: InputMaybe<Scalars["BigDecimal"]>;
  weight_lte?: InputMaybe<Scalars["BigDecimal"]>;
  weight_not?: InputMaybe<Scalars["BigDecimal"]>;
  weight_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum PoolToken_OrderBy {
  Address = "address",
  AssetManager = "assetManager",
  Balance = "balance",
  CashBalance = "cashBalance",
  Decimals = "decimals",
  Id = "id",
  Index = "index",
  IsExemptFromYieldProtocolFee = "isExemptFromYieldProtocolFee",
  ManagedBalance = "managedBalance",
  Managements = "managements",
  Name = "name",
  OldPriceRate = "oldPriceRate",
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"];
}

export interface PoolTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  poolAccount?: InputMaybe<Scalars["String"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  amount: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  pool: Pool;
  poolAccount: PoolAccount;
  timestamp: Scalars["Int"];
}

export interface PoolWithdrawnTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  poolAccount?: InputMaybe<Scalars["String"]>;
  poolAccount_?: InputMaybe<PoolAccount_Filter>;
  poolAccount_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_gt?: InputMaybe<Scalars["String"]>;
  poolAccount_gte?: InputMaybe<Scalars["String"]>;
  poolAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_lt?: InputMaybe<Scalars["String"]>;
  poolAccount_lte?: InputMaybe<Scalars["String"]>;
  poolAccount_not?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains?: InputMaybe<Scalars["String"]>;
  poolAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with?: InputMaybe<Scalars["String"]>;
  poolAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  alpha?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_gt?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_gte?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  alpha_lt?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_lte?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_not?: InputMaybe<Scalars["BigDecimal"]>;
  alpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amp?: InputMaybe<Scalars["BigInt"]>;
  amp_gt?: InputMaybe<Scalars["BigInt"]>;
  amp_gte?: InputMaybe<Scalars["BigInt"]>;
  amp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amp_lt?: InputMaybe<Scalars["BigInt"]>;
  amp_lte?: InputMaybe<Scalars["BigInt"]>;
  amp_not?: InputMaybe<Scalars["BigInt"]>;
  amp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  baseToken?: InputMaybe<Scalars["Bytes"]>;
  baseToken_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_gt?: InputMaybe<Scalars["Bytes"]>;
  baseToken_gte?: InputMaybe<Scalars["Bytes"]>;
  baseToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  baseToken_lt?: InputMaybe<Scalars["Bytes"]>;
  baseToken_lte?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  beta?: InputMaybe<Scalars["BigDecimal"]>;
  beta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  beta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  beta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  beta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  beta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  beta_not?: InputMaybe<Scalars["BigDecimal"]>;
  beta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  c?: InputMaybe<Scalars["BigDecimal"]>;
  c_gt?: InputMaybe<Scalars["BigDecimal"]>;
  c_gte?: InputMaybe<Scalars["BigDecimal"]>;
  c_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  c_lt?: InputMaybe<Scalars["BigDecimal"]>;
  c_lte?: InputMaybe<Scalars["BigDecimal"]>;
  c_not?: InputMaybe<Scalars["BigDecimal"]>;
  c_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  createTime?: InputMaybe<Scalars["Int"]>;
  createTime_gt?: InputMaybe<Scalars["Int"]>;
  createTime_gte?: InputMaybe<Scalars["Int"]>;
  createTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  createTime_lt?: InputMaybe<Scalars["Int"]>;
  createTime_lte?: InputMaybe<Scalars["Int"]>;
  createTime_not?: InputMaybe<Scalars["Int"]>;
  createTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  dSq?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dSq_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_not?: InputMaybe<Scalars["BigDecimal"]>;
  dSq_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  delta?: InputMaybe<Scalars["BigDecimal"]>;
  delta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  delta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  delta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  delta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  delta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  delta_not?: InputMaybe<Scalars["BigDecimal"]>;
  delta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  depositToken?: InputMaybe<Scalars["String"]>;
  depositToken_?: InputMaybe<Token_Filter>;
  depositToken_contains?: InputMaybe<Scalars["String"]>;
  depositToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  depositToken_ends_with?: InputMaybe<Scalars["String"]>;
  depositToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  depositToken_gt?: InputMaybe<Scalars["String"]>;
  depositToken_gte?: InputMaybe<Scalars["String"]>;
  depositToken_in?: InputMaybe<Array<Scalars["String"]>>;
  depositToken_lt?: InputMaybe<Scalars["String"]>;
  depositToken_lte?: InputMaybe<Scalars["String"]>;
  depositToken_not?: InputMaybe<Scalars["String"]>;
  depositToken_not_contains?: InputMaybe<Scalars["String"]>;
  depositToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  depositToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  depositToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  depositToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  depositToken_starts_with?: InputMaybe<Scalars["String"]>;
  depositToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  epsilon?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_gt?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_gte?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  epsilon_lt?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_lte?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_not?: InputMaybe<Scalars["BigDecimal"]>;
  epsilon_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  expiryTime?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_gt?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_gte?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  expiryTime_lt?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_lte?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_not?: InputMaybe<Scalars["BigInt"]>;
  expiryTime_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  factory?: InputMaybe<Scalars["Bytes"]>;
  factoryPoolData?: InputMaybe<Scalars["String"]>;
  factoryPoolData_?: InputMaybe<FactoryPoolData_Filter>;
  factoryPoolData_contains?: InputMaybe<Scalars["String"]>;
  factoryPoolData_contains_nocase?: InputMaybe<Scalars["String"]>;
  factoryPoolData_ends_with?: InputMaybe<Scalars["String"]>;
  factoryPoolData_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factoryPoolData_gt?: InputMaybe<Scalars["String"]>;
  factoryPoolData_gte?: InputMaybe<Scalars["String"]>;
  factoryPoolData_in?: InputMaybe<Array<Scalars["String"]>>;
  factoryPoolData_lt?: InputMaybe<Scalars["String"]>;
  factoryPoolData_lte?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_contains?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_ends_with?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_in?: InputMaybe<Array<Scalars["String"]>>;
  factoryPoolData_not_starts_with?: InputMaybe<Scalars["String"]>;
  factoryPoolData_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factoryPoolData_starts_with?: InputMaybe<Scalars["String"]>;
  factoryPoolData_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  factory_contains?: InputMaybe<Scalars["Bytes"]>;
  factory_gt?: InputMaybe<Scalars["Bytes"]>;
  factory_gte?: InputMaybe<Scalars["Bytes"]>;
  factory_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  factory_lt?: InputMaybe<Scalars["Bytes"]>;
  factory_lte?: InputMaybe<Scalars["Bytes"]>;
  factory_not?: InputMaybe<Scalars["Bytes"]>;
  factory_not_contains?: InputMaybe<Scalars["Bytes"]>;
  factory_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  gauge?: InputMaybe<Scalars["String"]>;
  gauge_?: InputMaybe<Gauge_Filter>;
  gauge_contains?: InputMaybe<Scalars["String"]>;
  gauge_contains_nocase?: InputMaybe<Scalars["String"]>;
  gauge_ends_with?: InputMaybe<Scalars["String"]>;
  gauge_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  gauge_gt?: InputMaybe<Scalars["String"]>;
  gauge_gte?: InputMaybe<Scalars["String"]>;
  gauge_in?: InputMaybe<Array<Scalars["String"]>>;
  gauge_lt?: InputMaybe<Scalars["String"]>;
  gauge_lte?: InputMaybe<Scalars["String"]>;
  gauge_not?: InputMaybe<Scalars["String"]>;
  gauge_not_contains?: InputMaybe<Scalars["String"]>;
  gauge_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  gauge_not_ends_with?: InputMaybe<Scalars["String"]>;
  gauge_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  gauge_not_in?: InputMaybe<Array<Scalars["String"]>>;
  gauge_not_starts_with?: InputMaybe<Scalars["String"]>;
  gauge_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  gauge_starts_with?: InputMaybe<Scalars["String"]>;
  gauge_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  historicalValues_?: InputMaybe<PoolHistoricalLiquidity_Filter>;
  holdersCount?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_gt?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_gte?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  holdersCount_lt?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_lte?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_not?: InputMaybe<Scalars["BigInt"]>;
  holdersCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isFactoryPool?: InputMaybe<Scalars["Boolean"]>;
  isFactoryPool_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isFactoryPool_not?: InputMaybe<Scalars["Boolean"]>;
  isFactoryPool_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isInRecoveryMode?: InputMaybe<Scalars["Boolean"]>;
  isInRecoveryMode_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isInRecoveryMode_not?: InputMaybe<Scalars["Boolean"]>;
  isInRecoveryMode_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isPaused?: InputMaybe<Scalars["Boolean"]>;
  isPaused_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isPaused_not?: InputMaybe<Scalars["Boolean"]>;
  isPaused_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lambda?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lambda_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_not?: InputMaybe<Scalars["BigDecimal"]>;
  lambda_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lastPostJoinExitInvariant?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lastPostJoinExitInvariant_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_not?: InputMaybe<Scalars["BigDecimal"]>;
  lastPostJoinExitInvariant_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowerTarget?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowerTarget_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowerTarget_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lpToken?: InputMaybe<Scalars["String"]>;
  lpToken_?: InputMaybe<Token_Filter>;
  lpToken_contains?: InputMaybe<Scalars["String"]>;
  lpToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_ends_with?: InputMaybe<Scalars["String"]>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_gt?: InputMaybe<Scalars["String"]>;
  lpToken_gte?: InputMaybe<Scalars["String"]>;
  lpToken_in?: InputMaybe<Array<Scalars["String"]>>;
  lpToken_lt?: InputMaybe<Scalars["String"]>;
  lpToken_lte?: InputMaybe<Scalars["String"]>;
  lpToken_not?: InputMaybe<Scalars["String"]>;
  lpToken_not_contains?: InputMaybe<Scalars["String"]>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lpToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lpToken_starts_with?: InputMaybe<Scalars["String"]>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  mainIndex?: InputMaybe<Scalars["Int"]>;
  mainIndex_gt?: InputMaybe<Scalars["Int"]>;
  mainIndex_gte?: InputMaybe<Scalars["Int"]>;
  mainIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  mainIndex_lt?: InputMaybe<Scalars["Int"]>;
  mainIndex_lte?: InputMaybe<Scalars["Int"]>;
  mainIndex_not?: InputMaybe<Scalars["Int"]>;
  mainIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  managementFee?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  managementFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  managementFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  oracleEnabled?: InputMaybe<Scalars["Boolean"]>;
  oracleEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  oracleEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  oracleEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  poolType?: InputMaybe<Scalars["String"]>;
  poolTypeVersion?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_gt?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_gte?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_in?: InputMaybe<Array<Scalars["Int"]>>;
  poolTypeVersion_lt?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_lte?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_not?: InputMaybe<Scalars["Int"]>;
  poolTypeVersion_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  poolType_contains?: InputMaybe<Scalars["String"]>;
  poolType_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolType_ends_with?: InputMaybe<Scalars["String"]>;
  poolType_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolType_gt?: InputMaybe<Scalars["String"]>;
  poolType_gte?: InputMaybe<Scalars["String"]>;
  poolType_in?: InputMaybe<Array<Scalars["String"]>>;
  poolType_lt?: InputMaybe<Scalars["String"]>;
  poolType_lte?: InputMaybe<Scalars["String"]>;
  poolType_not?: InputMaybe<Scalars["String"]>;
  poolType_not_contains?: InputMaybe<Scalars["String"]>;
  poolType_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolType_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolType_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolType_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolType_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolType_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolType_starts_with?: InputMaybe<Scalars["String"]>;
  poolType_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  priceRateProviders_?: InputMaybe<PriceRateProvider_Filter>;
  principalToken?: InputMaybe<Scalars["Bytes"]>;
  principalToken_contains?: InputMaybe<Scalars["Bytes"]>;
  principalToken_gt?: InputMaybe<Scalars["Bytes"]>;
  principalToken_gte?: InputMaybe<Scalars["Bytes"]>;
  principalToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  principalToken_lt?: InputMaybe<Scalars["Bytes"]>;
  principalToken_lte?: InputMaybe<Scalars["Bytes"]>;
  principalToken_not?: InputMaybe<Scalars["Bytes"]>;
  principalToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  principalToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  protocolAumFeeCache?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolAumFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolAumFeeCache_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolId?: InputMaybe<Scalars["Int"]>;
  protocolIdData?: InputMaybe<Scalars["String"]>;
  protocolIdData_?: InputMaybe<ProtocolIdData_Filter>;
  protocolIdData_contains?: InputMaybe<Scalars["String"]>;
  protocolIdData_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocolIdData_ends_with?: InputMaybe<Scalars["String"]>;
  protocolIdData_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocolIdData_gt?: InputMaybe<Scalars["String"]>;
  protocolIdData_gte?: InputMaybe<Scalars["String"]>;
  protocolIdData_in?: InputMaybe<Array<Scalars["String"]>>;
  protocolIdData_lt?: InputMaybe<Scalars["String"]>;
  protocolIdData_lte?: InputMaybe<Scalars["String"]>;
  protocolIdData_not?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_contains?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_ends_with?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_in?: InputMaybe<Array<Scalars["String"]>>;
  protocolIdData_not_starts_with?: InputMaybe<Scalars["String"]>;
  protocolIdData_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocolIdData_starts_with?: InputMaybe<Scalars["String"]>;
  protocolIdData_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  protocolId_gt?: InputMaybe<Scalars["Int"]>;
  protocolId_gte?: InputMaybe<Scalars["Int"]>;
  protocolId_in?: InputMaybe<Array<Scalars["Int"]>>;
  protocolId_lt?: InputMaybe<Scalars["Int"]>;
  protocolId_lte?: InputMaybe<Scalars["Int"]>;
  protocolId_not?: InputMaybe<Scalars["Int"]>;
  protocolId_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  protocolSwapFeeCache?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolSwapFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolSwapFeeCache_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolYieldFeeCache?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_gt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_gte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  protocolYieldFeeCache_lt?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_lte?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_not?: InputMaybe<Scalars["BigDecimal"]>;
  protocolYieldFeeCache_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardData_?: InputMaybe<PoolRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<PoolRewardPaidTransaction_Filter>;
  rewardPool?: InputMaybe<Scalars["Bytes"]>;
  rewardPool_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardPool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardPool_not?: InputMaybe<Scalars["Bytes"]>;
  rewardPool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardPool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken?: InputMaybe<Scalars["String"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  root3Alpha?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_gt?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_gte?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  root3Alpha_lt?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_lte?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_not?: InputMaybe<Scalars["BigDecimal"]>;
  root3Alpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  s?: InputMaybe<Scalars["BigDecimal"]>;
  s_gt?: InputMaybe<Scalars["BigDecimal"]>;
  s_gte?: InputMaybe<Scalars["BigDecimal"]>;
  s_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  s_lt?: InputMaybe<Scalars["BigDecimal"]>;
  s_lte?: InputMaybe<Scalars["BigDecimal"]>;
  s_not?: InputMaybe<Scalars["BigDecimal"]>;
  s_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  shares_?: InputMaybe<PoolShare_Filter>;
  snapshots_?: InputMaybe<PoolSnapshot_Filter>;
  sqrtAlpha?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sqrtAlpha_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_not?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtAlpha_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sqrtBeta?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sqrtBeta_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_not?: InputMaybe<Scalars["BigDecimal"]>;
  sqrtBeta_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  stakedTransactions_?: InputMaybe<PoolStakedTransaction_Filter>;
  startTime?: InputMaybe<Scalars["Int"]>;
  startTime_gt?: InputMaybe<Scalars["Int"]>;
  startTime_gte?: InputMaybe<Scalars["Int"]>;
  startTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  startTime_lt?: InputMaybe<Scalars["Int"]>;
  startTime_lte?: InputMaybe<Scalars["Int"]>;
  startTime_not?: InputMaybe<Scalars["Int"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  strategyType?: InputMaybe<Scalars["Int"]>;
  strategyType_gt?: InputMaybe<Scalars["Int"]>;
  strategyType_gte?: InputMaybe<Scalars["Int"]>;
  strategyType_in?: InputMaybe<Array<Scalars["Int"]>>;
  strategyType_lt?: InputMaybe<Scalars["Int"]>;
  strategyType_lte?: InputMaybe<Scalars["Int"]>;
  strategyType_not?: InputMaybe<Scalars["Int"]>;
  strategyType_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  swapEnabled?: InputMaybe<Scalars["Boolean"]>;
  swapEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  swapEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  swapEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  swapFee?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  swapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  swapsCount?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swapsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_not?: InputMaybe<Scalars["BigInt"]>;
  swapsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  swaps_?: InputMaybe<Swap_Filter>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tauAlphaX?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauAlphaX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_not?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauAlphaY?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauAlphaY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_not?: InputMaybe<Scalars["BigDecimal"]>;
  tauAlphaY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauBetaX?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauBetaX_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_not?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaX_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauBetaY?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tauBetaY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_not?: InputMaybe<Scalars["BigDecimal"]>;
  tauBetaY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokensList?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensList_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensList_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensList_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensList_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokensList_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_?: InputMaybe<PoolToken_Filter>;
  totalLiquidity?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalLiquidity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalShares?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalShares_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalShares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalStaked?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_gt?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_gte?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalStaked_lt?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_lte?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_not?: InputMaybe<Scalars["BigInt"]>;
  totalStaked_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalWeight?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalWeight_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalWeight_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tx?: InputMaybe<Scalars["Bytes"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  u?: InputMaybe<Scalars["BigDecimal"]>;
  u_gt?: InputMaybe<Scalars["BigDecimal"]>;
  u_gte?: InputMaybe<Scalars["BigDecimal"]>;
  u_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  u_lt?: InputMaybe<Scalars["BigDecimal"]>;
  u_lte?: InputMaybe<Scalars["BigDecimal"]>;
  u_not?: InputMaybe<Scalars["BigDecimal"]>;
  u_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  unitSeconds?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  unitSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  unitSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  upperTarget?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_gt?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_gte?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  upperTarget_lt?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_lte?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_not?: InputMaybe<Scalars["BigDecimal"]>;
  upperTarget_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  v?: InputMaybe<Scalars["BigDecimal"]>;
  v_gt?: InputMaybe<Scalars["BigDecimal"]>;
  v_gte?: InputMaybe<Scalars["BigDecimal"]>;
  v_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  v_lt?: InputMaybe<Scalars["BigDecimal"]>;
  v_lte?: InputMaybe<Scalars["BigDecimal"]>;
  v_not?: InputMaybe<Scalars["BigDecimal"]>;
  v_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  vaultID?: InputMaybe<Scalars["String"]>;
  vaultID_?: InputMaybe<Balancer_Filter>;
  vaultID_contains?: InputMaybe<Scalars["String"]>;
  vaultID_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultID_ends_with?: InputMaybe<Scalars["String"]>;
  vaultID_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultID_gt?: InputMaybe<Scalars["String"]>;
  vaultID_gte?: InputMaybe<Scalars["String"]>;
  vaultID_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultID_lt?: InputMaybe<Scalars["String"]>;
  vaultID_lte?: InputMaybe<Scalars["String"]>;
  vaultID_not?: InputMaybe<Scalars["String"]>;
  vaultID_not_contains?: InputMaybe<Scalars["String"]>;
  vaultID_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultID_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultID_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultID_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultID_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultID_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultID_starts_with?: InputMaybe<Scalars["String"]>;
  vaultID_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  w?: InputMaybe<Scalars["BigDecimal"]>;
  w_gt?: InputMaybe<Scalars["BigDecimal"]>;
  w_gte?: InputMaybe<Scalars["BigDecimal"]>;
  w_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  w_lt?: InputMaybe<Scalars["BigDecimal"]>;
  w_lte?: InputMaybe<Scalars["BigDecimal"]>;
  w_not?: InputMaybe<Scalars["BigDecimal"]>;
  w_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weightUpdates_?: InputMaybe<GradualWeightUpdate_Filter>;
  withdrawnTransactions_?: InputMaybe<PoolWithdrawnTransaction_Filter>;
  wrappedIndex?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_gt?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_gte?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  wrappedIndex_lt?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_lte?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_not?: InputMaybe<Scalars["Int"]>;
  wrappedIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  z?: InputMaybe<Scalars["BigDecimal"]>;
  z_gt?: InputMaybe<Scalars["BigDecimal"]>;
  z_gte?: InputMaybe<Scalars["BigDecimal"]>;
  z_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  z_lt?: InputMaybe<Scalars["BigDecimal"]>;
  z_lte?: InputMaybe<Scalars["BigDecimal"]>;
  z_not?: InputMaybe<Scalars["BigDecimal"]>;
  z_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum Pool_OrderBy {
  Accounts = "accounts",
  Address = "address",
  Alpha = "alpha",
  Amp = "amp",
  BaseToken = "baseToken",
  Beta = "beta",
  C = "c",
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
  Lambda = "lambda",
  LastPostJoinExitInvariant = "lastPostJoinExitInvariant",
  LowerTarget = "lowerTarget",
  LpToken = "lpToken",
  MainIndex = "mainIndex",
  ManagementFee = "managementFee",
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
  TotalLiquidity = "totalLiquidity",
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
  VaultIdTotalLiquidity = "vaultID__totalLiquidity",
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
  address: Scalars["Bytes"];
  cacheDuration?: Maybe<Scalars["Int"]>;
  cacheExpiry?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  lastCached?: Maybe<Scalars["Int"]>;
  poolId: Pool;
  rate?: Maybe<Scalars["BigDecimal"]>;
  token: PoolToken;
}

export interface PriceRateProvider_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  cacheDuration?: InputMaybe<Scalars["Int"]>;
  cacheDuration_gt?: InputMaybe<Scalars["Int"]>;
  cacheDuration_gte?: InputMaybe<Scalars["Int"]>;
  cacheDuration_in?: InputMaybe<Array<Scalars["Int"]>>;
  cacheDuration_lt?: InputMaybe<Scalars["Int"]>;
  cacheDuration_lte?: InputMaybe<Scalars["Int"]>;
  cacheDuration_not?: InputMaybe<Scalars["Int"]>;
  cacheDuration_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  cacheExpiry?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_gt?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_gte?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_in?: InputMaybe<Array<Scalars["Int"]>>;
  cacheExpiry_lt?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_lte?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_not?: InputMaybe<Scalars["Int"]>;
  cacheExpiry_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastCached?: InputMaybe<Scalars["Int"]>;
  lastCached_gt?: InputMaybe<Scalars["Int"]>;
  lastCached_gte?: InputMaybe<Scalars["Int"]>;
  lastCached_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastCached_lt?: InputMaybe<Scalars["Int"]>;
  lastCached_lte?: InputMaybe<Scalars["Int"]>;
  lastCached_not?: InputMaybe<Scalars["Int"]>;
  lastCached_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rate?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<PoolToken_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  TokenPriceRate = "token__priceRate",
  TokenSymbol = "token__symbol",
  TokenWeight = "token__weight",
}

export interface ProtocolIdData {
  __typename?: "ProtocolIdData";
  id: Scalars["ID"];
  name: Scalars["String"];
}

export interface ProtocolIdData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolIdData_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  block?: Maybe<Block>;
  blocks: Array<Block>;
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

export interface Query_MetaArgs {
  block?: InputMaybe<Block_Height>;
}

export interface QueryAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
}

export interface QueryAmpUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAmpUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
}

export interface QueryAuraBalMintTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraBalMintTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface QueryAuraLockerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface QueryAuraLockerRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface QueryAuraLockerUserDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerUserDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface QueryAuraLockerUserLockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAuraLockerUserLocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface QueryAuraLockersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
}

export interface QueryBalancerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
}

export interface QueryBalancersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
}

export interface QueryBlockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBlocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
}

export interface QueryFactoryPoolDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryFactoryPoolDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
}

export interface QueryGaugeArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGaugesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Gauge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gauge_Filter>;
}

export interface QueryGlobalArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGlobalsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
}

export interface QueryGradualWeightUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGradualWeightUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface QueryJoinExitArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryJoinExitsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
}

export interface QueryLatestPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLatestPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
}

export interface QueryLockerDelegateChangedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerDelegateChangedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface QueryLockerKickRewardTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerKickRewardTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface QueryLockerRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface QueryLockerStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface QueryLockerTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerTransaction_Filter>;
}

export interface QueryLockerWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLockerWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface QueryManagementOperationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryManagementOperationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface QueryMasterChefArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefPoolInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefPoolInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface QueryMasterChefUserInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMasterChefUserInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface QueryMasterChefsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
}

export interface QueryMerkleDropArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMerkleDropClaimArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryMerkleDropClaimsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface QueryMerkleDropsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
}

export interface QueryPoolArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface QueryPoolAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface QueryPoolContractArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolContractsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
}

export interface QueryPoolHistoricalLiquiditiesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface QueryPoolHistoricalLiquidityArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface QueryPoolRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface QueryPoolShareArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSharesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface QueryPoolSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface QueryPoolStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface QueryPoolTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface QueryPoolTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTransaction_Filter>;
}

export interface QueryPoolWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface QueryPoolsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
}

export interface QueryPriceRateProviderArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPriceRateProvidersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface QueryProtocolIdDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryProtocolIdDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
}

export interface QueryRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
}

export interface QuerySwapArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapFeeUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapFeeUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
}

export interface QuerySwapsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
}

export interface QueryTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
}

export interface QueryTokenSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface QueryTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
}

export interface QueryTradePairArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
}

export interface QueryTradePairsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
}

export interface QueryUserArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserInternalBalanceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserInternalBalancesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface QueryUsersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
}

export interface QueryVaultArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface QueryVaultAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface QueryVaultDepositTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultDepositTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface QueryVaultHarvestTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultHarvestTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface QueryVaultRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardData_Filter>;
}

export interface QueryVaultRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface QueryVaultTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTransaction_Filter>;
}

export interface QueryVaultWithdrawTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryVaultWithdrawTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface QueryVaultsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
}

export interface RewardData {
  /**
   * Last time any user took action
   *
   */
  lastUpdateTime: Scalars["Int"];
  /**
   * Timestamp for current period finish
   *
   */
  periodFinish: Scalars["Int"];
  /**
   * Ever increasing rewardPerToken rate, based on % of total supply
   *
   */
  rewardPerTokenStored: Scalars["BigInt"];
  /**
   * RewardRate for the rest of the period
   *
   */
  rewardRate: Scalars["BigInt"];
  token: Token;
}

export interface RewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
}

export interface SubscriptionAmpUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAmpUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
}

export interface SubscriptionAuraBalMintTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraBalMintTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraBalMintTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraBalMintTransaction_Filter>;
}

export interface SubscriptionAuraLockerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
}

export interface SubscriptionAuraLockerRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
}

export interface SubscriptionAuraLockerUserDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerUserDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
}

export interface SubscriptionAuraLockerUserLockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAuraLockerUserLocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
}

export interface SubscriptionAuraLockersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
}

export interface SubscriptionBalancerArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
}

export interface SubscriptionBalancersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
}

export interface SubscriptionBlockArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBlocksArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
}

export interface SubscriptionFactoryPoolDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionFactoryPoolDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
}

export interface SubscriptionGaugeArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGaugesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Gauge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gauge_Filter>;
}

export interface SubscriptionGlobalArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGlobalsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
}

export interface SubscriptionGradualWeightUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGradualWeightUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
}

export interface SubscriptionJoinExitArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionJoinExitsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
}

export interface SubscriptionLatestPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLatestPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
}

export interface SubscriptionLockerDelegateChangedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerDelegateChangedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerDelegateChangedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerDelegateChangedTransaction_Filter>;
}

export interface SubscriptionLockerKickRewardTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerKickRewardTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerKickRewardTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerKickRewardTransaction_Filter>;
}

export interface SubscriptionLockerRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerRewardPaidTransaction_Filter>;
}

export interface SubscriptionLockerStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerStakedTransaction_Filter>;
}

export interface SubscriptionLockerTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerTransaction_Filter>;
}

export interface SubscriptionLockerWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLockerWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LockerWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockerWithdrawnTransaction_Filter>;
}

export interface SubscriptionManagementOperationArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionManagementOperationsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
}

export interface SubscriptionMasterChefArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefPoolInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefPoolInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
}

export interface SubscriptionMasterChefUserInfoArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMasterChefUserInfosArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
}

export interface SubscriptionMasterChefsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
}

export interface SubscriptionMerkleDropArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMerkleDropClaimArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionMerkleDropClaimsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
}

export interface SubscriptionMerkleDropsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
}

export interface SubscriptionPoolArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccountRewards_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccountRewards_Filter>;
}

export interface SubscriptionPoolAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
}

export interface SubscriptionPoolContractArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolContractsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
}

export interface SubscriptionPoolHistoricalLiquiditiesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
}

export interface SubscriptionPoolHistoricalLiquidityArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
}

export interface SubscriptionPoolRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardPaidTransaction_Filter>;
}

export interface SubscriptionPoolShareArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSharesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface SubscriptionPoolSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
}

export interface SubscriptionPoolStakedTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolStakedTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolStakedTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolStakedTransaction_Filter>;
}

export interface SubscriptionPoolTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
}

export interface SubscriptionPoolTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTransaction_Filter>;
}

export interface SubscriptionPoolWithdrawnTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolWithdrawnTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolWithdrawnTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWithdrawnTransaction_Filter>;
}

export interface SubscriptionPoolsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
}

export interface SubscriptionPriceRateProviderArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPriceRateProvidersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
}

export interface SubscriptionProtocolIdDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionProtocolIdDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
}

export interface SubscriptionRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
}

export interface SubscriptionSwapArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapFeeUpdateArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapFeeUpdatesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
}

export interface SubscriptionSwapsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
}

export interface SubscriptionTokenArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPriceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPricesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
}

export interface SubscriptionTokenSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
}

export interface SubscriptionTokensArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
}

export interface SubscriptionTradePairArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
}

export interface SubscriptionTradePairsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
}

export interface SubscriptionUserArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalanceArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalancesArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface SubscriptionUsersArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
}

export interface SubscriptionVaultArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountRewardArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultAccountRewardsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface SubscriptionVaultAccountsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultAccount_Filter>;
}

export interface SubscriptionVaultDepositTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultDepositTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface SubscriptionVaultHarvestTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultHarvestTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface SubscriptionVaultRewardDataArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultRewardDatasArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardData_Filter>;
}

export interface SubscriptionVaultRewardPaidTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultRewardPaidTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface SubscriptionVaultTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTransaction_Filter>;
}

export interface SubscriptionVaultWithdrawTransactionArgs {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionVaultWithdrawTransactionsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface SubscriptionVaultsArgs {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
}

export interface Swap {
  __typename?: "Swap";
  caller: Scalars["Bytes"];
  id: Scalars["ID"];
  poolId: Pool;
  timestamp: Scalars["Int"];
  tokenAmountIn: Scalars["BigDecimal"];
  tokenAmountOut: Scalars["BigDecimal"];
  tokenIn: Scalars["Bytes"];
  tokenInSym: Scalars["String"];
  tokenOut: Scalars["Bytes"];
  tokenOutSym: Scalars["String"];
  tx: Scalars["Bytes"];
  userAddress: User;
  valueUSD: Scalars["BigDecimal"];
}

export interface SwapFeeUpdate {
  __typename?: "SwapFeeUpdate";
  endSwapFeePercentage: Scalars["BigDecimal"];
  endTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  pool: Pool;
  scheduledTimestamp: Scalars["Int"];
  startSwapFeePercentage: Scalars["BigDecimal"];
  startTimestamp: Scalars["BigInt"];
}

export interface SwapFeeUpdate_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  endSwapFeePercentage?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  endSwapFeePercentage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_not?: InputMaybe<Scalars["BigDecimal"]>;
  endSwapFeePercentage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  endTimestamp?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  scheduledTimestamp?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_gte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_lte?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not?: InputMaybe<Scalars["Int"]>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  startSwapFeePercentage?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  startSwapFeePercentage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_not?: InputMaybe<Scalars["BigDecimal"]>;
  startSwapFeePercentage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  PoolLambda = "pool__lambda",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementFee = "pool__managementFee",
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
  PoolTotalLiquidity = "pool__totalLiquidity",
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
  caller?: InputMaybe<Scalars["Bytes"]>;
  caller_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_gt?: InputMaybe<Scalars["Bytes"]>;
  caller_gte?: InputMaybe<Scalars["Bytes"]>;
  caller_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  caller_lt?: InputMaybe<Scalars["Bytes"]>;
  caller_lte?: InputMaybe<Scalars["Bytes"]>;
  caller_not?: InputMaybe<Scalars["Bytes"]>;
  caller_not_contains?: InputMaybe<Scalars["Bytes"]>;
  caller_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  tokenAmountIn?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenAmountIn_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenAmountOut?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenAmountOut_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_not?: InputMaybe<Scalars["BigDecimal"]>;
  tokenAmountOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokenIn?: InputMaybe<Scalars["Bytes"]>;
  tokenInSym?: InputMaybe<Scalars["String"]>;
  tokenInSym_contains?: InputMaybe<Scalars["String"]>;
  tokenInSym_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenInSym_ends_with?: InputMaybe<Scalars["String"]>;
  tokenInSym_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenInSym_gt?: InputMaybe<Scalars["String"]>;
  tokenInSym_gte?: InputMaybe<Scalars["String"]>;
  tokenInSym_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenInSym_lt?: InputMaybe<Scalars["String"]>;
  tokenInSym_lte?: InputMaybe<Scalars["String"]>;
  tokenInSym_not?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_contains?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenInSym_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenInSym_starts_with?: InputMaybe<Scalars["String"]>;
  tokenInSym_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIn_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenIn_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_not?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenIn_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenOut?: InputMaybe<Scalars["Bytes"]>;
  tokenOutSym?: InputMaybe<Scalars["String"]>;
  tokenOutSym_contains?: InputMaybe<Scalars["String"]>;
  tokenOutSym_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenOutSym_ends_with?: InputMaybe<Scalars["String"]>;
  tokenOutSym_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOutSym_gt?: InputMaybe<Scalars["String"]>;
  tokenOutSym_gte?: InputMaybe<Scalars["String"]>;
  tokenOutSym_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenOutSym_lt?: InputMaybe<Scalars["String"]>;
  tokenOutSym_lte?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_contains?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenOutSym_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOutSym_starts_with?: InputMaybe<Scalars["String"]>;
  tokenOutSym_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenOut_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenOut_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_not?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenOut_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tx?: InputMaybe<Scalars["Bytes"]>;
  tx_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_gt?: InputMaybe<Scalars["Bytes"]>;
  tx_gte?: InputMaybe<Scalars["Bytes"]>;
  tx_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tx_lt?: InputMaybe<Scalars["Bytes"]>;
  tx_lte?: InputMaybe<Scalars["Bytes"]>;
  tx_not?: InputMaybe<Scalars["Bytes"]>;
  tx_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tx_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  userAddress?: InputMaybe<Scalars["String"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]>;
  userAddress_not?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  valueUSD?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  valueUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  address: Scalars["String"];
  decimals: Scalars["Int"];
  /**
   * Address
   *
   */
  id: Scalars["ID"];
  latestFXPrice?: Maybe<Scalars["BigDecimal"]>;
  latestPrice?: Maybe<LatestPrice>;
  latestUSDPrice?: Maybe<Scalars["BigDecimal"]>;
  latestUSDPriceTimestamp?: Maybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  pool?: Maybe<Pool>;
  symbol: Scalars["String"];
  totalBalanceNotional: Scalars["BigDecimal"];
  totalBalanceUSD: Scalars["BigDecimal"];
  totalSwapCount: Scalars["BigInt"];
  totalVolumeNotional: Scalars["BigDecimal"];
  totalVolumeUSD: Scalars["BigDecimal"];
}

export interface TokenPrice {
  __typename?: "TokenPrice";
  amount: Scalars["BigDecimal"];
  asset: Scalars["Bytes"];
  block: Scalars["BigInt"];
  id: Scalars["ID"];
  poolId: Pool;
  price: Scalars["BigDecimal"];
  pricingAsset: Scalars["Bytes"];
  timestamp: Scalars["Int"];
}

export interface TokenPrice_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  asset?: InputMaybe<Scalars["Bytes"]>;
  asset_contains?: InputMaybe<Scalars["Bytes"]>;
  asset_gt?: InputMaybe<Scalars["Bytes"]>;
  asset_gte?: InputMaybe<Scalars["Bytes"]>;
  asset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  asset_lt?: InputMaybe<Scalars["Bytes"]>;
  asset_lte?: InputMaybe<Scalars["Bytes"]>;
  asset_not?: InputMaybe<Scalars["Bytes"]>;
  asset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  asset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  poolId?: InputMaybe<Scalars["String"]>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars["String"]>;
  poolId_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_gt?: InputMaybe<Scalars["String"]>;
  poolId_gte?: InputMaybe<Scalars["String"]>;
  poolId_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_lt?: InputMaybe<Scalars["String"]>;
  poolId_lte?: InputMaybe<Scalars["String"]>;
  poolId_not?: InputMaybe<Scalars["String"]>;
  poolId_not_contains?: InputMaybe<Scalars["String"]>;
  poolId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolId_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolId_starts_with?: InputMaybe<Scalars["String"]>;
  poolId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["BigDecimal"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  pricingAsset?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_gte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pricingAsset_lt?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_lte?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  PoolIdLambda = "poolId__lambda",
  PoolIdLastPostJoinExitInvariant = "poolId__lastPostJoinExitInvariant",
  PoolIdLowerTarget = "poolId__lowerTarget",
  PoolIdMainIndex = "poolId__mainIndex",
  PoolIdManagementFee = "poolId__managementFee",
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
  PoolIdTotalLiquidity = "poolId__totalLiquidity",
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
  id: Scalars["ID"];
  timestamp: Scalars["Int"];
  token: Token;
  totalBalanceNotional: Scalars["BigDecimal"];
  totalBalanceUSD: Scalars["BigDecimal"];
  totalSwapCount: Scalars["BigInt"];
  totalVolumeNotional: Scalars["BigDecimal"];
  totalVolumeUSD: Scalars["BigDecimal"];
}

export interface TokenSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalBalanceNotional?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalVolumeNotional?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum TokenSnapshot_OrderBy {
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "token__address",
  TokenDecimals = "token__decimals",
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
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  address_gt?: InputMaybe<Scalars["String"]>;
  address_gte?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<Scalars["String"]>>;
  address_lt?: InputMaybe<Scalars["String"]>;
  address_lte?: InputMaybe<Scalars["String"]>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  latestFXPrice?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  latestFXPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  latestFXPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  latestPrice?: InputMaybe<Scalars["String"]>;
  latestPrice_?: InputMaybe<LatestPrice_Filter>;
  latestPrice_contains?: InputMaybe<Scalars["String"]>;
  latestPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_ends_with?: InputMaybe<Scalars["String"]>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_gt?: InputMaybe<Scalars["String"]>;
  latestPrice_gte?: InputMaybe<Scalars["String"]>;
  latestPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  latestPrice_lt?: InputMaybe<Scalars["String"]>;
  latestPrice_lte?: InputMaybe<Scalars["String"]>;
  latestPrice_not?: InputMaybe<Scalars["String"]>;
  latestPrice_not_contains?: InputMaybe<Scalars["String"]>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  latestPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_starts_with?: InputMaybe<Scalars["String"]>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  latestUSDPrice?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPriceTimestamp?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  latestUSDPriceTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  latestUSDPriceTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  latestUSDPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  latestUSDPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  latestUSDPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalBalanceNotional?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapCount?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSwapCount_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not?: InputMaybe<Scalars["BigInt"]>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalVolumeNotional?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeUSD?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum Token_OrderBy {
  Address = "address",
  Decimals = "decimals",
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
  PoolLambda = "pool__lambda",
  PoolLastPostJoinExitInvariant = "pool__lastPostJoinExitInvariant",
  PoolLowerTarget = "pool__lowerTarget",
  PoolMainIndex = "pool__mainIndex",
  PoolManagementFee = "pool__managementFee",
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
  PoolTotalLiquidity = "pool__totalLiquidity",
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
  id: Scalars["ID"];
  token0: Token;
  token1: Token;
  totalSwapFee: Scalars["BigDecimal"];
  totalSwapVolume: Scalars["BigDecimal"];
}

export interface TradePairSnapshot {
  __typename?: "TradePairSnapshot";
  id: Scalars["ID"];
  pair: TradePair;
  timestamp: Scalars["Int"];
  totalSwapFee: Scalars["BigDecimal"];
  totalSwapVolume: Scalars["BigDecimal"];
}

export interface TradePairSnapshot_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  pair?: InputMaybe<Scalars["String"]>;
  pair_?: InputMaybe<TradePair_Filter>;
  pair_contains?: InputMaybe<Scalars["String"]>;
  pair_contains_nocase?: InputMaybe<Scalars["String"]>;
  pair_ends_with?: InputMaybe<Scalars["String"]>;
  pair_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pair_gt?: InputMaybe<Scalars["String"]>;
  pair_gte?: InputMaybe<Scalars["String"]>;
  pair_in?: InputMaybe<Array<Scalars["String"]>>;
  pair_lt?: InputMaybe<Scalars["String"]>;
  pair_lte?: InputMaybe<Scalars["String"]>;
  pair_not?: InputMaybe<Scalars["String"]>;
  pair_not_contains?: InputMaybe<Scalars["String"]>;
  pair_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pair_not_ends_with?: InputMaybe<Scalars["String"]>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pair_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pair_not_starts_with?: InputMaybe<Scalars["String"]>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pair_starts_with?: InputMaybe<Scalars["String"]>;
  pair_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TradePair_Filter>>>;
  token0?: InputMaybe<Scalars["String"]>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars["String"]>;
  token0_contains_nocase?: InputMaybe<Scalars["String"]>;
  token0_ends_with?: InputMaybe<Scalars["String"]>;
  token0_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token0_gt?: InputMaybe<Scalars["String"]>;
  token0_gte?: InputMaybe<Scalars["String"]>;
  token0_in?: InputMaybe<Array<Scalars["String"]>>;
  token0_lt?: InputMaybe<Scalars["String"]>;
  token0_lte?: InputMaybe<Scalars["String"]>;
  token0_not?: InputMaybe<Scalars["String"]>;
  token0_not_contains?: InputMaybe<Scalars["String"]>;
  token0_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token0_not_ends_with?: InputMaybe<Scalars["String"]>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token0_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token0_not_starts_with?: InputMaybe<Scalars["String"]>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token0_starts_with?: InputMaybe<Scalars["String"]>;
  token0_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token1?: InputMaybe<Scalars["String"]>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars["String"]>;
  token1_contains_nocase?: InputMaybe<Scalars["String"]>;
  token1_ends_with?: InputMaybe<Scalars["String"]>;
  token1_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token1_gt?: InputMaybe<Scalars["String"]>;
  token1_gte?: InputMaybe<Scalars["String"]>;
  token1_in?: InputMaybe<Array<Scalars["String"]>>;
  token1_lt?: InputMaybe<Scalars["String"]>;
  token1_lte?: InputMaybe<Scalars["String"]>;
  token1_not?: InputMaybe<Scalars["String"]>;
  token1_not_contains?: InputMaybe<Scalars["String"]>;
  token1_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token1_not_ends_with?: InputMaybe<Scalars["String"]>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token1_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token1_not_starts_with?: InputMaybe<Scalars["String"]>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token1_starts_with?: InputMaybe<Scalars["String"]>;
  token1_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSwapFee?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapFee_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSwapVolume_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
}

export enum TradePair_OrderBy {
  Id = "id",
  Token0 = "token0",
  Token0Address = "token0__address",
  Token0Decimals = "token0__decimals",
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
  id: Scalars["ID"];
  sharesOwned?: Maybe<Array<PoolShare>>;
  swaps?: Maybe<Array<Swap>>;
  userInternalBalances?: Maybe<Array<UserInternalBalance>>;
}

export interface UserSharesOwnedArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PoolShare_Filter>;
}

export interface UserSwapsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Swap_Filter>;
}

export interface UserUserInternalBalancesArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserInternalBalance_Filter>;
}

export interface UserInternalBalance {
  __typename?: "UserInternalBalance";
  balance: Scalars["BigDecimal"];
  id: Scalars["ID"];
  token: Scalars["Bytes"];
  userAddress?: Maybe<User>;
}

export interface UserInternalBalance_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  token?: InputMaybe<Scalars["Bytes"]>;
  token_contains?: InputMaybe<Scalars["Bytes"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_lt?: InputMaybe<Scalars["Bytes"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]>;
  token_not?: InputMaybe<Scalars["Bytes"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  userAddress?: InputMaybe<Scalars["String"]>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars["String"]>;
  userAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_gt?: InputMaybe<Scalars["String"]>;
  userAddress_gte?: InputMaybe<Scalars["String"]>;
  userAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_lt?: InputMaybe<Scalars["String"]>;
  userAddress_lte?: InputMaybe<Scalars["String"]>;
  userAddress_not?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains?: InputMaybe<Scalars["String"]>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  userAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with?: InputMaybe<Scalars["String"]>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum UserInternalBalance_OrderBy {
  Balance = "balance",
  Id = "id",
  Token = "token",
  UserAddress = "userAddress",
  UserAddressId = "userAddress__id",
}

export interface User_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  decimals: Scalars["Int"];
  depositTransactions: Array<VaultDepositTransaction>;
  harvestTransactions: Array<VaultHarvestTransaction>;
  /**
   * Vault address
   *
   */
  id: Scalars["ID"];
  name: Scalars["String"];
  rewardData: Array<VaultRewardData>;
  rewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  strategy: Scalars["Bytes"];
  symbol: Scalars["String"];
  totalSupply: Scalars["BigInt"];
  /**
   * Note that this field may not reflect the current value, as it is not updated on every
   * transfer event; rather, it is updated on deposit/stake/harvest.
   *
   */
  totalUnderlying: Scalars["BigInt"];
  underlying: Token;
  withdrawTransactions: Array<VaultWithdrawTransaction>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultAccountsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultAccount_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultDepositTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultHarvestTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultRewardDataArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultRewardData_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

/**
 * ERC-4626 Vault
 *
 */
export interface VaultWithdrawTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
  rewardPaidTransactions: Array<VaultRewardPaidTransaction>;
  rewards: Array<VaultAccountReward>;
  shares: Scalars["BigInt"];
  vault: Vault;
  withdrawTransactions: Array<VaultWithdrawTransaction>;
}

export interface VaultAccountDepositTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultDepositTransaction_Filter>;
}

export interface VaultAccountHarvestTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultHarvestTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultHarvestTransaction_Filter>;
}

export interface VaultAccountRewardPaidTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultRewardPaidTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultRewardPaidTransaction_Filter>;
}

export interface VaultAccountRewardsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultAccountReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultAccountReward_Filter>;
}

export interface VaultAccountWithdrawTransactionsArgs {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VaultWithdrawTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VaultWithdrawTransaction_Filter>;
}

export interface VaultAccountReward {
  __typename?: "VaultAccountReward";
  /**
   * {rewardsToken.id}.{vaultAccount.id}
   *
   */
  id: Scalars["ID"];
  /**
   * userRewardPerTokenPaid(account)
   *
   */
  rewardPerTokenPaid: Scalars["BigInt"];
  rewardToken: Token;
  /**
   * rewards(account)
   *
   */
  rewards: Scalars["BigInt"];
  vaultAccount: VaultAccount;
}

export interface VaultAccountReward_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  rewardPerTokenPaid?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardToken?: InputMaybe<Scalars["String"]>;
  rewardToken_?: InputMaybe<Token_Filter>;
  rewardToken_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_gt?: InputMaybe<Scalars["String"]>;
  rewardToken_gte?: InputMaybe<Scalars["String"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_lt?: InputMaybe<Scalars["String"]>;
  rewardToken_lte?: InputMaybe<Scalars["String"]>;
  rewardToken_not?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["String"]>;
  rewardToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with?: InputMaybe<Scalars["String"]>;
  rewardToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewards?: InputMaybe<Scalars["BigInt"]>;
  rewards_gt?: InputMaybe<Scalars["BigInt"]>;
  rewards_gte?: InputMaybe<Scalars["BigInt"]>;
  rewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewards_lt?: InputMaybe<Scalars["BigInt"]>;
  rewards_lte?: InputMaybe<Scalars["BigInt"]>;
  rewards_not?: InputMaybe<Scalars["BigInt"]>;
  rewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  depositTransactions_?: InputMaybe<VaultDepositTransaction_Filter>;
  harvestTransactions_?: InputMaybe<VaultHarvestTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  rewardPaidTransactions_?: InputMaybe<VaultRewardPaidTransaction_Filter>;
  rewards_?: InputMaybe<VaultAccountReward_Filter>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  assets: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  owner: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  shares: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultDepositTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assets?: InputMaybe<Scalars["BigInt"]>;
  assets_gt?: InputMaybe<Scalars["BigInt"]>;
  assets_gte?: InputMaybe<Scalars["BigInt"]>;
  assets_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assets_lt?: InputMaybe<Scalars["BigInt"]>;
  assets_lte?: InputMaybe<Scalars["BigInt"]>;
  assets_not?: InputMaybe<Scalars["BigInt"]>;
  assets_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  harvested: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  sender: Scalars["Bytes"];
  timestamp: Scalars["Int"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultHarvestTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  harvested?: InputMaybe<Scalars["BigInt"]>;
  harvested_gt?: InputMaybe<Scalars["BigInt"]>;
  harvested_gte?: InputMaybe<Scalars["BigInt"]>;
  harvested_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  harvested_lt?: InputMaybe<Scalars["BigInt"]>;
  harvested_lte?: InputMaybe<Scalars["BigInt"]>;
  harvested_not?: InputMaybe<Scalars["BigInt"]>;
  harvested_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
  lastUpdateTime: Scalars["Int"];
  periodFinish: Scalars["Int"];
  queuedRewards: Scalars["BigInt"];
  rewardPerTokenStored: Scalars["BigInt"];
  rewardRate: Scalars["BigInt"];
  token: Token;
  vault?: Maybe<Vault>;
}

export interface VaultRewardData_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastUpdateTime?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_gte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars["Int"]>>;
  lastUpdateTime_lt?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_lte?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not?: InputMaybe<Scalars["Int"]>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish?: InputMaybe<Scalars["Int"]>;
  periodFinish_gt?: InputMaybe<Scalars["Int"]>;
  periodFinish_gte?: InputMaybe<Scalars["Int"]>;
  periodFinish_in?: InputMaybe<Array<Scalars["Int"]>>;
  periodFinish_lt?: InputMaybe<Scalars["Int"]>;
  periodFinish_lte?: InputMaybe<Scalars["Int"]>;
  periodFinish_not?: InputMaybe<Scalars["Int"]>;
  periodFinish_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  queuedRewards?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_gt?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_gte?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  queuedRewards_lt?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_lte?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_not?: InputMaybe<Scalars["BigInt"]>;
  queuedRewards_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not?: InputMaybe<Scalars["BigInt"]>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not?: InputMaybe<Scalars["BigInt"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  reward: Scalars["BigInt"];
  rewardData: VaultRewardData;
  timestamp: Scalars["Int"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultRewardPaidTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  reward?: InputMaybe<Scalars["BigInt"]>;
  rewardData?: InputMaybe<Scalars["String"]>;
  rewardData_?: InputMaybe<VaultRewardData_Filter>;
  rewardData_contains?: InputMaybe<Scalars["String"]>;
  rewardData_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_ends_with?: InputMaybe<Scalars["String"]>;
  rewardData_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_gt?: InputMaybe<Scalars["String"]>;
  rewardData_gte?: InputMaybe<Scalars["String"]>;
  rewardData_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardData_lt?: InputMaybe<Scalars["String"]>;
  rewardData_lte?: InputMaybe<Scalars["String"]>;
  rewardData_not?: InputMaybe<Scalars["String"]>;
  rewardData_not_contains?: InputMaybe<Scalars["String"]>;
  rewardData_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_not_ends_with?: InputMaybe<Scalars["String"]>;
  rewardData_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_not_in?: InputMaybe<Array<Scalars["String"]>>;
  rewardData_not_starts_with?: InputMaybe<Scalars["String"]>;
  rewardData_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_starts_with?: InputMaybe<Scalars["String"]>;
  rewardData_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reward_gt?: InputMaybe<Scalars["BigInt"]>;
  reward_gte?: InputMaybe<Scalars["BigInt"]>;
  reward_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reward_lt?: InputMaybe<Scalars["BigInt"]>;
  reward_lte?: InputMaybe<Scalars["BigInt"]>;
  reward_not?: InputMaybe<Scalars["BigInt"]>;
  reward_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  timestamp: Scalars["Int"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  assets: Scalars["BigInt"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  owner: Scalars["Bytes"];
  receiver: Scalars["Bytes"];
  sender: Scalars["Bytes"];
  shares: Scalars["BigInt"];
  timestamp: Scalars["Int"];
  vault: Vault;
  vaultAccount: VaultAccount;
}

export interface VaultWithdrawTransaction_Filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assets?: InputMaybe<Scalars["BigInt"]>;
  assets_gt?: InputMaybe<Scalars["BigInt"]>;
  assets_gte?: InputMaybe<Scalars["BigInt"]>;
  assets_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  assets_lt?: InputMaybe<Scalars["BigInt"]>;
  assets_lte?: InputMaybe<Scalars["BigInt"]>;
  assets_not?: InputMaybe<Scalars["BigInt"]>;
  assets_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  receiver?: InputMaybe<Scalars["Bytes"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  receiver_not?: InputMaybe<Scalars["Bytes"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender?: InputMaybe<Scalars["Bytes"]>;
  sender_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sender_not?: InputMaybe<Scalars["Bytes"]>;
  sender_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vaultAccount?: InputMaybe<Scalars["String"]>;
  vaultAccount_?: InputMaybe<VaultAccount_Filter>;
  vaultAccount_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_gt?: InputMaybe<Scalars["String"]>;
  vaultAccount_gte?: InputMaybe<Scalars["String"]>;
  vaultAccount_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_lt?: InputMaybe<Scalars["String"]>;
  vaultAccount_lte?: InputMaybe<Scalars["String"]>;
  vaultAccount_not?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vaultAccount_not_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with?: InputMaybe<Scalars["String"]>;
  vaultAccount_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  asset?: InputMaybe<Scalars["String"]>;
  asset_?: InputMaybe<Token_Filter>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_gt?: InputMaybe<Scalars["String"]>;
  asset_gte?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_lt?: InputMaybe<Scalars["String"]>;
  asset_lte?: InputMaybe<Scalars["String"]>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  depositTransactions_?: InputMaybe<VaultDepositTransaction_Filter>;
  harvestTransactions_?: InputMaybe<VaultHarvestTransaction_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  rewardData_?: InputMaybe<VaultRewardData_Filter>;
  rewardPaidTransactions_?: InputMaybe<VaultRewardPaidTransaction_Filter>;
  strategy?: InputMaybe<Scalars["Bytes"]>;
  strategy_contains?: InputMaybe<Scalars["Bytes"]>;
  strategy_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  strategy_not?: InputMaybe<Scalars["Bytes"]>;
  strategy_not_contains?: InputMaybe<Scalars["Bytes"]>;
  strategy_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalUnderlying?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_gt?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_gte?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalUnderlying_lt?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_lte?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_not?: InputMaybe<Scalars["BigInt"]>;
  totalUnderlying_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlying?: InputMaybe<Scalars["String"]>;
  underlying_?: InputMaybe<Token_Filter>;
  underlying_contains?: InputMaybe<Scalars["String"]>;
  underlying_contains_nocase?: InputMaybe<Scalars["String"]>;
  underlying_ends_with?: InputMaybe<Scalars["String"]>;
  underlying_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  underlying_gt?: InputMaybe<Scalars["String"]>;
  underlying_gte?: InputMaybe<Scalars["String"]>;
  underlying_in?: InputMaybe<Array<Scalars["String"]>>;
  underlying_lt?: InputMaybe<Scalars["String"]>;
  underlying_lte?: InputMaybe<Scalars["String"]>;
  underlying_not?: InputMaybe<Scalars["String"]>;
  underlying_not_contains?: InputMaybe<Scalars["String"]>;
  underlying_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  underlying_not_ends_with?: InputMaybe<Scalars["String"]>;
  underlying_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  underlying_not_in?: InputMaybe<Array<Scalars["String"]>>;
  underlying_not_starts_with?: InputMaybe<Scalars["String"]>;
  underlying_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  underlying_starts_with?: InputMaybe<Scalars["String"]>;
  underlying_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
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
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type AuraBalMintTransactionsQueryVariables = Exact<{
  startTimestamp: Scalars["Int"];
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
  poolId: Scalars["ID"];
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
  first?: InputMaybe<Scalars["Int"]>;
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
  vaultId: Scalars["ID"];
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
  accountId?: InputMaybe<Scalars["String"]>;
  hasAccount?: InputMaybe<Scalars["Boolean"]>;
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
  startTimestamp: Scalars["Int"];
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
  first: Scalars["Int"];
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
  address: Scalars["String"];
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
  address: Scalars["String"];
  startTimestamp: Scalars["Int"];
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
  addresses: Array<Scalars["Bytes"]> | Scalars["Bytes"];
  poolIds: Array<Scalars["String"]> | Scalars["String"];
  startTimestamp: Scalars["Int"];
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
  first: Scalars["Int"];
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
  userAddress: Scalars["String"];
  block: Scalars["Int"];
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
  poolId: Scalars["String"];
  startTimestamp: Scalars["Int"];
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
  startTimestamp: Scalars["Int"];
  endTimeStamp: Scalars["Int"];
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  asset: Scalars["Bytes"];
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
  previousBlockNumber: Scalars["Int"];
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
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
        where: { staked_gt: 1000000000000000000 }
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
        where: { shares_gt: 1000000000000000000 }
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

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
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
