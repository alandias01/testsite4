import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes:Hero[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}
