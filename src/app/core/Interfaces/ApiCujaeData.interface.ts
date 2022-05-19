export interface ApiCujaeData{
    data: Data | null
    error: string | null

}

interface Data{
    __primaryGroup: string
    accountExpires: string
    badPasswordTime: string
    badPwdCount: string
    cUJAEPersonDNI: string
    cUJAEPersonExternal: string
    cUJAEPersonType: string
    cn: string
    codePage: string
    countryCode: string
    displayName: string
    distinguishedName: string
    givenName: string
    instanceType: string
    lastLogoff: string
    lastLogon: string
    lastLogonTimestamp: number
    lockoutTime: string
    logonCount: string
    name: string
    objectCategory: string
    objectClass: Array<string>
    objectGUID: string
    objectSid: string
    pager: string
    primaryGroupID: string
    pwdLastSet: number
    sAMAccountName: string
    sAMAccountType: string
    uSNChanged: string
    uSNCreated: string
    userAccountControl: string
    userPrincipalName: string
    whenChanged: string
    whenCreated: string
}