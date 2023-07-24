import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean;
  private userRole: string;

  constructor() {

    if (this.sessionIsAuthenticated() == null) {
      this.isAuthenticated = false;
    } else {  
    this.isAuthenticated = this.sessionIsAuthenticated();
    }
    
    if(this.sessionUserRole() == null){
      this.userRole = '';
    }else{
    this.userRole = this.sessionUserRole();
    }

   }


  public checkAuthentication(): boolean {
    return this.isAuthenticated;
  }

  public getUserRole(): string {
    return this.userRole;
  }

  public sessionIsAuthenticated(): any {
    return localStorage.getItem('isAuthenticated');
  }

  public sessionUserRole(): any {
    return localStorage.getItem('userRole');
  }



  public loginCustomer(){
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'CUSTOMER');
    this.isAuthenticated = true;
    this.userRole = 'customer';
  }

  public loginAdmin(){
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'ADMIN');
    this.isAuthenticated = true;
    this.userRole = 'admin';
  }

  public loginSalesManager(){
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'SALES_MANAGER');
    this.isAuthenticated = true;
    this.userRole = 'salesmanager';
  }

  public loginTechnicalManager(){
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'TECHNICAL_MANAGER');
    this.isAuthenticated = true;
    this.userRole = 'techmanager';
  }


  public logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    this.isAuthenticated = false;
    this.userRole = '';
  }





}
