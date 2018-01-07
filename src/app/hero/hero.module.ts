import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule
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
