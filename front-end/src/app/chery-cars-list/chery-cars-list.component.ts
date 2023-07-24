import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chery-cars-list',
  templateUrl: './chery-cars-list.component.html',
  styleUrls: ['./chery-cars-list.component.css']
})
export class CheryCarsListComponent {

  public cheryCarList: any[] = [];

  constructor(private httpClient: HttpClient )
  {
  }

  ngOnInit(): void {
    this.getUsedCarList();
  
  }
  
   getUsedCarList() {

    this.httpClient.get<any[]>('http://localhost:8080/api/v1/car').subscribe(
      (data) => {
        this.cheryCarList = data.filter((car) => car.status === "CHERY_CAR");
        console.log("before the fetch function");
        
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
          console.log(cheryCar.carImageData);
          reader.readAsDataURL(response);
        }
        );
    });
  }
  


}
