import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 {
     const requiredRole = route.data['requiredRole'];
     const userRole = this.authService.getUserRole();

     if (requiredRole === userRole) {
      return true; // Allow access
    } else {
      // Redirect to a different route if the user doesn't have the required role
      console.log("You don't have permission to view this page");
      
      this.router.navigate(['/accueil']);
      return false;
    }
  }
  
}
