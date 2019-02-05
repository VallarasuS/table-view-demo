import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Source } from 'webpack-sources';

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit, AfterViewInit {

  @Input('source') source : Array<any>;
  @Input('columns') columns : Array<string>;

  private tableOnly : boolean = true;
  private viewOnly : boolean = false;

  constructor() { 
    this.toggleTable = this.toggleTable.bind(this);
  }

  ngOnInit() {

    if(this.columns == undefined || this.columns.length == 0 )
    {
      if(this.source && this.source.length > 0)
      {
        this.columns = Object.keys(this.source[0]);
      }
    }
  }

  ngAfterViewInit() {
  }

  toggleTable() {
    this.tableOnly = !this.tableOnly;
  }

  toggleView() {
    this.viewOnly = !this.viewOnly;
  }

  enableTableView() {
    this.tableOnly = true;
    this.viewOnly = true;
  }
}