import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-treat-after-sales-service-dashboard',
  templateUrl: './treat-after-sales-service-dashboard.component.html',
  styleUrls: ['./treat-after-sales-service-dashboard.component.css']
})
export class TreatAfterSalesServiceDashboardComponent {

  // public toggleDeclineButton: boolean = true;
  public afterSaleServiceRequestList: any[] = [];

  constructor(private httpClient: HttpClient )
  {
  }

  ngOnInit(): void {
    this.getUsedCarList();
  
  }
  
   getUsedCarList() {

    this.httpClient.get<any[]>('http://localhost:8080/api/v1/after-sale-service-request').subscribe(
      (data) => {
        this.afterSaleServiceRequestList = data;
        console.log(this.afterSaleServiceRequestList);
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
   
  
  }

  deleteAfterSaleServiceRequest(afterSaleServiceRequest: any) {

    this.httpClient.delete<any>('http://localhost:8080/api/v1/after-sale-service-request/' + afterSaleServiceRequest.id, {responseType: 'text' as 'json' })
    .subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Succès',
          'Demande de service aprés-vente est refuser',
          'success'
        );

        this.afterSaleServiceRequestList = this.afterSaleServiceRequestList.filter(item => item.id !== afterSaleServiceRequest.id);
      
        
        
      },
      (error) => {
        console.log('Error:', error);
        Swal.fire(
          'Erreur',
          "Demande de service aprés-vente est déja refuser",
          'error'
        );
        
      });



  }

  acceptAfterSaleServiceRequest(afterSaleServiceRequest: any) {

    // this.toggleDeclineButton = false;

    this.httpClient.put<any>(`http://localhost:8080/api/v1/after-sale-service-request/${afterSaleServiceRequest.id}?status=Approved`, {responseType: 'text' as 'json' })
    .subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Succès',
          'Demande de service aprés-vente est accepter',
          'success'
        );
        window.location.reload();
      },
      (error) => {
        if(error.status === 200) {
          Swal.fire(
            'Succès',
            'Demande de service aprés-vente est accepter',
            'success'
          );
          window.location.reload();

        }else{

          console.log('Error:', error);
          Swal.fire(
            'Erreur',
            "Demande de service aprés-vente est déja accepter",
            'error'
          );


        }
    
        
      });



  }




}
