import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => <View style={this.props.themedStyle.View_1} />
}

_Blank = withStyles(__Blank, theme => ({
  View_1: {
    marginLeft: 11,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 51,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  }
}))

function mapStateToProps(state) {
  return { state: state }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
