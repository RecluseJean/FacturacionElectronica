import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [  

  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },   
  { path: '', redirectTo: 'signin', pathMatch: 'full' },  


  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard.module').then(module =>module.DashboardModule)
  }

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

