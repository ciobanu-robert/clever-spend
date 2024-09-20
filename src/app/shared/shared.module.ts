import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PartnerComponent } from './partner/partner.component';
import { SelectComponent } from './select/select.component';
import { FixedExpensesTableComponent } from './fixed-expenses-table/fixed-expenses-table.component';



@NgModule({
  declarations: [
    NavComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    PartnerComponent,
    SelectComponent,
    FixedExpensesTableComponent,
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
    PartnerComponent,
    SelectComponent,
    FixedExpensesTableComponent,
  ]
})
export class SharedModule { }
