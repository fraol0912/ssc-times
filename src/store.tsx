import React, { createContext, useContext, useReducer } from "react";

export default function makeStore<State, Action>(
  key: string,
  userReducer: (state: State, action: Action) => State,
  initialState: State
): [
  ({ children }: { children: any }) => JSX.Element,
  () => React.Dispatch<Action>,
  () => State
] {
  const StoreContext = createContext(initialState);
  const DispatchContext = createContext(null);

  // try {
  //   initialState =
  //     (JSON.parse(localStorage.getItem(key)) as State) || initialState;
  // } catch {}

  const reducer = (state: State, action: Action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  function StoreProvider({ children }): JSX.Element {
    type Reducer = (state: State, action: Action) => State;
    const [store, dispatch] = useReducer<Reducer>(reducer, initialState);

    return (
      <StoreContext.Provider value={store}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StoreContext.Provider>
    );
  }

  function useStore(): State {
    return useContext(StoreContext);
  }

  function useDispatch(): React.Dispatch<Action> {
    return useContext(DispatchContext);
  }

  return [StoreProvider, useDispatch, useStore];
}
