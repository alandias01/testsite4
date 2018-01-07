import { Injectable } from '@angular/core';
import { Hero } from './hero'

@Injectable()
export class HeroService {

    heroes: Hero[] = [{ id: 1, name: "alan", age: 10 },
        { id: 2, name: "Siblu", age: 20 },
        { id: 3, name: "Ben", age: 30 },
        { id: 4, name: "Mike", age: 40 }];

    getHeros():Hero[] {
        return this.heroes;
    }

    getHero(id:number):Hero {
        return this.heroes.find(x=>x.id==id);
    }
  constructor() { }

}
