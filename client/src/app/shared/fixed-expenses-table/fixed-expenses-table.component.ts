import { Component, Input } from '@angular/core';
import { IFixed } from '../../interfaces/ifixed';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-fixed-expenses-table',
  standalone: false,
  templateUrl: './fixed-expenses-table.component.html',
  styleUrl: './fixed-expenses-table.component.scss'
})
export class FixedExpensesTableComponent {
  constructor(public mode: DarkModeService) {}

@Input() fixed: IFixed[] = [];
}
