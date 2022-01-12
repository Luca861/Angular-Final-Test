import { Component, Input, OnInit } from '@angular/core';
import { PartialPokemon } from 'src/app/modules/shared/pokemon-interface';

@Component({
  selector: 'app-refused-pokemon',
  templateUrl: './refused-pokemon.component.html',
  styleUrls: ['./refused-pokemon.component.scss']
})
export class RefusedPokemonComponent implements OnInit {
  @Input() refPokemon!: PartialPokemon[];



  constructor() { }

  ngOnInit(): void {
  }

}
