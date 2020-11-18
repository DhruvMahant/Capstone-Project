import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  total: any;

  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  delete(index):void{

     this.cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(this.cart));
    this.ngOnInit();

  }

  loadCart():void{
    this.cart = JSON.parse(localStorage.getItem('cart'));
    for(var i = 0; i< this.cart.lenth; i++){
      this.total += this.cart[i].price;
    }
  }

}
