import { Component, OnInit } from '@angular/core';
import { MARKDOWN_HOME } from './teste';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  markdown = MARKDOWN_HOME;
  constructor() { }

  ngOnInit(): void {
  }

}
