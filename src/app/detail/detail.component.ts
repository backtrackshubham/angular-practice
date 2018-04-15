import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../model/hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }
  @Input()   received: Hero;

  ngOnInit() {
  }

}
