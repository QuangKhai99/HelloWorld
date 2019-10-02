import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  courses = [
    { CourseID: 1050, "Title": "Chemistry", Credits: 3, },
    { CourseID: 4022, "Title": "Python", Credits: 3, },
    { CourseID: 4041, "Title": "Macroeconomics", Credits: 3, },
    { CourseID: 1045, "Title": "Calculus", Credits: 4, },
    { CourseID: 3141, "Title": "DjAngo", Credits: 4, },
    { CourseID: 2021, "Title": "Composition", Credits: 3, },
    { CourseID: 2042, "Title": "Literature", Credits: 4, }
  ];
  enrollments = [
    { StudentID: 1, CourseID: 1050, "Grade": "A" },
    { StudentID: 1, CourseID: 4022, "Grade": "C" },
    { StudentID: 1, CourseID: 4041, "Grade": "B" },
    { StudentID: 2, CourseID: 1045, "Grade": "B" },
    { StudentID: 2, CourseID: 3141, "Grade": "F" },
    { StudentID: 2, CourseID: 2021, "Grade": "F" },
    { StudentID: 3, CourseID: 1050, "Grade": "B" },
    { StudentID: 4, CourseID: 1050, "Grade": "B" },
    { StudentID: 4, CourseID: 4022, "Grade": "F" },
    { StudentID: 5, CourseID: 4041, "Grade": "C" },
    { StudentID: 6, CourseID: 1045, "Grade": "B" },
    { StudentID: 6, CourseID: 3141, "Grade": "A" },
  ];
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
  constructor(private route: ActivatedRoute) { 
    
  }
  id;
  thongtin:any
  stu=[];
  s=[];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('ID'));
    });
    this.enrollments.filter(item =>{
      if(item.StudentID === this.id){
        this.stu.push(item);
      }
    });
    this.thongtin=this.students.find(item=>
      item.ID==this.id)
      
    this.courses.filter(item => {
      for(let i=0; i< this.stu.length ; i++){
        if(item.CourseID === this.stu[i].CourseID){
          this.s[i] = {"Grade": this.stu[i].Grade,  "Title": item.Title ,"Credits": item.Credits };
        }
      }
    })
  }
}
