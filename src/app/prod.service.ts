import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProdService {
  Product="";
  price="";
  pr1="Indoor Plant Variety 124";
  pr2="Indoor Plant Variety 254";
  pr3="Indoor Plant Variety 155";
  pr4="Indoor Plant Variety 45";
  pr5="Indoor Plant Variety 425";
  pr6="Indoor Plant Variety 74";
  pr7="Shovel Large";
  pr8="Tools Combo(5)";
  pr9="Pot Medium";
  pr1p="200";
  pr2p="600";
  pr3p="300";
  pr4p="250";
  pr5p="500";
  pr6p="400";
  pr7p="1000";
  pr8p="800";
  pr9p="150";
  off="Seeds";



  constructor(public rooter: Router) { }
pr1Buy(){
this.Product=this.pr1;
this.price=this.pr1p;

localStorage.setItem("Product", this.Product);
localStorage.setItem("Price", this.price);
this.rooter.navigateByUrl("/cart") 

}
seeds(){
  this.Product=this.off;
this.price= "80";

localStorage.setItem("Product", this.Product);
localStorage.setItem("Price", this.price);
this.rooter.navigateByUrl("/cart") 
}
pr2Buy(){
  this.Product=this.pr2;
  this.price=this.pr2p;
  
localStorage.setItem("Product", this.Product);
localStorage.setItem("Price", this.price);
  this.rooter.navigateByUrl("/cart") 
}
pr3Buy(){
    this.Product=this.pr3;
    this.price=this.pr3p;
    localStorage.setItem("Price", this.price);
localStorage.setItem("Product", this.Product);
    this.rooter.navigateByUrl("/cart") 
}
pr4Buy(){
  this.price=this.pr4p;
  this.Product=this.pr4;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}
pr5Buy(){
  this.Product=this.pr5;
  this.price=this.pr5p;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}
pr6Buy(){
  this.Product=this.pr6;
  this.price=this.pr6p;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}
pr7Buy(){
  this.Product=this.pr7;
  this.price=this.pr7p;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}
pr8Buy(){
  this.Product=this.pr8;
  this.price=this.pr8p;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}
pr9Buy(){
  this.Product=this.pr9;
  this.price=this.pr9p;
  localStorage.setItem("Price", this.price);
  localStorage.setItem("Product", this.Product);
  this.rooter.navigateByUrl("/cart") 
}


}

