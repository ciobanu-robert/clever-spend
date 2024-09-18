import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    NavComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    NavComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
  ]
})
export class SharedModule { }
