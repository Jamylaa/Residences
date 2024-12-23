import { Component } from '@angular/core';
import { Residence } from '@../core/models/Residence';
//import { ResidenceService } from '../services/residence.service';
import { ResidenceService } from '../services/residence.service';


@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  filterAddress: string = '';
  favorites: Residence[] = [];
  listResidences: Residence[] = []


  constructor (private rs : ResidenceService){}

  ngOnInit(){
   // this.listResidences= this.rs.listResidences
   this.rs.getAllResidences().subscribe({
    next: (data: Residence[])=> this.listResidences = data,
    error: (error: any)=>console.log(error),
    complete: ()=>console.log('done')
   })}

  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      console.log("Adresse : " + address);
    }
  }
  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }

   // Filtrer les résidences
   getFilteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.filterAddress.toLowerCase())
    );
  }

  supp(id:number){  this.rs.deleteResidence(id).subscribe( () => this.ngOnInit())}
}