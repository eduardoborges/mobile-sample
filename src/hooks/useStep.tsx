import { useReducer } from 'react';

export function useStep(quantity: number) {
  const INITIAL_STATE = {
    current: 0,
    total: quantity,
  };

  type Action = {
    type: 'next' | 'prev' | 'set',
    payload?: number,
  };

  const reducer = (state: any, action: Action) => {
    switch (action.type) {
      case 'next':
        return {
          ...state,
          current: state.current + 1,
        };

      case 'prev':
        return {
          ...state,
          current: state.current - 1,
        };

      case 'set':
        return {
          ...state,
          current: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const nextStep = () => dispatch({ type: 'next' });
  const prevStep = () => dispatch({ type: 'prev' });
  const setStep = (payload: number) => dispatch({ type: 'set', payload });
  return {
    ...state,
    prevStep,
    nextStep,
    setStep,
  };
}
