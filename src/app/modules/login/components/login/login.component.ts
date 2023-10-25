import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  redirectToResidentLogin() {
    this.router.navigate(['resident-login']);
  }

  redirectToBarangayOfficialLogin() {
    this.router.navigate(['barangay-login']);
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
}
