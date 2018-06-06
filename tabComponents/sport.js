
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View, Button, TouchableOpacity,
	ActivityIndicator, WebView
} from 'react-native';
export default class Sport extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;

		let tabBarLabel = 'Sport';
		let tabBarIcon = () => (
			<Image
				source={require('../icon/car-26.png')}
				style={{ width: 26, height: 26,/* tintColor: '#0067a7' */ }}
			/>
		);

		return { tabBarLabel, tabBarIcon }
	}

	render() {

		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.props.navigation.navigate('WebView')}
				>
					<Text style={styles.textBtn} >
						to Globe Screen
					</Text>
				</TouchableOpacity>
				<Text style={styles.text}>
					This is SportScreen
				</Text>
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
