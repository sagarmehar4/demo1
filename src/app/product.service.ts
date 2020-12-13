import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/product'
  httpClient: HttpClient

  // - ProductService class is dependent on HttpClient
  // - dependency injection (DI)
  //   - Angular will inject (pass) an object of HttpClient
  //     while creating an object of this class
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getProducts() {
    return this.httpClient.get(this.url)
  }

  createProduct(title: string, description: string, price: number, category: number, brand: number) {
    const body = {
      title: title,
      description: description,
      price: price,
      category: category,
      brand: brand
    }
    return this.httpClient.post(this.url, body)
  }

  editProduct() {

  }

  deleteProduct(id: number) {
    // http://localhost:3000/product/1
    return this.httpClient.delete(this.url + "/" + id)
  }
}

// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }
// }

// const p1 = new Person('person1')
