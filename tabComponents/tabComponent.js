
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import AddNews from './../components/addNews'
import { TabNavigator, StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';
import Sport from './sport';
import Home from './home';
import Globe from './globe';
import HeaderComponent from '../components/HeaderComponent';



let routeConfigs = {
    myHome: {
        screen: Home
    },
    'Sport': {
        screen: Sport
    },

    'Globe': {
        screen: Globe
    },
}


let TabNavigatorConfig = {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            //backgroundColor: 'lightgray',
            padding: 0
        },
        showLabel: false,
        showIcon: true
    },

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


const myHome = TabNavigator(routeConfigs, TabNavigatorConfig);
export default TabComponent = StackNavigator({

    Profile: {

        screen: myHome,
        navigationOptions:({navigation})=>(
            {
                header :(props) => <HeaderComponent {...props}/>
                
            }
        )
        
    },
    'addNews': {
        screen: AddNews
    }
  });

// export default TabComponent = SwitchNavigator(
//     {
//           'Home': {
//         screen: Home
//     },
//     'Sport': {
//         screen: Sport
//     },

//     'Tech': {
//         screen: Tech
//     },
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );