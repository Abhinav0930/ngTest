import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { MyusersComponent } from '../myusers/myusers.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DisplayUserComponent } from '../display-user/display-user.component';

const routes: Routes = [{ path: 'myUsers', component: MyusersComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path:'detail/:id', component: DisplayUserComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
