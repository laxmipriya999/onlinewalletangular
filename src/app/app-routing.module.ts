import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositeComponent } from './deposite/deposite.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 {
   path:'loginsuccess',
   component:LoginsuccessComponent,
   children:[

  
  {path:'deposite',component:DepositeComponent}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
