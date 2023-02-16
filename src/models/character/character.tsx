type isFavourite = {
  isFavourite: boolean;
};

export type ProtoCharacterStructure = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
};

export type CharacterStructure = isFavourite & ProtoCharacterStructure;
