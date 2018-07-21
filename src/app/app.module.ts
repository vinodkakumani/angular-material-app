import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Shared Service Module - All provider imports will go in this module
// No other module is allowed to import this module.
import { ServiceModule } from './modules/service/service.module';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/feature/login/login.module';
import { RegistrationModule } from './modules/feature/registration/registration.module';
import { DashboardModule } from './modules/feature/dashboard/dashboard.module';
import { MaterialExamplesModule } from './modules/feature/material-examples/material-examples.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ChatboxComponent } from './components/shared/chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceModule,
    LoginModule,
    RegistrationModule,
    DashboardModule,
    MaterialExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
