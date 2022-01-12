import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPartialPokemon, PartialPokemon } from '../shared/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly _http: HttpClient) { }


  getPokemon(): Observable<PartialPokemon> {
    const num = Math.floor(Math.random() * 898) + 1;
    return this._http.get<IPartialPokemon>(`${environment.apiUrl}${num}`).pipe(
      map(response => PartialPokemon.Build(response))
    )
  }

  updateStorage(refused: PartialPokemon): void {
    let refsItem = JSON.parse(localStorage.getItem('refused')!);
    if (refsItem) {
      refsItem = { ...refsItem, ...refused };
      localStorage.setItem('refused', JSON.stringify(refsItem));
    } else {
      localStorage.setItem('refused', JSON.stringify(refused));
    }

  }
}
