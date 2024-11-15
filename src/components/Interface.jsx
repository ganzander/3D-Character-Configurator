import React from "react";
import { useCharacterAnimations } from "../context/characterAnimationsContext";
export default function Interface() {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <div className="absolute bottom-[24px] text-black right-[20px]">
      <div className="flex flex-col gap-2">
        {animations.map((animation, id) => (
          <button
            key={id}
            className={`py-1 px-3 bg-black text-white rounded-lg ${
              id === animationIndex && "bg-gray-500"
            }`}
            onClick={() => setAnimationIndex(id)}
          >
            {animation}
          </button>
        ))}
      </div>
    </div>
  );
}
