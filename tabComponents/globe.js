
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View, Button, TouchableOpacity,
	ActivityIndicator,
	FlatList,
	TextInput
} from 'react-native';

var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=55abe1c961c34887a1fd682f9dae3a47';

export default class Globe extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			listMovies: [],
			refreshing: false,
		}
	}

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let tabBarLabel = 'Tech';
		let tabBarIcon = () => (
			<Image
				source={require('../icon/globe-26.png')}
				style={{ width: 26, height: 26,/* tintColor: '#0067a7' */ }}
			/>
		);

		return { tabBarLabel, tabBarIcon }
	}

	componentDidMount() {
		this._getData();
	}

	_getData = () =>{
		this.setState({
			refreshing: true,
			isLoading: true
		})
		fetch(url)
			.then((res) => res.json())
			.then((res) => {

				this.setState({
					isLoading: false,
					listMovies: res.articles,
					refreshing: false

				})
			})
	}


	render() {

		if (this.state.isLoading) return <ActivityIndicator />

		return (
			<View style={styles.container}>


				<TouchableOpacity
					style={styles.button}
					onPress={() => this.props.navigation.navigate('Sport')}
				>
					<Text style={styles.textBtn} >
						Go to Sport Screen
					</Text>
				</TouchableOpacity>

				<Text>
					Get DATA from
				</Text>
				<Text style={{ color: "black", textDecorationLine: 'underline', }}>
					https://newsapi.org
				</Text>

				<View style = {{flex: 1}} >
					<FlatList
						keyExtractor={(item, index) => item.title}
						refreshing = {this.state.refreshing}
						onRefresh = {this._getData}
						data={this.state.listMovies}
						renderItem={
							({ item, index }) => {
								return (
									<View>
										<Text style={styles.text} >
											{item.title}
										</Text>

										<Image
											style={{ width: 400, height: 200 }}
											source={{ uri: item.urlToImage }}
										>
										</Image>
									</View>
								);
							}
						}

					></FlatList>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		padding: 5,
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
