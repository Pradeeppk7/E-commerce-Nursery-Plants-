import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  product = localStorage.getItem("Product");
  price = localStorage.getItem("Price");

  constructor() { }

  ngOnInit(): void {
  }

}
