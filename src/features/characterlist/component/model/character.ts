export type CharacterStructure = {
  name: string;
  img: string;
  isFavourite: boolean;
};

export class Character implements CharacterStructure {
  public isFavourite: boolean;
  constructor(public name: string, public img: string) {
    this.isFavourite = false;
  }
}
