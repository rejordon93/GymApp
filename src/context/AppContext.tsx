import React, { createContext, useReducer, Dispatch, ReactNode } from "react";

// Define types for workouts and state
type WorkOuts = {
  id: number;
  name: string;
  duration: string;
  caloriesBurned: number;
  bodyPart: string;
  image: string;
};

type State = {
  workouts: WorkOuts[];
  searchTerm: string;
};

// Define action types
type Action =
  | { type: "ADD_WORKOUT"; payload: WorkOuts[] }
  | { type: "SEARCH_WORKOUTS"; payload: string }
  | { type: "REMOVE_WORKOUT"; payload: number };

// Initial state
const initialState: State = {
  workouts: [],
  searchTerm: "",
};

// Create the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return { ...state, workouts: [...state.workouts, ...action.payload] };
    case "SEARCH_WORKOUTS":
      return {
        ...state,
        searchTerm: action.payload,
        workouts: state.workouts.filter((workout) =>
          workout.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "REMOVE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Define the context properties type
type AppContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

// Create context with default values
export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

// Create the provider component
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
