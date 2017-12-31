import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Hero } from '../hero'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    onClick(val: string)
    {
      this.notify.emit(val);
    }

  ngOnInit() {
  }

}
