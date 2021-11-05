import { Component,Input,OnInit } from '@angular/core';
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
  var4:number;
  var5:number;
  index:number;
  quantity:number;
  arr=[]
  ngOnInit(): void {
      this.quantity=0
  }

childEvent3(q){ 
  this.var3=q  
 
  this.quantity=this.quantity+1
  this.arr.push(this.var3)
   
}
childEvent5(q){ 
  this.var5=q 
  
  this.index=this.arr.indexOf(this.var5)
  this.arr.splice(this.index,1)
}

childEvent2(q){ 
  this.var2=q  
 
   
}



}
