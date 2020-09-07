import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-railway-tribunal',
  templateUrl: './railway-tribunal.component.html',
  styleUrls: ['./railway-tribunal.component.scss']
})
export class RailwayTribunalComponent implements OnInit {

selectedSearch = "party"
  baseUrl = environment.baseUrl+'/tribunal'
  spinner = false
  headers = []
  years = []
  listResponse = [];
  theTableString: string
  message: string
  searchBy = [
    "Party Name",
    "Advocate Name",
    "Case Number",
    "CNR Number"
  ]
  isFormValid = []

  searchByParameters = {
    "casetype": "",
    "rct": "",
    "caseno": "",
    "year": ""
  }




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listYear();
  }

  public listYear() {
    this.years = [];
    let startYear = 1960
    let endYear = (new Date()).getFullYear()+5
    for (var i = endYear; i >= startYear; i--) {
      this.years.push(i);
    }
  }
  submit(searchType,data){
    var isValid = this.validateForm(data,searchType)
    if(!isValid) return
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/railway-tribunal/' + searchType, { params: data }).subscribe(data => {
      this.listResponse = data.listResponse;
      this.headers = data.headers;
      this.message = data.message
      this.spinner = false
    },error=>{
      console.log("error",error)  
      this.message = "Not Found"
      this.listResponse = [];
      this.headers = [];
      this.spinner = false
    })
  }
validateForm(data,searchType){
    for(var key in data){
      var index  
      if(data[key] == ""){
        index = this.isFormValid.indexOf(searchType)
        console.log(index);
        if(index == -1){
          this.isFormValid.push(searchType)
        }
        return false
      } 
    }
    this.isFormValid.splice(index,1);
    return true
  }
  onselectSearchType(event){
    this.isFormValid = [];
  }
}
