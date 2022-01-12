import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/modules/services/pokemon.service';
import { PartialPokemon } from 'src/app/modules/shared/pokemon-interface';

@Component({
  selector: 'app-current-pokemon',
  templateUrl: './current-pokemon.component.html',
  styleUrls: ['./current-pokemon.component.scss']
})
export class CurrentPokemonComponent implements OnInit {
  @Output() selected = new EventEmitter<PartialPokemon>();
  @Output() refused = new EventEmitter<PartialPokemon>();

  currentPokemon! : PartialPokemon;

  constructor(private readonly service:PokemonService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData():void{
   this.service.getPokemon().subscribe((resp) => this.currentPokemon = resp)
  }

  selectedPokemon():void{
    this.getData();
    this.selected.emit(this.currentPokemon);
  }

  refusedPokemon():void{
    this.getData();
    this.refused.emit(this.currentPokemon);
    this.service.updateStorage(this.currentPokemon)
  }

}
