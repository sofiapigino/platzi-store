import { Injectable } from '@angular/core';
import { Product } from './../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
