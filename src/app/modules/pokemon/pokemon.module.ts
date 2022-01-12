import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { CurrentPokemonComponent } from './components/current-pokemon/current-pokemon.component';
import { RefusedPokemonComponent } from './components/refused-pokemon/refused-pokemon.component';
import { SelectedPokemonComponent } from './components/selected-pokemon/selected-pokemon.component';
import { ContainerPokemonComponent } from './pages/container-pokemon/container-pokemon.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    PokemonComponent,
    CurrentPokemonComponent,
    RefusedPokemonComponent,
    SelectedPokemonComponent,
    ContainerPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
