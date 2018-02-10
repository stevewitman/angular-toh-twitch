import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroDataService: HeroDataService) { }

  ngOnInit() {
    this.heroDataService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getHeroes() {
    return this.heroDataService.getHeroes();
  }

}
