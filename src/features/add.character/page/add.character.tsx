import { Form } from "../../forms/page/form";
import "./add.character.scss";

export default function Add() {
  return (
    <div className="add-div">
      <h2>Add new character</h2>
      <Form url="http://localhost:3000/add"></Form>
    </div>
  );
}
