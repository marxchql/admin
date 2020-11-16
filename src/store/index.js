import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
import mysaga from './mysaga'
const sagaMiddleware =createSagaMiddleware();

const store =createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mysaga)

export default store