import { DataModales_Accounts as Account} from "src/model/account-model"

export class AccountDataService{
    account:Account.addAccount[]=[];

    onCreateAccount(accountName:string,accountType:string){
        this.account.push(new Account.addAccountAttribute(accountName,accountType)); 
    }
    onTypeUpdate(id:number,newtype:string){
        this.account[id].type=newtype;
    }
}