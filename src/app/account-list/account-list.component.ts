import { Component, Input, Output, EventEmitter} from '@angular/core';

//DataModel
import { DataModales_Accounts as Account } from 'src/model/account-model';

//service
import { AccountLoggingService } from '../services/accountLogging.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent {
  @Input() Accnt: Account.addAccount|any;
  @Input() Id: number|any;
  @Output() AccountStateChange = new EventEmitter<{id: number, newType:string}>();

  constructor(private AccountLogging: AccountLoggingService){}

  OnStateChange(type: string){
    this.AccountStateChange.emit({id: this.Id, newType: type});
    this.AccountLogging.logCurrentAccountTypeChange(type);
  }
}
