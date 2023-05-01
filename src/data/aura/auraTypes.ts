export interface AuraLockers{
    id: string
    address: string
    totalSupply: string
    lockedSupply: string
    accounts: LockerAccount[]
}

export interface Account{
    id: string
}

export interface UserData{
    id: string
}

export interface LockerAccount{
    id: string
    balanceLocked: string,
}