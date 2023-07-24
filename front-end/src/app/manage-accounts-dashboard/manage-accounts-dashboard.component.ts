import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-accounts-dashboard',
  templateUrl: './manage-accounts-dashboard.component.html',
  styleUrls: ['./manage-accounts-dashboard.component.css']
})
export class ManageAccountsDashboardComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToPage() {
    // this.router.navigate['ajouter-salle-component'];
  }

}
