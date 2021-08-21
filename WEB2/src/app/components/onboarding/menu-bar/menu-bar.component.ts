import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/services/exercicios.interface';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  user: IUser = {} as IUser;

  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) { }

  async ngOnInit(): Promise<void> {
    this.user = this.authService.getUser();
  }

  logout(): void {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    this.router.navigate(['/']);
  }


}
