import { Form } from "../../components/form/form";
import "./add.character.scss";

export default function Add() {

  return (
    <div className="add-div">
      <h2>Add new character</h2>
      <Form char={null}></Form>
    </div>
  );
}
