import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [{
    id: '1',
    title: 'Flores',
    price: 60000,
    image: 'assets/flores.jpg',
    description: 'Esta es una flor'
  },
  {
    id: '2',
    title: 'Macarons',
    price: 60000,
    image: 'assets/macarones.jpg',
    description: 'Este es un macaron'
  },
  {
    id: '3',
    title: 'Perro',
    price: 60000,
    image: 'assets/perro.jpg',
    description: 'Este es un perro'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
