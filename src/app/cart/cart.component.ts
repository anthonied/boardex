import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:String[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToCart(name): void {
    this.cart.push(name);
  }

}
