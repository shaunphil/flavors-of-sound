import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailSignupService {
  private signupEndpoint = "http://localhost:3000/api/temp-users";

  constructor(
    private http: Http
  ) { }

  signupUser(user) {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.signupEndpoint, user, options)
                    .map( (response: Response) => response);
  }
}
