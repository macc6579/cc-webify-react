import { useReducer, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function useSupReducer(reducer, initialState) {
  const [state, _dispatch] = useReducer(reducer, initialState);

  const dispatch = useCallback((type, value) => {
    _dispatch({ type, value });
  }, []);

  return [state, dispatch];
}
