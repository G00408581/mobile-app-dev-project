import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  name: string = ''; // storing name..
  surname: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToTab3() {
    this.router.navigate(['/tabs/tab3']);
  }

  goToTab4() {
    this.router.navigate(['/tabs/tab4']);
  }

  goToTab5() {
    this.router.navigate(['/tabs/tab5']);
  }

  ngOnInit() { //retriving the name, other methods kept breaking this is the only one i manged to get working.
    this.route.queryParams.subscribe(params => {
      if (params && params['name']) { // check if name exists though the app should not go this far without it
        this.name = params['name']; 
      }
      if (params && params['surname']) { 
        this.surname = params['surname'];
      }
    });
  }
}
