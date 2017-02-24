import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout( () => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
