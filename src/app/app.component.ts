import { Component, OnInit } from '@angular/core';
import { DataModales_Accounts as Account } from 'src/model/account-model';

//service
import { AccountDataService } from './services/accountData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test1';
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
