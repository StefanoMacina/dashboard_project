export class UserModel{
    constructor(
        public email : string,
        public id : string,
        private _token : string,
        private _expirationDate : Date
    ){
    
    }

    // verificare che il token sia valido
    get token(){
        if(!this._expirationDate || new Date() > this._expirationDate ){
            return null
        }
        return this._token
    }
}