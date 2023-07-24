import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-chery-car-form',
  templateUrl: './add-chery-car-form.component.html',
  styleUrls: ['./add-chery-car-form.component.css']
})
export class AddCheryCarFormComponent {

  public file?: File ; 

  public formData = new FormData();

  public cheryCarRegistrationForm:  FormGroup = {} as FormGroup;

  

  
  constructor(private httpClient: HttpClient,
      private formBuilder: FormBuilder
    ) {}  

   ngOnInit(): void {
    this.cheryCarRegistrationForm = this.formBuilder.group({
      manufacturer:   ['', Validators.required],
      bodyType:   ['', Validators.required],
      price: ['', [Validators.required, Validators.max(999999), Validators.min(1000)]],
      numberOfDoors: ['', [Validators.required, Validators.max(9), Validators.min(2)]],
      numberOfSeats: ['', [Validators.required, Validators.max(9), Validators.min(2)]],
      warrantyDuration:  ['', Validators.required],
    });
  
  }

  
  
  public registerCheryCar() {

    this.formData.append('numberOfDoors', this.cheryCarRegistrationForm.value.numberOfDoors);
    this.formData.append('numberOfSeats', this.cheryCarRegistrationForm.value.numberOfSeats);
    this.formData.append('price', this.cheryCarRegistrationForm.value.price);
    this.formData.append('bodyType', this.cheryCarRegistrationForm.value.bodyType);
    this.formData.append('model', this.cheryCarRegistrationForm.value.manufacturer);
    this.formData.append('warrantyDuration', this.cheryCarRegistrationForm.value.warrantyDuration);
    this.formData.append("status","CHERY_CAR");


    if(this.file==undefined){
      Swal.fire(
        'Erreur',
         "Ajouter une photo de la voiture",
        'error'
      )
     }
     else
     {
      
      this.formData.append('image', this.file, this.file.name);



      this.httpClient.post<any>('http://localhost:8080/api/v1/car',
       this.formData,
       { responseType: 'text' as 'json'}
       )
       .subscribe((res) => {
        console.log(res);
        Swal.fire(
          'Succès',
          'Voiture enregistré avec succès',
          'success'
        );
        
      }, (error) => {
        console.log("There was an error");
        Swal.fire(
          'Erreur',
           "Vérifier les champs",
          'error'
        )
        console.log(error.message);
      });
  
  

     }

     this.formData = new FormData();

    
  }  

  uploadImage(event: any) {
   
    this.file = event.target.files[0];
    console.log(this.file);
    
  
   
  }


}
