/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailSignupService } from './email-signup.service';

describe('EmailSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailSignupService]
    });
  });

  it('should ...', inject([EmailSignupService], (service: EmailSignupService) => {
    expect(service).toBeTruthy();
  }));
});
