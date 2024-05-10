import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import router
import { ActivatedRoute } from '@angular/router'; // Import activatedRoute

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  fetchedInfo: any;

 constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} 

  ngOnInit() {
    this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
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

