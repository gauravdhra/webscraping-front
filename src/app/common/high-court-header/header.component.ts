import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCourt = 'allahabad'
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  var pathList = this.router.url.split('/')
  if (pathList.length == 3)
    this.selectedCourt = pathList[2];
  }
  public switchCourt() {
    this.router.navigate(['/high-courts/' + this.selectedCourt]);
  }
}
