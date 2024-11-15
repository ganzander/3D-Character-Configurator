import React, { createContext, useContext, useState } from "react";
const CharacterAnimationsContext = createContext();

export function CharacterAnimationsProvider({ children }) {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{ animationIndex, setAnimationIndex, animations, setAnimations }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
}

export function useCharacterAnimations() {
  return useContext(CharacterAnimationsContext);
}
