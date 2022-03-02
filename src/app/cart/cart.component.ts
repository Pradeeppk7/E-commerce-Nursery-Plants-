import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product = localStorage.getItem("Product");
  price = localStorage.getItem("Price");

  constructor(public prod:ProdService) { }

  ngOnInit(): void {
  }

}
