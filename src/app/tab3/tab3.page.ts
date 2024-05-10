import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import router
import { ActivatedRoute } from '@angular/router'; // Import activatedRoute

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  fetchedInfo: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} //  router and activatedRoute

  ngOnInit() {
    this.http.get('https://catfact.ninja/fact') //fetching info/data
      .subscribe(
        (data) => {
          this.fetchedInfo = data;
        },
      );
  }

  goToTab2() {
    this.router.navigate(['/tabs/tab2']);
  }
}
