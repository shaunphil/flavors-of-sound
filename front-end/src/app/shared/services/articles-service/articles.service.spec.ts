/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticlesService } from './articles.service';

describe('ArticlesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService]
    });
  });

  it('should ...', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
