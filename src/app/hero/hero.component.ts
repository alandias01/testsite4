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

  returnName: string;

  heroes: Hero[];

  getHero(hero: Hero) {
      this.selectedHero = hero;
  }


  constructor(private heroService: HeroService) {
  }

  onNotify(val: string) {
    this.returnName=val;
  }
  
  ngOnInit() {
    this.heroes = this.heroService.getHeros();
  }
}
