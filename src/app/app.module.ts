import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProvidersService} from '../app/services/providers.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,   

    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
