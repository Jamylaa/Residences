import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  products = [
    //{id:1 , title :"iphone 15", "price": "1500" , "quantity" :"10" , "like" :"9" , "image":"../../assets/images/iphone1.jpg"},
    {id:2 , title :'iphone 12', price:1000 , quantity :150 , like :88 , image:"../../assets/images/iphone12.jpg"},
    {id:3 , title :'iphone 13', price:1200 , quantity :190, like :99 ,image:"/assets/images/iphone13.jpg"}
  
  ]
  constructor() { }
}