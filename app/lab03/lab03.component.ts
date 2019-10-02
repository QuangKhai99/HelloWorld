import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab03',
  templateUrl: './lab03.component.html',
  styleUrls: ['./lab03.component.css']
})
export class Lab03Component implements OnInit {

  constructor() { }
  hcn = {
    cd: null,
    cr: null,
    cv: null,
    dt: null
  }
  tinh() {
    this.hcn.cv = (this.hcn.cd + this.hcn.cr) * 2;
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }

  nhanVien = {
    fullName: "",
    salary: 0,
    gender: "",
    rate: 0,
  }
  doTuoi = [
    {
      age: "Duoi 25 tuoi",
      rate: 0.07
    },
    {
      age: "Tu 25 den 40 tuoi",
      rate: 0.1
    },
    {
      age: "Tren 40 tuoi",
      rate: 0.15
    }
  ]
  tinhThuong() {
    let t = this.nhanVien.salary * this.nhanVien.rate
    if (this.nhanVien.gender === "Nu")
      t += 200000
    return t;
  }
  item = [
    {
      name: "Nuoc ngot",
      price: 10000,
      soLuong: 0,
      thanhTien: 0,
      trangThai: true
    },
    {
      name: "Ca phe",
      price: 12000,
      soLuong: 0,
      thanhTien: 0,
      trangThai: true
    },
    {
      name: "Thuoc la",
      price: 18000,
      soLuong: 0,
      thanhTien: 0,
      trangThai: true
    }
  ]
  thanhTien(name) {
    let t = 0
    for (let i = 0; i < this.item.length; i++)
      if (this.item[i].name === name)
        t=this.item[i].thanhTien=this.item[i].price * this.item[i].soLuong 
    return t;
  }

  tongTien() {
    let t = 0;
    for (let i = 0; i < this.item.length; i++)
      if (this.item[i].trangThai === true)
        t += this.item[i].thanhTien
    return t; 
  }

  ngOnInit() {
  }

}
