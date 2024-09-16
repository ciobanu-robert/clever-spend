import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  dark = false;
  change() {
    this.dark = !this.dark;
  }
}
