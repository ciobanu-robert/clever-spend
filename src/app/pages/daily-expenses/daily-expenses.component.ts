import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';



@Component({
  selector: 'app-daily-expenses',
  standalone: false,
  templateUrl: './daily-expenses.component.html',
  styleUrl: './daily-expenses.component.scss',
})
export class DailyExpensesComponent {
  constructor(public mode: DarkModeService) {}
  
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
  
  days = [];
}
