import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barangay-login',
  templateUrl: './barangay-login.component.html',
  styleUrls: ['./barangay-login.component.css'],
})
export class BarangayLoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordVisibilityIcon: string = 'visibility';
  passwordFieldType: string = 'password';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
      // Get the email and password form controls and check if they exist
      const emailControl = this.loginForm.get('email');
      const passwordControl = this.loginForm.get('password');

      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;

        // Example logic: Check if the email and password match admin credentials
        if (email === 'admin@example.com' && password === 'adminpassword') {
          // Redirect to the admin page
          this.router.navigate(['/admin']);
        } else {
          
          alert('Invalid credentials. Please try again.');
        }
      } else {
      
        alert('Form controls are null. Please check your form setup.');
      }
    } else {
      
      alert('Please fill in a valid email and password.');
    }
  }
}
