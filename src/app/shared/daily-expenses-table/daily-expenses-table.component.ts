import { Component, Input } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-daily-expenses-table',
  standalone: false,
  templateUrl: './daily-expenses-table.component.html',
  styleUrl: './daily-expenses-table.component.scss'
})
export class DailyExpensesTableComponent {
  constructor(public mode: DarkModeService) {}

  @Input() days = [];
}
