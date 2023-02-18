import { SyntheticEvent, useContext } from "react";
import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../../models/character/character";
import "./form.scss";
import { AppContextPrivate } from "../../context/context private/context.private";

export function Form({
  char,
  onSubmit,
}: {
  char: CharacterStructure | ProtoCharacterStructure | null;
  onSubmit: any;
}) {
  // const { updateChar, addChar } = useContext(AppContextPrivate);

  char === null &&
    (char = {
      image: "",
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      location: "",
      isFavourite: true,
    } as ProtoCharacterStructure);

  // const handleSubmit = (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const inputs = form.querySelectorAll("input");
  //   const newCharacter: ProtoCharacterStructure | CharacterStructure = {
  //     image: inputs[0].value,
  //     name: inputs[1].value,
  //     status: inputs[2].value,
  //     species: inputs[3].value,
  //     type: inputs[4].value,
  //     gender: inputs[5].value,
  //     location: inputs[6].value,
  //     isFavourite: true,
  //   } as ProtoCharacterStructure;

  //   if (type === "add") {
  //     addChar(newCharacter);
  //   } else {
  //     (newCharacter as CharacterStructure).id = (char as CharacterStructure).id;
  //     updateChar(newCharacter as CharacterStructure);
  //   }

  return (
    <form action="" id="form" data-testid="form">
      <div className="form-line">
        <label htmlFor="">Image url: </label>
        <input
          type="text"
          placeholder="https://www.example.png"
          defaultValue={char.image}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Rick"
          defaultValue={char.name}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Status: </label>
        <input
          type="text"
          placeholder="alive"
          defaultValue={char.status}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Species: </label>
        <input
          type="text"
          placeholder="human"
          defaultValue={char.species}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" placeholder="-" defaultValue={char.type} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Gender: </label>
        <input
          type="text"
          placeholder="male"
          defaultValue={char.gender}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Location: </label>
        <input
          type="text"
          placeholder="earth"
          defaultValue={char.location}
          required
        />
      </div>
      <div className="button-div">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
