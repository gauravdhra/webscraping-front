import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-calcutta',
  templateUrl: './calcutta.component.html',
  styleUrls: ['./calcutta.component.scss']
})
export class CalcuttaComponent implements OnInit {
  isFormValid = []

  selectedSearch = "party"
  baseUrl = environment.baseUrl+'/calcutta'
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
    "pet_name": "",
  }
  searchByAdvocateName = {
    "pet_adv": "",
  }

  searchByCaseNumber = {
    "case_no": "",
  }
  searchByCNRNumber = {
    "m_yr": "",
    "m_no": ""
  }



  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  submit(searchType,data) {    
    var isValid = this.validateForm(data,searchType)
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
