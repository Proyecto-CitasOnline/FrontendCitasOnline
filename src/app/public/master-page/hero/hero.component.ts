import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  isLogged: Boolean = false;
  subscription: Subscription;


   constructor(private router: Router, private secService: SecurityService) {
    this.subscription = this.secService.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
    });
  }

  ngOnInit(): void {
  }

}
