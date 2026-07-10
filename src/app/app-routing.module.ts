import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { NewBuildingsComponent } from './pages/new-buildings/new-buildings.component';
import { NewPromotionComponent } from './pages/new-promotion/new-promotion.component';

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
        path:'promotion',
        component:PromotionComponent
      },
      {
        path:'new-buildings',
        component:NewBuildingsComponent
      },
      {
        path:'new-promotion',
        component:NewPromotionComponent
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
