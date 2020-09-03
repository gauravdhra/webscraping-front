import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orissa',
  templateUrl: './orissa.component.html',
  styleUrls: ['./orissa.component.scss']
})
export class OrissaComponent implements OnInit {

selectedSearch = "party"
  baseUrl = environment.baseUrl+'/orissa'
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
    "petres_name": "",
    "rgyear": "",
  }
  searchByAdvocateName = {
    "advocate_name": "",
  }

  searchByCaseNumber = {
    "case_type": "",
    "search_case_no": "",
    "rgyear": "",
  }
  searchByCNRNumber = {
    "m_yr": "",
    "m_no": ""
  }



  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  submit(searchType,data) 
  {var isValid = this.validateForm(data,searchType)
    if(!isValid) return
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/' + searchType, { params: data }).subscribe(data => {
      this.theTableString = data.table
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

