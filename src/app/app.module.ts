import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Shared Service Module - All provider imports will go in this module
// No other module is allowed to import this module.
import { ServiceModule } from './modules/service/service.module';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/feature/login/login.module';
import { DashboardModule } from './modules/feature/dashboard/dashboard.module';
import { RegistrationModule } from './modules/feature/registration/registration.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    LoginModule,
    RegistrationModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
