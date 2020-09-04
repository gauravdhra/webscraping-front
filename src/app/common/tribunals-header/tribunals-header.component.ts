import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tribunals-header',
  templateUrl: './tribunals-header.component.html',
  styleUrls: ['./tribunals-header.component.scss']
})
export class TribunalsHeaderComponent implements OnInit {
  selectedTribunal = 'green-tribunal'
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  var pathList = this.router.url.split('/')
  if (pathList.length == 3)
    this.selectedTribunal = pathList[2];
  }
  public switchTribunal() {
    this.router.navigate(['/tribunals/' + this.selectedTribunal]);
  }
}