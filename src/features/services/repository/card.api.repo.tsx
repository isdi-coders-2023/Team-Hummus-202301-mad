import { CardStructure, ProtoCardStructure } from "../../card/models/card";

export interface CardApiRepoStructure {
  loadCards(): Promise<ProtoCardStructure>;
  getCard(): Promise<ProtoCardStructure>;
  createCard(card: ProtoCardStructure): Promise<CardStructure>;
  updateCard(card: Partial<CardStructure>): Promise<CardStructure>;
  deleteCard(id: CardStructure["id"]): Promise<void>;
}

export class CardApiRepo {
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
