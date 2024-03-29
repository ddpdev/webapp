'use strict';

import React, {Component} from "react";
import {Text, View, TextInput, Image} from "react-native";

import css from "../../styles/style";

export default class IconInput extends Component {
    render() {
        return (
            <View style={css.buttonRound}>
                <Image source={this.props.image} style={css.inputIcon}></Image>

                <TextInput
                    style={css.textInputDark}
                    placeholderTextColor={"#aaa"}
                    {...this.props} />
            </View>
        );
    }

}

