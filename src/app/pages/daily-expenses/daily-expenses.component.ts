import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

import {FormControl} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-daily-expenses',
  standalone: false,
  templateUrl: './daily-expenses.component.html',
  styleUrl: './daily-expenses.component.scss',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyExpensesComponent {
  constructor(public mode: DarkModeService) {}

  readonly date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  
  valueDate() {
    return this.date.value?.format("MMMM YYYY");
  }
  
  partners = [
    {
      status: 'You',
      image: '',
      name: 'Robert',
      balance: 657,
    },
    {
      status: 'Partner',
      image: '',
      name: 'Alexandra',
      balance: 493,
    },
  ];
  
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
}
