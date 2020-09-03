import { Component, OnInit } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  selectedDepartment = 'high-courts'
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof ActivationStart && val.snapshot.data.department)
        this.selectedDepartment = val.snapshot['data']['department'][0]
    });
  }
  public switchToHighCourt(route) {
    this.selectedDepartment = route
    this.router.navigate([route]);
  }
  public switchToDistrictCourt(route) {
    this.selectedDepartment = route
    this.router.navigate([route]);
  }
  public switchToPoliceStation(route) {
    this.selectedDepartment = route
    this.router.navigate([route]);
  }
}
