import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rooReducer";

import { dataTransformerMiddleware } from "./dataTransformation/dataTransformerMiddleware";

const middlewares = [thunk, dataTransformerMiddleware];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(compose(applyMiddleware(...middlewares)))
  );

  return { store };
}
