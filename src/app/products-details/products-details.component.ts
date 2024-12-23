import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

id!:number;
constructor(private Act :ActivatedRoute) { }
//  private ps: ProductService() 


ngOnInit(){
this.id=this.Act.snapshot.params['id'];
}

}