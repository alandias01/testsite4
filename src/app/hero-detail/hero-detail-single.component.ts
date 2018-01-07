import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail-single',
  templateUrl: './hero-detail-single.component.html',
  styles: []
})
export class HeroDetailSingleComponent implements OnInit {

  hero: Hero;
  
  constructor(private _route:ActivatedRoute, private heroService:HeroService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    if(id)
    {
      this.hero = this.heroService.getHero(id);
    }
  }

}
