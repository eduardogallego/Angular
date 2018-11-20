import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroecard',
  templateUrl: './heroecard.component.html',
  styleUrls: ['./heroecard.component.css']
})
export class HeroecardComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;
  @Output() selectedHeroe:EventEmitter<number>;

  constructor(private router:Router) {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHeroe() {
    // this.selectedHeroe.emit(this.index);
    console.log(this.heroe);
    if (this.heroe.idx != null) {
      this.router.navigate(['/heroe', this.heroe.idx]);
    } else {
      this.router.navigate(['/heroe', this.index]);
    }
  }
}
