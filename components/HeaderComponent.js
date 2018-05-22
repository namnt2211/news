
import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    Image,
	View, Button, TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import {AddNews} from './addNews'
export default class HeaderComponent extends Component {


	render() {

        const {navigation} = this.props;
		return (
            <View style={{
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#0067a7'
            }}>
				<View >
                    <TouchableOpacity
                        style= {{marginLeft: 10}}
                        onPress = {()=>{
                            const {navigation} = this.props;
                            navigation.openDrawer();
                            // navigation.closeDrawer() // navigation.toggleDrawer()
                        }}                
                    >
                        <Image
                            source = {require('../icon/menu_26.png')}
                            style = {{width: 26, height: 26, /* tintColor: backgroundColor */}}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>

                {/* <View >
                    <Image
                        source={require('./../icon/news.jpg')}
                        style={{ width: 120, height: 26 }}
                    />
                </View> */}

                <View >
                    <TouchableOpacity
                        style= {{ marginRight: 10}}
                        onPress = {() => navigation.navigate('addNews')}
                    >
                        <Image
                            source = {require('../icon/edit_file_26.png')}
                    style = {{width: 26, height: 26, /* tintColor: backgroundColor */}}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>

			</View>
        );
	}
}

