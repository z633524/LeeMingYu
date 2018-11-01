import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  title: string = 'My first AGM project';
  lat: number = 25.174926;
  lng: number = 121.4336303;
}
