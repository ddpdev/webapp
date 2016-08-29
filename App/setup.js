/**
 * Created by leesy on 2016-08-26.
 */

'use strict';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const RouterWithRedux = connect()(Router);

import App from './containers/root/RootRouter';

import configureRealm from './realm/DBConfigure';
import configureStore from './store/configure';

import { setItemListLoading } from './actions';

// type State = {
//     store: any;
// };

// function setup() {
//
//     class Root extends Component {
//         state: State;
//
//         constructor() {
//             super();
//             configureRealm();
//
//             this.state = {
//                 store: configureStore()
//             };
//
//             this.state.store.dispatch(setItemListLoading());
//         }
class Setup extends React.Component {
        constructor() {
            super();
            configureRealm();

            this.state = {
                store: configureStore()
            };
        }
        render() {
            return (
                <Provider store={this.state.store}>
                    <RouterWithRedux>
                    <App />
                    </RouterWithRedux>
                </Provider>
            );
        }
}

// global.log = (...args) => {
//     console.log('------------------------------');
//     console.log(...args);
//     console.log('------------------------------');
//     return args[args.length - 1];
// };

export default Setup;