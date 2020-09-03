import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-karnataka',
  templateUrl: './karnataka.component.html',
  styleUrls: ['./karnataka.component.scss']
})
export class KarnatakaComponent implements OnInit {

selectedSearch = "party"
  baseUrl = environment.baseUrl+'/karnataka'
  spinner = false
  searchByPartyNameToDate;
  searchByPartyNameFromDate;
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
    "from_date": "",
    "to_date": "",
  }
  searchByAdvocateName = {
    "petres_name": "",
    "from_date": "",
    "to_date": "",
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


  asignFromDateValue(data,date){
    let cirDate=new Date(date);
    data.from_date =this.datepipe.transform(cirDate, 'dd-MM-yyyy');  
  }
  asignToDateValue(data,date){
    let cirDate=new Date(date);
    data.to_date =this.datepipe.transform(cirDate, 'dd-MM-yyyy');  
  }
  submit(searchType,data) 
  {var isValid = this.validateForm(data,searchType)
    if(!isValid) return
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/' + searchType, { params: data }).subscribe(data => {
      this.theTableString = data['table']
      this.listResponse = data['listResponse'];
      this.headers = data['headers'];
      this.spinner = false
    }, error => {
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
