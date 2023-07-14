import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/static-data/static-data.service';

@Component({
  selector: 'app-character-button',
  templateUrl: './character-button.component.html',
  styleUrls: ['./character-button.component.scss']
})
export class CharacterButtonComponent implements OnInit {

  @Input() character!: Character;

  selected: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.selected = !this.selected
  }
}
