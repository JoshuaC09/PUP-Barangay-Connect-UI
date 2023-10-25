import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangayLoginComponent } from './components/barangay-login/barangay-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BarangayLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatInputModule,
    MatFormFieldModule, 
    MatCardModule,
    MatIconModule,

   
  ]
})
export class BarangayLoginModule { }
