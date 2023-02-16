import { CharacterStructure } from "../../models/character/character";

export interface CharacterApiRepoStructure {
  loadCards(): Promise<CharacterStructure>;
  getCard(): Promise<CharacterStructure>;
  createCard(card: CharacterStructure): Promise<CharacterStructure>;
  updateCard(card: Partial<CharacterStructure>): Promise<CharacterStructure>;
  deleteCard(id: CharacterStructure["id"]): Promise<void>;
}

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "https://rickandmortyapi.com/api/character";
  }

  async loadChars(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();
    console.log(data);
    return data.results;
  }

  async getChars(input: string) {
    const url = this.url + "/?" + input;
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  }

  async createChar(input: string) {
    // Falta rellenar esta parte del codigo
  }

  async updateChar(input: string) {
    // Falta rellenar esta parte del codigo
  }
  async deleteChar(input: string) {
    // Falta rellenar esta parte del codigo
  }
}
