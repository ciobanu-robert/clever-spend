import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  dark = true;
  change() {
    this.dark = !this.dark;
  }
}
