import { Component, Output, EventEmitter } from '@angular/core';

//Import Account DataModel
import { DataModales_Accounts as Account } from 'src/model/account-model';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})

export class AddAccountComponent {

  @Output() accountAdded = new EventEmitter<Account.addAccount>();

  onSubmit(accountName:string|any,accountType:string|any){
    let account = new Account.addAccount;
    account.name=accountName;
    account.type=accountType;
    this.accountAdded.emit(account);
    console.log(account);
  }
}
