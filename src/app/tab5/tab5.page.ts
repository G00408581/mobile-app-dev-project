import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import router
import { ActivatedRoute } from '@angular/router'; // Import activatedRoute

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {

  fetchedInfo: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} 

  ngOnInit() {
    this.http.get('https://www.boredapi.com/api/activity')
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