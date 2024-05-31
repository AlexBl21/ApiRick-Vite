import CharacterCard from "./CharacterCard";
import { useCharacter } from "../hooks/useCharacter";

function CharacterList() {
   const {characters} =useCharacter()

  return (
    <div className="grid grid-cols-4 gap-10">
      {
        characters.map((character) =>
          <CharacterCard character={character}/>
        )
      }
      
    </div>
  );
}

export default CharacterList;