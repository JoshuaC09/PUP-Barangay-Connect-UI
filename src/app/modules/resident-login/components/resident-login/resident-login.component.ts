import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resident-login',
  templateUrl: './resident-login.component.html',
  styleUrls: ['./resident-login.component.css']
})
export class ResidentLoginComponent implements OnInit {

  loginForm: FormGroup;
  passwordVisibilityIcon: string = 'visibility';
  passwordFieldType: string = 'password';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      emailOrPhone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() { }

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordVisibilityIcon = 'visibility_off';
    } else {
      this.passwordFieldType = 'password';
      this.passwordVisibilityIcon = 'visibility';
    }
  }

  onLoginClick() {
    if (this.loginForm.valid) {
      const emailOrPhoneControl = this.loginForm.get('emailOrPhone');
      const passwordControl = this.loginForm.get('password');

      if (emailOrPhoneControl && passwordControl) {
        const emailOrPhone = emailOrPhoneControl.value;
        const password = passwordControl.value;

        if ((emailOrPhone === 'resident@example.com' || emailOrPhone === '+1234567890') && password === 'adminpassword') {
          this.router.navigate(['home']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        alert('Form controls are null. Please check your form setup.');
      }
    } else {
      alert('Please fill in a valid email or phone and password.');
    }
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
  redirectToForgotPassword() {
  
    this.router.navigate(['forgot-password']);
  }

}
