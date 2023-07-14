import { Component, OnInit } from '@angular/core';
import { Character, StaticDataService } from '../static-data/static-data.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss']
})
export class CharacterSelectComponent implements OnInit {

  allCharacters: Character[] | undefined

  constructor(private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.allCharacters = this.staticDataService.getCharacters()
  }

}
