import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { LoginComponent } from './login/login.component';
import { OfficeLayoutComponent } from './office-layout/office-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShiftSchedulingComponent } from './shift-scheduling/shift-scheduling.component';
import { VacationManagementComponent } from './vacation-management/vacation-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-root', pathMatch: 'full'},
  { 
    path: 'app-employee-management', 
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)

  },
  { path: 'app-event-management', component: EventManagementComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-register', component: RegisterComponent},
  { path: 'app-office-layout', component: OfficeLayoutComponent },
  { path: 'app-shift-scheduling', component: ShiftSchedulingComponent },
  { path: 'app-vacation-management', component: VacationManagementComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
