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

export type DetailCardStructure = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
  isFavourite: boolean;
};
