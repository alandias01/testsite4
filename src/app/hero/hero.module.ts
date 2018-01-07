import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeroComponent,
    HeroDetailComponent
  ],
  declarations: [    
    HeroComponent,
    HeroDetailComponent
  ],
  providers:[HeroService]
})
export class HeroModule { }
