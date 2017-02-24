import { Component, OnInit } from '@angular/core';
import { EmailSignupService } from '../../services/email-signup-service/email-signup.service';
import * as EmailValidator from 'email-validator';
import { msg } from './messages';

@Component({
  selector: 'email-signup',
  templateUrl: './email-signup.component.html',
  styleUrls: ['./email-signup.component.css']
})

export class EmailSignupComponent implements OnInit {
  constructor(
    private emailSignupService: EmailSignupService
  ) { }

  user = {
    firstName: null,
    email: null
  }

  error = false;
  errorMessage = "";
  userHasSubscribed = false;

  subscribeUser() {
    this.emailSignupService.signupUser(this.user)
    .subscribe(data => {
      let message = data.json().message;
      console.log("Message: " + message);
      this.updateUIWithMessage(message);
    });
  }

  updateUIWithMessage(message) {
    if (message === msg.SUCCESS) {
      this.user.firstName = '';
      this.user.email     = '';
      this.userHasSubscribed = true;
      this.error = false;
    } else if (message === msg.USER_ALREADY_EXISTS) {
      this.error = true;
      this.errorMessage = ("Looks like you've already signed up with that email! Emails are sent about once a week.");
      this.userHasSubscribed = false;
    } else if (message === msg.INVALID_NAME) {
      this.error = true;
      this.errorMessage = ("Please enter your first name, nickname, or some other name that you'd like us to call you.");
      this.userHasSubscribed = false;
    } else if (message === msg.INVALID_EMAIL) {
      this.error = true;
      this.errorMessage = ("Make sure you've typed your email address correctly");
      this.userHasSubscribed = false;
    }
  }

  ngOnInit() { }
}
