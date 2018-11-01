import { Component, OnInit } from '@angular/core';

export class Scenery {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  scenery: Scenery[] = [
    {img:"assets/images/house_river.jpg",title:"馬偕故居",desc:"鄰近淡水河岸，馬偕故居是馬偕博士在1875年所建，他於此結婚生子，也在此臨終。這種西斑牙式的白堊孤廊建築，不僅適合熱帶氣候，其優美的造型配合青翠的埔頂，展望淡水河與觀音山。"},
    {img:"assets/images/oxford.jpg",title:"牛津學堂",desc:"牛津學堂，是加拿大基督教長老教會傳教士馬偕博士於1882年在台灣淡水創立的西式現代化學校。現存於真理大學校地內。"},
    {img:"assets/images/pastor.jpg",title:"牧師樓",desc:"牧師樓位於真理大學內, 由外籍傳教士吳威廉牧師設計, 建於1909年, 給男傳教士使用, 是一棟美麗的紅磚拱形迴廊建築。現今規劃為古蹟庭園咖啡, "},
  ];
  constructor() { }
  ngOnInit() {}
}
