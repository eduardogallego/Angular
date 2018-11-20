import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:Heroe[];
  token:string;

  constructor(private activatedRoute:ActivatedRoute, private router:Router,
    private heroeService:HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.token = params['token'];
      this.heroes = this.heroeService.findHeroes(this.token);
    })
  }

  getHeroes() {
    return this.heroes;
  }

  getToken() {
    return this.token;
  }

  viewHeroe(idx:number) {
    this.router.navigate(["/heroe", idx])
  }
}
