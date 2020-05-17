import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  
  @Output() textChange = new EventEmitter();
  constructor() {
    
   }
  searchText: string
  ngOnInit() {
  }
  search()
  {
   
  }
  newSearchText()
  {
    console.log("text changing");
    this.textChange.emit({
      newSearchText: this.searchText
    })
  }
}
