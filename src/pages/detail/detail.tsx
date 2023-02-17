import { Detail } from "../../components/detail/detail";
import { MOCK_Characters } from "../../mocks/cards";
import { DetailCardStructure } from "../../models/cards/card";

export default function DetailPage() {
  return <Detail char={MOCK_Characters}></Detail>;
}
