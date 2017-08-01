import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  hero:Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location    
  ) { }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero =>  this.hero=hero)
  }

}
