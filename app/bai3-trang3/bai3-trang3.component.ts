import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-bai3-trang3',
  templateUrl: './bai3-trang3.component.html',
  styleUrls: ['./bai3-trang3.component.css']
})
export class Bai3Trang3Component implements OnInit {
  option = 5;
  constructor() { }
  navbar=["Home","Employees","Projects","Skills","Interns","Topics","Courses","Topic Course","Classes"]
  info=[{
    "number":'1',
    "firstname":"Cong",
    "lastname":"Ngo",
    "email":"ntcong@tma.com.vn",
  },
  {
    "number":'2',
    "firstname":"Thuy",
    "lastname":"Thanh",
    "email":"as@gmail.com",
  },
  {
    "number":'3',
    "firstname":"Thuy",
    "lastname":"Thanh",
    "email":"thanhthuy@gmail.com",
  },
  {
    "number":'4',
    "firstname":"Qui",
    "lastname":"Tran",
    "email":"quitran@tma.com.vn",
  },
  {
    "number":'5',
    "firstname":"Nguyen",
    "lastname":"Tran",
    "email":"nguyentran@tma.com.vn",
  }
]
data=this.info
filter(event){
  const value = event.target.value.toLowerCase();
    this.data = this.info.filter(item => {
      return (
        item.number.toLowerCase().indexOf(value) >= 0 ||
        item.firstname.toLowerCase().indexOf(value) >= 0 ||
        item.lastname.toLowerCase().indexOf(value) >= 0 ||
        item.email.toLowerCase().indexOf(value) >= 0
      );
    });
}
  ngOnInit() {
  }

}
