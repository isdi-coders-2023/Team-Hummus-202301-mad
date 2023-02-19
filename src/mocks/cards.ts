import { CardStructure } from "../models/cards/card";
import { CharacterStructure } from "../models/character/character";

export const MOCK_Cards: CardStructure[] = [
  {
    id: 0,
    name: "Pepe",
    image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    isFavourite: true,
  },
  {
    id: 1,
    name: "Paco",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    isFavourite: false,
  },
  {
    id: 2,
    name: "Pepo",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
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
