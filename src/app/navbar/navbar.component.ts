import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myTitle = '教士會館';
  // 加入段落id
myMenu = [
    { title: "回到首頁", url: "#"},
    { title: "豐富菜色", url: '#feature-section'},
    { title: "營業項目", url: '#product-section'},
    { title: "聯絡我們", url: '#contact-section'}
  ];
  logo = "/assets/images/house_icon_white.png";
  constructor() { }

  ngOnInit() {
  }
}
