import { CharacterStructure } from "../../models/character/character";

export interface CharacterApiRepoStructure {
  loadCards(): Promise<CharacterStructure>;
  getCard(): Promise<CharacterStructure>;
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
