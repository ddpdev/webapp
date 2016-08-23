import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "sideMenu": {
        "backgroundColor": "#1CAADE",
        "flex": 1,
        "paddingTop": 60,
        "paddingLeft": 30,
        "paddingRight": 30
    },
    "menuRow": {
        "flexDirection": "row",
        "alignItems": "center",
        "position": "relative",
        "paddingTop": 7,
        "paddingBottom": 7,
        "height": 48,
        "borderTopWidth": 1,
        "borderTopColor": "rgba(255,255,255,0.1)"
    },
    "noBorder": {
        "borderTopWidth": 0
    },
    "menuBadge": {
        "borderRadius": 9,
        "position": "absolute",
        "right": 0,
        "top": 17,
        "fontSize": 12,
        "color": "white"
    },
    "menuSignOut": {
        "marginTop": 100,
        "borderTopWidth": 0
    },
    "menuLink": {
        "fontSize": 12,
        "color": "white",
        "fontWeight": "300"
    }
});