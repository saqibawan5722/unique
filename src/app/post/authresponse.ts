export interface Authresponse {
    roles: string;
    idToken: string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,

    // use in sginIn(payload)
    registered?: boolean
}
