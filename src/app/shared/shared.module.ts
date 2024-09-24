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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DailyExpensesTableComponent } from './daily-expenses-table/daily-expenses-table.component';


@NgModule({
  declarations: [
    NavComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    PartnerComponent,
    SelectComponent,
    FixedExpensesTableComponent,
    DatePickerComponent,
    AddItemComponent,
    DailyExpensesTableComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    PartnerComponent,
    SelectComponent,
    FixedExpensesTableComponent,
    DatePickerComponent,
    AddItemComponent,
    DailyExpensesTableComponent,
  ]
})
export class SharedModule { }
