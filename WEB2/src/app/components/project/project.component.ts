import { Component, OnInit } from '@angular/core';
import { MARKDOWN_PROJECT } from './projetc.project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  markdown = MARKDOWN_PROJECT;
  constructor() { }

  ngOnInit(): void {
  }

}
