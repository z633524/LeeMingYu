import { Component, OnInit } from '@angular/core';

export class Food {
  name: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
food: Food[] = [
    {name:"素猴菇三杯雞(蛋奶素)", price: 300, img:"/assets/images/mushroom.jpg"},
    {name:"養生藥膳花雕雞",price: 300, img:"/assets/images/soup.jpg"},
    {name:"北海道鮭魚定食",price: 340, img:"/assets/images/fish.jpg"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
