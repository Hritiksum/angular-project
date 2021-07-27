import { Injectable } from "@angular/core";
import { DataModales_Accounts as Account} from "src/model/account-model"

//service
import { AccountLoggingService } from "./accountLogging.service";

//to add another service in service
@Injectable()

export class AccountDataService{
    account:Account.addAccount[]=[];

    constructor(private AccountLogging:AccountLoggingService){}

    onCreateAccount(accountName:string,accountType:string){
        this.account.push(new Account.addAccountAttribute(accountName,accountType)); 
        this.AccountLogging.logNewCreateAccount(accountName,accountType);
    }
    onTypeUpdate(id:number,newtype:string){
        this.account[id].type=newtype;
        this.AccountLogging.logCurrentAccountTypeChange(newtype);
    }
}