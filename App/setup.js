/**
 * Created by leesy on 2016-08-26.
 */

'use strict';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';

const RouterWithRedux = connect()(Router);

import configureRealm from './realm/DBConfigure';
import configureStore from './store/configure';

import { setItemListLoading } from './actions';

import Drawer from "react-native-drawer";

import AppEventEmitter from "./utils/AppEventEmitter";
import SideMenu from "./components/sidemenu/SideMenu";
import Home from "./containers/home/Home";
import Product from "./containers/product/Product";
import ProductDetails from "./containers/product/ProductDetails";
import ProductGrid from "./containers/product/ProductGrid";
import Cart from "./containers/customer/Cart";
import WishList from "./containers/customer/WishList";
import MyOrder from "./containers/customer/MyOrder";
import Profile from "./containers/customer/Profile.android";
import Notification from "./containers/customer/Notification";
import TrackOrder from "./containers/order/TrackOrder";
import Complete from "./containers/order/Complete";
import Intro from "./containers/intro/Intro.android";
import Login from "./containers/login/Login.android";

//import ItemList from "../product/ItemList";
type State = {
  //isLoading: boolean;
  store: any;
};
console.log("setup");

function setup() {


    class Root extends Component {
        state: State;

        constructor() {
            super();
            configureRealm();

            this.state = {
                //isLoading: true,
                store: configureStore()
            };
            this.state.store.dispatch(setItemListLoading());
        }

        componentDidMount() {
            AppEventEmitter.addListener('hamburger.click', this.openSideMenu.bind(this));
        }

        closeSideMenu(navigation) {
            this.refs.drawer.close();
        }

        openSideMenu() {
            this.refs.drawer.open();
        }

        _onExitApp() {
            console.log("exit event app !");
            //alert("exit app?");
            Alert.alert(
                'DDP APP Exit',
                '종료하시겠습니까?',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
            )

            //return confirm("really exit app ?") ? true : false;
        }

        _onBackAndroid() {
            console.log("back event app!");
        }

        render() {
            if (this.state.isLoading) {
                return null;
            }
            const scenes = Actions.create(
                <Scene key="scene">
                    <Scene key="intro" component={Intro} />
                    <Scene key="login" component={Login}/>
                    <Scene key="home" component={Home} title="Home" initial={true}  />
                    <Scene key="product" component={Product} title="Product"    />
                    <Scene key="productgrid" component={ProductGrid} title="ProductGrid" />
                    <Scene key="productdetails"  component={ProductDetails} title="ProductDetails"  />
                    <Scene key="cart" component={Cart} title="Cart" />
                    <Scene key="wishlist" component={WishList} title="WishList" />
                    <Scene key="myorder" component={MyOrder} title="MyOrder"   />
                    <Scene key="profile" component={Profile} title="Profile" />
                    <Scene key="notification" component={Notification} title="Notification" />
                    <Scene key="trackorder" component={TrackOrder} title="TrackOrder" />
                    <Scene key="complete" component={Complete} title="Complete"/>
                </Scene>
            );
            return (
                <Provider store={this.state.store}>
                    <RouterWithRedux>
                        <Drawer
                            ref="drawer"
                            type="static"
                            tweenHandler={Drawer.tweenPresets.parallax}
                            tapToClose={true}
                            panCloseMask={0.2}
                            openDrawerOffset={0.2}
                            content={<SideMenu />}>
                            <Router hideNavBar={true} dispatch={this.closeSideMenu.bind(this)} scenes={scenes} onExitApp={this._onExitApp} onBackAndroid={this._onBackAndroid}/>
                        </Drawer>
                    </RouterWithRedux>
                </Provider>
            );
        }
    }
    return  Root;
}

global.log = (...args) => {
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

module.exports = setup;