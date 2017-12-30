import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;

  temp: string;

  heroes: Hero[] = [{ id: 1, name: "alan", age: 10 },
      { id: 2, name: "Siblu", age: 20 },
      { id: 3, name: "Ben", age: 30 }];

  getHero(hero: Hero)
  {
      this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
