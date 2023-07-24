import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan-sales-form',
  templateUrl: './plan-sales-form.component.html',
  styleUrls: ['./plan-sales-form.component.css']
})
export class PlanSalesFormComponent {
 
  public formData : any;

  public saleRegistrationForm:  FormGroup = {} as FormGroup;


  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    this.saleRegistrationForm = this.formBuilder.group({
      ownerCIN:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      carColor:  ['', Validators.required],
      manufacturer:  ['', [Validators.required]],
      paymentMethod:  ['', Validators.required],
      price:  ['', [Validators.required, Validators.max(999999), Validators.min(1000)]],
    });

  }
  
  public registerSale() {
     this.formData = {
      "firstName": this.saleRegistrationForm.value.firstName,
      "lastName": this.saleRegistrationForm.value.lastName,
      "ownerCIN": this.saleRegistrationForm.value.ownerCIN,
      "carColor": this.saleRegistrationForm.value.carColor,
      "manufacturer": this.saleRegistrationForm.value.manufacturer,
      "paymentMethod": this.saleRegistrationForm.value.paymentMethod,
      "price": this.saleRegistrationForm.value.price,
     
    }

    this.httpClient.post<any>('http://localhost:8080/api/v1/sale',
     this.formData,
      {responseType: 'text' as 'json' }
     )
     .subscribe((res) => {
      console.log(res);
      Swal.fire(
        'Succès',
        'Vente planifier avec succès',
        'success'
      );
      
    }, (error) => {
      console.log("There was an error");
      Swal.fire(
        'Erreur',
         "veuillez vérifier les informations saisies",
        'error'
      )
      console.log(error.message);
    });


    this.formData = {};
    
  }  

}
