import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 // Update the path accordingly
 import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DonorCountComponent } from './donor-count/donor-count.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './donors-search/donors-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GetDonorsComponent } from './get-donors/get-donors.component';
import { MatButtonModule } from '@angular/material/button';
import { DonorService } from './Services/DonorsService';
import { DonorService1 } from './Services/DonorService1';
import { registerLocaleData } from '@angular/common';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';





const routes: Routes = [
  // Other routes
  { path: 'donor-count', component: DonorCountComponent },
  { path: 'login', component:DonorLoginComponent}, 
  { path: 'donor-list', component: DonorListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'search', component:SearchComponent},
  { path: 'donor-profile/:id', component: DonorProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];  

@NgModule({
  
  
  declarations: [
    
    
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HeaderComponent,
    CarouselComponent,
    AddDonorComponent,
    DonorLoginComponent,
    FooterComponent,
    CardComponent,
   DonorCountComponent,
    DonorLoginComponent,
    ContactUsComponent,
    HomeComponent,
    DonorListComponent,
    GetDonorsComponent,
    DonorProfileComponent
   
   
  ],
  imports: [
    BrowserModule, AppRoutingModule,RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule,MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
   HttpClientModule
  ],
  exports: [RouterModule],
  providers: [DonorService,DonorService1],
  bootstrap: [AppComponent],
  
})
export class AppModule { 

}
