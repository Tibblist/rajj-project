import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// Note: this API requires redux@>=3.1.0
var store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
