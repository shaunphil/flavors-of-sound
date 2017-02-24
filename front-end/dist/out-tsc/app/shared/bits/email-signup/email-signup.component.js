var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmailSignupService } from '../../services/email-signup-service/email-signup.service';
import { msg } from './messages';
var EmailSignupComponent = (function () {
    function EmailSignupComponent(emailSignupService) {
        this.emailSignupService = emailSignupService;
        this.user = {
            firstName: null,
            email: null
        };
        this.error = false;
        this.errorMessage = "";
        this.userHasSubscribed = false;
    }
    EmailSignupComponent.prototype.subscribeUser = function () {
        var _this = this;
        this.emailSignupService.signupUser(this.user)
            .subscribe(function (data) {
            var message = data.json().message;
            console.log("Message: " + message);
            _this.updateUIWithMessage(message);
        });
    };
    EmailSignupComponent.prototype.updateUIWithMessage = function (message) {
        if (message === msg.SUCCESS) {
            this.user.firstName = '';
            this.user.email = '';
            this.userHasSubscribed = true;
            this.error = false;
        }
        else if (message === msg.USER_ALREADY_EXISTS) {
            this.error = true;
            this.errorMessage = ("Looks like you've already signed up with that email! Emails are sent about once a week.");
            this.userHasSubscribed = false;
        }
        else if (message === msg.INVALID_NAME) {
            this.error = true;
            this.errorMessage = ("Please enter your first name, nickname, or some other name that you'd like us to call you.");
            this.userHasSubscribed = false;
        }
        else if (message === msg.INVALID_EMAIL) {
            this.error = true;
            this.errorMessage = ("Make sure you've typed your email address correctly");
            this.userHasSubscribed = false;
        }
    };
    EmailSignupComponent.prototype.ngOnInit = function () { };
    return EmailSignupComponent;
}());
EmailSignupComponent = __decorate([
    Component({
        selector: 'email-signup',
        templateUrl: './email-signup.component.html',
        styleUrls: ['./email-signup.component.css']
    }),
    __metadata("design:paramtypes", [EmailSignupService])
], EmailSignupComponent);
export { EmailSignupComponent };
//# sourceMappingURL=../../../../../../src/app/shared/bits/email-signup/email-signup.component.js.map