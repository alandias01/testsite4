import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  heroes:Hero[]=[{name:"Alan",age:1},{name:"Sybil",age:2},{name:"Mike",age:3}];

  getHeroes():Hero[] {
    return this.heroes;
  }
  
  constructor() {     
  }

}
