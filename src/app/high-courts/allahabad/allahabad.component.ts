import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-allahabad',
  templateUrl: './allahabad.component.html',
  styleUrls: ['./allahabad.component.scss']
})
export class AllahabadComponent implements OnInit {
  isFormValid = []
  selectedSearch = "party"
  baseUrl = environment.baseUrl + '/allahabad'
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
  searchByPartyName = {
    "party_type": "",
    "party_name": "",
    "from_year": "",
    }

    searchByAdvocateName = {
      "adv_roll": "",
    }
  
    searchByCaseNumber = {
      "case_type": "",
      "case_no": "",
      "case_year": "",
    }
    searchByCNRNumber = {
      "crst_type": "",
      "crst_no": "",
      "year": "",
      "district": "",
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

