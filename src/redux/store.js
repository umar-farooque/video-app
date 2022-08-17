import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga';
import sagas from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(sagas);
