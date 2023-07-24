import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-used-cars-dashboard',
  templateUrl: './manage-used-cars-dashboard.component.html',
  styleUrls: ['./manage-used-cars-dashboard.component.css']
})
export class ManageUsedCarsDashboardComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToPage() {
    // this.router.navigate['ajouter-salle-component'];
  }
}
