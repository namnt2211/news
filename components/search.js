
import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    Image,
	View, Button, TouchableOpacity,
	TextInput,
	FlatList
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import HeaderComponent  from './HeaderComponent';
import TabComponent from '../tabComponents/tabComponent'

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=55abe1c961c34887a1fd682f9dae3a47';

export default class Search extends Component {
	// static navigationOptions = ({ navigation }) => {
	// 	const { params = {} } = navigation.state;
    //     let drawerLabel = 'Tìm kiếm';
    //     let drawerIcon = () => (
	// 		<Image
	// 			source = {require('../icon/search_26.png')}
	// 			style = {{width: 26, height: 26,/* tintColor: '#0067a7' */}}
    //         />
	// 	);
            
	// 	return {drawerLabel, drawerIcon }
	// }

	constructor(props){
		super(props);
		this.state = {
			listMovies: [],
            results: [],
		}
	}

	componentDidMount() {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {

                this.setState({
                    isLoading: false,
                    listMovies: res.articles,

                })
            })
	}

	_handleResults = (results) => {
        this.setState({ results });
    }

	static navigationOptions = {
		drawerLabel: 'Tìm kiếm',
		drawerIcon: ({ tintColor }) => (
			<Image
			source = {require('../icon/search_26.png')}
			style = {{width: 26, height: 26,/* tintColor: '#0067a7' */}}
		/>
		),
	  };

	render() {


		return (
            <View style={styles.container}>
				<HeaderComponent {...this.props} ></HeaderComponent>
				<SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={this.state.listMovies}
                    handleResults={this._handleResults}
                    showOnLoad
                    focusOnLayout={false}
                    getValue={this._getValue}
                />

                <FlatList
                    style={{ marginTop: 100 }}
                    keyExtractor={(item, index) => item.title}
                    data={this.state.results}
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
        );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
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
