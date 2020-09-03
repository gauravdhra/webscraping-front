import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-station-header',
  templateUrl: './police-station-header.component.html',
  styleUrls: ['./police-station-header.component.scss']
})
export class PoliceStationHeaderComponent implements OnInit {

  selectedStation = 'chhattisgarh'
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  var pathList = this.router.url.split('/')
  if (pathList.length == 3)
    this.selectedStation = pathList[2];
  }
  public switchPoliceStation() {
    this.router.navigate(['/police-station/' + this.selectedStation]);
  }
}

