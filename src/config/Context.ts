import React from "react";
export const Context = React.createContext({
  selectedTeamId: '',
  toggleSelectedTeamId: (selectedTeamId: string) => {}
});
