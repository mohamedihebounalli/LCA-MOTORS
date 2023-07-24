import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-used-cars-consult-table',
  templateUrl: './used-cars-consult-table.component.html',
  styleUrls: ['./used-cars-consult-table.component.css']
})
export class UsedCarsConsultTableComponent {

  public toggleUsedCarsListDisplay = false;

  public updateUsedCarData: any = {};

  public usedCarList: any[] = [];

  constructor(private httpClient: HttpClient )
  {
  }

  ngOnInit(): void {
    this.getUsedCarList();
  
  }
  
   getUsedCarList() {

    this.httpClient.get<any[]>('http://localhost:8080/api/v1/car').subscribe(
      (data) => {
        this.usedCarList = data.filter((car) => car.status === "USED_CAR");
        console.log(this.usedCarList);
        this.fetchImages();
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
   
  
  }

  fetchImages() {

    this.usedCarList
    .forEach(
      (usedCarList) => {
      this.httpClient.get("http://localhost:8080/api/v1/car/download-car-image/"+usedCarList.id, { responseType: 'blob' })
        .subscribe(
          (response) => 
          {
          const reader = new FileReader();
          reader.onloadend = () => {
            usedCarList.carImageData = reader.result as string;
          };
          reader.readAsDataURL(response);
        }
        );
    });
  }

  updateUsedCar(usedCar: any) {


    this.updateUsedCarData = usedCar;
    this.toggleUsedCarsListDisplay = !this.toggleUsedCarsListDisplay;



  }

  deleteUsedCar(usedCar: any) {

    this.httpClient.delete<any>('http://localhost:8080/api/v1/car/' + usedCar.id, {responseType: 'text' as 'json' })
    .subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Succès',
          'Voiture supprimé avec succès',
          'success'
        );

        this.usedCarList = this.usedCarList.filter(item => item.id !== usedCar.id);
      
        
        
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
