import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeroDetailSingleComponent } from '../hero-detail/hero-detail-single.component';

@NgModule({
  imports: [    
    SharedModule,
    RouterModule.forChild([
      {path:'heroes', component: HeroComponent},
    {path:'heroes/:id', component: HeroDetailSingleComponent}])
  ],
  exports:[
      ],
  declarations: [    
    HeroComponent,
    HeroDetailComponent,
    HeroDetailSingleComponent
  ],
  providers:[HeroService]
})
export class HeroModule { }
