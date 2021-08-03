import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { AccountDataService } from 'src/app/services/accountData.service';
import { DataModales_Accounts as AccountData } from 'src/model/account-model';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  accountDetail: AccountData.addAccount|any;
  i:number|any;
  constructor(private AccountDataservice: AccountDataService,
              private activeRoute: ActivatedRoute) {
                this.activeRoute.params.subscribe((params:Params) => {
                  this.i = params['id'];
                  this.accountDetail = this.AccountDataservice.getAccountDetail(this.i);
                });
  }

  ngOnInit(){
  }
}
