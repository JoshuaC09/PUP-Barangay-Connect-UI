import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotlinesComponent } from './components/hotlines/hotlines.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HotlinesComponent
  ],
  imports: [
    CommonModule,
     MatTableModule
  ]
})
export class HotlinesModule { }
