'use strict';

import React, {Component} from "react";
import {Navigator, Text, View, Alert} from "react-native";
import {Scene, Router, Schema, Actions, Animations, TabBar} from "react-native-router-flux";

import SideMenu from "../../components/sidemenu/SideMenu";
import Home from "../home/Home";
import AppEventEmitter from "../../utils/AppEventEmitter";
import Drawer from "react-native-drawer";

export default class RootRouter extends Component {
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
                <Scene key="home" component={Home} title="Home"  initial={true}  />
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
