
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View, Button, TouchableOpacity,
	ActivityIndicator, WebView
} from 'react-native';
export default class WebViewScreen extends Component {

	render() {

		return (
            <View style = {{flex: 1}} >
            <WebView
            source={{uri: this.props.navigation.state.params.url}}
            style = {{flex: 1}}
            startInLoadingState = {true}
          />
            </View>
          );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'green'
	},
	textBtn: {
		fontSize: 20,
		textAlign: 'center',
		color: 'black',
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	button: {
		backgroundColor: '#33a2d6',
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	}
});
