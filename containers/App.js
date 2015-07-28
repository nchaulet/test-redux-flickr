import React from 'react';
import * as stores from '../stores';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import PhotoApp from './PhotoApp';

const redux = createRedux(stores);

class App extends React.Component
{
    render() {
        return (
            <Provider redux={redux}>
                 {() => <PhotoApp></PhotoApp> }
            </Provider>
        );
    }
}

export default App;
