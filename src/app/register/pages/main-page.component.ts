import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private registerService: RegisterService) {}

  get characters(): Character[] {
    return [...this.registerService.characters];
  }

  onDeleteCharacter(id:string):void {
    this.registerService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void {
    this.registerService.addCharacter( character );
  }
}
