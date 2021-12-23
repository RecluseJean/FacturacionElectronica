import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { ComponentsModule } from './pages/components/components.module';
//Signin
import { SignInModule } from './pages/sign-in/sign-in.module';
//Dashboard
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    SignInModule,
    DashboardModule,
    AppRoutingModule,

    ComponentsModule,
    SignUpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
