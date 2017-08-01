import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.css']
})
export class MyusersComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
    .then((heroes)=>{this.heroes = heroes})
  }

}
