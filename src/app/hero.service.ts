import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './word';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  heroes:Hero[]=[{name:"Alan",age:1},{name:"Sybil",age:2},{name:"Mike",age:3}];
  private wordsUrl = 'http://ui01api.azurewebsites.net/api/words';
  private testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  private wordsUrlLocal = 'http://localhost:6586/api/words';

  getHeroes():Hero[] {
    return this.heroes;    
  }
  
  getWords():Observable<Word[]>{
    return this.http.get<Word[]>(this.wordsUrlLocal);
  }

  constructor(private http: HttpClient) {     
  }

}
