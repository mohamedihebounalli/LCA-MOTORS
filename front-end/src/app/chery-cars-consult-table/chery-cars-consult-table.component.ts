import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chery-cars-consult-table',
  templateUrl: './chery-cars-consult-table.component.html',
  styleUrls: ['./chery-cars-consult-table.component.css']
})
export class CheryCarsConsultTableComponent {

  public toggleCheryCarsListDisplay = false;

  public updateCheryCarData: any = {};

  public cheryCarList: any[] = [];

  constructor(private httpClient: HttpClient )
  {
  }

  ngOnInit(): void {
    this.getCheryCarList();
  
  }
  
   getCheryCarList() {

    this.httpClient.get<any[]>('http://localhost:8080/api/v1/car').subscribe(
      (data) => {
        this.cheryCarList = data.filter((car) => car.status === "CHERY_CAR");
        console.log(this.cheryCarList);
        this.fetchImages();
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
   
  
  }

  fetchImages() {

    this.cheryCarList
    .forEach(
      (cheryCar) => {
      this.httpClient.get("http://localhost:8080/api/v1/car/download-car-image/"+cheryCar.id, { responseType: 'blob' })
        .subscribe(
          (response) => 
          {
          const reader = new FileReader();
          reader.onloadend = () => {
            cheryCar.carImageData = reader.result as string;
          };
   
          reader.readAsDataURL(response);
        }
        );
    });
  }


  updateCheryCar(cheryCar: any) {


    this.updateCheryCarData = cheryCar;
    this.toggleCheryCarsListDisplay = !this.toggleCheryCarsListDisplay;



  }

  deleteCheryCar(cheryCar: any) {

    this.httpClient.delete<any>('http://localhost:8080/api/v1/car/' + cheryCar.id, {responseType: 'text' as 'json' })
    .subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Succès',
          'Voiture supprimé avec succès',
          'success'
        );

        this.cheryCarList = this.cheryCarList.filter(item => item.id !== cheryCar.id);
      
        
        
      },
      (error) => {
        console.log('Error:', error);
        Swal.fire(
          'Erreur',
          "Voiture n'existe pas",
          'error'
        );
        
      });



  }

}
