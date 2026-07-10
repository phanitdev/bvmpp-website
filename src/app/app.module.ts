import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { CreatePropertyComponent } from './pages/create-property/create-property.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { NewBuildingsComponent } from './pages/new-buildings/new-buildings.component';
import { NewPromotionComponent } from './pages/new-promotion/new-promotion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertyListComponent,
    CreatePropertyComponent,
    RegistrationComponent,
    HomeComponent,
    PromotionComponent,
    NewBuildingsComponent,
    NewPromotionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
