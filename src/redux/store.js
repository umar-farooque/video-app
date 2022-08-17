import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer/rootReducers";
import videoSaga from "./sagas/vedioSaga";

let SagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [SagaMiddleware],
});
SagaMiddleware.run(videoSaga);
export default store;