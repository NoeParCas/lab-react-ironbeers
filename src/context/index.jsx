import { useState, createContext, useContext } from "react";

const StoreStateContext = createContext(undefined);
const StoreDispatchContext = createContext(undefined);

const INITIAL_STATE = {
  theme: "light",
};

const StoreProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const dispatch = (newState) => setState({ ...state, ...newState });

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

const useStoreState = () => useContext(StoreStateContext);
const useStoreDispatch = () => useContext(StoreDispatchContext);

export { StoreProvider, useStoreState, useStoreDispatch };
