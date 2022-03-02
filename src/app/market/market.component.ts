import { Component, OnInit } from '@angular/core';
import{ ProdService } from '../prod.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(public prod:ProdService) { }

  ngOnInit(): void {
  }

}
