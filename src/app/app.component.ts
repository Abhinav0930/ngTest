import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  //heroes= Heroes;
  selectedHero: Hero;

  constructor(public heroService : HeroService){}

  onClickHero(hero:Hero): void {
    this.selectedHero = hero;
    console.log(hero.name)
  }
  getHeroDetails(){
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void{
    this.getHeroDetails();  
  }  
  title = 'Hello!';
  name='mike'
}
