import { Form } from "../../../../features/forms/page/form";

export function AddCharacter() {
  return (
    <>
      <p>Add new character</p>
      <Form url="http://localhost:3000/add"></Form>
    </>
  );
}
