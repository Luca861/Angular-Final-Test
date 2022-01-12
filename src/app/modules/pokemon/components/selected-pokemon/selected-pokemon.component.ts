import { Component, Input, OnInit } from '@angular/core';
import { PartialPokemon } from 'src/app/modules/shared/pokemon-interface';

@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss']
})
export class SelectedPokemonComponent implements OnInit {

  @Input() okPokemon!:PartialPokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}
