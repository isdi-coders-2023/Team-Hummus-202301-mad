import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../../models/character/character";

export interface CharacterApiRepoStructure {
  loadCards(): Promise<ProtoCharacterStructure>;
  getCard(): Promise<ProtoCharacterStructure>;
  createCard(card: ProtoCharacterStructure): Promise<CharacterStructure>;
  updateCard(card: Partial<CharacterStructure>): Promise<CharacterStructure>;
  deleteCard(id: CharacterStructure["id"]): Promise<void>;
}

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "https://rickandmortyapi.com/api/character";
  }

  async loadCards() {
    const resp = await fetch(this.url);
    const data = await resp.json();
    return data.results;
  }

  async getCards(input: string) {
    const url = this.url + "/?" + input;
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  }
}
