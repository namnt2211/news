
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import RegisterScreen from '../components/register';
import LoginScreen from '../components/login';
import SlideMenuScreen from './SlideMenuScreen'
import TabComponent from '../tabComponents/tabComponent'
import {DrawerNavigator, DrawerItems, SafeAreaView, SwitchNavigator, StackNavigator} from 'react-navigation';
import Search from './search';
import TheFavorite from './TheFavorite';
import TheNews from './TheNews';
import TurnPage from './TurnPage';
import User from './user';
import {SEARCH, TURNPAGE, MYHOME, THEFAVORITE, THENEWS} from './constants'
// Screen size
var {height, width} = Dimensions.get('window');
// const CustomDrawerContentComponent = (props) => (
//     <ScrollView >
//       <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
//         <View style = {{justifyContent: 'center', alignItems: 'center',backgroundColor: 'darkviolet', height: 100}}>
//             <Image
//                 source = {require('../icon/administrator_52.png')}
//                 style = {{ width: 52, height: 52,/* tintColor: '#0067a7' */}}
//             />
//         </View>
//         <DrawerItems  {...props} />
//       </SafeAreaView>
//     </ScrollView>
//   );


let routeConfigs = {
    'Trang chủ':{screen:TabComponent},
    'Tìm Kiếm':{
        screen: Search
    },
    'Tin tức mới':{
        screen: TheNews
    },
    'Yêu thích':{
        screen: TheFavorite
    },
    'Bình luận của bạn':{
        screen: TurnPage
    },
    
}

let drawerNavigationConfig = {
    initialRouteName: 'Trang chủ',
    drawerWidth: width*3/4,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent : (props) => <SlideMenuScreen {...props}/>,
    // contentOptions: {
    //     activeTintColor: '#e91e63',
    //     itemsContainerStyle: {
    //       marginVertical: 0,
    //     },
    //     iconContainerStyle: {
    //       opacity: 1
    //     }
    //   }
    //order: [Home, Cloud, Info, Setting],
}
const LoginScr = StackNavigator ({
    'loginScreen':{
        screen: LoginScreen,
        navigationOptions:({navigation})=>(
            {
                title: 'Đăng nhập',
                headerTitleStyle:{
                    textAlign: 'center'
                } ,
                headerRight : <View>
                    <TouchableOpacity
                        style= {{ marginRight: 10}}
                        onPress = {() => navigation.navigate('app')}
                    >
                        <Image
                            source = {require('../icon/home_26.png')}
                    style = {{width: 26, height: 26, /* tintColor: backgroundColor */}}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                
            }
        )
        
    },
    'Register': {
        screen: RegisterScreen,
        navigationOptions:({navigation})=>(
            {
                headerTitle: 'Đăng ký',
                headerRight : <View>
                    <TouchableOpacity
                        style= {{ marginRight: 10}}
                        onPress = {() => navigation.navigate('app')}
                    >
                        <Image
                            source = {require('../icon/home_26.png')}
                    style = {{width: 26, height: 26, /* tintColor: backgroundColor */}}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
            }
        )
            
        
    }
})

const app = DrawerNavigator(routeConfigs, drawerNavigationConfig);

export default DrawerComponent = SwitchNavigator ({
    'app' : {
        screen: app,
        
    },
    'Login':{
        screen: LoginScr,
        
    },

})

