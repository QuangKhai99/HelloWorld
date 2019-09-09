import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor() { }
  students = [
    { "ID": 1, "FirstMidName": "Carson", "LastName": "Alexander", "EnrollmentDate": "2005-09-01" },
    { "ID": 2, "FirstMidName": "Meredith", "LastName": "Alonso", "EnrollmentDate": "2002-09-01" },
    { "ID": 3, "FirstMidName": "Arturo", "LastName": "Anand", "EnrollmentDate": "2003-09-01" },
    { "ID": 4, "FirstMidName": "Gytis", "LastName": "Barzdukas", "EnrollmentDate": "2002-09-01" },
    { "ID": 5, "FirstMidName": "EYan", "LastName": "Li", "EnrollmentDate": "2002-09-01" },
    { "ID": 6, "FirstMidName": "Peggy", "LastName": "Justice", "EnrollmentDate": "2001-09-01" },
    { "ID": 7, "FirstMidName": "Laura", "LastName": "Norman", "EnrollmentDate": "2003-09-01" },
    { "ID": 8, "FirstMidName": "Nino", "LastName": "Olivetto", "EnrollmentDate": "2005-09-01" }
  ];
  ngOnInit() {
  
  }
  p: number = 1;
  idXoa;
  findId(id){
    for(let i=0;i<this.students.length;i++)
      if(id==this.students[i].ID)
      this.idXoa=id;
  }
  delete(){
    for(let i=0;i<this.students.length;i++)
      if(this.students[i].ID==this.idXoa)
      {
        this.students.splice(i,1);
        
      }
        
  }
}
