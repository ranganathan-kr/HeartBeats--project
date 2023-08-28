import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


 // Update the path accordingly

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

import { DonorLoginComponent } from './donor-login/donor-login.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DonorCountComponent } from './donor-count/donor-count.component'; 
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { DonorsService } from './Services/donors-service'
import { DonorSearchComponent } from './donor-search/donor-search.component';

import { HttpClientModule } from '@angular/common/http';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';





const routes: Routes = [
  // Other routes
  { path: 'donor-count', component: DonorCountComponent },
  { path: 'login', component: LoginComponent}, 
  { path: 'donor-search', component: DonorSearchComponent},
  { path: 'home', component: HomeComponent},
  {path : 'donor-profile',component : DonorProfileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'search', component: },
  
];  

@NgModule({
  
  
  declarations: [
    
    
    AppComponent,
    NavbarComponent,
   
    HeaderComponent,
    CarouselComponent,
    DonorLoginComponent,
    FooterComponent,
    CardComponent,
    DonorCountComponent,
    LoginComponent,
   
    HomeComponent,
 
    DonorSearchComponent,
      DonorProfileComponent

    
   
   
  ],
  imports: [
    BrowserModule, AppRoutingModule,RouterModule.forRoot(routes),
    ReactiveFormsModule,FormsModule,MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule

  ],
  exports: [RouterModule],
  providers: [DonorsService],   
  bootstrap: [AppComponent],
  
})
export class AppModule { 

}
