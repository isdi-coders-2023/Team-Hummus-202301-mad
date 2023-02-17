type HasId = {
  id: number;
};

export type ProtoCharacterStructure = {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
  isFavourite: boolean;
};

export type CharacterStructure = HasId & ProtoCharacterStructure;
