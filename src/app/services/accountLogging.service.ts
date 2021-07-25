export class AccountLoggingService{
    logNewCreateAccount(accountName:string, type:string){
        console.log("New account named "+accountName+" of type "+type);
    }
    logCurrentAccountTypeChange(Newtype:string){
        console.log("Account Status Change to "+Newtype);
    }
}