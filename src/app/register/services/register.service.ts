import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class RegisterService {

  public characters: Character[] = [];

  addCharacter( character: Character):void {
    const newCharacter: Character = {...character, id: uuid() };
    this.characters.push(character);

  }
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
