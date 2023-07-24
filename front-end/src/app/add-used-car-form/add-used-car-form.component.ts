import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-used-car-form',
  templateUrl: './add-used-car-form.component.html',
  styleUrls: ['./add-used-car-form.component.css']
})
export class AddUsedCarFormComponent {

  public file?: File ; 

  public usedCarRegistrationForm:  FormGroup = {} as FormGroup;

  public formData = new FormData();
  
  
  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    ) {}  

  ngOnInit(): void {
    this.usedCarRegistrationForm = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      ownerCIN: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      ownerEmail: ['', [Validators.required, Validators.email]],
      manufacturer: ['', Validators.required],
      carDescription: ['', Validators.required],
    });
  }
  
  
  
  public registerUsedCar() {
     this.formData.append('ownerCIN', this.usedCarRegistrationForm.value.ownerCIN);
     this.formData.append('ownerFullName', this.usedCarRegistrationForm.value.firstName+" "+this.usedCarRegistrationForm.value.lastName);
     this.formData.append('phoneNumber', this.usedCarRegistrationForm.value.phoneNumber);
     this.formData.append('ownerEmail', this.usedCarRegistrationForm.value.ownerEmail);
     this.formData.append('model', this.usedCarRegistrationForm.value.manufacturer);
     this.formData.append('carDescription', this.usedCarRegistrationForm.value.carDescription);
     this.formData.append("status","USED_CAR");

     if(this.file==undefined){
      console.log("file is empty");
      
      Swal.fire(
        'Erreur',
         "Ajouter une photo de la voiture",
        'error'
      )





     }
     else
     {

      this.formData.append('image', this.file, this.file.name)


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
