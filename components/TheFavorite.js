
import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    Image,
	View, Button, TouchableOpacity,
	ActivityIndicator
} from 'react-native';

import HeaderComponent  from './HeaderComponent';



export default class TheFavorite extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
        let drawerLabel = 'Chuyên mục yêu thích';
        let drawerIcon = () => (
			<Image
				source = {require('../icon/checklist_26.png')}
				style = {{width: 26, height: 26,/* tintColor: '#0067a7' */}}
            />
		);
            
		return {drawerLabel, drawerIcon }
	}

	render() {


		return (
            <View style={styles.container}>
				<HeaderComponent {...this.props} ></HeaderComponent>
				<View style = {{flex: 1,
					
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text style={styles.text}>
						This is FavoriteScreen
					</Text>
				</View>
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
