import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { OfficeLayoutComponent } from './office-layout/office-layout.component';
import { VacationManagementComponent } from './vacation-management/vacation-management.component';
import { ShiftSchedulingComponent } from './shift-scheduling/shift-scheduling.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FireEmployeeComponent } from './employee/fire-employee/fire-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    EventManagementComponent,
    OfficeLayoutComponent,
    VacationManagementComponent,
    ShiftSchedulingComponent,
    CreateEmployeeComponent,
    FireEmployeeComponent,
    EditEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
