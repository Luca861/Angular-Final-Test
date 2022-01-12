import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/modules/services/pokemon.service';
import { PartialPokemon } from 'src/app/modules/shared/pokemon-interface';



@Component({
  selector: 'app-container-pokemon',
  templateUrl: './container-pokemon.component.html',
  styleUrls: ['./container-pokemon.component.scss']
})
export class ContainerPokemonComponent implements OnInit {

  okPokemon : PartialPokemon[] = [];
  refPokemon : PartialPokemon[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  selectedPokemon(item:PartialPokemon):void{
    this.okPokemon.push(item);
  }

  refusedPokemon(item:PartialPokemon):void{
    this.refPokemon.push(item);
  }



}
