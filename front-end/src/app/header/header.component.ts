import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthService) {}

  isLoggedIn(): boolean {
    return this.auth.checkAuthentication();
  }

  isUserAdmin(): boolean {
    if(this.auth.getUserRole() == 'ADMIN')
    {
      return true;
    }else
    {
      return false;
    }
  }

  isUserCustomer(): boolean {
    return this.auth.getUserRole() == 'CUSTOMER';
  }

  isUserSalesManager(): boolean {
    return this.auth.getUserRole() == "SALES_MANAGER"
  }

  isUserTechnicalManager(): boolean {
    return this.auth.getUserRole() == 'TECHNICAL_MANAGER';
  }


  logout(): void {
    this.auth.logout();
  }


}
