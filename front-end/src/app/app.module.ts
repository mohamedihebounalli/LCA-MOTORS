import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { FooterComponent } from './footer/footer.component';

import { HomePage } from './home/home.page';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AfterSalesServiceFormComponent } from './after-sales-service-form/after-sales-service-form.component';

import { PlanSalesFormComponent } from './plan-sales-form/plan-sales-form.component';

import { CarPurchaseFormComponent } from './car-purchase-form/car-purchase-form.component';

import { ManageCheryCarsDashboardComponent } from './manage-chery-cars-dashboard/manage-chery-cars-dashboard.component';
import { ManageUsedCarsDashboardComponent } from './manage-used-cars-dashboard/manage-used-cars-dashboard.component';

import { ManageAccountsDashboardComponent } from './manage-accounts-dashboard/manage-accounts-dashboard.component';

import { TreatAfterSalesServiceDashboardComponent } from './treat-after-sales-service-dashboard/treat-after-sales-service-dashboard.component';

import { CheryCarsListComponent } from './chery-cars-list/chery-cars-list.component';
import { UsedCarsListComponent } from './used-cars-list/used-cars-list.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TechnicalManagerDashboardComponent } from './technical-manager-dashboard/technical-manager-dashboard.component';
import { SalesManagerDashboardComponent } from './sales-manager-dashboard/sales-manager-dashboard.component';

import { AddAccountFormComponent } from './add-account-form/add-account-form.component';
import { UpdateAccountFormComponent } from './update-account-form/update-account-form.component';

import { AddCheryCarFormComponent } from './add-chery-car-form/add-chery-car-form.component';
import { UpdateCheryCarFormComponent } from './update-chery-car-form/update-chery-car-form.component';

import { AddUsedCarFormComponent } from './add-used-car-form/add-used-car-form.component';
import { UpdateUsedCarFormComponent } from './update-used-car-form/update-used-car-form.component';

import { AccountsListComponent } from './accounts-list/accounts-list.component';

import { CheryCarsConsultTableComponent } from './chery-cars-consult-table/chery-cars-consult-table.component';
import { UsedCarsConsultTableComponent } from './used-cars-consult-table/used-cars-consult-table.component';

import { NewsComponent } from './news/news.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';







@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        HeaderComponent,
        BreadCrumbComponent,
        FooterComponent,
        LoginComponent,
        SignUpComponent,
        AfterSalesServiceFormComponent,
        PlanSalesFormComponent,
        CarPurchaseFormComponent,
        ManageCheryCarsDashboardComponent,
        ManageUsedCarsDashboardComponent,
        ManageAccountsDashboardComponent,
        TreatAfterSalesServiceDashboardComponent,
        CheryCarsListComponent,
        UsedCarsListComponent,
        AdminDashboardComponent,
        TechnicalManagerDashboardComponent,
        SalesManagerDashboardComponent,
        AddAccountFormComponent,
        UpdateAccountFormComponent,
        AddCheryCarFormComponent,
        UpdateCheryCarFormComponent,
        AddUsedCarFormComponent,
        UpdateUsedCarFormComponent,
        AccountsListComponent,
        CheryCarsConsultTableComponent,
        UsedCarsConsultTableComponent,
        NewsComponent,
      
    
    ],
    imports: [
        BrowserModule, 
        RouterModule,      
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SweetAlert2Module.forRoot(),
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
