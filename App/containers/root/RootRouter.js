'use strict';

import React, {Component} from "react";
import {Navigator, Text, View, Alert} from "react-native";
import {Scene, Router, Schema, Actions, Animations, TabBar} from "react-native-router-flux";
import { connect } from 'react-redux';

import Drawer from "react-native-drawer";

import AppEventEmitter from "../../utils/AppEventEmitter";
import SideMenu from "../../components/sidemenu/SideMenu";
import Home from "../home/Home";
import Product from "../product/Product";
import ProductDetails from "../product/ProductDetails";
import ProductGrid from "../product/ProductGrid";
import Cart from "../customer/Cart";
import WishList from "../customer/WishList";
import MyOrder from "../customer/MyOrder";
import Profile from "../customer/Profile.android";
import Notification from "../customer/Notification";
import TrackOrder from "../order/TrackOrder";
import Complete from "../order/Complete";
import Intro from "../intro/Intro.android";
import Login from "../login/Login.android";

//import ItemList from "../product/ItemList";

//type Props = {};

class RootRouter extends Component {
  // constructor(props: Props) {
  //   super(props);
  // }

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
        );
    }
}

export default connect(({routes}) => ({routes}))(RootRouter);