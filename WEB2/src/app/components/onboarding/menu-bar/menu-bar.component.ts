import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);
    //console.log(this.active);
  }


}