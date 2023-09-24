// text.js
import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

const MyComponents = () => {
  const { characters, addCharacter, removeCharacter } = useContext(CharacterContext);

  const handleAddCharacter = () => {
    const newCharacter = { id: 6, image: "", name: 'Unity', species: 'Hivemind', gender: 'Non-binary' };
    addCharacter(newCharacter);
  };

  const handleRemoveCharacter = (id) => {
    removeCharacter(id);
  };

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name} ({character.species}) - {character.gender}{' '}
            <button onClick={() => handleRemoveCharacter(character.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddCharacter}>Add Character</button>
    </div>
  );
};

const Text = () => {
  return (
      <MyComponents />
  );
};

export default Text;