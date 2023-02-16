import { SyntheticEvent } from "react";
import { ProtoCardStructure } from "../../card/models/card";
import "./form.scss";

export function Form({url}) {

  // const { updateTask, createTask } = useContext(AppContext);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newCard: ProtoCardStructure = {
      image: inputs[0].value,
      name: inputs[1].value,
      status: inputs[2].value,
      species: inputs[3].value,
      type: inputs[4].value,
      gender: inputs[5].value,
      location: inputs[6].value,
      isFavourite: true,
    };

    // Hay que poner esto de abajo cuando este creada la api privada y la ruta del add.
    // url === 'http://localhost:3000/add'? CreateCard(newCard) : UpdateCard(newCard);

  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="https://www.example.png" />
      <label htmlFor="">Image: {}</label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Name: </label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Status: </label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Species: </label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Type: </label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Gender: </label>
      <input type="text" placeholder="1" />
      <label htmlFor="">Location: </label>
      <button type="submit">Add</button>
    </form>
  );
}
