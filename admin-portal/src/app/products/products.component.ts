import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  editProductDiv: boolean;
  ListProductDiv: boolean = true;
  selectedProductID: string;

  // companyRef = new FormGroup({
  //   company: new FormControl
  // });
 

  constructor(private productService: ProductService, private companyService: CompanyService ,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>
      this.products=data);
    
  }


  

}
