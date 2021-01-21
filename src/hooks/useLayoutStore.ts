import makeStore from "../store";

interface LayoutState {
  tab: number;
}

interface LayoutAction {
  type: "CHANGE_TAB";
  payload: number;
}

const reducer: (state: LayoutState, action: LayoutAction) => LayoutState = (
  state: LayoutState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        tab: action.payload,
      };
  }
};

const initialState: LayoutState = {
  tab: 0,
};

const [LayoutProvider, useLayoutDispatch, useLayoutStore] = makeStore<
  LayoutState,
  LayoutAction
>("layout", reducer, initialState);

export { LayoutProvider, useLayoutDispatch, useLayoutStore };
