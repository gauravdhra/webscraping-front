import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bombay',
  templateUrl: './bombay.component.html',
  styleUrls: ['./bombay.component.scss']
})
export class BombayComponent implements OnInit {
  selectedSearch = "party"
  baseUrl = environment.baseUrl+'/bombay'
  spinner = false
  headers = []
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

  searchByPartyName = {
    "party_name": ""
  }
  searchByAdvocateName = {
    "adv_name": "",
  }

  searchByCaseNumber = {
    "m_no": "",
    "m_yr": "",
  }
  searchByCNRNumber = {
    "m_yr": "",
    "m_no": ""
  }



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(searchType,data) {   
     var isValid = this.validateForm(data,searchType)
    if(!isValid) return

    this.spinner = true
    this.http.get<any>(this.baseUrl + '/' + searchType, { params: data }).subscribe(data => {
      this.listResponse = data.listResponse;
      this.headers = data.headers;
      this.spinner = false
      this.message = data.message;
    },error=>{
      this.listResponse = [];
      this.headers = [];
      this.spinner = false
      // this.theTableString = error
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

