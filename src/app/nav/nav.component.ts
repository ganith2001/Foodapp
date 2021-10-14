import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user = {username: '', password: '', remember: false};
  visible=false
  pass="password";
  width="100%"
  
  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  open(content) {
    
    this.modalService.open(content);
  }
  open2(content2) {
    this.modalService.open(content2);
  }
  clk(){
    if (this.user.password.length>0) {
      this.visible=true
      this.width="90%"
      
    }
    else{
      this.visible=false
      this.width="100%"
     
    }
    
    
  }
  pwd(){
   if (this.pass=="password") {
    this.pass="text"
   }
   else if(this.pass="text"){
    this.pass="password"
   }
      
    
    
  }

}
