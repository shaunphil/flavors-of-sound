import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  category = {
    name: "Some Category"
  };

  constructor() { }
  ngOnInit() { }
}
