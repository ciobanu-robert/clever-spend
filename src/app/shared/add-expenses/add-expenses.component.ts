import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-add-expenses',
  standalone: false,
  templateUrl: './add-expenses.component.html',
  styleUrl: './add-expenses.component.scss'
})
export class AddExpensesComponent {
  constructor(public mode: DarkModeService) {}

}
