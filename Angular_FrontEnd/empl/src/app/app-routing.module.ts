import { HomePageCenterComponent } from "./home-page/home-page-center/home-page-center.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGaurdService } from "./service/auth-gaurd.service";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { RegisterEmployeeComponent } from "./register-employee/register-employee.component";
import { RegisterPersonComponent } from "./register-person/register-person.component";
import { RegisterVisaComponent } from "./register-visa/register-visa.component";
import { RegisterAddressComponent } from "./register-address/register-address.component";
import { RegisterContactComponent } from "./register-contact/register-contact.component";
import { HrHomePageComponent } from "./hr-home-page/hr-home-page.component";
const routes: Routes = [
  {
    path: "employee-",
    component: HomePageComponent,
    canActivate: [AuthGaurdService],
  },
  { path: "login", component: LoginComponent },
  { path: "register-user", component: RegisterUserComponent },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: "register-employee",
    component: RegisterEmployeeComponent,
  },
  {
    path: "hr-home-page",
    component: HrHomePageComponent,
  },
  {
    path: "register-person",
    component: RegisterPersonComponent,
  },
  {
    path: "register-visa",
    component: RegisterVisaComponent,
  },
  {
    path: "register-address",
    component: RegisterAddressComponent,
  },
  { path: "register-contact", component: RegisterContactComponent },
  {
    path: "home-page",
    //loadChildren: () =>  import('./home-page/home-page.module').then(m => m.HomePageModule),
    /*redirectTo: '/home-page-center',
    pathMatch: 'full'*/
    component: HomePageCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
