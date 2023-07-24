import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-used-cars-list',
  templateUrl: './used-cars-list.component.html',
  styleUrls: ['./used-cars-list.component.css']
})
export class UsedCarsListComponent {

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
          console.log(usedCarList.carImageData);
          reader.readAsDataURL(response);
        }
        );
    });
  }

}
