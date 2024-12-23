import { Component } from '@angular/core';

@Component({
  selector: 'app-home',  // esmou ken bch t3ayaltlou 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 title:string = "Welcome Home Jmayla ! " 

color!:string 
age!:number // ! tkhallik ma taamlch initialisation 

user =[
  {id: 1 , name: " Jamila ", age:23, email: "Jamila.Benabdelkader@esprit.tn"} ,
    {id: 2 , name: " Ahmed ", age:25, email: "Ahmed.Benahmed@esprit.tn"},
    {id: 3 , name: " Amor ", age:26, email: "Amor.BenAmor@esprit.tn"}
  ]

    show() {alert(" Hello 4 SAE 9 " ) }
}