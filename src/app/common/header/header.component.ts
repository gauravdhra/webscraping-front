import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCourt = 'haryana-punjab'
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // console.log(this.router.url )

  }
  ngOnInit(): void {
    if(window.location.pathname == '/')
    this.switchCourt()
    
    else
    this.selectedCourt = window.location.pathname.substring(1, window.location.pathname.length)
    
    // console.log(this.router)
    // console.log(this.activatedRoute.snapshot['_routerState'])
  }
  public switchCourt() {
    this.router.navigate(['/' + this.selectedCourt]);
  }
}
