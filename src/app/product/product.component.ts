import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private ps:ProductService) { }
  products:any= []

  ngOnInit(){
    this.products=this.ps.products
  }

    increment(p:any){
      p.like++;

    }
}


















// import { Component } from '@angular/core';
// import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent {

//   constructor(private ps:ProductService){}

//   products :any = [ ]
//   ngOnInit(){
//     this.products=this.ps.products
//   }

//   // Fonction d'incrémentation du nombre de "likes"
// increment(p:any) { p.like++;}

//  formsAdd =new FormGroup({
//    id : new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
//    title:  new FormControl ( '',[Validators.required,Validators.minLength(4)]),
//    price: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]) ,/// Validation pour un nombre décimal
//    quantity: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
//    like: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
//   image: new FormControl('',[Validators.required,Validators.pattern('^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))$')]),

//   }); 
  
// //    save() {
// //     console.log(this.formsAdd.get('id')?.value);  
// //     console.log(this.formsAdd.get('title')?.value);
// //     console.log(this.formsAdd.get('price')?.value);
// //     console.log(this.formsAdd.get('quantity')?.value);
// //     console.log(this.formsAdd.get('like')?.value);
// //     console.log(this.formsAdd.get('image')?.value);}

//     add(){
//       this.ps.products.push(this.formsAdd.value as any )
//       //this.router
//     }

//       //recuperer le produit 


//       // ajouter ce produit dans la liste 



//       //
    
// }