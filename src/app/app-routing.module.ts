import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { NewBuildingComponent } from './pages/new-building/new-building.component';
import { PromotionComponent } from './pages/promotion/promotion.component';

const routes: Routes = [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registration',
        component:RegistrationComponent
      },
      {
        path:'property-list',
        component:PropertyListComponent
      },
      {
        path:'new-building',
        component:NewBuildingComponent
      },
      {
        path:'promotion',
        component:PromotionComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
