import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
export class arr{
 quantity:number; 
 price:number;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() passedEvent = new EventEmitter();
  @Output() passedEvent2 = new EventEmitter();
  @Output() passedEvent3 = new EventEmitter();
  dishes: Dish[];
  total_price: number;
  
  constructor(private dishService: DishService) { }
   array:arr[]=[
    
   ]
   q:number;
   
  ngOnInit(): void {
    this.dishes = this.dishService.getdishes();
    this.q=0
    this.total_price=0
    for(var v of this.dishes){
        this.array.push({quantity:0,price:0});
        
    }
  }
  onSelectp(dish:Dish){
    
    
    this.array[dish.id].quantity=this.array[dish.id].quantity+1
    
    this.total_price=this.total_price+this.dishes[dish.id].price
    
    this.passedEvent.emit(this.total_price);
    this.passedEvent2.emit(this.array[dish.id].quantity);
    this.passedEvent3.emit(dish.id);
    
    
  }

  onSelectn(dish:Dish){
    if(this.array[dish.id].quantity>0){
      this.array[dish.id].quantity=this.array[dish.id].quantity-1
      this.total_price=this.total_price-this.dishes[dish.id].price
        this.passedEvent.emit(this.total_price);
        this.passedEvent2.emit(this.array[dish.id].quantity);
    }
    if(this.array[dish.id].quantity<=1){
      this.passedEvent3.emit(-1);
    }
  }
}
