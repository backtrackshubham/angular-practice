import { Component, OnInit } from '@angular/core';
import {MockService} from '../service/mock.service';
import {Hero} from '../model/hero';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private service: MockService) { }
  array: Hero[];
  hero: Hero = {
    id: 12,
    name: 'Batman'
  };
  selectedHero: Hero;
  selected(obj: Hero) {
    this.selectedHero = obj;
  }
  getTheHeroFromRepo() {
   this.service.getHeros()
     .subscribe(someObsRes => this.array = someObsRes);
  }
  ngOnInit() {
    this.getTheHeroFromRepo();
  }

}
