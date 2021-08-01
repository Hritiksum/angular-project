import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';

//service
import { AccountLoggingService } from './services/accountLogging.service';
import { AccountDataService } from './services/accountData.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    AccountModule
  ],
  providers: [AccountLoggingService,
              AccountDataService,
              AuthGuard,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
