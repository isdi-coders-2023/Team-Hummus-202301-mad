type isFavourite = {
  isFavourite: boolean;
};

export type ProtoCardStructure = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
};

export type CardStructure = isFavourite & ProtoCardStructure;
