import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
declare var $ :any;
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
  }];
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  Mones=[
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
  // drop(event: any): void { if (event.previousContainer === event.container) { moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); } else { transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex); } }

  ngOnInit(): void {
    $(function() {
      $("#imageListId").sortable({
          update: function(event, ui) {
                  getIdsOfImages();
                  
              } //end update         
      });
  });

  function getIdsOfImages() {
      var values = [];
      $('.listitemClass').each(function(index) {
          values.push($(this).attr("id")
                      .replace("imageNo", ""));
      });
      console.log(values)
  } 
  }

addata(){
  this.addProduct.push({
    sku:"",
    Price:"",
    varition:""
  })
}
}
