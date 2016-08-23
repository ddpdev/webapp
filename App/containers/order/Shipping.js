'use strict';

import React, {Component} from "react";
import {
    ListView,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from "react-native";
import shipping from "./../Styles/shipping";
import {Actions} from "react-native-router-flux";


export default class Shipping extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={shipping.layout}>
                <ScrollView>
                    <View style={shipping.card}>
                        <TextInput style={shipping.input} placeholder={'First name'}/>
                        <TextInput style={shipping.input} placeholder={'Last name'}/>
                        <TextInput style={shipping.input} placeholder={'Phone'}/>
                        <TextInput style={shipping.input} placeholder={'E-mail'}/>
                        <TextInput style={shipping.input} placeholder={'Country'}/>
                        <View style={shipping.inputContainer}>
                            <TextInput style={shipping.inputHalf} placeholder={'State'}/>
                            <TextInput style={shipping.inputHalf} placeholder={'City'}/>
                        </View>
                        <TextInput style={shipping.input} placeholder={'Address'}/>
                    </View>

                </ScrollView>
            </View>
        );
    }
}