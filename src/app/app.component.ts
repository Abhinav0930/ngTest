import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  title = 'Hello!';
  name='mike'
  //heroes= Heroes;
  selectedHero: Hero;

  /*handleClick(){
    routerLink="/myUsers"
  }
*/
  constructor(public heroService : HeroService){}

  onClickHero(hero:Hero): void {
    this.selectedHero = hero;
    console.log(hero.name)
  }
  getHeroDetails(){
    this.heroService.getHeroes().then(heroes=> this.heroes = heroes)
    //this.name=this.heroService.getHeroes();
  }
  ngOnInit(): void{
    this.getHeroDetails();  
  }  
  
}
