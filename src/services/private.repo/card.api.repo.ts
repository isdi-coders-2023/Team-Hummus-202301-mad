import {
  ProtoCharacterStructure,
  CharacterStructure,
} from "../../models/character/character";

export interface CardApiRepoStructure {
  loadCards(): Promise<ProtoCharacterStructure>;
  getCard(): Promise<ProtoCharacterStructure>;
  createCard(card: ProtoCharacterStructure): Promise<CharacterStructure>;
  updateCard(card: Partial<CharacterStructure>): Promise<CharacterStructure>;
  deleteCard(id: CharacterStructure["id"]): Promise<void>;
}

export class CardApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:3000/characters";
  }

  async loadCards(): Promise<CharacterStructure[]> {
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

  async createCard(card: ProtoCharacterStructure): Promise<CharacterStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }

  async updateCard(
    card: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const url = this.url + "/" + card.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(card),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }
  async deleteCard(id: CharacterStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible!");
  }
}
