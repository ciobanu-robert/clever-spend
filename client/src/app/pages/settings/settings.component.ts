import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(public mode: DarkModeService) {}
}
