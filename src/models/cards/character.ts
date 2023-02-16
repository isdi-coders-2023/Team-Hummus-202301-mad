export type CharacterStructure = {
  name: string;
  img: string;
  isFavourite: boolean;
};

export class Character implements CharacterStructure {
  constructor(
    public name: string,
    public img: string,
    public isFavourite: boolean
  ) {}
}
