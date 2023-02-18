import { SyntheticEvent, useContext } from "react";
import { Form } from "../../components/form/form";
import { AppContextPrivate } from "../../context/context private/context.private";
import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../../models/character/character";
import "./edit.scss";

export default function Edit({ char }: { char: CharacterStructure }) {
  const { updateChar } = useContext(AppContextPrivate);

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

    (newCharacter as CharacterStructure).id = (char as CharacterStructure).id;

    updateChar(newCharacter as CharacterStructure);
  };

  return (
    <div className="edit-div">
      <h2>Edit character</h2>
      <Form char={char} onSubmit={handleSubmit}></Form>
    </div>
  );
}
