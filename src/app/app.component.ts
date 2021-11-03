import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonDisplay: string = 'block';
  formDisplay: string = 'none';
  updateDisplay: string = 'none';
  name: string = '';
  email: string = '';
  contactNo: string = '';

  openFunction() {
    this.formDisplay = 'flex';
    this.buttonDisplay = 'none';
  }
  updateFunction() {
    this.formDisplay = 'none';
    this.updateDisplay = 'flex';
    this.name;
    this.contactNo;
    this.email;
  }
}
