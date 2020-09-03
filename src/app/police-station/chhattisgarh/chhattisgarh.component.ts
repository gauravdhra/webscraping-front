import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-chhattisgarh',
  templateUrl: './chhattisgarh.component.html',
  styleUrls: ['./chhattisgarh.component.scss']
})
export class ChhattisgarhComponent implements OnInit {


  policeStations: any[]
  dropdownLoaded = false

  searchByPartyNameFromDate
  searchByPartyNameToDate

  searchFir = {
    districtCode: "",
    psCode: "",
    fDate: "",
    toDate: "",
    flg: "2",
    isSho: "C",
    startPg: "1",
    endPg: "30"
  }

  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  getPoliceStation() {    
    this.policeStations = []
    this.dropdownLoaded = true
    this.http.get<any>(this.baseUrl + '/chhattisgarh/getpolicestations', { params: { distCode: this.searchFir.districtCode } }).subscribe(data => {
      this.policeStations = data.stations;
      setTimeout(()=>{
        this.dropdownLoaded = false
      },1000)
    }, error => {
      console.log("error", error)
      setTimeout(()=>{
        this.dropdownLoaded = false
      },1000)
      this.listResponse = [];
    })
  }


  asignFromDateValue(data, date) {
    let cirDate = new Date(date);
    data.fDate = this.datepipe.transform(cirDate, 'dd-MM-yyyy');
  }
  asignToDateValue(data, date) {
    let cirDate = new Date(date);
    data.toDate = this.datepipe.transform(cirDate, 'dd-MM-yyyy');
  }








  selectedSearch = "FIR"
  baseUrl = environment.baseUrl + '/police-station'
  spinner = false
  headers = ["FIR NO.","Name of Complainant","Name of Accused Person","Act/Section","Remark","Preview/Download"]
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




  submit(searchType, data) {
    var isValid = this.validateForm(data, searchType)
    if (!isValid) return
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/chhattisgarh/' + searchType, { params: data }).subscribe(data => {

      let result = data['listResponse']
      if(result.length > 0){
        for(var i =0;i<result.length ; i++){
          let object = []
          object.push(result[i].firNo)
          object.push(result[i].complaName)
          object.push(result[i].accuseName)
          object.push(result[i].ActSec)
          object.push(result[i].spComment)
          this.listResponse.push(object)
        }
      }
      
      this.message = `<h2>${data.message}</h2>`
      this.spinner = false
    }, error => {
      console.log("error", error)
      this.message = error['error']
      this.listResponse = [];
      this.spinner = false
    })
  }
  validateForm(data, searchType) {
    for (var key in data) {
      var index
      if (data[key] == "") {
        index = this.isFormValid.indexOf(searchType)
        console.log(index);
        if (index == -1) {
          this.isFormValid.push(searchType)
        }
        return false
      }
    }
    this.isFormValid.splice(index, 1);
    return true
  }
  onselectSearchType(event) {
    this.isFormValid = [];
  }
}
