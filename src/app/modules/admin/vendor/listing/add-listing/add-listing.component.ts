import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  constructor() { }
  addProduct=[{
    sku:"",
    Price:"",
    varition:""
  }]
  ngOnInit(): void {
  }

addata(){
  this.addProduct.push({
    sku:"",
    Price:"",
    varition:""
  })
}
}
