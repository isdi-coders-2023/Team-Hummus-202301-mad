import { CardStructure } from "../models/cards/card";
import { CharacterStructure } from "../models/character/character";

export const MOCK_Cards: CardStructure[] = [
  {
    name: "Pepe",
    img: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    isFavourite: true,
  },
  {
    name: "Paco",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    isFavourite: false,
  },
  {
    name: "Pepo",
    img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    isFavourite: true,
  },
];

export const MOCK_Characters: CharacterStructure = {
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  location: "",
  isFavourite: false,
};
