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
