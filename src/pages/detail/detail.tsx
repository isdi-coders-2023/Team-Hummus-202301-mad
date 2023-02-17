import { Detail } from "../../components/detail/detail";
import { MOCK_Characters } from "../../mocks/cards";
import "./detail.scss";

export default function DetailPage() {
  return <Detail char={MOCK_Characters}></Detail>;
}

// Ojo que char debe llamar al character seleccionado de la API. No al MOCK.
