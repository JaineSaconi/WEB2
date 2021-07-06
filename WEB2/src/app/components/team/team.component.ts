import { Component, OnInit } from '@angular/core';
import { MARKDOWN_TEAMS, MARKDOWN_TEAMS2, MARKDOWN_TEAMS3, MARKDOWN_TEAMS4 } from './team.team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  markdown = MARKDOWN_TEAMS;
  markdown2 = MARKDOWN_TEAMS2;
  markdown3 = MARKDOWN_TEAMS3;
  markdown4 = MARKDOWN_TEAMS4;
  constructor() { }

  ngOnInit(): void {
  }

}
