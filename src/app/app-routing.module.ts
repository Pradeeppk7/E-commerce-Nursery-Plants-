import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"shop",component:MarketComponent},
  {path:"cart",component:CartComponent},
  {path:"order",component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
