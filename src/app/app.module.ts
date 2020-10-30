import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { SaladeComponent } from './components/salade/salade.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { ShowallComponent } from './components/showall/showall.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    PatisserieComponent,
    CuisineComponent,
    SaladeComponent,
    RegisterComponent,
    LoginComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
