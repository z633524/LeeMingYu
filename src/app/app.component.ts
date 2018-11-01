import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = '教士會館';
  myMenu = ["教士會館","會館訊息","特色餐點","交通資訊"];
}
