export type CardStructure = {
  name: string;
  image: string;
  isFavourite: boolean;
};

export class Card implements CardStructure {
  constructor(
    public name: string,
    public image: string,
    public isFavourite: boolean
  ) {}
}
