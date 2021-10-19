import { Component,Input } from '@angular/core';
export class arr{
  id:number; 
  items:number;
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodapp';
  var1:number;
  var2:number;
  var3:number;
  array:arr[];
  
  childEvent(q){
      this.var1=q
  }
  childEvent2(q){ 
      this.var2=q
      
}
childEvent3(q){ 
  this.var3=q   
}
}
