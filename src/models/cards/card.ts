export type CardStructure = {
  name: string;
  img: string;
  isFavourite: boolean;
};

export class Card implements CardStructure {
  constructor(
    public name: string,
    public img: string,
    public isFavourite: boolean
  ) {}
}
