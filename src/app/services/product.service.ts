import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from './models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='https://fakestoreapi.com/'
  constructor(
    private http:HttpClient
  ) { }

  getAllProductsWithLimit(limit=10){
    const productsUrl=`${this.baseUrl}products?limit=${limit}`;
    return this.http.get<any>(productsUrl);
  }
  createProduct(product:ProductRepresentation){
    const productsUrl=`${this.baseUrl}products`; 
    return this.http.post(productsUrl,product);
   }
}
