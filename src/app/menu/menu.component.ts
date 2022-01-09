import { Component, OnInit,Output, EventEmitter,OnDestroy} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Subscription } from 'rxjs';
export class arr{
 quantity:number; 
 flag_add:boolean;
 flag_del:boolean;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() passedEvent2 = new EventEmitter();
  @Output() passedEvent3 = new EventEmitter();
  @Output() passedEvent5 = new EventEmitter();
  dishes: Dish[]=[];
  total_price: number;
  items:number;
  private postsSub: Subscription;
  constructor(private dishService: DishService) { }
   array:arr[]=[
    
   ]
   q:number;
   d: Dish[]=[];
  ngOnInit(): void {
  /*  this.dishes=this.dishService.getdishes()
    console.log(typeof this.dishes);
    */

    this.dishService.getdishes().subscribe((posts:Dish[])=>
    {
   // this.dishes = posts
    this.dishes = Object.values(posts);
    //console.log(this.dishes)
    }
    );
    
    
    
    //  this.dishes = posts;
      //console.log(this.dishes);
    
     
  
   /*this.postsSub = this.dishService.getPostUpdateListener()
      .subscribe((posts: Dish[]) => {
        this.dishes = posts;
      }); */
     // console.log(this.dishes);
      
    this.q=0
    this.total_price=0
    this.items=0
    
    for(var v of this.dishes){
      console.log(v)
        this.array.push({quantity:0,flag_add:true,flag_del:false});
     
    
    }
   
    
  }
 /* ngOnDestroy() {
    this.postsSub.unsubscribe();
  } */
 /*
 <button class="button1"  (click)="onSelectp(dish)">+</button>
            <input disabled style="width: 30px;" class="search" type="text" placeholder="{{array[dish.id].quantity}}" >  
            
            <button class="button1" (click)="onSelectn(dish)">-</button>
 
 onSelectp(dish:Dish){
    
    
    this.array[dish.id].quantity=this.array[dish.id].quantity+1
    
    this.total_price=this.total_price+this.dishes[dish.id].price
    this.items=this.items+1
    this.passedEvent.emit(this.total_price);
    this.passedEvent2.emit(this.array[dish.id].quantity);
    this.passedEvent3.emit(dish.id);
    this.passedEvent4.emit(this.items);
    
    
  }

  onSelectn(dish:Dish){
    if(this.array[dish.id].quantity>0){
      this.array[dish.id].quantity=this.array[dish.id].quantity-1
      this.total_price=this.total_price-this.dishes[dish.id].price
        this.passedEvent.emit(this.total_price);
        this.passedEvent2.emit(this.array[dish.id].quantity);
        this.items=this.items-1
        this.passedEvent5.emit(dish.id);
        this.passedEvent4.emit(this.items);
    }
   
  }
  */
  onclick(dish:Dish){
  
    this.array[dish.id].flag_add=false
    this.array[dish.id].flag_del=true
    this.passedEvent3.emit(dish.id);
    this.total_price=this.total_price+this.dishes[dish.id].price
    this.passedEvent2.emit(this.total_price);
  }
  ondelete(dish:Dish){
    this.array[dish.id].flag_add=true
    this.array[dish.id].flag_del=false
    this.passedEvent5.emit(dish.id);
    this.total_price=this.total_price-this.dishes[dish.id].price
    this.passedEvent2.emit(this.total_price);
  }
}
