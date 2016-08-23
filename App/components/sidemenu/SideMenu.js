'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import css from "../../styles/sideMenu";
import {Actions} from "react-native-router-flux";

export default class SideMenu extends Component {
    render() {
        return (
            <View style={css.sideMenu}>
                <ScrollView>
                    <TouchableOpacity
                        style={[css.menuRow, css.noBorder]}
                        underlayColor="#2D2D30"
                        onPress={Actions.intro}>
                        <Text style={css.menuLink}>INTRO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRow]}
                        underlayColor="#2D2D30"
                        onPress={Actions.login}>
                        <Text style={css.menuLink}>SIGN IN</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[css.menuRow]}
                        underlayColor="#2D2D30"
                        onPress={Actions.home}>
                        <Text style={css.menuLink}>CATEGORIES</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={css.menuRow}
                        underlayColor="#2D2D30"
                        onPress={Actions.product}>
                        <Text style={css.menuLink}>PRODUCT</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={css.menuRow}
                        underlayColor="#2D2D30"
                        onPress={Actions.myorder}>
                        <Text style={css.menuLink}>MY ORDER</Text>
                        <Text style={css.menuBadge}>3</Text>
                    </TouchableOpacity>

                    <View style={css.SideMenuLine}></View>


                    <TouchableOpacity
                        style={css.menuRow}
                        underlayColor="#2D2D30"
                        onPress={Actions.profile}>
                        <Text style={css.menuLink}>PROFILE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.menuRow}
                        underlayColor="#2D2D30"
                        onPress={Actions.wooProduct}>
                        <Text style={css.menuLink}>WOO-PRODUCT</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[css.menuRow, css.menuSignOut]}
                        underlayColor="#2D2D30"
                        onPress={Actions.login}>
                        <Text style={css.menuLink}>SIGN OUT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

}
