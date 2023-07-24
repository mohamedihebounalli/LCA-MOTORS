import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-after-sales-service-form',
  templateUrl: './after-sales-service-form.component.html',
  styleUrls: ['./after-sales-service-form.component.css']
})
export class AfterSalesServiceFormComponent {

  

 
  public formData : any;
  

  public afterSaleServiceRegistrationForm:  FormGroup = {} as FormGroup;
  
  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder) {}  

  ngOnInit(): void {
    this.afterSaleServiceRegistrationForm = this.formBuilder.group({
      cin:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      registrationNumber:  ['', Validators.required],
      manufacturer:  ['', Validators.required],
      description:  ['', Validators.required],
    });

  }
  
  
  
  public registerAfterSaleServiceRequest() {
     this.formData = {
      "cin": this.afterSaleServiceRegistrationForm.value.cin,
      "firstName": this.afterSaleServiceRegistrationForm.value.firstName,
      "lastName": this.afterSaleServiceRegistrationForm.value.lastName,
      "registrationNumber": this.afterSaleServiceRegistrationForm.value.registrationNumber,
      "manufacturer": this.afterSaleServiceRegistrationForm.value.manufacturer,
      "description": this.afterSaleServiceRegistrationForm.value.description,
      "status": "Pending"
      
     
    }

    this.httpClient.post<any>('http://localhost:8080/api/v1/after-sale-service-request',
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
         "Une demande est déjà soumise  ",
        'error'
      )
      console.log(error.message);
    });

    this.formData = {};
    
  }  

}
