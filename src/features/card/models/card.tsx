type isFavourite = {
  id: number;
};

export type ProtoCardStructure = {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
  isFavourite: boolean;
};

export type CardStructure = isFavourite & ProtoCardStructure;

// export class ProtoCard implements ProtoCardStructure {
//   isFavourite: boolean;

//   constructor(
//     public image: string,
//     public name: string,
//     public status: string,
//     public species: string,
//     public type: string,
//     public gender: string,
//     public location: string
//   ) {
//     this.isFavourite = false;
//   }
// }
