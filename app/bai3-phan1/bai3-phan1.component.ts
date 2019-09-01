import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3-phan1',
  templateUrl: './bai3-phan1.component.html',
  styleUrls: ['./bai3-phan1.component.css']
})
export class Bai3Phan1Component implements OnInit {

  constructor() { }
info=[{
  "id":"pd100",
  "image":"assets/images/laptop.jpg",
  "name":"Laptop",
  "price":30000,
  "quality":3,
  "actionview":"view",
  "actiondel":"delete"
},
{
  "id":"pd101",
  "image":"assets/images/mobilephone.jpg",
  "name":"Mobile Phone",
  "price":54000,
  "quality":5,
  "actionview":"view",
  "actiondel":"delete"
},
{
  "id":"pd102",
  "image":"assets/images/monitor.jpg",
  "name":"Monitor",
  "price":22000,
  "quality":6,
  "actionview":"view",
  "actiondel":"delete"
},
{
  "id":"pd103",
  "image":"assets/images/headphone.jpg",
  "name":"Headphone",
  "price":1300,
  "quality":13,
  "actionview":"view",
  "actiondel":"delete"
}
]
anhien =true
an(){
  this.anhien=false
}
hien(){
  this.anhien=true
}
Tong(){
  let s=0
  for(let i=0;i<this.info.length;i++){
    s=s+this.info[i].price*this.info[i].quality
  }
  return s
}
tang(id){
  for(let i=0;i<this.info.length;i++){
    if(id===this.info[i].id)
    this.info[i].quality++
  }
}
giam(id){
  for(let i=0;i<this.info.length;i++){
    if(id===this.info[i].id)
    this.info[i].quality--
  }
}
  ngOnInit() {
  }

}
