import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';
import {heroArray} from '../repo/repo';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class MockService {

  constructor(private msgService: MessageService) { }
  getHeros(): Observable<Hero[]> {
    this.msgService.add('HeroService: fetched heroes');
    return of(heroArray);
  }
}
