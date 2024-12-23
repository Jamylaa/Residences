import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences/residences.component';
import { ContactComponent } from './contact/contact.component';
import { ResidencedetailsComponent } from './residencedetails/residencedetails.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductComponent } from './product/product.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { AddApartmentsByResidenceComponent } from './add-apartments-by-residence/add-apartments-by-residence.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path :'home', component: HomeComponent}, 
  {path :'login ', component: LoginComponent}, 
  {path :'addProduct ', component: AddProductComponent}, 
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path : 'Residence', component:ResidencesComponentComponent},
  {path : 'residencedetails/:id', component:ResidencedetailsComponent},
  {path : 'Appartments', component:AppartmentsComponent},
 // {path : 'addappartment/:id', component:AddApartmentComponent},
  //{path : 'addappartmentbyresidence/:id', component:AddApartmentsByResidenceComponent},
  {path : 'product', component:ProductComponent},
  {path : 'ShowAppartments/:id', component:AddApartmentsByResidenceComponent},
  //{path : 'productdetails/:id', component:ProductsDetailsComponent},
  {path : 'Contact', component:ContactComponent} ,
 // {path : '**', component:NotfoundComponent} //autres liens appart li mawjoudin
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }