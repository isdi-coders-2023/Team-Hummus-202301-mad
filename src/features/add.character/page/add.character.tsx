import { Form } from "../../forms/page/form";

export default function AddCharacter() {
  return (
    <>
      <h2>Add new character</h2>
      <Form url="http://localhost:3000/add"></Form>
    </>
  );
}
