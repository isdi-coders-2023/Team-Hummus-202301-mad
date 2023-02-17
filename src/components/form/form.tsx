import { SyntheticEvent, useContext } from "react";
import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../../models/character/character";
import "./form.scss";
import { AppContextPrivate } from "../../context/context private/context.private";

export function Form({
  char,
}: {
  char: CharacterStructure | ProtoCharacterStructure | null;
}) {
  const { updateChar, addChar } = useContext(AppContextPrivate);

  const type = char === null ? "add" : "";
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

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newCharacter: ProtoCharacterStructure | CharacterStructure = {
      image: inputs[0].value,
      name: inputs[1].value,
      status: inputs[2].value,
      species: inputs[3].value,
      type: inputs[4].value,
      gender: inputs[5].value,
      location: inputs[6].value,
      isFavourite: true,
    } as ProtoCharacterStructure;

    // console.log("add character", newCharacter);
    // addChar(newCharacter);
    if (type === "add") {
      addChar(newCharacter);
    } else {
      (newCharacter as CharacterStructure).id = (char as CharacterStructure).id;
      updateChar(newCharacter as CharacterStructure);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} id="form">
      <div className="form-line">
        <label htmlFor="">Image url: </label>
        <input
          type="text"
          placeholder="https://www.example.png"
          value={char.image}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="Rick" value={char.name} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Status: </label>
        <input type="text" placeholder="alive" value={char.status} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Species: </label>
        <input type="text" placeholder="human" value={char.species} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" placeholder="-" value={char.type} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Gender: </label>
        <input type="text" placeholder="male" value={char.gender} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Location: </label>
        <input type="text" placeholder="earth" value={char.location} required />
      </div>
      <div className="button-div">
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
