import { Form } from "../../components/form/form";
import { CharacterStructure } from "../../models/character/character";
import "./edit.scss";

export default function Edit({ char }: { char: CharacterStructure }) {
  return (
    <div className="edit-div">
      <h2>Edit character</h2>
      <Form char={char}></Form>
    </div>
  );
}
