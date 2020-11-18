import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Product[];
  cart: any = new Array();
 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>this.products=data);
  }

  addToCart(index):void{
    
    if(JSON.parse(localStorage.getItem('cart')))
    {
      this.cart = JSON.parse(localStorage.getItem('cart'))
      this.cart.push(this.products[index]);
    console.log(this.cart);
    localStorage.setItem('cart',JSON.stringify(this.cart));

    }
    else{
      this.cart.push(this.products[index]);
      console.log(this.cart);
      localStorage.setItem('cart',JSON.stringify(this.cart));

    }

   
  }

}
