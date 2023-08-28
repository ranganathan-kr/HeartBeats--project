import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DonorsService } from '../Services/donors-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private donorService: DonorsService,private router:Router) {}
  
  ngOnInit(): void {

  
  }

  loginform = new FormGroup(
    {
      phnnumber : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    }
  );
 get phnnumber(){
  return this.loginform.get('phnnumber');
 }
 get password(){
  return this.loginform.get('password');
 }
 login() {
  // this.donorService.login(this.email, this.password).subscribe(
  //   (response: Donor) => {
  //     // Successful login, handle the response as needed
  //     console.log('Logged in successfully:', response);
  //     // For example, you can navigate to a dashboard or another page
  //   },
  //   (error) => {
  //     console.error('Error logging in:', error);
  //     // Handle error, display an error message, etc.
  //   }
  // );
}
  submitForm() :void {

    // if(this.loginform.value.email === '82@12' && this.loginform.value.password === 'admin123')
    this.router.navigate(['/donor-profile']);

    this.donorService.logindetails(this.loginform).subscribe(response =>
      {
    localStorage.setItem('userdetail',JSON.stringify(response))
    //  localStorage.setItem('role','user');
     this.router.navigate(['home'])
     alert("login successful");
      },
    (err)=>{
     alert(JSON.stringify(err));
     });
  }
}
