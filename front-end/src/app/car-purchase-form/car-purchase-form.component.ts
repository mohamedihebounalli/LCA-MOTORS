import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-purchase-form',
  templateUrl: './car-purchase-form.component.html',
  styleUrls: ['./car-purchase-form.component.css']
})
export class CarPurchaseFormComponent {


  public formData : any;

  public carPurchaseRegistrationForm:  FormGroup = {} as FormGroup;


  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    this.carPurchaseRegistrationForm = this.formBuilder.group({
      ownerCIN:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      model:  ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      address:  ['', Validators.required],
      phoneNumber:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });

  }

  public registerCarPurchaseRequest() {
    this.formData = {
     "ownerCIN": this.carPurchaseRegistrationForm.value.ownerCIN,
     "firstName": this.carPurchaseRegistrationForm.value.firstName,
     "lastName": this.carPurchaseRegistrationForm.value.lastName,
     "model": this.carPurchaseRegistrationForm.value.model,
     "email": this.carPurchaseRegistrationForm.value.email,
     "address": this.carPurchaseRegistrationForm.value.address,
     "phoneNumber":this.carPurchaseRegistrationForm.value.phoneNumber,
     
    
   }

   this.httpClient.post<any>('http://localhost:8080/api/v1/purchaserequest',
    this.formData,
    {responseType: 'text' as 'json' })
    .subscribe((res) => {
     console.log(res);
     Swal.fire(
       'Succès',
       'Demande enregistré avec succès',
       'success'
     );
     
   }, (error) => {
     console.log("There was an error");
     Swal.fire(
       'Erreur',
        "Vous avez déjà une demande",
       'error'
     )
     console.log(error.message);
   });

   this.formData = {};
   
 }  



}
