import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
id!:number;
constructor (private Act : ActivatedRoute){

}
ngOnInit(){
  this.id=this.Act.snapshot.params['id'];
  }
  
}


