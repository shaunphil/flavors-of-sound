import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})

export class ArticlesPageComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
