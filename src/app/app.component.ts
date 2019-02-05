import { Component, OnInit } from '@angular/core';

declare function require(url:string):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'table-view-demo';

  sourceData = {}

  ngOnInit() {

    this.sourceData = require('../assets/data.json');

  }
}