import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-haryana-punjab',
  templateUrl: './haryana-punjab.component.html',
  styleUrls: ['./haryana-punjab.component.scss']
})
export class HaryanaPunjabComponent implements OnInit {
  isFormValid = []

  title = 'ProjectScrap-Frontend';
  headers = []
  listResponse = [];
  selectedSearch = "partyName"
  spinner = false
  baseUrl = environment.baseUrl
  message: string

  searchByCNRNumberDate;
  searchBy = [
    "Party Name",
    "Advocate Name",
    "Case Number",
    "CNR Number"
  ]


  searchByPartyName = {
    "pet_name": "",
  }

  advocateName = true
  searchByAdvocateName = {
    "adv_name": "",
  }
  searchByAdvocateCode = {
    "adv_code": "",
    "adv_number": "",
    "adv_year": "",
  }
  searchByCaseNumber = {
    "t_case_type": "",
    "t_case_no": "",
    "t_case_year": ""
  }
  searchByCNRNumber = {
    "t_lac_dist": "",
    "t_lac_no": "",
    "t_lac_date": ""
  }


  constructor(private http: HttpClient, public datepipe: DatePipe) {

  }



  ngOnInit() {
  }

  asignDateValue(date) {
    let cirDate = new Date(date);
    this.searchByCNRNumber.t_lac_date = this.datepipe.transform(cirDate, 'dd/MM/yyyy');
  }
  selectOne(selected) {
    if (selected == 'name') {
      this.advocateName = true
    }
    if (selected == 'code') {
      this.advocateName = false
    }
  }
  submitAdvocate(searchType, data) {

    if (this.advocateName) {
      var isValid = this.validateForm(this.searchByAdvocateName, searchType)
      if (!isValid) return
    }
    else {
      var isValid = this.validateForm(this.searchByAdvocateCode, searchType)
      if (!isValid) return
    }

    let url = this.baseUrl + '/scrape';

    this.spinner = true
    let selectedSearch
    if (this.advocateName)
      selectedSearch = this.searchByAdvocateName
    else
      selectedSearch = this.searchByAdvocateCode

    this.http.get<any>(url + '/advocate', { params: selectedSearch }).subscribe(data => {
      this.listResponse = data.listResponse;
      this.headers = data.headers;
      this.spinner = false

      }, error => {
        this.spinner = false
        this.message = "Not Found"
      })

  }


  submit(searchType, data) {


    var isValid = this.validateForm(data, searchType)
    if (!isValid) return

    let url = this.baseUrl + '/scrape';
    if (searchType == 'partyName') {
      this.spinner = true
      this.http.get<any>(url + '/party', { params: this.searchByPartyName }).subscribe(data => {
        this.listResponse = data.listResponse;
        this.headers = data.headers;
        this.spinner = false
      }, error => {
        this.spinner = false
        this.message = "Not Found"
      })
    }
    if (searchType == 'advocateName') {
      this.spinner = true
      let selectedSearch
      if (this.advocateName)
        selectedSearch = this.searchByAdvocateName
      else
        selectedSearch = this.searchByAdvocateCode

      this.http.get<any>(url + '/advocate', { params: selectedSearch }).subscribe(data => {
        this.listResponse = data.listResponse;
        this.headers = data.headers;
        this.spinner = false
      }, error => {
        this.spinner = false
        this.message = "Not Found"
      })
    }
    if (searchType == 'caseNumber') {
      this.spinner = true
      this.http.get<any>(url + '/case', { params: this.searchByCaseNumber }).subscribe(data => {
        this.listResponse = data.listResponse;
        this.headers = data.headers;
        this.spinner = false

      }, error => {
        this.spinner = false
        this.message = "Not Found"
      })
    }
    if (searchType == 'cnrNumber') {
      this.spinner = true
      this.http.get<any>(url + '/cnr', { params: this.searchByCNRNumber }).subscribe(data => {
        this.listResponse = data.listResponse;
        this.headers = data.headers;
        this.spinner = false

      }, error => {
        this.spinner = false
        this.message = "Not Found"
      })
    }
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
