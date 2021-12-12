import { useState, useEffect, useRef } from 'react';
import { Game } from './useGame.types';

const useLocalStorageGameState = (
  storageKey: string,
  defaultValue: Game,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [Game, (newGameState: Game) => void] => {
  const [state, setState] = useState<Game>(() => {
    const valueInLocalStorage = window.localStorage.getItem(storageKey);
    if (valueInLocalStorage) return deserialize(valueInLocalStorage);

    return defaultValue;
  });

  const prevKeyRef = useRef(storageKey);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== storageKey) window.localStorage.removeItem(prevKey);

    prevKeyRef.current = storageKey;
    window.localStorage.setItem(storageKey, serialize(state));
  }, [storageKey, state, serialize]);

  return [state, setState];
};

export default useLocalStorageGameState;
