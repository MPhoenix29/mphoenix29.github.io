import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  characters: Character[] = []
  charactersJson: any

  constructor() {
    fetch('assets/characters.json').then(
      res => res.json()
    )
    .then(json => {
      this.charactersJson = json;
      this.charactersJson.forEach((element: any) => {
        this.characters.push(<Character>element)
      });
    });
    }

  getCharacters(): Character[] {
    return this.characters
  }
}

export interface Character {
  "name": string
  "element": string
  "rarity": number
}