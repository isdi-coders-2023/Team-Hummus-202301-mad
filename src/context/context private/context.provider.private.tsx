import { useMemo } from "react";
import { useCharsPrivate } from "../../hook/use.characters.private";
import { CardApiRepo } from "../../services/private.repo/card.api.repo";

import { AppContextPrivate } from "./context.private";

export function AppContextProviderPrivate({
  children,
}: {
  children: JSX.Element;
}) {
  const charsRepoPrivate = useMemo(() => new CardApiRepo(), []);
  const context = useCharsPrivate(charsRepoPrivate);

  return (
    <AppContextPrivate.Provider value={context}>
      {children}
    </AppContextPrivate.Provider>
  );
}
