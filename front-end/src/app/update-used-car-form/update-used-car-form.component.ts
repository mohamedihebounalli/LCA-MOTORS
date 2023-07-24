import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-used-car-form',
  templateUrl: './update-used-car-form.component.html',
  styleUrls: ['./update-used-car-form.component.css']
})
export class UpdateUsedCarFormComponent {

  @Input()
  public usedCar: any;




  
  public file?: File ; 

  public usedCarUpdateForm:  FormGroup = {} as FormGroup;

  public formData = new FormData();
  
  
  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    ) {}  

  ngOnInit(): void {
    this.usedCarUpdateForm = this.formBuilder.group({
      ownerFullName:  [this.usedCar.ownerFullName, Validators.required],
      ownerCIN: [this.usedCar.ownerCIN, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      phoneNumber: [this.usedCar.phoneNumber, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      ownerEmail: [this.usedCar.ownerEmail, [Validators.required, Validators.email]],
      manufacturer: [this.usedCar.model, Validators.required],
      carDescription: [this.usedCar.carDescription, Validators.required],
    });
  }
  
  
  
  public updateUsedCar() {
    
     if(this.file==undefined){
      console.log("file is empty");
     }
     else
     {
      this.formData.append('image', this.file, this.file.name);
      }



      const queryParam = `?ownerFullName=${this.usedCarUpdateForm.value.ownerFullName}&ownerCIN=${this.usedCarUpdateForm.value.ownerCIN}&ownerEmail=${this.usedCarUpdateForm.value.ownerEmail}&phoneNumber=${this.usedCarUpdateForm.value.phoneNumber}&carDescription=${this.usedCarUpdateForm.value.carDescription}&model=${this.usedCarUpdateForm.value.manufacturer}`
      

      console.log("queryParam: "+queryParam);
      console.log("formdata"+this.formData);
      
      

       this.httpClient.put<any>('http://localhost:8080/api/v1/car/'+this.usedCar.id+queryParam,
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
        window.location.reload();
        
      }, (error) => {
        console.log("There was an error");
        Swal.fire(
          'Erreur',
           "Vérifier les champs",
          'error'
        )
        console.log(error.message);
      });
  



     this.formData = new FormData();

    
  }  


  uploadImage(event: any) {
   
    this.file = event.target.files[0];
    
  
   
  }
  


}
