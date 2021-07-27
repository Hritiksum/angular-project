import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { SharedModule } from './shared/shared.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//service
import { AccountLoggingService } from './services/accountLogging.service';
import { AccountDataService } from './services/accountData.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    // FontAwesomeModule
  ],
  providers: [AccountLoggingService,
              AccountDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
