import { combineReducers } from "redux";
import { topicsAndModules } from "./Ducks/TopicsAndModules";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { createStore } from "redux";

export const rootReducer = combineReducers({
  topicsAndModules,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
