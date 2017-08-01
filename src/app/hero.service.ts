import { Injectable } from '@angular/core';
import { Heroes } from './mock-hero';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  getHeroes(){
    return Promise.resolve(Heroes)
    //return 'Abhinav'
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
          .then(heroes => heroes.find(hero=> hero.id===id))
  }
  constructor() { }

}
