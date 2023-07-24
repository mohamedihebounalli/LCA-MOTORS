import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-chery-car-form',
  templateUrl: './update-chery-car-form.component.html',
  styleUrls: ['./update-chery-car-form.component.css']
})
export class UpdateCheryCarFormComponent {

  @Input()
  public cheryCar: any;

  public file?: File ; 

  public formData = new FormData();

  public cheryCarUpdateForm:  FormGroup = {} as FormGroup;

  

  
  constructor(private httpClient: HttpClient,
      private formBuilder: FormBuilder
    ) {}  

   ngOnInit(): void {
    this.cheryCarUpdateForm = this.formBuilder.group({
      manufacturer:   [this.cheryCar.model, Validators.required],
      bodyType:   [this.cheryCar.bodyType, Validators.required],
      price: [this.cheryCar.price, [Validators.required, Validators.max(999999), Validators.min(1000)]],
      numberOfDoors: [this.cheryCar.numberOfDoors, [Validators.required, Validators.max(9), Validators.min(2)]],
      numberOfSeats: [this.cheryCar.numberOfSeats, [Validators.required, Validators.max(9), Validators.min(2)]],
      warrantyDuration:  [this.cheryCar.warrantyDuration, Validators.required],
    });
  
  }

  updateCheryCar() {

    if(this.file==undefined){
      console.log("file is empty");
     }
     else
     {
      this.formData.append('image', this.file, this.file.name);
      }



      const queryParam = `?model=${this.cheryCarUpdateForm.value.manufacturer}&bodyType=${this.cheryCarUpdateForm.value.bodyType}&numberOfDoors=${this.cheryCarUpdateForm.value.numberOfDoors}&numberOfSeats=${this.cheryCarUpdateForm.value.numberOfSeats}&warrantyDuration=${this.cheryCarUpdateForm.value.warrantyDuration}&price=${this.cheryCarUpdateForm.value.price}`
      

      console.log("queryParam: "+queryParam);
      console.log("formdata"+this.formData);
      
      

       this.httpClient.put<any>('http://localhost:8080/api/v1/car/'+this.cheryCar.id+queryParam,
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
    console.log(this.file);
    
  
   
  }



}
