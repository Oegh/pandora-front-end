import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    Feather.replace();
  }



}


