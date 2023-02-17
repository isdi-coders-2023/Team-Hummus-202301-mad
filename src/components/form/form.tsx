import { SyntheticEvent } from "react";
import { ProtoCharacterStructure } from "../../models/character/character";
import "./form.scss";

export function Form({ url }: any) {
  // Codigo -> const { updateTask, createTask } = useContext(AppContext);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newCharacter: ProtoCharacterStructure = {
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
    //  Esto -> url === 'http://localhost:3000/add'? CreateCard(newCharacter) : UpdateCard(newCharacter);
  };

  return (
    <form action="" onSubmit={handleSubmit} id="form">
      <div className="form-line">
        <label htmlFor="">Image url: </label>
        <input type="text" placeholder="https://www.example.png" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="Rick" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Status: </label>
        <input type="text" placeholder="alive" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Species: </label>
        <input type="text" placeholder="human" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" placeholder="-" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Gender: </label>
        <input type="text" placeholder="male" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Location: </label>
        <input type="text" placeholder="earth" required />
      </div>
      <div className="button-div">
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
