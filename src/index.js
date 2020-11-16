import React from 'react'

import ReactDom from 'react-dom'
import {Provider} from 'react-redux' 
import store from './store'
import Route from './router';

ReactDom.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root')
)