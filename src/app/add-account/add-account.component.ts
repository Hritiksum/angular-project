import { Component, Output, EventEmitter } from '@angular/core';

//Import Account DataModel
import { DataModales_Accounts as Account } from 'src/model/account-model';

//service
import { AccountDataService } from '../services/accountData.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})

export class AddAccountComponent {

  // @Output() accountAdded = new EventEmitter<Account.addAccount>();

  constructor(private AccountData: AccountDataService){}

  onSubmit(accountName:string|any,accountType:string|any){
    // let account = new Account.addAccount;
    // account.name=accountName;
    // account.type=accountType;
    let account = this.AccountData.onCreateAccount(accountName,accountType);
    // this.accountAdded.emit(account);
    // this.AccountLogging.logNewCreateAccount(account.name,account.type);
  }
}
