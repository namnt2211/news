
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View, Button, TouchableOpacity,
	ActivityIndicator,
	ScrollView,
	FlatList,
	Linking,
	WebView
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import dataNews from './../components/dataNews'
import WebViewScreen from './WebViewScreen'
var url = 'https://newsapi.org/v2/top-headlines?' +
	'country=us&' +
	'apiKey=55abe1c961c34887a1fd682f9dae3a47';

class DetailsScreen extends Component {
	render(){
		return (
			<View style = {{flex: 1}} >
				<WebView
				source = {{uri: this.props.item.url}}
				style = {{flex: 1}}
				/>
			</View>
		)
	}
}
	
class FlatListItem extends Component {


	render() {
		const {navigation} = this.props;
		return (
			this.props.index === 0 ? <View style={{ marginVertical: 5, marginHorizontal: 10 }} >
				<View>
					<Image
						style={{ width: 400, height: 200 }}
						source={{ uri: this.props.item.urlToImage }}
					>
					</Image>
				</View>
				<View style={{ flex: 1 }}>
					<View>
						<TouchableOpacity
						onPress={() => navigation.navigate('WebView', {url: this.props.item.url})}
							
						>
							<Text style={styles.titleNews}>
								{this.props.item.title}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginVertical: 5, marginHorizontal: 10 }}>
						<Text>
							{this.props.item.description}
						</Text>
					</View>
				</View>
			</View>
				:
				<View style={{ marginVertical: 5, marginHorizontal: 10 }} >
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View>
							<Image
								style={{ width: 150, height: 150, marginBottom: 5 }}
								source={{ uri: this.props.item.urlToImage }}
							>
							</Image>
						</View>
						<View style={{ flex: 1, flexDirection: 'column' }}>
							<View>
							<TouchableOpacity
							onPress={() => navigation.navigate('WebView', {url: this.props.item.url})}
								
							>
								<Text style={styles.titleNews}>
									{this.props.item.title}
								</Text>
							</TouchableOpacity>
							</View>
							<View style={{ marginVertical: 5, marginHorizontal: 10 }}  >
								<Text>
									{this.props.item.description}
								</Text>
							</View>
						</View>

					</View>

					<View style={{ height: 1, backgroundColor: '#333333', marginHorizontal: 10 }}>

					</View>
				</View>
		);
	}
}


export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let header = HeaderComponent;
		//let  headerTitle = 'Header title';
		let tabBarLabel = 'Home';
		let tabBarIcon = () => (
			<Image
				source={require('../icon/home_26.png')}
				style={{ width: 26, height: 26,/* tintColor: '#0067a7' */ }}
			/>
		);

		return { tabBarLabel, tabBarIcon, header }
	}

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			refreshing: false
		}
	}

	render() {
		 if (this.state.isLoading) return <ActivityIndicator />
		return (
			<View >

				<FlatList
					keyExtractor={(item, index) => item.title}
					refreshing={this.state.refreshing}
					onRefresh={this._getData}
					data={this.props.news}
					renderItem={
						({ item, index }) => {
							return (
								<FlatListItem navigation = {this.props.navigation} item={item} index={index}></FlatListItem>
							);
						}
					}
				>
				</FlatList>


				<TouchableOpacity style={styles.Fabs}
					onPress = {()=>{
							this.props.onFetchNews('asc');
						}
					}
				>
					<Image
						source={require('../icon/phone_26.png')}
						style={{ width: 26, height: 26,/* tintColor: '#0067a7' */ }}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
		borderRadius: 5,
	},
	Fabs: {
		height: 56,
		width: 56,
		backgroundColor: '#33a2d6',
		position: 'absolute',
		borderRadius: 28,
		alignItems: 'center',
		justifyContent: 'center',
		top: 440,
		right: 10
	},
	titleNews: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5,

	}
});
