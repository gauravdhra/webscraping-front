import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.scss']
})
export class DelhiComponent implements OnInit {

  baseUrl = environment.baseUrl + '/police-station'

  policeStations: any[]
  dropdownLoaded = false
  years = []

  searchByPartyNameFromDate
  searchByPartyNameToDate

  searchFir = {
    sdistrict: "",
    spolicestation: "",
    firYear: "",
    regFirNo: "",
    radioValue: "",

    // firFromDateStr: "",
    // firToDateStr: "",
    // searchName: ""
  }






  selectedSearch = "FIR"
  spinner = false
  headers = ["FIR NO.", "FIR Date(DD/MM/YYYY)", "FIR Year"]
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




  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.listYear()
  }

  getPoliceStation() {
    this.policeStations = []
    this.dropdownLoaded = true
    let paramData = {
      districtCd: this.searchFir.sdistrict
    }
    this.http.get<any>(this.baseUrl + '/delhi/getpolicestations', { params: paramData }).subscribe(data => {
      this.policeStations = data.stations.rows;
      setTimeout(() => {
        this.dropdownLoaded = false
      }, 1000)
    }, error => {
      console.log("error", error)
      setTimeout(() => {
        this.dropdownLoaded = false
      }, 1000)
      this.listResponse = [];
    })
  }

  public listYear() {
    this.years = [];
    let endYear = (new Date()).getFullYear()
    let startYear = endYear - 5
    for (var i = endYear; i >= startYear; i--) {
      this.years.push(i);
    }
  }
  asignFromDateValue(data, date) {
    let cirDate = new Date(date);
    data.fDate = this.datepipe.transform(cirDate, 'dd-MM-yyyy');
  }
  asignToDateValue(data, date) {
    let cirDate = new Date(date);
    data.toDate = this.datepipe.transform(cirDate, 'dd-MM-yyyy');
  }



  submit(searchType, data) {
    this.listResponse = []
    var isValid = this.validateForm(data, searchType)
    if (!isValid) return
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/delhi/' + searchType, { params: data }).subscribe(data => {

      let result = data['listResponse']['list']
      if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          let object = []
          object.push(result[i].firNumDisplay)
          object.push(result[i].firRegDate)
          object.push(result[i].firYear)
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
      if (data[key] == "" && key != "radioValue") {
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
