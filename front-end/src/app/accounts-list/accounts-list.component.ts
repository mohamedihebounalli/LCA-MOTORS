import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent {

  public toggleAccountListDisplay = false;

  public updateAccountData: any = {};

  public accountList: any[] = [];

  constructor(private httpClient: HttpClient )
  {
  }

  ngOnInit(): void {
    this.getAccountsList();
  
  }
  
   getAccountsList() {

    this.httpClient.get<any[]>('http://localhost:8080/api/v1/account').subscribe(
      (data) => {
        this.accountList = data;
        console.log(this.accountList);
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
   
  
  }


  updateAccount(account: any) {


    this.updateAccountData = account;
    this.toggleAccountListDisplay = !this.toggleAccountListDisplay;



  }

  deleteAccount(account: any) {

    this.httpClient.delete<any>('http://localhost:8080/api/v1/account/' + account.id, {responseType: 'text' as 'json' })
    .subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Succès',
          'Compte supprimé avec succès',
          'success'
        );

        this.accountList = this.accountList.filter(item => item.id !== account.id);
      
        
        
      },
      (error) => {
        console.log('Error:', error);
        Swal.fire(
          'Erreur',
          "Compte n'existe pas",
          'error'
        );
        
      });



  }

  roleToString(role: string): String {

    if (role === 'ADMIN') {
      return "Admin";
    }
    else if (role === 'CUSTOMER') {
      return "Client";
    }else if (role === 'TECHNICAL_MANAGER') {
      return "Directeur technique";
    }else if (role === 'SALES_MANAGER') {
      return "Directeur commercial";
    }
     return "";
    }



}

