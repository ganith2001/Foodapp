import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { identifierModuleUrl } from '@angular/compiler';

export class array{
  id:number;
  quantity:number; 
  disables:boolean;
  
 }

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export class arr{
  id:number; 
  items:number;
 }
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() childpost:number;
  @Input() childpost2:number;
  @Input() childpost3:[];

  @Output() navEvent = new EventEmitter();
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3, color: 'white'},
    {text: 'Two1', cols: 4, rows: 1, color: 'white'},
    {text: 'Three', cols: 1, rows: 3, color: 'white'},
    {text: 'Four', cols: 1, rows: 3, color: 'white'},
    {text: 'Two2', cols: 4, rows: 1, color: 'white'},
    {text: 'Two3', cols: 4, rows: 1, color: 'white'},
    
    
  ];

  dishes: Dish[];
  demo: number;
  
  user = {username: '', password: '', remember: false};
  signuser={username:'',email:'',password1:'',password2:''}
  user2 = {username: 'ganith2001@gmail.com', password: 'ganith',url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==', remember: false};
  visible=false
  template=true
  user_error=true
  pass_error=true
  pass="password";
  width="100%"
  eyes="visibility"
  signup_error=true
  account=false
  
  array=[];
  constructor(public modalService: NgbModal,private dishService: DishService) { 
     this.dishService.getdishes();

   
  
  }
  array2:array[]=[
    
  ]
  ngOnInit() {
   
   
  }

  onSelectp(i){
    
    this.array2[i].quantity=this.array2[i].quantity+1
   
  }
  onSelectn(i){
    if(this.array2[i].quantity==1){
      
      this.navEvent.emit(i);
      
    }
    else{
    this.array2[i].quantity=this.array2[i].quantity-1
    }
  }
  open(content) {
    
    this.modalService.open(content);
    
  }
  open2(content2) {
    this.modalService.open(content2);
  
  }
  open3(cart) {
    
    for(var i of this.childpost3){
      this.array2.push({id:i,quantity:1,disables:true});
      
  }
    this.modalService.open(cart);
  }
  clk(){
    if (this.user.password.length>0 ) {
      this.visible=true
      this.width="90%"
      this.pass_error=false
      
    }
    else{
      this.visible=false
      this.width="100%"
      this.pass_error=true
     
    }
    if (this.user.username.length>0 ) {
      
      this.user_error=false
      
    }
    else{
      
      this.user_error=true
     
    }
    if(this.signuser.username.length>0 && this.signuser.email.length>0 && this.signuser.password1.length>0 && this.signuser.password2.length>0){
        this.signup_error=false
    }
    else{
      this.signup_error=true
    }
  }
  pwd(){
   if (this.pass=="password") {
    this.pass="text"
    this.eyes="visibility_off"
   }
   else if(this.pass="text"){
    this.pass="password"
    this.eyes="visibility"
   }
      
  
    
  }
  
  login(){
    if(this.user.username==this.user2.username && this.user.password==this.user2.password){
        this.account=true;   
        this.template=false  
        this.user.username=''
        this.user.password=''

    }
  }

  onlogout(){
    this.account=false
    this.template=true
  }
  

}
