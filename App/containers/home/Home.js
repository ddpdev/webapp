import React, {Component} from "react";
import {Text, View, Platform, Image, ScrollView, BackAndroid, TouchableOpacity, TextInput} from "react-native";
import { connect } from 'react-redux';

import ListItem from "../../components/Layout/ListItem";
import HorizontalItem from "../../components/Layout/HorizontalItem";
import Category from "../product/Category";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import {Actions} from "react-native-router-flux";
import AppEventEmitter from "./../../utils/AppEventEmitter";
import Icon from "react-native-vector-icons/EvilIcons";
import home from "../../styles/home";
import Toolbar from "../../components/toolbar/Toolbar.android";

class Home extends Component {
    open() {
        AppEventEmitter.emit('hamburger.click'); //icon
    }
    render() {
        return (
            <View style={home.color}>
                <Toolbar name='DDP Shop' searchButton={true} layoutButton={true} gridButton={true} heartButton={true}/>

                <View style={[home.search]}>
                    <TextInput
                        style={home.searchBar}
                        placeholder={'Looking for a gift..'}
                        selectionColor={'#7d59c8'}/>
                    <Icon name={'search'} style={home.searchIcon}/>
                </View>

                <View style={home.menu}>
                    <ScrollableTabView
                        initialPage={0}
                        locked={true}
                        tabBarUnderlineColor={"#393838"}
                        tabBarActiveTextColor={"#393838"}
                        tabBarInactiveTextColor={"#B8B8B8"}
                        tabBarTextStyle={{height: 20, fontWeight: 'normal', fontSize: 13}}

                        renderTabBar={() => <ScrollableTabBar
                          underlineHeight={2}
                          tabsContainerStyle={{height: (Platform.OS === 'ios' ? 38 : 49)}}
                          tabStyle={{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, paddingLeft: 20, paddingRight: 20}}
                         />}>

                        <Category tabLabel="Categories"/>
                        <HorizontalItem tabLabel="Man"/>
                        <ListItem tabLabel="Women"/>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

export default connect(({routes}) => ({routes}))(Home);