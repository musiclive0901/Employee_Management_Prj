import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AngularMaterialModule } from "./angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BasicAuthHtppInterceptorService } from "./service/basic-auth-interceptor.service";
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { RegisterEmployeeComponent } from "./register-employee/register-employee.component";
import { RegisterPersonComponent } from "./register-person/register-person.component";
import { RegisterVisaComponent } from "./register-visa/register-visa.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomePageComponent,
    RegisterUserComponent,
    RegisterEmployeeComponent,
    RegisterPersonComponent,
    RegisterVisaComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
