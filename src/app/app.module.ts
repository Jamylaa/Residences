import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { FooterComponent } from './footer/footer.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { AddApartmentsByResidenceComponent } from './add-apartments-by-residence/add-apartments-by-residence.component';
import { ResidencedetailsComponent } from './residencedetails/residencedetails.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
@NgModule({              //metadata la partie déclaration
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponent,
    NavbarComponent,
    ContactComponent,
    ProductComponent,
    ProductsDetailsComponent,
    FooterComponent,
    AddResidenceComponent,
    AddApartmentComponent,
    AddApartmentsByResidenceComponent,
    ResidencedetailsComponent,
    AppartmentsComponent,
    LoginComponent,
    AddProductComponent
  ],
  imports: [           
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //le pt de demarrage du module
})
export class AppModule { }