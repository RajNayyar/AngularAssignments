import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-directive',
  templateUrl: './table-directive.component.html',
  styleUrls: ['./table-directive.component.scss']
})
export class TableDirectiveComponent implements OnInit {
  private _DataSource: Array<any>;
  headers: Array<string>;

  constructor() {
    this._DataSource = new Array<any>();
    this.headers = new Array<string>();
}
  @Input()
  set DataSource(val: Array<any>) {
    debugger
     if(val.length > 0) {
       this._DataSource = val;
       this.headers = []
       for(let p in this._DataSource[0]) {
         this.headers.push(p);
       }
     } else {
      this._DataSource = new Array<any>();
     }
  }

  get DataSource(): Array<any> {
    return this._DataSource;
  }

  ngOnInit() {
  }

}
