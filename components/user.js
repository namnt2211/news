
import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    Image,
	View, Button, TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import {DrawerItems} from 'react-navigation';
import HeaderComponent  from './HeaderComponent';



export default class User extends Component {
	
	render() {


		return (
            <View style={styles.container}>
				<View>
					<Image
						source = {require('../icon/administrator_52.png')}
						style = {{width: 26, height: 26,/* tintColor: '#0067a7' */}}
					/>
				</View>
				<DrawerItems {...this.props} />
			</View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
        backgroundColor: '#F5FCFF',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'green'
	},
	textBtn: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		backgroundColor: 'red',
		marginTop: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: 60,
		height: 30,
		borderRadius: 5
	}
});
