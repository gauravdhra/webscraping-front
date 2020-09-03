import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


interface District {
  id: string,
  name: string,
  value: string,
  districtId: string,
  courtComplex:any[]
}
interface State {
  id: string,
  name: string,
  value: string,
  stateID: string,
  district: District[]
}


@Component({
  selector: 'app-anantapur',
  templateUrl: './district-courts.component.html',
  styleUrls: ['./district-courts.component.scss']
})
export class DistrictCourtsComponent implements OnInit {
  dropdown : State[]

  selectList

  stateList ;
  districtList : District[] = []

  selectedState : State
  selectedDistrict : District

  stateId: string
  districtId: string

  stateIndex: string = "default"
  districtIndex: string = "default"


  selectedSearch = "default"
  baseUrl = environment.baseUrl + '/district-court'
  spinner = false
  dropdownLoaded = false
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

  searchByPartyName = {
    "court_complex_code": "",
    "petres_name": "",
    "rgyear": ""
  }
  searchByAdvocateName = {
    "court_complex_code": "",
    "advocate_name": ""
  }

  searchByCaseNumber = {
    "court_complex_code": "",
    "search_case_no": "",
    "rgyear": "",
  }
  searchByCNRNumber = {
    "m_yr": "",
    "m_no": ""
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDropdown()
    this.listYear()
  }

  public switchState() {
    this.selectedState = this.stateList[this.stateIndex]
    this.districtList = this.selectedState['district'];
    this.districtIndex = "default"
    this.stateId = this.selectedState['stateId']
  }
  public switchDistrict() {
    this.resetForm();
    this.selectedDistrict = this.districtList[this.districtIndex]
    this.districtId = this.selectedDistrict['districtId']
  }
  public listYear() {
    this.years = [];
    let startYear = 1960
    let endYear = (new Date()).getFullYear()
    for (var i = endYear; i >= startYear; i--) {
      this.years.push(i);
    }
  }
  loadDropdown() {
    this.dropdownLoaded = true
    this.http.get<any>(this.baseUrl + '/dropdown').subscribe(data => {
      this.dropdown = data.dropdown;
      this.stateList = this.dropdown['states'];
      setTimeout(()=>{
        this.dropdownLoaded = false
      },1000)
    }, error => {
      setTimeout(()=>{
        this.dropdownLoaded = false
      },1000)    })
  }
  submit(searchType, data) {
    var isValid = this.validateForm(data, searchType)
    if (!isValid) return

    data['stateId'] = this.stateId
    data['districtId'] = this.districtId
    this.spinner = true
    this.http.get<any>(this.baseUrl + '/' + searchType, { params: data }).subscribe(data => {
      this.listResponse = data.listResponse;
      this.headers = data.headers;
      this.message = `<h2>${data.message}</h2>`
      this.spinner = false
    }, error => {
      console.log("error", error)
      // this.message = "Not Found"
      this.message = error['error']
      this.listResponse = [];
      this.headers = [];
      this.spinner = false
    })
  }
  resetForm(){
    this.searchByPartyName = {
      "court_complex_code": "",
      "petres_name": "",
      "rgyear": ""
    }
    this.searchByAdvocateName = {
      "court_complex_code": "",
      "advocate_name": ""
    }
  
    this.searchByCaseNumber = {
      "court_complex_code": "",
      "search_case_no": "",
      "rgyear": "",
    }
    this.searchByCNRNumber = {
      "m_yr": "",
      "m_no": ""
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
    this.resetForm();
    this.isFormValid = [];
  }

}
