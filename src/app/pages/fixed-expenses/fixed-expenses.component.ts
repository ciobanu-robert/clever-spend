import { Component } from '@angular/core';
import { IFixed } from '../../interfaces/ifixed';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-fixed-expenses',
  standalone: false,
  templateUrl: './fixed-expenses.component.html',
  styleUrl: './fixed-expenses.component.scss'
})
export class FixedExpensesComponent {
  constructor(public mode: DarkModeService) {}

  partners = [
    {
      status: 'You',
      image: '',
      name: 'Robert',
      income: 2000,
    },
    {
      status: 'Partner',
      image: '',
      name: 'Alexandra',
      income: 1500,
    },
  ];

  split = ['Proportional', '75/25', '50/50', '25/75'];

  fixed: IFixed[] = [
    {
      name: 'Rent',
      household: 2000,
      partner1: 1143,
      partner2: 857,
    },
    {
      name: 'Electricity',
      household: 100,
      partner1: 57,
      partner2: 57,
    },
    {
      name: 'Internet',
      household: 100,
      partner1: 57,
      partner2: 43,
    },
    {
      name: 'Phone',
      household: 50,
      partner1: 29,
      partner2: 21,
    },
    {
      name: 'Groceries',
      household: 50,
      partner1: 29,
      partner2: 21,
    },
    {
      name: 'Car',
      household: 50,
      partner1: 29,
      partner2: 21,
    },
  ];
}
