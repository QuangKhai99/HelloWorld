import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3-trang2',
  templateUrl: './bai3-trang2.component.html',
  styleUrls: ['./bai3-trang2.component.css']
})
export class Bai3Trang2Component implements OnInit {

  constructor() { }
  listproduct = [
    {
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/download.jpg"
    },
    {

      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/cart.jpg"
    },
    {
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.jpg"
    },
    {
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.jpg"
    },
    {
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox.jpg"
    },
  ]
  anhien = true;
  An() {
    this.anhien = !this.anhien;
  }
  data=this.listproduct
filter(event){
  console.log(event);
  
  const value = event.target.value.toLowerCase();
    this.data = this.listproduct.filter(item => {
      return (
        item.productName.toLowerCase().indexOf(value) >= 0 ||
        item.productCode.toLowerCase().indexOf(value) >= 0 ||
        item.releaseDate.toLowerCase().indexOf(value) >= 0
      );
    });
}
  ngOnInit() {
  }

}
