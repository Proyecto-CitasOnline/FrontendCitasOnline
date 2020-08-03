import { SecurityService } from './../../../services/security.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLogged: Boolean = false;
  rol: Number = 0;

  subscription: Subscription;

  constructor(private service: SecurityService) { } 

  ngOnInit(): void {
    this.subscription = this.service.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
      this.rol = data.rol;
    });
  }

}
