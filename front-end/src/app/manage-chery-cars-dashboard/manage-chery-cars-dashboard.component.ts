import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-chery-cars-dashboard',
  templateUrl: './manage-chery-cars-dashboard.component.html',
  styleUrls: ['./manage-chery-cars-dashboard.component.css']
})
export class ManageCheryCarsDashboardComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToPage() {
    // this.router.navigate['ajouter-salle-component'];
  }
}
