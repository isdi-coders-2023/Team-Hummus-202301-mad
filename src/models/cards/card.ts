export type CardStructure = {
  id: number;
  name: string;
  image: string;
  isFavourite: boolean;
};

export class Card implements CardStructure {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public isFavourite: boolean
  ) {}
}
