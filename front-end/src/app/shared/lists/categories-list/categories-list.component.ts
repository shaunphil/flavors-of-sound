import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories-service/categories.service';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  categories = [];

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe(data => this.categories = data.json());
  }

  transitionToCategory(slug) {
    this.router.navigate(['articles', 'categories', slug]);
  }
}
