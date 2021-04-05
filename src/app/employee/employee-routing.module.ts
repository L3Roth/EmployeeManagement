import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeManagementComponent } from "./employee-management/employee-management.component";

const routes: Routes = [
    {
      path: '',
      component: EmployeeManagementComponent
    }
    
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [

    ]
})

export class EmployeeRoutingModule {}