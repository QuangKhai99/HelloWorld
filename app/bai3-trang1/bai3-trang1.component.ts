import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bai3-trang1',
  templateUrl: './bai3-trang1.component.html',
  styleUrls: ['./bai3-trang1.component.css']
})
export class Bai3Trang1Component implements OnInit {
  listproducts =[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/download.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart.",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/cart.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer.",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw.",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller.",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox.jpg"
    },
  ]
  constructor(private route:ActivatedRoute) { }
  id;
  list: any;
  ngOnInit() {
    this.route.paramMap.subscribe(param=>
      this.id = +parseInt(param.get("productId")))
    this.list= this.listproducts.find(item=>
      item.productId===this.id)
      
  }

}
