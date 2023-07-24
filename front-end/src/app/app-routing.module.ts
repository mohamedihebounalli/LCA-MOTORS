import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { CheryCarsListComponent } from './chery-cars-list/chery-cars-list.component';
import { UsedCarsListComponent } from './used-cars-list/used-cars-list.component';

import { AfterSalesServiceFormComponent } from './after-sales-service-form/after-sales-service-form.component';

import { CarPurchaseFormComponent } from './car-purchase-form/car-purchase-form.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageAccountsDashboardComponent } from './manage-accounts-dashboard/manage-accounts-dashboard.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AddAccountFormComponent } from './add-account-form/add-account-form.component';
import { UpdateAccountFormComponent } from './update-account-form/update-account-form.component';

import { TechnicalManagerDashboardComponent } from './technical-manager-dashboard/technical-manager-dashboard.component';
import { ManageUsedCarsDashboardComponent } from './manage-used-cars-dashboard/manage-used-cars-dashboard.component';
import { UsedCarsConsultTableComponent } from './used-cars-consult-table/used-cars-consult-table.component';
import { AddUsedCarFormComponent } from './add-used-car-form/add-used-car-form.component';
import { UpdateUsedCarFormComponent } from './update-used-car-form/update-used-car-form.component';
import { TreatAfterSalesServiceDashboardComponent } from './treat-after-sales-service-dashboard/treat-after-sales-service-dashboard.component';


import { SalesManagerDashboardComponent } from './sales-manager-dashboard/sales-manager-dashboard.component';
import { ManageCheryCarsDashboardComponent } from './manage-chery-cars-dashboard/manage-chery-cars-dashboard.component';
import { CheryCarsConsultTableComponent } from './chery-cars-consult-table/chery-cars-consult-table.component';

import { UpdateCheryCarFormComponent } from './update-chery-car-form/update-chery-car-form.component';
import { PlanSalesFormComponent } from './plan-sales-form/plan-sales-form.component';
import { NewsComponent } from './news/news.component';

import { AddCheryCarFormComponent } from './add-chery-car-form/add-chery-car-form.component';

import { RoleGuard } from './role.guard';















const routes: Routes = [
{
  path: '',
  component: HomePage
},
{
  path: 'accueil',
  component: HomePage
},
{
  path: "connexion",
  component: LoginComponent,
},
{
  path: "inscription",
  component: SignUpComponent
},
{
  path: "voiture-chery",
  component: CheryCarsListComponent,
},
{
  path: "voiture-utilisee",
  component: UsedCarsListComponent
},
{
  path: "demande-service-apres-vente",
  component: AfterSalesServiceFormComponent,
},
{
  path: "demande-achat-voiture",
  component: CarPurchaseFormComponent,
},
{
 path: "actualites",
 component: NewsComponent
},
{
  path: "admin-dashboard",
  component: AdminDashboardComponent,
  canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' },
  children: [
    {
      path: "gerer-comptes",
      component: ManageAccountsDashboardComponent,
      children: [
        {
          path: "",
          component: AccountsListComponent
        },
        {
          path: "ajouter-compte",
          component: AddAccountFormComponent,
        },
        {
          path: "modifier-compte",
          component: UpdateAccountFormComponent,
        }
      ]
    }
  ]
},
{
  path: "directeur-technique-dashboard",
  component: TechnicalManagerDashboardComponent,
  canActivate: [RoleGuard], data: { requiredRole: 'TECHNICAL_MANAGER' },
  children: [
    {
      path: "gerer-voiture-utilisee",
      component: ManageUsedCarsDashboardComponent,
      children: [
        {
          path: "",
          component: UsedCarsConsultTableComponent,
        },
        {
          path: "ajouter-voiture",
          component: AddUsedCarFormComponent,
        },
        {
          path: "modifier-voiture",
          component: UpdateUsedCarFormComponent,
        }
      ]
    },
    {
      path: "traiter-sav",
      component: TreatAfterSalesServiceDashboardComponent, 
    }
  ]

},
{
  path: "directeur-commercial-dashboard",
  component: SalesManagerDashboardComponent,
  canActivate: [RoleGuard], data: { requiredRole: 'SALES_MANAGER' },
  children: [
    {
      path: "gerer-voiture-chery",
      component: ManageCheryCarsDashboardComponent,
      children: [
        {
          path: "",
          component: CheryCarsConsultTableComponent,
        },
        {
          path: "ajouter-voiture",
          component: AddCheryCarFormComponent,
        },
        {
          path: "modifier-voiture",
          component: UpdateCheryCarFormComponent,
        }
      ]
    },
    {
      path: "planifier-vente",
      component: PlanSalesFormComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'accueil',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
