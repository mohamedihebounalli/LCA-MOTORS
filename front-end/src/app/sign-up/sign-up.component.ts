import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {



public signupForm: FormGroup = {} as FormGroup;

public accountRegistrationForm: any;

constructor(private httpClient: HttpClient,
  private formBuilder: FormBuilder,
  ) {}  

ngOnInit(): void {
  this.signupForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}



public registerAccount() {
   this.accountRegistrationForm = {
    "firstName": this.signupForm.value.firstName,
    "lastName": this.signupForm.value.lastName,
    "phoneNumber": this.signupForm.value.phoneNumber,
    "dateOfBirth": this.signupForm.value.dateOfBirth,
    "email": this.signupForm.value.email,
    "password": this.signupForm.value.password,
    "role": "CUSTOMER"
  }
  this.httpClient.post<any>('http://localhost:8080/api/v1/account', 
  this.accountRegistrationForm,
   {responseType: 'text' as 'json' })
   .subscribe((res) => {
    console.log(res);
    Swal.fire(
      'Succès',
      'Compte enregistré avec succès',
      'success'
    );
    
  }, (error) => {
    console.log("There was an error");
    Swal.fire(
      'Erreur',
      'Email déjà utilisé',
      'error'
    )
    console.log(error.message);
  });
  
}

 
}

