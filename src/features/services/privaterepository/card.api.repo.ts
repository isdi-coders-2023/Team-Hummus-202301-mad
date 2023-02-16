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
    this.url = "http://localhost:3000/characters";
  }

  async loadCards(): Promise<CardStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();
    return data;
  }

  async getCards(input: string) {
    const url = this.url + "/?" + input;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }

  async createCard(card: ProtoCardStructure): Promise<CardStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as CardStructure;
    return data;
  }

  async updateCard(card: Partial<CardStructure>): Promise<CardStructure> {
    const url = this.url + "/" + card.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(card),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as CardStructure;
    return data;
  }
  async deleteCard(id: CardStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible!");
  }
}
