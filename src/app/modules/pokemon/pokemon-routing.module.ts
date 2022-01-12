import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPokemonComponent } from './pages/container-pokemon/container-pokemon.component';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonComponent,
    children: [
      {path:'', component:ContainerPokemonComponent}
    ]
           }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
