import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-account-form',
  templateUrl: './update-account-form.component.html',
  styleUrls: ['./update-account-form.component.css']
})
export class UpdateAccountFormComponent {

  @Input()
  public account: any;


  

public accountUpdateForm:  FormGroup = {} as FormGroup;

constructor(private httpClient: HttpClient,
  private formBuilder: FormBuilder,
  private location: Location
  ) {}  

ngOnInit(): void {
  this.accountUpdateForm = this.formBuilder.group({
    firstName: [this.account.firstName, ],
    lastName: [this.account.lastName, ],
    dateOfBirth: [this.account.dateOfBirth, ],
    phoneNumber: [this.account.phoneNumber],
    email: [this.account.email],
    password: [this.account.password],
    role: ['']
  });
}



public updateAccountData() {
   const queryParams = `?firstName=${this.accountUpdateForm.value.firstName}&lastName=${this.accountUpdateForm.value.lastName}&dateOfBirth=${this.accountUpdateForm.value.dateOfBirth}&phoneNumber=${this.accountUpdateForm.value.phoneNumber}&email=${this.accountUpdateForm.value.email}&role=${this.accountUpdateForm.value.role}&password=${this.accountUpdateForm.value.password}`


  
  this.httpClient.put<any>(`http://localhost:8080/api/v1/account/`+`${this.account.id}`+queryParams, {responseType: 'text' as 'json' })
  .subscribe((response) => {

    console.log(response);
    Swal.fire(
      'Succès',
      'Compte mis à jour avec succès',
      'success'
    );
    
  }, (error) => {
    console.log("There was an error");
    if(error.status == 200)
    {
      Swal.fire(
        'Succès',
        'Compte mis à jour avec succès',
        'success'
      );
      window.location.reload();
    }else{

      Swal.fire(
        'Erreur',
         "Compte est déja mis à jour succès",
        'error'
      )
      console.log(error.message);

    }
  
  });


  
}




}
