import { Component, OnInit } from '@angular/core';
import { DataModales_Accounts as Account } from 'src/model/account-model';

//service
import { AccountDataService } from 'src/app/services/accountData.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {
  account:Account.addAccount[] = [];

  constructor(private AccountData:AccountDataService){}

  ngOnInit(){
    this.account = this.AccountData.account;
  }
  // onAccountCreate(newAccount: {name: string, type: string}){
  //   this.account.push(newAccount);
  //   console.log(this.account);
  // }
  // StateChange(updatedType: {id: number, newType: string}){
  //   this.account[updatedType.id].type = updatedType.newType;
  //   console.log(this.account);
  // }
}
