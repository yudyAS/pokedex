import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})

export class PokemonListComponent {
  constructor(public pokemonService: PokemonService){}

}
