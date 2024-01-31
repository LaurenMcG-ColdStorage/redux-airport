import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';

/** TODO: Add REDUCERS */
function airlines(state = [], action){
    if (action.type === 'NEW_AIRLINE'){
        const id = state.length;
        const newAirline = {
            id,
            ...action.payload
        };

        return [...state, newAirline];
    }
    return state;
};

/** TODO: Create store */
const storeInstance = createStore(
    combineReducers({
        airlines,
    })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);