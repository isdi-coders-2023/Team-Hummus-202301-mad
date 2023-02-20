import { CardStructure } from "../models/cards/card";
import { CharacterStructure } from "../models/character/character";

export const MOCK_Cards: CardStructure[] = [
  {
    name: "Pepe",
    image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    isFavourite: true,
  },
  {
    name: "Paco",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    isFavourite: false,
  },
  {
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
  location: { name: "" },
  isFavourite: false,
};
