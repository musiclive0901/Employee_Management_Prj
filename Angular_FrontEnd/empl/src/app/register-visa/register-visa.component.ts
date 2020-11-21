import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AddVisaService } from "../service/add-visa.service";
import { AddApplicationService } from "../service/add-application.service";

@Component({
  selector: "app-register-visa",
  templateUrl: "./register-visa.component.html",
  styleUrls: ["./register-visa.component.css"],
})
export class RegisterVisaComponent implements OnInit {
  visaType: string | any;
  active: string | any;
  createUser: string | any;
  constructor(
    private router: Router,
    private addVisaservice: AddVisaService,
    private addAppService: AddApplicationService
  ) {
    this.createUser = localStorage.getItem("username");
  }

  registerVisa() {
    this.addVisaservice
      .registerVisa(this.visaType, this.active, this.createUser)
      .subscribe(
        (data) => {
          this.addAppService.registerEmployeeTable(1111, "OnBoarding");
          this.router.navigate(["/login"]);
        },
        (error) => {}
      );
  }

  ngOnInit() {}
}