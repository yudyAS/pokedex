import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  pokemons : Pokemon[] = [];

  constructor( private httpClient: HttpClient) { 
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await this.httpClient.get<{ results: Pokemon[] }>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

    this.pokemons = requisicao?.results || [];
    
  }

}

export interface Pokemon{
  name: string;
  url: string; 
}
