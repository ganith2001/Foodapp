import { Component, OnInit } from '@angular/core';
export class City {
  city:string;
}
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
cities:City[]=[
  {city:"Bangalore"},
  {city:"Delhi"},
  {city:"Mumbai"},
  {city:"Chennai"}
]
name1:string="Drop" ;
onClick(c:City){
  this.name1=c.city;
}
}
