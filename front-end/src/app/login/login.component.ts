import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  

})
export class LoginComponent  {

  // myForm: NgForm = {} as NgForm;
  // public email: string = "";
  // public password: string = "";
  public form: FormGroup = {} as FormGroup;

  constructor(private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder

) {}
  ngOnInit(): void {
  this.form = this.formBuilder.group({
    // Define your form controls and their validation rules
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}






  public authentificate(){


   
  
 
   

   this.httpClient.get<any>(`http://localhost:8080/api/v1/account/login?email=${this.form.value.email}&password=${this.form.value.password}`,{responseType: 'text' as 'json' })
   .subscribe((response) => {
     console.log(response);
     Swal.fire(
       'Succès',
       "Vous êtes connecté",
       'success'
     );
     if(response == "ADMIN")
     {
     
      this.authService.loginAdmin();
      this.router.navigate(['/admin-dashboard/gerer-comptes']);
   
      console.log("admin connected");
      
      } else if(response == "CUSTOMER")
      {
        this.authService.loginCustomer();
     
        console.log("CUSTOMER connected");
      }else if
      (response == "SALES_MANAGER")
      {
        this.authService.loginSalesManager();
        console.log("SALES_MANAGER connected");
   
      }else if(response == "TECHNICAL_MANAGER")
      {
        this.authService.loginTechnicalManager();
   
        console.log("TECHNICAL_MANAGER connected");
      }


    this.router.navigate(['/']);

      

     




     
   }, (error) => 
   {
    console.log("logged an error");
    
    console.log(error);
    Swal.fire(
      'Erreur',
      "Email ou mot de passe incorrect",
      'error'
    );

    

   }

    );



  }





}

