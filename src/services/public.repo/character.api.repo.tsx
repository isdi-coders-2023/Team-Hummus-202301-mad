import { CharacterStructure } from "../../models/character/character";

export interface CharacterApiRepoStructure {
  loadChars(): Promise<CharacterStructure>;
  getChars(): Promise<CharacterStructure>;
}

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "https://rickandmortyapi.com/api/character";
  }

  async loadChars(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok) throw new Error("Fetch failed");
    const data = await resp.json();
    return data.results;
  }

  async getChars(input: string | number) {
    const url = this.url + "/" + input;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Fetch failed");
    const data = await resp.json();
    return data;
  }
}


