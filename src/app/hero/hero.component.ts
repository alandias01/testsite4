import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;

  temp: string;
  heroes: Hero[];

  getHero(hero: Hero) {
      this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {      
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeros();
  }
}
