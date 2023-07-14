import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSelectComponent } from './character-select.component';
import { StaticDataModule } from '../static-data/static-data.module';
import { CharacterButtonComponent } from './character-button/character-button.component';



@NgModule({
  declarations: [CharacterSelectComponent, CharacterButtonComponent],
  imports: [CommonModule, StaticDataModule],
  exports: [CharacterSelectComponent, CharacterButtonComponent]
})
export class CharacterSelectModule { }
