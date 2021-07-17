import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'view', component:ViewComponent 
  },
  {
    path:'update', component:UpdateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
