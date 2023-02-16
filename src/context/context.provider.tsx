import { useMemo } from "react";
import { useChars } from "../hook/use.characters";
import { CharacterApiRepo } from "../services/public.repo/character.api.repo";
import { AppContext } from "./context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const charsRepo = useMemo(() => new CharacterApiRepo(), []);
  const context = useChars(charsRepo);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
