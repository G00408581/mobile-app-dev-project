import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  nameInputFilled: boolean = false; //disabling the button until the name is entered.
  name: string = ''; // storing name
  surname: string = ''; 

  constructor(private router: Router) {}

  checkInput(event: any) {
    this.nameInputFilled = event.target.value.trim() !== '';
  }

  goToTab2() {
    if (this.nameInputFilled) {
      this.router.navigate(['/tabs/tab2'], { queryParams: { name: this.name, surname: this.surname } }); // sending the name & surname to next page via queary parameter
    }
  }

}
