import { SyntheticEvent } from "react";
import { ProtoCardStructure } from "../../card/models/card";
import "./form.scss";

export function Form({ url }: any) {
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

    console.log(newCard);
    // Hay que poner esto de abajo cuando este creada la api privada y la ruta del add.
    // url === 'http://localhost:3000/add'? CreateCard(newCard) : UpdateCard(newCard);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-line">
        <label htmlFor="">Image url: </label>
        <input type="text" placeholder="https://www.example.png" />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="Rick" />
      </div>
      <div className="form-line">
        <label htmlFor="">Status: </label>
        <input type="text" placeholder="alive" />
      </div>
      <div className="form-line">
        <label htmlFor="">Species: </label>
        <input type="text" placeholder="human" />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" placeholder="-" />
      </div>
      <div className="form-line">
        <label htmlFor="">Gender: </label>
        <input type="text" placeholder="male" />
      </div>
      <div className="form-line">
        <label htmlFor="">Location: </label>
        <input type="text" placeholder="earth" />
      </div>
      <div className="button-div">
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
