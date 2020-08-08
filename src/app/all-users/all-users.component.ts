import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from 'src/core/utils.service';
import { GeneralService } from 'src/core/general.service';
import { ToasterService } from 'angular2-toaster';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  public selectedFnArea = 'default'
  public selectedQualification = 'default'
  public functionalAreas = []
  public qualification = []
  public checkedUser = []
  public usersData
  public displayedColumns = ["select", "fullname", "password", "functional_area", "education_qualification", "profile", "created_on", "actions"]

  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15];

  // MatPaginator Output
  // pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchText: any;

  constructor(public utilService: UtilsService,
    private generalService: GeneralService,
    private toasterService: ToasterService) { }

  async ngOnInit() {
    this.utilService.loggedIn = true;
    await this.getAllUsers()
    this.checkedUser = []
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersData.filter = filterValue.trim().toLowerCase();
  }

  getAllUsers() {
    this.checkedUser = []
    this.selectedFnArea = 'default'
    this.selectedQualification = 'default'
    this.searchText = ''
    this.utilService.enableLoading = true;
    this.generalService.getAllUsers().subscribe((response: any) => {
      this.utilService.enableLoading = false;
      this.usersData = new MatTableDataSource(response.data)
      for (let elem of response.data) {
        if (elem && elem.functional_area) this.functionalAreas.push(elem.functional_area)
      }
      this.functionalAreas = [...new Set(this.functionalAreas)]

      for (let elem of response.data) {
        if (elem && elem.education_qualification) this.qualification.push(elem.education_qualification)
      }
      this.qualification = [...new Set(this.qualification)]

      this.length = response.data.length
      this.usersData.paginator = this.paginator;
    }, (error: any) => {
      this.utilService.enableLoading = false;
      this.toasterService.pop('error', 'Error', 'Something went wrong while fetching users list')
    })
  }

  editEntry(uCode) {
    console.log(uCode)
  }

  deleteEntry(uCode) {
    console.log(uCode)
  }

  onFnAreaChange(value) {
    this.selectedFnArea = value
  }

  onQualificationChange(value) {
    this.selectedQualification = value
  }

  searchResult() {
    const json = Object({})
    if (this.selectedFnArea !== 'default') {
      json.functional_area = this.selectedFnArea
    }
    if (this.selectedQualification !== 'default') {
      json.education_qualification = this.selectedQualification
    }
    if (this.searchText) {
      json.fullname = this.searchText
    }
    if (Object.keys(json).length === 0) return true
    this.generalService.searchUser(json).subscribe((response: any) => {
      this.usersData = new MatTableDataSource(response.data)
      for (let elem of response.data) {
        if (elem && elem.functional_area) this.functionalAreas.push(elem.functional_area)
      }
      this.functionalAreas = [...new Set(this.functionalAreas)]

      for (let elem of response.data) {
        if (elem && elem.education_qualification) this.qualification.push(elem.education_qualification)
      }
      this.qualification = [...new Set(this.qualification)]

      this.length = response.data.length
      this.usersData.paginator = this.paginator;
    })
  }

  arrayRemove(arr, value) { return arr.filter(function(ele){ return ele != value; });}

  checkedBox(uCode) {
    if (this.checkedUser.includes(uCode)) {
      this.checkedUser = this.arrayRemove(this.checkedUser, uCode)
    } else {
      this.checkedUser.push(uCode)
    }
    this.checkedUser = [...new Set(this.checkedUser)]
    console.log(this.checkedUser)
  }
}
