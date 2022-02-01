import React, { useReducer, createContext } from "react";

const initialState = {
  isShowing: true,
};

const SideBarContext = createContext({
  isShowing: true,
  toggleShow: () => {},
});

function sideBarReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SHOW":
      return {
        ...state,
        isShowing: !state.isShowing,
      };
    default:
      return state;
  }
}

function SideBarContextProvider(props) {
  const [state, dispatch] = useReducer(sideBarReducer, initialState);

  function toggleShow() {
    dispatch({
      type: "TOGGLE_SHOW",
    });
  }

  return (
    <SideBarContext.Provider
      value={{ isShowing: state.isShowing, toggleShow }}
      {...props}
    />
  );
}

export { SideBarContext, SideBarContextProvider };
