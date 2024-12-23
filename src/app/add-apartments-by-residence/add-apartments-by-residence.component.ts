import { Component } from '@angular/core';
import { Apartment } from '../home/core/models/Apartment';
import { Residence } from '../home/core/models/Residence';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-apartments-by-residence',
  templateUrl: './add-apartments-by-residence.component.html',
  styleUrls: ['./add-apartments-by-residence.component.css']
})
export class AddApartmentsByResidenceComponent {
  listFilter: Apartment[]=[];
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"/assets/images/1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address": "Ezzahra"  , "image":"assets/images/2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"/assets/images/3.jpg", status:"Vendu"},
    {id:4,"name": "El Anber","address":"inconnu","image":"/assets/images/5.jpg", status: "En Construction"}
    ];

  listApartments:Apartment[]=[

    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] }, 
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1] },
   ];
   id!:number;
   listFilterApartment :Apartment[]=[];
   constructor (private act: ActivatedRoute) {}

   ngOnInit(){
    this.id=this.act.snapshot.params['id']
    this.listFilter=this.listApartments.filter
    (Apartment=> Apartment.residence.id == this.id)
    console.log(this.listFilter)
   }
}
