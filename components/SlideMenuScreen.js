
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, TouchableOpacity, ScrollView, Switch
} from 'react-native';
import { LoginScreen } from './login'

export default class SlideMenuScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true,
            isLogin: false,
            email: null,
        }
    }

    _onValueChange = () => {

        this.setState({
            status: !this.state.status,

        })
    }


    render() {

        const { navigation } = this.props;
        return (

            <View style={styles.container}>
                <View style={styles.profile}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        backgroundColor: 'white'
                        /* tintColor: '#0067a7' */
                    }} >
                        <Image
                            source={require('../icon/administrator_52.png')}
                            style={{ width: 52, height: 52,/* tintColor: '#0067a7' */ }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text

                            onPress={() => {
                                navigation.navigate('loginScreen');
                            }}
                        >
                            Đăng nhập/
                            </Text>

                        <Text onPress={() => {

                            navigation.navigate('Register');
                        }}>
                            Đăng ký
                            </Text>
                    </View>

                </View>



                <ScrollView>
                    <FlatList
                        keyExtractor={(item, index) => item.key}
                        data={this.props.items}
                        renderItem={
                            ({ item, index }) => {
                                return (

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate(item)}
                                    >

                                        <Text style={styles.drawerLabel}>
                                            {item.routeName}
                                        </Text>

                                        <View style={{ height: 1, marginHorizontal: 10, backgroundColor: 'black' }} />
                                    </TouchableOpacity>

                                );
                            }
                        }
                    >
                    </FlatList>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.drawerLabel}>
                            Chế độ ban đêm
                            </Text>
                        <Switch
                            style={{ marginRight: 10 }}
                            value={this.state.status}
                            onValueChange={() => this._onValueChange()}
                        >
                        </Switch>
                    </View>
                    <View style={{ height: 1, marginHorizontal: 10, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            marginVertical: 10,
                            marginHorizontal: 5,
                            fontSize: 18
                        }}
                        >
                            Liên hệ
                        </Text>
                        <View style={{ height: 1, marginHorizontal: 10, backgroundColor: 'black' }} />
                        <TouchableOpacity
                        >
                            <Text style={styles.drawerLabel}>
                            Góp ý & đánh giá ứng dụng
                            </Text>

                            <View style={{ height: 1, marginHorizontal: 10, backgroundColor: 'black' }} />
                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <Text style={styles.drawerLabel}>
                            Thông tin toàn soạn
                            </Text>

                            <View style={{ height: 1, marginHorizontal: 10, backgroundColor: 'black' }} />
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Text style={styles.txtCpr} >
                            Copyright....{'\n'} 
                            News...{'\n'}
                            Phiên bản...
                        </Text>
                    </View>

                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    profile: {
        height: 130,
        backgroundColor: '#33a2d6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerLabel: {
        marginVertical: 10,
        marginHorizontal: 15,
        fontSize: 18
    },
    txtCpr:{
        marginVertical: 20,
        marginHorizontal: 20,
        fontSize: 18,
        color: '#424344'
    }
});
