import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageCreated = false;
  log = [];

  onToggleDetails() {
  	this.messageCreated = !this.messageCreated;
  	this.log.push(this.log.length + 1);
  }
}