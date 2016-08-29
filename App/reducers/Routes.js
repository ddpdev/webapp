/**
 * Created by ms.kim2 on 2016-08-29.
 */

import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.JUMP:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.PUSH:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.PUSH_OR_POP:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REPLACE:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.BACK:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.BACK_ACTION:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.POP_TO:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REFRESH:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.RESET:
    return {
      ...state,
      scene: action.scene,
    };
    // ...other actions

    default:
      return state;
  }
}