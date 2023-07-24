import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-account-form',
  templateUrl: './add-account-form.component.html',
  styleUrls: ['./add-account-form.component.css']
})
export class AddAccountFormComponent {
  

public dataForm: any;

public accountRegistrationForm:  FormGroup = {} as FormGroup;

constructor(private httpClient: HttpClient,
  private formBuilder: FormBuilder) {}  

ngOnInit(): void {
  this.accountRegistrationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(4)]]
  });
}



public registerAccount() {
   this.dataForm = {
    "firstName": this.accountRegistrationForm.value.firstName,
    "lastName": this.accountRegistrationForm.value.lastName,
    "phoneNumber": this.accountRegistrationForm.value.phoneNumber,
    "dateOfBirth": this.accountRegistrationForm.value.dateOfBirth,
    "email": this.accountRegistrationForm.value.email,
    "password": this.accountRegistrationForm.value.password,
    "role": this.accountRegistrationForm.value.role
  }
  console.log(this.dataForm);
  
  this.httpClient.post<any>('http://localhost:8080/api/v1/account', this.dataForm, {responseType: 'text' as 'json' })
  .subscribe((response) => {

    console.log(response);
    Swal.fire(
      'Succès',
      'Compte enregistré avec succès',
      'success'
    );
    
  }, (error) => {
    console.log("There was an error");
    Swal.fire(
      'Erreur',
       "L'adresse email existe déjà",
      'error'
    )
    console.log(error.message);
  });

  this.dataForm = {};
  
}


}
