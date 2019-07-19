import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userObj: User;
  inputText: string;

  constructor(){
    this.userObj = new User();
    this.userObj.name = "Foo Bar";
    this.userObj.designation = "Software Developer";
    this.userObj.address = "1000 Street City State";
    this.userObj.phone = ['123-567-2146'];
  }
}
