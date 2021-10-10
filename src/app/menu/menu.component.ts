import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
export class arr{
 quantity:number; 
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  constructor(private dishService: DishService) { }
   array:arr[]=[
    
   ]
   q:number;
   
  ngOnInit(): void {
    this.dishes = this.dishService.getdishes();
    this.q=0
    for(var v of this.dishes){
        this.array.push({quantity:0});
    }
  }
  onSelectp(dish:Dish){
    
    
    this.array[dish.id].quantity=this.array[dish.id].quantity+1
    
    
  }

  onSelectn(dish:Dish){
    if(this.array[dish.id].quantity>0){
      this.array[dish.id].quantity=this.array[dish.id].quantity-1
    }
  }
}
